import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import MapPickerModal from './MapPickerModal';

const CartDrawer = ({ isOpen, onClose }) => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        checkoutToWhatsApp
    } = useCart();

    const [step, setStep] = useState(1);
    const [customerData, setCustomerData] = useState(() => {
        const saved = localStorage.getItem('nurasa_customer');
        return saved ? JSON.parse(saved) : {
            name: '',
            phone: '',
            provinceId: '',
            province: '',
            cityId: '',
            city: '',
            districtId: '',
            district: '',
            villageId: '',
            village: '',
            postalCode: '',
            address: '',
            notes: ''
        };
    });

    const [showMap, setShowMap] = useState(false);
    const [mapCoords, setMapCoords] = useState(() => {
        if (customerData.mapLat && customerData.mapLng) {
            return { lat: customerData.mapLat, lng: customerData.mapLng };
        }
        return null;
    });

    const [provinces, setProvinces] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [districts, setDistricts] = React.useState([]);
    const [villages, setVillages] = React.useState([]);
    const [postalCodes, setPostalCodes] = React.useState([]);
    const [loadingRegions, setLoadingRegions] = React.useState({ prov: false, city: false, dist: false, vill: false, post: false });

    // Animation states
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isExiting, setIsExiting] = useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsExiting(false);
        } else {
            setIsExiting(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setStep(1); // Reset to step 1 on close
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    React.useEffect(() => {
        if (isOpen && provinces.length === 0 && !loadingRegions.prov) {
            setLoadingRegions(prev => ({ ...prev, prov: true }));
            fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
                .then(res => res.json())
                .then(data => {
                    setProvinces(data);
                    setLoadingRegions(prev => ({ ...prev, prov: false }));
                })
                .catch(() => setLoadingRegions(prev => ({ ...prev, prov: false })));
        }
    }, [isOpen, provinces.length, loadingRegions.prov]);

    React.useEffect(() => {
        if (!customerData.provinceId) {
            setCities([]);
            return;
        }

        // Fetch if opened and cities list is empty, OR if provinceId changed
        if (isOpen && cities.length === 0 && !loadingRegions.city) {
            setLoadingRegions(prev => ({ ...prev, city: true }));
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${customerData.provinceId}.json`)
                .then(res => res.json())
                .then(data => { setCities(data); setLoadingRegions(prev => ({ ...prev, city: false })); })
                .catch(() => setLoadingRegions(prev => ({ ...prev, city: false })));
        }
    }, [isOpen, customerData.provinceId, cities.length, loadingRegions.city]);

    React.useEffect(() => {
        if (!customerData.cityId) {
            setDistricts([]);
            return;
        }

        if (isOpen && districts.length === 0 && !loadingRegions.dist) {
            setLoadingRegions(prev => ({ ...prev, dist: true }));
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${customerData.cityId}.json`)
                .then(res => res.json())
                .then(data => { setDistricts(data); setLoadingRegions(prev => ({ ...prev, dist: false })); })
                .catch(() => setLoadingRegions(prev => ({ ...prev, dist: false })));
        }
    }, [isOpen, customerData.cityId, districts.length, loadingRegions.dist]);

    React.useEffect(() => {
        if (!customerData.districtId) {
            setVillages([]);
            return;
        }

        if (isOpen && villages.length === 0 && !loadingRegions.vill) {
            setLoadingRegions(prev => ({ ...prev, vill: true }));
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${customerData.districtId}.json`)
                .then(res => res.json())
                .then(data => { setVillages(data); setLoadingRegions(prev => ({ ...prev, vill: false })); })
                .catch(() => setLoadingRegions(prev => ({ ...prev, vill: false })));
        }
    }, [isOpen, customerData.districtId, villages.length, loadingRegions.vill]);

    // Fetch postal codes with fallback logic
    React.useEffect(() => {
        const fetchPostalCodes = async () => {
            if (!isOpen || !customerData.village || !customerData.district || (postalCodes.length > 0 && customerData.postalCode)) return;
            if (loadingRegions.post) return;

            setPostalCodes([]);
            setCustomerData(prev => ({ ...prev, postalCode: '' }));
            setLoadingRegions(prev => ({ ...prev, post: true }));

            try {
                // Try searching with District + Village first for maximum accuracy
                let q = encodeURIComponent(`${customerData.district} ${customerData.village}`);
                let response = await fetch(`https://kodepos.vercel.app/search/?q=${q}`);
                let json = await response.json();

                // Fallback to Village only if no results
                if (!json.data || json.data.length === 0) {
                    q = encodeURIComponent(customerData.village);
                    response = await fetch(`https://kodepos.vercel.app/search/?q=${q}`);
                    json = await response.json();
                }

                if (json.statusCode === 200 && Array.isArray(json.data)) {
                    const districtLower = customerData.district.toLowerCase();
                    const villageLower = customerData.village.toLowerCase();

                    // Filter: Prioritize those matching both, then village, then anything the API returned for this query
                    let filtered = json.data.filter(d =>
                        (d.village.toLowerCase().includes(villageLower) || villageLower.includes(d.village.toLowerCase())) &&
                        (d.district.toLowerCase().includes(districtLower) || districtLower.includes(d.district.toLowerCase()))
                    );

                    // If too strict, just filter by village
                    if (filtered.length === 0) {
                        filtered = json.data.filter(d =>
                            d.village.toLowerCase().includes(villageLower) || villageLower.includes(d.village.toLowerCase())
                        );
                    }

                    // Final fallback to raw data if filter is too harsh
                    if (filtered.length === 0) filtered = json.data;

                    const codes = [...new Set(
                        filtered
                            .map(d => d.code?.toString() || d.kodepos?.toString())
                            .filter(Boolean)
                    )];

                    setPostalCodes(codes);
                    if (codes.length === 1 && !customerData.postalCode) {
                        setCustomerData(prev => ({ ...prev, postalCode: codes[0] }));
                    }
                }
            } catch (error) {
                console.error("Postal code fetch error:", error);
            } finally {
                setLoadingRegions(prev => ({ ...prev, post: false }));
            }
        };

        fetchPostalCodes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, customerData.villageId, postalCodes.length]);
    React.useEffect(() => {
        localStorage.setItem('nurasa_customer', JSON.stringify(customerData));
    }, [customerData]);

    const handleClose = () => {
        setStep(1);
        onClose();
    };

    const handleProceedToCheckout = () => {
        setStep(2);
    };

    const handleSubmitOrder = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        checkoutToWhatsApp(customerData);
        handleClose();
    };

    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    const totalSavings = cart.reduce((savings, item) => {
        if (!item.variant.originalPrice) return savings;
        const o = parsePrice(item.variant.originalPrice);
        const c = parsePrice(item.variant.price);
        return savings + ((o - c) * item.quantity);
    }, 0);

    if (!shouldRender) return null;

    const handleMapConfirm = ({ lat, lng, address }) => {
        setMapCoords({ lat, lng });
        setCustomerData(prev => ({
            ...prev,
            mapLat: lat,
            mapLng: lng,
            address: address ? address : prev.address,
        }));
    };

    const isDataComplete = !!(
        customerData.name &&
        customerData.phone &&
        customerData.province &&
        customerData.city &&
        customerData.district &&
        customerData.village &&
        customerData.address &&
        mapCoords?.lat &&
        mapCoords?.lng &&
        customerData.postalCode
    );

    return (
        <>
            <MapPickerModal
                isOpen={showMap}
                onClose={() => setShowMap(false)}
                onConfirm={handleMapConfirm}
                initialCoords={mapCoords}
                searchFallback={`${customerData.district}, ${customerData.city}, ${customerData.province}`.replace(/^, |, $/g, '')}
            />
            <div className="fixed inset-0 z-[100] overflow-hidden flex items-end justify-center sm:items-stretch sm:justify-end">
                {/* Backdrop with fade-in/out */}
                <div
                    className={`absolute inset-0 bg-deep-cocoa/20 backdrop-blur-sm transition-opacity duration-300 ${isExiting ? 'animate-fade-out' : 'animate-fade-in'
                        }`}
                    onClick={handleClose}
                ></div>

                {/* Drawer/Modal content with slide-in/out animations */}
                <div className={`relative w-full h-[92dvh] sm:h-full sm:w-auto sm:max-w-full flex 
                ${isExiting
                        ? 'animate-slide-down sm:animate-slide-out-right'
                        : 'animate-slide-up sm:animate-slide-in-right'
                    }`}>
                    <div className="w-full h-full sm:w-screen sm:max-w-[380px] bg-ivory rounded-t-[1.5rem] sm:rounded-none shadow-[-10px_0_30px_rgba(61,35,20,0.1)] ring-1 ring-black/5 flex flex-col overflow-hidden">
                        {/* Compact Header */}
                        <div className="px-5 lg:px-6 py-4 lg:py-5 flex items-center justify-between border-b border-deep-cocoa/5 bg-ivory/50 backdrop-blur-md sticky top-0 z-20">
                            <div className="flex items-center gap-3">
                                {step === 2 ? (
                                    <button onClick={() => setStep(1)} className="w-8 h-8 flex items-center justify-center text-cocoa-light/60 hover:text-deep-cocoa rounded-full transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                ) : (
                                    <div className="relative">
                                        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl bg-gradient-to-br from-deep-cocoa to-cocoa-light flex items-center justify-center text-ivory shadow-lg shadow-deep-cocoa/20">
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent-amber rounded-full border-2 border-ivory animate-pulse"></div>
                                    </div>
                                )}
                                <h2 className="text-lg lg:text-xl font-serif font-bold text-deep-cocoa tracking-tight">{step === 1 ? 'Keranjang' : 'Data Pemesan'}</h2>
                            </div>
                            <button
                                onClick={handleClose}
                                className="w-8 h-8 flex items-center justify-center text-cocoa-light/40 hover:text-deep-cocoa hover:bg-warm-cream rounded-full transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto px-5 lg:px-6 py-4 custom-scrollbar">
                            {step === 1 ? (
                                cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                        <div className="w-14 h-14 bg-warm-cream/50 rounded-full flex items-center justify-center text-cocoa-light/20 mb-6 border border-deep-cocoa/5">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base font-serif font-bold text-deep-cocoa mb-1">Keranjang Kosong</h3>
                                        <p className="text-cocoa-light/60 text-xs mb-6 leading-relaxed">Yuk, pilih camilan favoritmu dulu.</p>
                                        <Link
                                            to="/katalog"
                                            onClick={handleClose}
                                            className="btn-primary px-6 py-2.5 rounded-xl text-xs"
                                        >
                                            Mulai Belanja
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-5">
                                        {cart.map((item, index) => (
                                            <div
                                                key={`${item.id}-${item.variant.id}`}
                                                className="flex gap-3 lg:gap-4 opacity-0 animate-fade-in-up sm:animate-fade-in-right"
                                                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                                            >
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0 bg-warm-cream p-0.5 border border-deep-cocoa/5">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover rounded-[0.8rem] lg:rounded-[0.9rem]"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0 py-0.5">
                                                    <div className="flex justify-between items-start mb-0.5">
                                                        <h4 className="font-serif text-sm lg:text-base font-bold text-deep-cocoa truncate">{item.name}</h4>
                                                        <button
                                                            onClick={() => removeFromCart(item.id, item.variant.id)}
                                                            className="text-cocoa-light/30 hover:text-accent-red p-1 transition-colors"
                                                            title="Hapus"
                                                        >
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <p className="text-[8px] lg:text-[9px] text-accent-amber font-bold tracking-[0.1em] lg:tracking-[0.15em] uppercase mb-2 lg:mb-3 opacity-70">
                                                        {item.variant.label} • {item.variant.size}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2 lg:gap-3 bg-warm-cream/80 backdrop-blur-sm rounded-lg px-1.5 py-1 ring-1 ring-deep-cocoa/5">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.variant.id, -1)}
                                                                className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-deep-cocoa/60 hover:text-deep-cocoa hover:bg-ivory rounded transition-all"
                                                            >
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                                </svg>
                                                            </button>
                                                            <span className="text-[11px] lg:text-xs font-bold w-3 lg:w-4 text-center text-deep-cocoa">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.variant.id, 1)}
                                                                className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-deep-cocoa/60 hover:text-deep-cocoa hover:bg-ivory rounded transition-all"
                                                            >
                                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div className="text-right">
                                                            {item.variant.originalPrice && (
                                                                <p className="text-[10px] text-cocoa-light/40 line-through font-medium mb-0.5">
                                                                    Rp {(parsePrice(item.variant.originalPrice) * item.quantity).toLocaleString('id-ID')}
                                                                </p>
                                                            )}
                                                            <p className="text-sm lg:text-base font-bold text-deep-cocoa">
                                                                Rp {(parsePrice(item.variant.price) * item.quantity).toLocaleString('id-ID')}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ) : (
                                <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Kirim ke: *</label>
                                            <input type="text" required value={customerData.name} onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                                                className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm focus:outline-none" placeholder="Nama Lengkap" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">No. HP/WA: *</label>
                                            <input type="tel" required value={customerData.phone} onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                                                className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm focus:outline-none" placeholder="Contoh: 0812..." />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Provinsi *</label>
                                                <select required value={customerData.provinceId} onChange={(e) => {
                                                    const pId = e.target.value;
                                                    const pName = e.target.options[e.target.selectedIndex].text;
                                                    setCustomerData(prev => ({ ...prev, provinceId: pId, province: pId ? pName : '', cityId: '', city: '', districtId: '', district: '', villageId: '', village: '', postalCode: '' }));
                                                    setCities([]);
                                                    setDistricts([]);
                                                    setVillages([]);
                                                    setPostalCodes([]);
                                                }} className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-xs focus:outline-none appearance-none">
                                                    <option value="">{loadingRegions.prov ? 'Memuat...' : 'Pilih Provinsi'}</option>
                                                    {provinces.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Kota/Kab. *</label>
                                                <select required value={customerData.cityId} onChange={(e) => {
                                                    const cId = e.target.value;
                                                    const cName = e.target.options[e.target.selectedIndex].text;
                                                    setCustomerData(prev => ({ ...prev, cityId: cId, city: cId ? cName : '', districtId: '', district: '', villageId: '', village: '', postalCode: '' }));
                                                    setDistricts([]);
                                                    setVillages([]);
                                                    setPostalCodes([]);
                                                }} className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-xs focus:outline-none appearance-none" disabled={!customerData.provinceId}>
                                                    <option value="">{loadingRegions.city ? 'Memuat...' : 'Pilih Kota/Kab'}</option>
                                                    {cities.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Kecamatan *</label>
                                                <select required value={customerData.districtId} onChange={(e) => {
                                                    const dId = e.target.value;
                                                    const dName = e.target.options[e.target.selectedIndex].text;
                                                    setCustomerData(prev => ({ ...prev, districtId: dId, district: dId ? dName : '', villageId: '', village: '', postalCode: '' }));
                                                    setVillages([]);
                                                    setPostalCodes([]);
                                                }} className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-xs focus:outline-none appearance-none" disabled={!customerData.cityId}>
                                                    <option value="">{loadingRegions.dist ? 'Memuat...' : 'Pilih Kec'}</option>
                                                    {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Kelurahan/Desa *</label>
                                                <select required value={customerData.villageId} onChange={(e) => {
                                                    const vId = e.target.value;
                                                    const vName = e.target.options[e.target.selectedIndex].text;
                                                    setCustomerData(prev => ({ ...prev, villageId: vId, village: vId ? vName : '', postalCode: '' }));
                                                    setPostalCodes([]);
                                                }} className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-xs focus:outline-none appearance-none" disabled={!customerData.districtId}>
                                                    <option value="">{loadingRegions.vill ? 'Memuat...' : 'Pilih Kel/Desa'}</option>
                                                    {villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                                                </select>
                                            </div>
                                            <div className="col-span-2">
                                                <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Kode Pos *</label>
                                                {loadingRegions.post ? (
                                                    <div className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl flex items-center gap-2">
                                                        <div className="w-3 h-3 border-2 border-accent-amber border-t-transparent rounded-full animate-spin shrink-0" />
                                                        <span className="text-xs text-deep-cocoa/50">Mencari kode pos...</span>
                                                    </div>
                                                ) : postalCodes.length > 0 ? (
                                                    <select required value={customerData.postalCode} onChange={(e) => setCustomerData({ ...customerData, postalCode: e.target.value })}
                                                        className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm focus:outline-none appearance-none">
                                                        <option value="">Pilih Kode Pos</option>
                                                        {postalCodes.map(code => (
                                                            <option key={code} value={code}>{code}</option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <input type="text" required value={customerData.postalCode} onChange={(e) => setCustomerData({ ...customerData, postalCode: e.target.value })}
                                                        className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm focus:outline-none"
                                                        placeholder={customerData.village ? 'Ketik kode pos manual' : 'Pilih kelurahan dahulu'} />
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Tandai Lokasi Peta</label>
                                            <button type="button" onClick={() => setShowMap(true)} className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-accent-amber/10 border border-accent-amber/30 text-accent-amber rounded-xl hover:bg-accent-amber hover:text-ivory transition-colors text-[11px] font-bold shadow-sm group">
                                                {mapCoords ? (
                                                    <>
                                                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="tabular-nums opacity-90">{mapCoords.lat.toFixed(5)}, {mapCoords.lng.toFixed(5)}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Pilih Titik di Peta
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Detail Alamat Lengkap *</label>
                                            <textarea required value={customerData.address} onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                                                className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm resize-none h-16 focus:outline-none" placeholder="Nama Jalan, RT/RW, Nomor Rumah..." />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold text-deep-cocoa uppercase tracking-wider mb-1.5">Catatan (Opsional)</label>
                                            <input type="text" value={customerData.notes} onChange={(e) => setCustomerData({ ...customerData, notes: e.target.value })}
                                                className="w-full px-3 py-2.5 bg-warm-cream/50 border border-deep-cocoa/10 rounded-xl focus:ring-1 focus:ring-accent-amber/50 text-sm focus:outline-none" placeholder="Contoh: Titip di satpam" />
                                        </div>
                                    </div>
                                    <div className="bg-accent-amber/5 p-3 rounded-xl text-center space-y-1.5 mt-2">
                                        <p className="text-[10px] text-deep-cocoa/70 italic">Data otomatis tersimpan di perangkat. Jika memesan untuk orang lain, ubah data di atas.</p>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Compact Footer */}
                        {cart.length > 0 && (
                            <div className="bg-ivory border-t border-deep-cocoa/5 p-5 lg:p-6 space-y-4 lg:space-y-5 shadow-[0_-10px_25px_rgba(0,0,0,0.02)]">
                                {step === 1 && (
                                    <div className="flex items-center justify-between px-1">
                                        <span className="text-cocoa-light text-xs lg:text-sm font-medium">Total Estimasi</span>
                                        <div className="text-right">
                                            {totalSavings > 0 && (
                                                <p className="text-[10px] lg:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mb-1">
                                                    Hemat Rp {totalSavings.toLocaleString('id-ID')}
                                                </p>
                                            )}
                                            <p className="text-xl lg:text-2xl font-black text-deep-cocoa tracking-tight">
                                                Rp {cartTotal.toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {step === 1 ? (
                                    isDataComplete ? (
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-[11px] text-cocoa-light bg-warm-cream/50 p-2.5 rounded-xl border border-deep-cocoa/5">
                                                <span className="truncate mr-2 flex items-center gap-1.5">
                                                    Kirim ke: <strong className="text-deep-cocoa">{customerData.name}</strong>
                                                </span>
                                                <button onClick={handleProceedToCheckout} className="text-accent-amber font-bold hover:underline shrink-0">Ubah</button>
                                            </div>
                                            <button
                                                onClick={handleSubmitOrder}
                                                className="w-full relative group overflow-hidden bg-green-600 text-ivory py-3.5 lg:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl transition-all duration-500 hover:bg-green-500 hover:-translate-y-0.5 active:scale-[0.98]"
                                            >
                                                <svg className="relative z-10 w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                                <span className="relative z-10 text-sm lg:text-base font-bold">Kirim Pesanan via WA</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={handleProceedToCheckout}
                                            className="w-full relative group overflow-hidden bg-deep-cocoa text-ivory py-3.5 lg:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl transition-all duration-500 hover:bg-accent-amber hover:-translate-y-0.5 active:scale-[0.98]"
                                        >
                                            <span className="relative z-10 text-sm lg:text-base font-bold">Lanjutkan Pesanan</span>
                                            <svg className="relative z-10 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                        </button>
                                    )
                                ) : (
                                    <button
                                        type="submit"
                                        form="checkout-form"
                                        disabled={!isDataComplete}
                                        className={`w-full relative group overflow-hidden py-3.5 lg:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl transition-all duration-500 ${isDataComplete
                                            ? 'bg-green-600 text-ivory hover:bg-green-500 hover:-translate-y-0.5 active:scale-[0.98]'
                                            : 'bg-deep-cocoa/10 text-deep-cocoa/30 cursor-not-allowed shadow-none'
                                            }`}
                                    >
                                        <svg className="relative z-10 w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        <span className="relative z-10 text-sm lg:text-base font-bold">Kirim Pesanan via WA</span>
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
