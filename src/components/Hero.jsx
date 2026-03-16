import { useState, useEffect } from 'react';
import NurasaProduct from '../assets/general/nurasa-product.webp';

const Hero = () => {
    // Wait for 2 animation frames before showing — ensures browser has fully
    // calculated layout with all CSS rules applied before content is visible.
    // This prevents the center→left shift on both initial load and SPA navigation.
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let raf1, raf2;
        raf1 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
                setIsReady(true);
            });
        });
        return () => {
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
        };
    }, []);

    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center overflow-hidden bg-warm-cream"
            style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease' }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 rays-decoration opacity-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-12 lg:py-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left: Text Content */}
                    <div className="hero-text-col w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Subtitle */}
                        <p className="text-accent-amber font-medium tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-4 lg:mb-6 animate-fade-in">
                            Jajanan Kering Premium Nusantara
                        </p>

                        {/* Main Headline */}
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-deep-cocoa mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
                            Ada <span className="italic text-accent-amber">Cerita</span>
                            <span className="hidden lg:inline"><br /></span>
                            <span className="lg:hidden"> </span>
                            di Setiap <span className="italic">Rasa</span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-xl text-base lg:text-lg text-cocoa-light leading-relaxed mb-8 lg:mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Setiap gigitan adalah awal dari sebuah cerita baru. Nikmati cita rasa pedas
                            yang berkelas dari rempah pilihan petani lokal.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <a href="#produk" className="btn-primary px-8 py-3.5 lg:py-4 text-base lg:text-lg w-full sm:w-auto">
                                <span>Jelajahi Produk</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="/tentang" className="btn-secondary px-8 py-3.5 lg:py-4 text-base lg:text-lg w-full sm:w-auto">
                                Dengar Cerita Kami
                            </a>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="w-full lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-accent-amber rounded-[2rem] lg:rounded-[4rem] rotate-6 opacity-20 scale-105"></div>
                            <div className="absolute inset-0 bg-deep-cocoa rounded-[2rem] lg:rounded-[4rem] -rotate-3 opacity-10 scale-105"></div>
                            <img
                                src={NurasaProduct}
                                alt="Nurasa Product"
                                className="relative w-full h-full object-cover rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-4 border-ivory"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Hidden on Mobile */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
                    <a href="#filosofi" className="flex flex-col items-center text-deep-cocoa/50 hover:text-deep-cocoa transition-colors">
                        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent"></div>
        </section>
    );
};

export default Hero;
