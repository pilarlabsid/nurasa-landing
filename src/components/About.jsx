import { Link } from 'react-router-dom';
import basrengLifestyle from '../assets/general/basreng-lifestyle.webp';

const About = () => {
    return (
        <section id="filosofi" className="relative py-20 bg-ivory overflow-hidden">
            {/* Decorative Elements */}
            <div className="decorative-circle w-80 h-80 -top-40 -right-40 border-deep-cocoa/5"></div>
            <div className="decorative-circle w-96 h-96 -bottom-48 -left-48 border-accent-amber/5"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left: Branding Visual with Image */}
                    <div className="w-full lg:w-[42%] relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-deep-cocoa to-accent-amber rounded-[2.5rem] lg:rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform duration-700"></div>
                        <div className="relative aspect-[4/5] bg-ivory rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-deep-cocoa/5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700">
                             <img 
                                src={basrengLifestyle} 
                                alt="Nurasa Lifestyle" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-deep-cocoa/60 via-transparent to-transparent opacity-60"></div>
                             <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8 text-ivory">
                                <p className="font-serif text-xl lg:text-2xl leading-relaxed italic mb-4">
                                     "Cahaya dalam setiap rasa, kejujuran dalam setiap bahan."
                                </p>
                                <div className="w-12 h-0.5 bg-accent-amber rounded-full mb-2"></div>
                                <p className="text-[9px] lg:text-[10px] font-bold tracking-widest uppercase opacity-80">Narasi Nurasa</p>
                             </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-[52%]">
                        <p className="text-accent-amber font-medium tracking-[0.2em] lg:tracking-[0.3em] uppercase text-[10px] lg:text-sm mb-4 lg:mb-6">
                            Filosofi Kami
                        </p>
                        <h2 className="font-serif text-3xl lg:text-5xl font-bold text-deep-cocoa mb-6 lg:mb-8 leading-tight">
                            Lebih dari Sekadar <br />
                            <span className="italic text-accent-amber">Camilan Biasa.</span>
                        </h2>
                        <p className="text-cocoa-light text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 opacity-80">
                            Terinspirasi dari kekayaan kuliner Nusantara, Nurasa hadir membawa 
                            aneka varian rasa istimewa melalui proses yang telaten.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link 
                                to="/tentang" 
                                className="group flex items-center gap-4 text-deep-cocoa font-bold text-lg hover:text-accent-amber transition-colors"
                            >
                                <span className="border-b-2 border-deep-cocoa group-hover:border-accent-amber transition-colors">Baca Cerita Lengkap</span>
                                <div className="w-10 h-10 rounded-full bg-deep-cocoa text-ivory flex items-center justify-center group-hover:bg-accent-amber group-hover:translate-x-2 transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
