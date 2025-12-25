const About = () => {
    const filosofi = [
        {
            title: 'NUR',
            subtitle: 'Cahaya',
            description: 'Melambangkan kejelasan rasa, kejujuran bahan, dan energi positif. Nurasa hadir untuk "menerangi" hari Anda melalui camilan yang menggugah.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            title: 'RASA',
            subtitle: 'Pengalaman',
            description: 'Bukan sekadar urusan lidah, tapi pengalaman sensorik menyeluruh. Tekstur, aroma, dan cerita di balik setiap gigitan.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="filosofi" className="relative py-32 bg-ivory overflow-hidden">
            {/* Decorative Elements */}
            <div className="decorative-circle w-80 h-80 -top-40 -left-40 border-deep-cocoa/5"></div>
            <div className="decorative-circle w-96 h-96 -bottom-48 -right-48 border-accent-amber/10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4">
                        Filosofi Kami
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-cocoa mb-6">
                        Makna di Balik <span className="italic">Nurasa</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-deep-cocoa to-accent-amber mx-auto rounded-full"></div>
                </div>

                {/* Philosophy Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-20">
                    {filosofi.map((item, index) => (
                        <div
                            key={item.title}
                            className="group relative bg-warm-cream rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-deep-cocoa to-cocoa-light flex items-center justify-center text-ivory mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-3xl font-bold text-deep-cocoa mb-2">
                                {item.title}
                            </h3>
                            <p className="text-accent-amber font-medium text-sm tracking-wider mb-4">
                                {item.subtitle}
                            </p>
                            <p className="text-cocoa-light leading-relaxed">
                                {item.description}
                            </p>

                            {/* Decorative Line */}
                            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative bg-deep-cocoa rounded-3xl p-10 lg:p-16 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="rays-decoration"></div>
                        </div>

                        {/* Quote Mark */}
                        <div className="absolute top-6 left-8 text-8xl font-serif text-accent-amber/30">"</div>

                        {/* Quote Text */}
                        <blockquote className="relative z-10 text-center">
                            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-ivory leading-relaxed mb-8 italic">
                                Di balik keriuk tipis ini, ada jemari yang telaten meracik cabai pilihan dan rempah rahasia.
                                Bukan sekadar pedas yang lewat, tapi rasa yang menetap dan bercerita tentang kehangatan dapur Nusantara.
                            </p>
                            <footer className="text-warm-cream/70">
                                <span className="block w-12 h-0.5 bg-accent-amber mx-auto mb-4"></span>
                                <cite className="not-italic text-sm tracking-widest uppercase">Narasi Nurasa</cite>
                            </footer>
                        </blockquote>

                        {/* Quote Mark End */}
                        <div className="absolute bottom-6 right-8 text-8xl font-serif text-accent-amber/30 rotate-180">"</div>
                    </div>
                </div>

                {/* Vision & Mission */}
                <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="text-center md:text-left">
                        <h4 className="font-serif text-2xl font-bold text-deep-cocoa mb-4">Visi</h4>
                        <p className="text-cocoa-light leading-relaxed">
                            Menjadi ikon jajanan kering premium Nusantara yang dikenal karena kualitas,
                            elegansi, dan kemampuannya membangun kedekatan emosional dengan konsumen.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-serif text-2xl font-bold text-deep-cocoa mb-4">Misi</h4>
                        <p className="text-cocoa-light leading-relaxed">
                            Menyajikan cita rasa pedas yang berkarakter, mengangkat nilai estetika kuliner lokal
                            ke level premium, dan menciptakan narasi yang memperkaya pengalaman makan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
