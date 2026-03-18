import { Link } from 'react-router-dom';

// Reusable image block
const HeroImage = ({ className = '' }) => (
    <div className={`relative animate-fade-in-up ${className}`} style={{ animationDelay: '0.2s' }}>
        <div className="hero-img-container relative sm:max-w-sm lg:max-w-[440px] xl:max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent-amber rounded-[2rem] lg:rounded-[4rem] rotate-6 opacity-20 scale-105"></div>
            <div className="absolute inset-0 bg-deep-cocoa rounded-[2rem] lg:rounded-[4rem] -rotate-3 opacity-10 scale-105"></div>
            <img
                src="/nurasa-product.webp"
                alt="Nurasa Product"
                fetchPriority="high"
                loading="eager"
                className="relative w-full h-full object-cover rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-4 border-ivory"
            />
        </div>
    </div>
);

const Hero = () => {

    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center overflow-hidden bg-warm-cream"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 rays-decoration opacity-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-12 lg:pt-32 lg:pb-32 w-full">
                {/* ─── Desktop Layout: two columns ─── */}
                <div className="hidden lg:flex flex-row items-center gap-20">
                    {/* Left: Text */}
                    <div className="w-1/2 flex flex-col items-start text-left">
                        <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
                            Jajanan Kering Premium Nusantara
                        </p>
                        <h1 className="font-serif text-6xl xl:text-7xl font-bold text-deep-cocoa mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
                            Ada <span className="italic text-accent-amber">Cerita</span><br />
                            di Setiap <span className="italic">Rasa</span>
                        </h1>
                        <p className="max-w-xl text-lg text-cocoa-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Setiap gigitan adalah awal dari sebuah cerita baru. Nikmati cita rasa pedas
                            yang berkelas dari rempah pilihan petani lokal.
                        </p>
                        <div className="flex flex-row gap-4 justify-start items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <a href="#produk" className="btn-primary px-8 py-4 text-lg">
                                <span>Jelajahi Produk</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <Link to="/tentang" className="btn-secondary px-8 py-4 text-lg">
                                Dengar Cerita Kami
                            </Link>
                        </div>
                    </div>
                    {/* Right: Image */}
                    <div className="w-1/2">
                        <HeroImage />
                    </div>
                </div>

                {/* ─── Mobile Layout: stacked ─── */}
                <div className="flex lg:hidden flex-col items-center text-center gap-8">
                    {/* Subtitle */}
                    <p className="text-accent-amber font-medium tracking-[0.2em] uppercase text-[10px] animate-fade-in">
                        Jajanan Kering Premium Nusantara
                    </p>

                    {/* Headline */}
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-cocoa animate-fade-in-up leading-[1.1] tracking-tight -mt-4">
                        Ada <span className="italic text-accent-amber">Cerita</span><br />
                        di Setiap <span className="italic">Rasa</span>
                    </h1>

                    {/* Image — between headline and description on mobile */}
                    <HeroImage className="w-4/5 max-w-[280px] sm:max-w-sm" />

                    {/* Description */}
                    <p className="max-w-sm text-base text-cocoa-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Setiap gigitan adalah awal dari sebuah cerita baru. Nikmati cita rasa pedas
                        yang berkelas dari rempah pilihan petani lokal.
                    </p>

                    {/* CTA side by side — single line */}
                    <div className="flex flex-row gap-3 justify-center items-center w-full animate-fade-in-up pb-4" style={{ animationDelay: '0.2s' }}>
                        <a href="#produk" className="btn-primary px-4 py-3 text-sm whitespace-nowrap flex items-center gap-2">
                            <span>Jelajahi Produk</span>
                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <Link to="/tentang" className="btn-secondary px-4 py-3 text-sm whitespace-nowrap">
                            Dengar Cerita
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator - Desktop only */}
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
