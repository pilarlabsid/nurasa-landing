import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
    const { 
        cart, 
        removeFromCart, 
        updateQuantity, 
        cartTotal, 
        checkoutToWhatsApp 
    } = useCart();

    const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Backdrop with extreme blur and soft dim */}
            <div 
                className="absolute inset-0 bg-deep-cocoa/20 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Drawer with slide-in from right */}
            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-[320px] sm:max-w-[380px] animate-slide-in-right">
                    <div className="h-full flex flex-col bg-ivory shadow-[-10px_0_30px_rgba(61,35,20,0.1)] ring-1 ring-black/5">
                        {/* Compact Header */}
                        <div className="px-5 lg:px-6 py-4 lg:py-5 flex items-center justify-between border-b border-deep-cocoa/5 bg-ivory/50 backdrop-blur-md sticky top-0 z-20">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl bg-gradient-to-br from-deep-cocoa to-cocoa-light flex items-center justify-center text-ivory shadow-lg shadow-deep-cocoa/20">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent-amber rounded-full border-2 border-ivory animate-pulse"></div>
                                </div>
                                <h2 className="text-lg lg:text-xl font-serif font-bold text-deep-cocoa tracking-tight">Keranjang</h2>
                            </div>
                            <button 
                                onClick={onClose}
                                className="w-8 h-8 flex items-center justify-center text-cocoa-light/40 hover:text-deep-cocoa hover:bg-warm-cream rounded-full transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto px-5 lg:px-6 py-4 custom-scrollbar">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                                    <div className="w-14 h-14 bg-warm-cream/50 rounded-full flex items-center justify-center text-cocoa-light/20 mb-6 border border-deep-cocoa/5">
                                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-serif font-bold text-deep-cocoa mb-1">Keranjang Kosong</h3>
                                    <p className="text-cocoa-light/60 text-xs mb-6 leading-relaxed">Yuk, pilih camilan favoritmu dulu.</p>
                                    <button 
                                        onClick={onClose}
                                        className="btn-primary px-6 py-2.5 rounded-xl text-xs"
                                    >
                                        Mulai Belanja
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    {cart.map((item, index) => (
                                        <div 
                                            key={`${item.id}-${item.variant.id}`} 
                                            className="flex gap-3 lg:gap-4 opacity-0 animate-fade-in-up" 
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
                                                        <span className="font-bold text-deep-cocoa text-xs lg:text-sm">
                                                            Rp {(parsePrice(item.variant.price) * item.quantity).toLocaleString('id-ID')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Compact Footer */}
                        {cart.length > 0 && (
                            <div className="bg-ivory border-t border-deep-cocoa/5 p-5 lg:p-6 space-y-4 lg:space-y-5 shadow-[0_-10px_25px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center justify-between px-1">
                                    <span className="text-cocoa-light text-xs lg:text-sm font-medium">Total Estimasi</span>
                                    <span className="text-xl lg:text-2xl font-serif font-black text-deep-cocoa">
                                        Rp {cartTotal.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                
                                <button 
                                    onClick={checkoutToWhatsApp}
                                    className="w-full relative group overflow-hidden bg-deep-cocoa text-ivory py-3.5 lg:py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl transition-all duration-500 hover:bg-accent-amber hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    <span className="relative z-10 text-sm lg:text-base font-bold">Lanjutkan Pesanan</span>
                                    <svg className="relative z-10 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
