import React, { useRef, useEffect, useState, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Jakarta area tile: z=10, x=815, y=529
const MAP_STYLES = [
    {
        id: 'streets',
        label: 'Map',
        thumbnail: 'https://a.basemaps.cartocdn.com/light_all/10/815/529.png',
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    },
    {
        id: 'satellite',
        label: 'Satelit',
        thumbnail: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/10/529/815',
        style: {
            version: 8,
            sources: {
                'esri-satellite': {
                    type: 'raster',
                    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
                    tileSize: 256,
                    maxzoom: 19,
                },
            },
            layers: [{ id: 'esri-satellite', type: 'raster', source: 'esri-satellite' }],
        },
    },
    {
        id: 'hybrid',
        label: 'Hybrid',
        thumbnail: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/10/529/815',
        style: {
            version: 8,
            sources: {
                'esri-satellite': {
                    type: 'raster',
                    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
                    tileSize: 256,
                    maxzoom: 19,
                },
                'osm-labels': {
                    type: 'raster',
                    tiles: ['https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    maxzoom: 20,
                },
            },
            layers: [
                { id: 'esri-satellite', type: 'raster', source: 'esri-satellite' },
                { id: 'osm-labels', type: 'raster', source: 'osm-labels', paint: { 'raster-opacity': 0.85 } },
            ],
        },
    },
];

const MapPickerModal = ({ isOpen, onClose, onConfirm, initialCoords, searchFallback }) => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [activeStyle, setActiveStyle] = useState('streets');
    const [layerOpen, setLayerOpen] = useState(false);

    // Animation states
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsExiting(false);
        } else {
            setIsExiting(true);
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const [coords, setCoords] = useState(initialCoords || { lat: -6.2, lng: 106.816 });
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [mapReady, setMapReady] = useState(false);

    const reverseGeocode = useCallback(async (lat, lng) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=id`
            );
            const data = await res.json();
            setAddress(data.display_name || `${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        } catch {
            setAddress(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        }
        setLoading(false);
    }, []);

    const searchAddress = async (query) => {
        if (!query.trim()) { setSearchResults([]); return; }
        setSearching(true);
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&countrycodes=id&limit=5&accept-language=id`
            );
            setSearchResults(await res.json());
        } catch { setSearchResults([]); }
        setSearching(false);
    };

    // Handle initialization with Geolocation or Fallback
    useEffect(() => {
        if (!isOpen) return;

        // 1. If we already have specific initialCoords, use them
        if (initialCoords) {
            setCoords(initialCoords);
            reverseGeocode(initialCoords.lat, initialCoords.lng);
            return;
        }

        const handleFallback = async () => {
            if (searchFallback) {
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchFallback)}&format=json&limit=1`);
                    const data = await res.json();
                    if (data && data[0]) {
                        const newCoords = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
                        setCoords(newCoords);
                        setAddress(data[0].display_name);
                    }
                } catch (e) { console.error("Fallback geocoding error:", e); }
            }
        };

        // 2. Try Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const newCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                    setCoords(newCoords);
                    reverseGeocode(newCoords.lat, newCoords.lng);
                },
                () => {
                    // 3. Fallback to search string if Geolocation fails/denied
                    handleFallback();
                },
                { timeout: 5000 }
            );
        } else {
            handleFallback();
        }
    }, [isOpen, initialCoords, searchFallback, reverseGeocode]);

    useEffect(() => {
        if (!isOpen) { setMapReady(false); return; }
        const t = setTimeout(() => setMapReady(true), 50);
        return () => clearTimeout(t);
    }, [isOpen]);

    useEffect(() => {
        if (!mapReady || !mapContainer.current) return;

        const initLat = coords.lat;
        const initLng = coords.lng;
        const styleObj = MAP_STYLES.find(s => s.id === activeStyle)?.style || MAP_STYLES[0].style;

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: styleObj,
            center: [initLng, initLat],
            zoom: 13,
            attributionControl: false,
        });

        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');


        const marker = new maplibregl.Marker({ color: '#B5621B', draggable: true })
            .setLngLat([initLng, initLat])
            .addTo(map);

        marker.on('dragend', () => {
            const { lat, lng } = marker.getLngLat();
            setCoords({ lat, lng });
            reverseGeocode(lat, lng);
        });

        map.on('click', (e) => {
            const { lat, lng } = e.lngLat;
            marker.setLngLat([lng, lat]);
            setCoords({ lat, lng });
            reverseGeocode(lat, lng);
        });

        map.on('load', () => {
            if (initialCoords) {
                reverseGeocode(initLat, initLng);
            }
        });

        mapRef.current = map;
        markerRef.current = marker;

        return () => {
            map.remove();
            mapRef.current = null;
            markerRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mapReady]);

    // Update map view when coords change (initial load or manual search)
    useEffect(() => {
        if (!mapRef.current || !markerRef.current || !mapReady) return;
        
        const center = [coords.lng, coords.lat];
        mapRef.current.flyTo({ center, zoom: 15, duration: 2000 });
        markerRef.current.setLngLat(center);
    }, [mapReady, coords.lng, coords.lat]);

    // Switch map style without re-mounting
    const handleStyleChange = (styleId) => {
        if (styleId === activeStyle) return;
        setActiveStyle(styleId);
        const styleObj = MAP_STYLES.find(s => s.id === styleId)?.style;
        if (!mapRef.current || !styleObj) return;

        const currentCenter = mapRef.current.getCenter();
        const currentZoom = mapRef.current.getZoom();
        const currentCoords = markerRef.current?.getLngLat();

        mapRef.current.setStyle(styleObj);

        mapRef.current.once('styledata', () => {
            // Re-add marker after style change (it gets detached)
            if (markerRef.current && currentCoords) {
                markerRef.current.addTo(mapRef.current);
            }
            mapRef.current.jumpTo({ center: currentCenter, zoom: currentZoom });
        });
    };

    const flyToResult = (result) => {
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);
        mapRef.current?.flyTo({ center: [lng, lat], zoom: 16 });
        markerRef.current?.setLngLat([lng, lat]);
        setCoords({ lat, lng });
        setAddress(result.display_name);
        setSearchResults([]);
        setSearchQuery('');
    };

    // Calculate mismatch for warning
    const districtFromForm = searchFallback?.split(',')[0]?.trim();
    const isMismatch = districtFromForm && address && !loading && !address.toLowerCase().includes(districtFromForm.toLowerCase());

    const handleConfirm = () => {
        onConfirm({ lat: coords.lat, lng: coords.lng, address });
        onClose();
    };

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-[10000] overflow-hidden flex items-end justify-center sm:items-stretch sm:justify-end">
            {/* Backdrop with fade-in/out */}
            <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm ${isExiting ? 'animate-fade-out' : 'animate-fade-in'
                    }`}
                onClick={onClose}
            />

            {/* Modal/Drawer Content with slide in/out animations */}
            <div className={`relative w-full h-[92dvh] sm:h-full sm:w-screen sm:max-w-[400px] bg-ivory rounded-t-[1.5rem] sm:rounded-none shadow-2xl flex flex-col overflow-hidden
                ${isExiting
                    ? 'animate-slide-down sm:animate-slide-out-right'
                    : 'animate-slide-up sm:animate-slide-in-right'
                }`}>

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-deep-cocoa/10 shrink-0">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-accent-amber/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-deep-cocoa text-sm font-serif">Tandai Lokasi</h3>
                            <p className="text-[10px] text-deep-cocoa/50">Seret pin atau klik peta</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 rounded-full bg-warm-cream flex items-center justify-center hover:bg-deep-cocoa/10 transition-colors">
                        <svg className="w-4 h-4 text-deep-cocoa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Search bar */}
                <div className="px-4 pt-3 pb-2 bg-ivory shrink-0 relative" style={{ zIndex: 10 }}>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-deep-cocoa/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                if (e.target.value.length > 2) searchAddress(e.target.value);
                                else setSearchResults([]);
                            }}
                            placeholder="Cari alamat atau tempat..."
                            className="w-full pl-9 pr-4 py-2.5 bg-warm-cream/60 border border-deep-cocoa/10 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-accent-amber/50"
                        />
                        {searching && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <div className="w-3 h-3 border-2 border-accent-amber border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                    </div>
                    {searchResults.length > 0 && (
                        <div className="absolute left-4 right-4 mt-1 bg-white rounded-xl shadow-xl border border-deep-cocoa/10 overflow-hidden" style={{ zIndex: 20 }}>
                            {searchResults.map((r, i) => (
                                <button key={i} onClick={() => flyToResult(r)}
                                    className="w-full text-left px-3 py-2.5 text-xs text-deep-cocoa hover:bg-warm-cream/60 transition-colors border-b border-deep-cocoa/5 last:border-0">
                                    {r.display_name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Map container */}
                <div className="flex-1 relative" style={{ minHeight: 0 }}>
                    <div ref={mapContainer} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

                    {/* Layer switcher — collapsed by default, expands on click */}
                    <div className="absolute bottom-3 left-3 z-10">
                        {/* Collapsed trigger: shows active thumbnail + layers icon */}
                        <div className="flex flex-col items-start gap-1.5">
                            {/* Expanded options — slide up from active thumb */}
                            <div
                                className="flex gap-1.5 overflow-hidden transition-all duration-300 ease-in-out origin-bottom-left"
                                style={{
                                    maxHeight: layerOpen ? '80px' : '0px',
                                    opacity: layerOpen ? 1 : 0,
                                    marginBottom: layerOpen ? '4px' : '0px',
                                    pointerEvents: layerOpen ? 'auto' : 'none',
                                }}
                            >
                                {MAP_STYLES.filter(s => s.id !== activeStyle).map((s, idx) => (
                                    <button
                                        key={s.id}
                                        onClick={() => { handleStyleChange(s.id); setLayerOpen(false); }}
                                        className="flex flex-col items-center gap-1 group"
                                        style={{
                                            transform: layerOpen ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.92)',
                                            transition: `transform 0.25s ease ${idx * 0.06}s, opacity 0.25s ease ${idx * 0.06}s`,
                                            opacity: layerOpen ? 1 : 0,
                                        }}
                                    >
                                        <div className="w-10 h-8 rounded-md overflow-hidden shadow-md border border-white/70 group-hover:border-accent-amber transition-colors duration-150">
                                            <img src={s.thumbnail} alt={s.label} className="w-full h-full object-cover" draggable={false} />
                                        </div>
                                        <span className="text-[9px] font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">{s.label}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Active / trigger button */}
                            <button
                                onClick={() => setLayerOpen(prev => !prev)}
                                className="flex flex-col items-center gap-1"
                            >
                                <div className={`w-10 h-8 rounded-md overflow-hidden shadow-md border-2 transition-all duration-200 ${layerOpen ? 'border-accent-amber scale-105' : 'border-white'
                                    }`}>
                                    <img
                                        src={MAP_STYLES.find(s => s.id === activeStyle)?.thumbnail}
                                        alt={activeStyle}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </div>
                                <span className="text-[9px] font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] flex items-center gap-0.5">
                                    {MAP_STYLES.find(s => s.id === activeStyle)?.label}
                                </span>
                            </button>
                        </div>
                    </div>

                    {!mapReady && (
                        <div className="absolute inset-0 flex items-center justify-center bg-warm-cream/80">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-6 h-6 border-[3px] border-accent-amber border-t-transparent rounded-full animate-spin" />
                                <p className="text-xs text-deep-cocoa/60">Memuat peta...</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Address info + Confirm */}
                <div className="px-4 py-4 bg-ivory border-t border-deep-cocoa/10 shrink-0 space-y-3">
                    <div className="bg-warm-cream/60 rounded-xl px-3 py-2.5 flex items-start gap-2.5">
                        <svg className="w-3.5 h-3.5 text-accent-amber mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <div className="flex-1 min-w-0">
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 border-2 border-accent-amber border-t-transparent rounded-full animate-spin" />
                                    <span className="text-xs text-deep-cocoa/50">Menentukan alamat...</span>
                                </div>
                            ) : (
                                <>
                                    <p className="text-[10px] text-deep-cocoa/50 mb-0.5">Lokasi yang dipilih:</p>
                                    <p className="text-xs text-deep-cocoa font-medium line-clamp-2">{address || 'Klik peta atau seret pin'}</p>
                                    <p className="text-[10px] text-deep-cocoa/40 mt-0.5">{coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}</p>
                                </>
                            )}
                        </div>
                    </div>

                    {isMismatch && (
                        <div className="bg-accent-amber/10 border border-accent-amber/20 rounded-xl px-3 py-2.5 flex items-start gap-2.5 animate-fade-in">
                            <svg className="w-3.5 h-3.5 text-accent-amber mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div className="flex-1">
                                <p className="text-[10px] text-deep-cocoa font-bold mb-0.5 leading-tight">Wilayah Tidak Sesuai</p>
                                <p className="text-[9px] text-deep-cocoa/70 leading-relaxed">
                                    Titik terpilih terdeteksi di luar <span className="font-bold underline">{districtFromForm}</span>. Mohon pastikan pin berada di lokasi yang benar.
                                </p>
                            </div>
                        </div>
                    )}

                    <button onClick={handleConfirm}
                        className="w-full py-3 bg-deep-cocoa text-ivory rounded-xl font-bold text-sm hover:bg-deep-cocoa/90 transition-all active:scale-[0.98] font-serif shadow-md">
                        Gunakan Lokasi Ini
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MapPickerModal;
