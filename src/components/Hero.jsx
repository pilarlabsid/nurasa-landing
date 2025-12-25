const Hero = () => {
    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-cream"
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 rays-decoration opacity-50"></div>

            {/* Floating Circles */}
            <div className="decorative-circle w-96 h-96 -top-20 -right-20 opacity-20 animate-float"></div>
            <div className="decorative-circle w-64 h-64 bottom-20 -left-10 opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="decorative-circle w-32 h-32 top-1/3 right-1/4 opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="text-center">
                    {/* Subtitle */}
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
                        Jajanan Kering Premium Nusantara
                    </p>

                    {/* Main Headline */}
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-deep-cocoa mb-8 animate-fade-in-up">
                        Ada <span className="italic text-accent-amber">Cerita</span>
                        <br />
                        di Setiap <span className="italic">Rasa</span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-cocoa-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Setiap gigitan adalah awal dari sebuah cerita baru. Nikmati cita rasa pedas
                        yang berkelas, dari rempah pilihan petani lokal hingga momen hangat bersama orang tersayang.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#produk" className="btn-primary px-8 py-4 text-lg">
                            <span>Jelajahi Produk</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#cerita" className="btn-secondary px-8 py-4 text-lg">
                            Dengar Cerita Kami
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <a href="#filosofi" className="flex flex-col items-center text-deep-cocoa/50 hover:text-deep-cocoa transition-colors">
                        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent"></div>
        </section>
    );
};

export default Hero;
