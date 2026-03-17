import { Link } from 'react-router-dom';
import basrengLifestyle from '../assets/general/basreng-lifestyle.webp';
import SEO from '../components/SEO';

const AboutPage = () => {
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
        <div className="pt-20 bg-ivory overflow-hidden">
            <SEO 
                title="Tentang Kami" 
                description="Pelajari filosofi di balik Nurasa. Kami menghadirkan narasi cita rasa yang merayakan kekayaan rempah Nusantara melalui camilan premium."
                url="/tentang"
            />
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 -mb-8 relative z-10">
                <nav className="flex text-[11px] lg:text-xs font-bold tracking-widest uppercase text-cocoa-light/40" aria-label="Breadcrumb">
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
            <section className="relative py-24 md:py-32 bg-deep-cocoa overflow-hidden">
                <div className="absolute inset-0">
                    <img src={basrengLifestyle} alt="Background" className="w-full h-full object-cover opacity-20 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-cocoa via-deep-cocoa/80 to-deep-cocoa"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
                        Tentang Kami
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-ivory mb-6 leading-tight">
                        Cahaya dalam <br />
                        <span className="italic text-accent-amber">Setiap Rasa</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-warm-cream/70 text-base md:text-lg leading-relaxed">
                        Kami tidak sekadar menjual camilan. Kami menghadirkan narasi cita rasa yang merayakan kekayaan rempah Nusantara.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="relative py-20 bg-ivory">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-cocoa mb-4">
                            Makna di Balik <span className="italic">Nurasa</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-deep-cocoa to-accent-amber mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
                        {filosofi.map((item) => (
                            <div key={item.title} className="group relative bg-warm-cream rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-deep-cocoa to-cocoa-light flex items-center justify-center text-ivory mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-4xl font-bold text-deep-cocoa mb-2">{item.title}</h3>
                                <p className="text-accent-amber font-bold text-xs tracking-widest uppercase mb-6">{item.subtitle}</p>
                                <p className="text-cocoa-light text-lg leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Timeline */}
            <section className="relative py-20 bg-deep-cocoa">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12 text-ivory">
                        <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-3">Proses & Dedikasi</p>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Setiap Produk Punya <span className="italic text-accent-amber">Cerita</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {pillars.map((pillar, index) => (
                            <div key={pillar.title} className="relative group p-8 bg-cocoa-dark/50 backdrop-blur-md rounded-[2.5rem] border border-ivory/10 hover:border-accent-amber/30 transition-all duration-500">
                                <div className="text-accent-amber mb-6">{pillar.icon}</div>
                                <h3 className="font-serif text-2xl font-bold text-ivory mb-2">{pillar.title}</h3>
                                <p className="text-accent-amber text-xs font-bold tracking-widest uppercase mb-4">{pillar.subtitle}</p>
                                <p className="text-warm-cream/60 leading-relaxed text-sm">{pillar.description}</p>
                                <div className="absolute top-6 right-8 text-4xl font-serif text-ivory/5">0{index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission Card */}
            <section className="py-20 bg-warm-cream">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="bg-ivory rounded-[2.5rem] p-10 md:p-16 shadow-[0_50px_100px_rgba(61,35,20,0.08)] border border-deep-cocoa/5">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h4 className="font-serif text-2xl font-bold text-deep-cocoa mb-4 border-l-4 border-accent-amber pl-4">Visi</h4>
                                <p className="text-cocoa-light leading-relaxed text-base">
                                    Menjadi ikon jajanan kering premium Nusantara yang dikenal karena kualitas,
                                    elegansi, dan kemampuannya membangun kedekatan emosional dengan konsumen.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif text-2xl font-bold text-deep-cocoa mb-4 border-l-4 border-accent-amber pl-4">Misi</h4>
                                <p className="text-cocoa-light leading-relaxed text-base">
                                    Menyajikan cita rasa pedas yang berkarakter, mengangkat nilai estetika kuliner lokal
                                    ke level premium, dan menciptakan narasi yang memperkaya pengalaman makan.
                                </p>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mt-12 pt-12 border-t border-deep-cocoa/5 text-center">
                            <span className="text-3xl text-accent-amber mb-6 block">"</span>
                            <blockquote className="font-serif text-xl md:text-2xl text-deep-cocoa leading-relaxed italic mb-6">
                                Bukan sekadar pedas yang lewat, tapi rasa yang menetap dan bercerita tentang kehangatan dapur Nusantara.
                            </blockquote>
                            <cite className="not-italic text-accent-amber font-bold tracking-widest uppercase text-xs">— Narasi Nurasa</cite>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-ivory">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-cocoa mb-8">Rasakan Langsung <br /> Kemewahan Rasanya</h2>
                    <Link 
                        to="/katalog" 
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Lihat Katalog Produk
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
