import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    // Show balanced selection: Original, Extra Pedas, and Caramel
    const featuredProducts = [products[0], products[2], products[3]]; 

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const maxIndex = featuredProducts.length - 1;
        if (scrollWidth <= 0) {
            setActiveIndex(0);
            return;
        }
        const index = Math.round((scrollLeft / scrollWidth) * maxIndex);
        setActiveIndex(index);
    };

    const scrollTo = (index) => {
        if (!scrollRef.current) return;
        const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const maxIndex = featuredProducts.length - 1;
        const scrollToPosition = (scrollWidth / maxIndex) * index;
        scrollRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
    };

    return (
        <section id="produk" className="relative py-20 bg-warm-cream overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 radial-bg"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16 animate-fade-in">
                    <p className="text-accent-amber font-medium tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-4">
                        Koleksi Unggulan
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-deep-cocoa mb-6">
                        Produk <span className="italic text-accent-amber">Pilihan</span> Kami
                    </h2>
                    <p className="max-w-2xl mx-auto text-cocoa-light text-base lg:text-lg">
                        Menghadirkan berbagai varian rasa jajanan Nusantara yang siap menebar kebahagiaan.
                    </p>
                </div>

                {/* Products Grid */}
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth md:mx-0 md:px-0 md:pb-0 md:overflow-visible hide-scrollbar"
                >
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center group bg-ivory rounded-[2rem] overflow-hidden border border-deep-cocoa/5 hover:shadow-[0_30px_60px_rgba(61,35,20,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                        >
                            {/* Product Image */}
                            <div className="relative h-56 lg:h-64 overflow-hidden shrink-0">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-cocoa/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                
                                {/* Badge */}
                                {product.badge && (
                                    <span className={`absolute top-4 right-4 text-ivory text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg ${
                                        product.badge === 'Hot!' || product.badge === 'New Arrival' ? 'bg-accent-red' : 'bg-accent-amber'
                                    }`}>
                                        {product.badge}
                                    </span>
                                )}
                                
                                <span className="absolute top-4 left-4 px-3 py-1 bg-ivory/90 backdrop-blur-md rounded-full text-[9px] font-bold tracking-widest uppercase text-deep-cocoa shadow-sm">
                                    {product.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-deep-cocoa mb-1 leading-tight group-hover:text-accent-amber transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-accent-amber text-[9px] font-bold tracking-[0.1em] lg:tracking-[0.15em] uppercase opacity-80">
                                        {product.tagline}
                                    </p>
                                </div>
                                
                                <p className="text-cocoa-light text-[13px] lg:text-sm leading-relaxed mb-6 lg:mb-8 opacity-80 line-clamp-2 italic">
                                    {product.description}
                                </p>

                                {/* Price & Action */}
                                <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-deep-cocoa/5">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-cocoa-light/40 font-bold uppercase tracking-widest mb-0.5">Mulai dari</span>
                                        <p className="font-bold text-lg lg:text-xl text-deep-cocoa">{product.variants ? product.variants[0].price : product.price}</p>
                                    </div>
                                    <Link
                                        to="/katalog"
                                        className="inline-flex items-center gap-2 bg-deep-cocoa text-ivory text-[10px] font-bold uppercase tracking-wider px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl hover:bg-accent-amber transition-all duration-300 group/btn shadow-md hover:shadow-lg"
                                    >
                                        Detail
                                        <svg className="w-3.5 h-3.5 lg:w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Dots Indicator */}
                <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
                    {featuredProducts.map((_, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-accent-amber' : 'w-1.5 bg-deep-cocoa/20'}`}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 lg:mt-16 text-center">
                    <Link 
                        to="/katalog" 
                        className="btn-primary"
                    >
                        Lihat Semua Produk
                    </Link>
                </div>


                {/* Gift Ready Section */}
                <div className="mt-16 lg:mt-20 text-center">
                    <a
                        href={`https://wa.me/6285137143942?text=${encodeURIComponent('🌐 *Pesan dari Website Nurasa*\n────────────────────\n\nHalo Nurasa, saya ingin pesan camilan Nurasa untuk hadiah. Mohon infonya ya!')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col sm:flex-row items-center gap-4 bg-ivory rounded-[2rem] px-6 lg:px-8 py-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer max-w-lg mx-auto"
                    >
                        <div className="w-12 h-12 bg-accent-amber/10 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="font-serif font-bold text-deep-cocoa text-lg">Gift-Ready Packaging</p>
                            <p className="text-xs lg:text-sm text-cocoa-light">Klik untuk pesan paket hadiah istimewa</p>
                        </div>
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-cocoa-light">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">Bahan Berkualitas</span>
                    </div>
                    <div className="w-px h-4 bg-cocoa-light/30 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-medium">Higienis & Aman</span>
                    </div>
                    <div className="w-px h-4 bg-cocoa-light/30 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        <span className="text-sm font-medium">Pengiriman Seluruh Indonesia</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
