const Story = () => {
    const pillars = [
        {
            title: 'The Origin',
            subtitle: 'Cerita Bahan',
            description: 'Perjalanan dimulai dari pemilihan rempah terbaik. Cabai dari petani lokal yang dipetik di waktu terbaik, rempah yang disimpan dengan penuh kehati-hatian.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'The Craft',
            subtitle: 'Cerita Produksi',
            description: 'Setiap produk dibuat dengan dedikasi penuh. Proses sangrai yang tepat, racikan bumbu yang presisi, hingga pengemasan yang menjaga kesegaran.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
        {
            title: 'The Moment',
            subtitle: 'Cerita Konsumen',
            description: 'Nurasa hadir menemani waktu luang Anda, saat berkumpul bersama teman, atau momen istirahat di tengah kesibukan. Setiap gigitan menciptakan kenangan.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="cerita" className="relative py-32 bg-deep-cocoa overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="rays-decoration"></div>
            </div>

            {/* Decorative Circles */}
            <div className="decorative-circle w-64 h-64 -top-32 -left-32 border-accent-amber/20"></div>
            <div className="decorative-circle w-96 h-96 -bottom-48 -right-48 border-ivory/10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4">
                        Perjalanan Kami
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ivory mb-6">
                        Setiap Produk Punya <span className="italic text-accent-amber">Cerita</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-warm-cream/70 text-lg">
                        Di Nurasa, kami percaya bahwa makanan terbaik lahir dari perjalanan yang penuh makna.
                    </p>
                </div>

                {/* Story Pillars */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-amber/30 to-transparent -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {pillars.map((pillar, index) => (
                            <div
                                key={pillar.title}
                                className="relative group"
                            >
                                {/* Circle Number */}
                                <div className="relative z-10 w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-amber to-accent-red flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-ivory">{pillar.icon}</span>
                                    {/* Pulse Ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-accent-amber/50 animate-pulse-slow"></div>
                                </div>

                                {/* Content Card */}
                                <div className="relative bg-cocoa-dark/50 backdrop-blur-sm rounded-3xl p-8 border border-ivory/10 group-hover:border-accent-amber/30 transition-all duration-500">
                                    <h3 className="font-serif text-2xl font-bold text-ivory mb-2 text-center">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-accent-amber text-sm font-medium tracking-wider mb-4 text-center">
                                        {pillar.subtitle}
                                    </p>
                                    <p className="text-warm-cream/70 text-center leading-relaxed">
                                        {pillar.description}
                                    </p>

                                    {/* Step Number */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-ivory text-deep-cocoa font-serif font-bold text-sm flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cahaya Rasa Section */}
                <div className="mt-24 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent-amber/20 rounded-full px-6 py-2 mb-8">
                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-accent-amber font-medium text-sm">Cahaya Rasa</span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-ivory mb-4">
                        Cara Terbaik Menikmati Nurasa
                    </h3>
                    <p className="text-warm-cream/60 mb-10 max-w-2xl mx-auto">
                        Setiap momen berharga layak ditemani camilan berkualitas.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-cocoa-dark/30 rounded-2xl p-6 border border-ivory/5 hover:border-accent-amber/20 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <p className="text-accent-amber font-medium mb-2">Teman Bersantai</p>
                            <p className="text-warm-cream/60 text-sm">Nikmati bersama teh atau kopi hangat di sore hari yang tenang</p>
                        </div>
                        <div className="bg-cocoa-dark/30 rounded-2xl p-6 border border-ivory/5 hover:border-accent-amber/20 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <p className="text-accent-amber font-medium mb-2">Hangat Bersama</p>
                            <p className="text-warm-cream/60 text-sm">Sempurna untuk menemani obrolan berkualitas bersama keluarga dan sahabat</p>
                        </div>
                        <div className="bg-cocoa-dark/30 rounded-2xl p-6 border border-ivory/5 hover:border-accent-amber/20 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <p className="text-accent-amber font-medium mb-2">Hadiah Bermakna</p>
                            <p className="text-warm-cream/60 text-sm">Kemasan premium siap menjadi bingkisan istimewa untuk orang tersayang</p>
                        </div>
                        <div className="bg-cocoa-dark/30 rounded-2xl p-6 border border-ivory/5 hover:border-accent-amber/20 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <p className="text-accent-amber font-medium mb-2">Me Time Spesial</p>
                            <p className="text-warm-cream/60 text-sm">Manjakan diri dengan camilan premium sebagai self-reward yang layak</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
