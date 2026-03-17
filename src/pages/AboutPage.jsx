import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import basrengLifestyle from '../assets/general/basreng-lifestyle.webp';
import SEO from '../components/SEO';

const AboutPage = () => {
    const [activeFilosofi, setActiveFilosofi] = useState(0);
    const filosofiRef = useRef(null);

    const handleFilosofiScroll = () => {
        if (!filosofiRef.current) return;
        const scrollWidth = filosofiRef.current.scrollWidth - filosofiRef.current.clientWidth;
        if (scrollWidth <= 0) { setActiveFilosofi(0); return; }
        setActiveFilosofi(Math.round((filosofiRef.current.scrollLeft / scrollWidth) * (filosofi.length - 1)));
    };
    const scrollToFilosofi = (index) => {
        if (!filosofiRef.current) return;
        const scrollWidth = filosofiRef.current.scrollWidth - filosofiRef.current.clientWidth;
        filosofiRef.current.scrollTo({ left: (scrollWidth / (filosofi.length - 1)) * index, behavior: 'smooth' });
    };

    const [activePillar, setActivePillar] = useState(0);
    const pillarRef = useRef(null);

    const handlePillarScroll = () => {
        if (!pillarRef.current) return;
        const scrollWidth = pillarRef.current.scrollWidth - pillarRef.current.clientWidth;
        if (scrollWidth <= 0) { setActivePillar(0); return; }
        setActivePillar(Math.round((pillarRef.current.scrollLeft / scrollWidth) * (pillars.length - 1)));
    };
    const scrollToPillar = (index) => {
        if (!pillarRef.current) return;
        const scrollWidth = pillarRef.current.scrollWidth - pillarRef.current.clientWidth;
        pillarRef.current.scrollTo({ left: (scrollWidth / (pillars.length - 1)) * index, behavior: 'smooth' });
    };

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
        <div className="pt-20 lg:pt-24 bg-ivory overflow-hidden">
            <SEO 
                title="Tentang Kami" 
                description="Pelajari filosofi di balik Nurasa. Kami menghadirkan narasi cita rasa yang merayakan kekayaan rempah Nusantara melalui camilan premium."
                url="/tentang"
            />
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 relative z-10">
                <nav className="flex text-[11px] lg:text-xs font-bold tracking-widest uppercase text-cocoa-light/50" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link to="/" className="hover:text-accent-amber transition-colors">Beranda</Link>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-accent-amber">Tentang Kami</span>
                        </li>
                    </ol>
                </nav>
            </div>
            {/* Page Hero */}
            <section className="relative py-12 md:py-20 bg-deep-cocoa overflow-hidden">
                <div className="absolute inset-0">
                    <img src={basrengLifestyle} alt="Background" className="w-full h-full object-cover opacity-20 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-cocoa via-deep-cocoa/80 to-deep-cocoa"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-xs mb-3 animate-fade-in">
                        Tentang Kami
                    </p>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-4 leading-tight">
                        Cahaya dalam <br />
                        <span className="italic text-accent-amber">Setiap Rasa</span>
                    </h1>
                    <p className="max-w-lg mx-auto text-warm-cream/70 text-sm md:text-base leading-relaxed">
                        Kami tidak sekadar menjual camilan. Kami menghadirkan narasi cita rasa yang merayakan kekayaan rempah Nusantara.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="relative py-12 bg-ivory">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-cocoa mb-3">
                            Makna di Balik <span className="italic">Nurasa</span>
                        </h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-deep-cocoa to-accent-amber mx-auto rounded-full"></div>
                    </div>

                    <div 
                        ref={filosofiRef}
                        onScroll={handleFilosofiScroll}
                        className="flex md:grid md:grid-cols-2 gap-5 max-w-4xl mx-auto overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth md:mx-0 md:px-0 md:pb-0 md:overflow-visible hide-scrollbar"
                    >
                        {filosofi.map((item) => (
                            <div key={item.title} className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center group relative bg-warm-cream rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-cocoa to-cocoa-light flex items-center justify-center text-ivory mb-5 group-hover:scale-105 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-3xl font-bold text-deep-cocoa mb-1">{item.title}</h3>
                                <p className="text-accent-amber font-bold text-[10px] tracking-widest uppercase mb-3">{item.subtitle}</p>
                                <p className="text-cocoa-light text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator - Filosofi */}
                    <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
                        {filosofi.map((_, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => scrollToFilosofi(idx)}
                                aria-label={`Go to filosofi ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeFilosofi === idx ? 'w-6 bg-accent-amber' : 'w-1.5 bg-deep-cocoa/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Timeline */}
            <section className="relative py-12 bg-deep-cocoa">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8 text-ivory">
                        <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-xs mb-2">Proses & Dedikasi</p>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold">Setiap Produk Punya <span className="italic text-accent-amber">Cerita</span></h2>
                    </div>

                    <div 
                        ref={pillarRef}
                        onScroll={handlePillarScroll}
                        className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth md:mx-0 md:px-0 md:pb-0 md:overflow-visible hide-scrollbar"
                    >
                        {pillars.map((pillar, index) => (
                            <div key={pillar.title} className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center relative group p-6 bg-cocoa-dark/50 backdrop-blur-md rounded-2xl border border-ivory/10 hover:border-accent-amber/30 transition-all duration-500">
                                <div className="text-accent-amber mb-4">{pillar.icon}</div>
                                <h3 className="font-serif text-xl font-bold text-ivory mb-1">{pillar.title}</h3>
                                <p className="text-accent-amber text-[10px] font-bold tracking-widest uppercase mb-3">{pillar.subtitle}</p>
                                <p className="text-warm-cream/60 leading-relaxed text-sm">{pillar.description}</p>
                                <div className="absolute top-4 right-6 text-3xl font-serif text-ivory/5">0{index + 1}</div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator - Pillars */}
                    <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
                        {pillars.map((_, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => scrollToPillar(idx)}
                                aria-label={`Go to pillar ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activePillar === idx ? 'w-6 bg-accent-amber' : 'w-1.5 bg-ivory/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission Card */}
            <section className="py-12 bg-warm-cream">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-ivory rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_rgba(61,35,20,0.07)] border border-deep-cocoa/5">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-serif text-xl font-bold text-deep-cocoa mb-3 border-l-4 border-accent-amber pl-4">Visi</h4>
                                <p className="text-cocoa-light leading-relaxed text-sm">
                                    Menjadi ikon jajanan kering premium Nusantara yang dikenal karena kualitas,
                                    elegansi, dan kemampuannya membangun kedekatan emosional dengan konsumen.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl font-bold text-deep-cocoa mb-3 border-l-4 border-accent-amber pl-4">Misi</h4>
                                <p className="text-cocoa-light leading-relaxed text-sm">
                                    Menyajikan cita rasa pedas yang berkarakter, mengangkat nilai estetika kuliner lokal
                                    ke level premium, dan menciptakan narasi yang memperkaya pengalaman makan.
                                </p>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-8 pt-8 border-t border-deep-cocoa/5 text-center">
                            <span className="text-2xl text-accent-amber mb-3 block">"</span>
                            <blockquote className="font-serif text-lg md:text-xl text-deep-cocoa leading-relaxed italic mb-4">
                                Bukan sekadar pedas yang lewat, tapi rasa yang menetap dan bercerita tentang kehangatan dapur Nusantara.
                            </blockquote>
                            <cite className="not-italic text-accent-amber font-bold tracking-widest uppercase text-xs">— Narasi Nurasa</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-ivory">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-deep-cocoa mb-6">Rasakan Langsung <br /> Kemewahan Rasanya</h2>
                    <Link 
                        to="/katalog" 
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Lihat Katalog Produk
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
