import { useState } from 'react';
import { products } from '../data/products';
import SEO from '../components/SEO';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: 'Tanya Produk',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        const text = `🌐 *Pesan dari Website Nurasa*
────────────────────

Halo Nurasa, saya ${formState.name}.

Subjek: ${formState.subject}
Email: ${formState.email}

Pesan:
${formState.message}`;
        const waUrl = `https://wa.me/6285137143942?text=${encodeURIComponent(text)}`;

        window.open(waUrl, '_blank');
        setIsSubmitted(true);
    };

    const contactInfo = [
        {
            title: 'WhatsApp',
            value: '+62 851-3714-3942',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            link: 'https://wa.me/6285137143942'
        },
        {
            title: 'Instagram',
            value: '@nurasa.store',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            link: 'https://instagram.com/nurasa.store'
        },
        {
            title: 'Email',
            value: 'halo@nurasa.store',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: 'mailto:halo@nurasa.store'
        }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-warm-cream overflow-hidden">
            <SEO 
                title="Hubungi Kami" 
                description="Punya pertanyaan atau ingin bekerjasama dengan Nurasa? Hubungi kami melalui WhatsApp, Instagram, atau Email. Kami siap membantu Anda."
                url="/kontak"
            />
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="rays-decoration"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mb-20 text-center">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4">
                        Hubungi Kami
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-deep-cocoa mb-6">
                        Mari <span className="text-accent-amber italic">Bercerita</span>
                    </h1>
                    <p className="text-cocoa-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Punya pertanyaan tentang produk kami atau ingin kerjasama? 
                        Kami selalu senang mendengar cerita dari Anda.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 items-start">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-8">
                        {contactInfo.map((info) => (
                            <a
                                key={info.title}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-ivory p-6 rounded-[2rem] border border-deep-cocoa/5 hover:border-accent-amber/20 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-warm-cream text-deep-cocoa flex items-center justify-center group-hover:bg-deep-cocoa group-hover:text-ivory transition-colors duration-500">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-accent-amber text-xs font-bold tracking-widest uppercase mb-1">
                                            {info.title}
                                        </p>
                                        <p className="text-deep-cocoa font-bold text-lg">
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Location Card */}
                        <div className="bg-deep-cocoa text-ivory p-10 rounded-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-amber/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h4 className="font-serif text-2xl font-bold mb-6 italic">Lokasi Kami</h4>
                            <p className="text-warm-cream/80 leading-relaxed mb-8">
                                Jakarta Selatan, Indonesia<br />
                                Pengiriman tersedia ke seluruh wilayah Nusantara.
                            </p>
                            <div className="flex items-center gap-2 text-accent-amber">
                                <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse"></span>
                                <span className="text-sm font-medium">Melayani seluruh Indonesia</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-ivory/80 backdrop-blur-md p-10 md:p-14 rounded-[3rem] border border-deep-cocoa/5 shadow-xl min-h-[500px] flex flex-col justify-center">
                            {isSubmitted ? (
                                <div className="text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-3xl font-bold text-deep-cocoa mb-4">Pesan Terkirim!</h3>
                                    <p className="text-cocoa-light mb-8 max-w-sm mx-auto">
                                        Terima kasih sudah menghubungi Nurasa. Kami juga telah membuka WhatsApp Anda untuk mempercepat komunikasi.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-accent-amber font-bold hover:underline"
                                    >
                                        Kirim pesan lainnya
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="font-serif text-3xl font-bold text-deep-cocoa mb-10">Kirim Pesan</h3>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-deep-cocoa/60 uppercase tracking-widest ml-2">Nama Lengkap</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Masukkan nama Anda"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                                    className="w-full px-6 py-4 bg-warm-cream/50 border border-deep-cocoa/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-amber/20 focus:border-accent-amber transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-deep-cocoa/60 uppercase tracking-widest ml-2">Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="alamat@email.com"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                                    className="w-full px-6 py-4 bg-warm-cream/50 border border-deep-cocoa/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-amber/20 focus:border-accent-amber transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-deep-cocoa/60 uppercase tracking-widest ml-2">Subjek</label>
                                            <select
                                                value={formState.subject}
                                                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                                                className="w-full px-6 py-4 bg-warm-cream/50 border border-deep-cocoa/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-amber/20 focus:border-accent-amber transition-all appearance-none"
                                            >
                                                <option>Tanya Produk</option>
                                                <option>Kerjasama Reseller</option>
                                                <option>Kritik & Saran</option>
                                                <option>Lainnya</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-deep-cocoa/60 uppercase tracking-widest ml-2">Pesan</label>
                                            <textarea
                                                required
                                                rows="5"
                                                placeholder="Ceritakan pesan Anda di sini..."
                                                value={formState.message}
                                                onChange={(e) => setFormState({...formState, message: e.target.value})}
                                                className="w-full px-6 py-4 bg-warm-cream/50 border border-deep-cocoa/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-amber/20 focus:border-accent-amber transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-5 text-lg font-bold shadow-[0_10px_30px_rgba(196,92,38,0.2)]"
                                        >
                                            Kirim ke WhatsApp
                                        </button>
                                        
                                        <p className="text-center text-cocoa-light/60 text-xs">
                                            *Pesan akan diteruskan ke layanan WhatsApp kami untuk respon lebih cepat.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
