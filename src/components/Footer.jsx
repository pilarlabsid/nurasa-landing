import logoN from '../assets/logo/N.png';
import logoText from '../assets/logo/NurasaText.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://instagram.com/nurasa.store',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/6285137143942',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
        },
        {
            name: 'Shopee',
            href: 'https://shopee.co.id/nurasa.store',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                    <path d="M24 4c-4.418 0-8 3.582-8 8h-6c-1.105 0-2 .895-2 2v28c0 1.105.895 2 2 2h28c1.105 0 2-.895 2-2V14c0-1.105-.895-2-2-2h-6c0-4.418-3.582-8-8-8zm0 4c2.209 0 4 1.791 4 4H20c0-2.209 1.791-4 4-4zm-10 8h4v4c0 1.105.895 2 2 2s2-.895 2-2v-4h4v4c0 1.105.895 2 2 2s2-.895 2-2v-4h4v24H14V16z" />
                </svg>
            ),
        },
    ];

    const quickLinks = [
        { name: 'Beranda', href: '#beranda' },
        { name: 'Filosofi', href: '#filosofi' },
        { name: 'Produk', href: '#produk' },
        { name: 'Cerita', href: '#cerita' },
    ];

    return (
        <footer id="kontak" className="relative bg-ivory pt-20 pb-8 overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-deep-cocoa via-accent-amber to-deep-cocoa"></div>

            {/* Decorative Circle */}
            <div className="decorative-circle w-80 h-80 -bottom-40 -right-40 border-deep-cocoa/5"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-start mb-6">
                            <div className="flex flex-col justify-start">
                                <img
                                    src={logoText}
                                    alt="Nurasa"
                                    className="h-9 object-contain object-left mb-1"
                                />
                                <p className="text-sm text-cocoa-light italic">Ada Cerita di Setiap Rasa</p>
                            </div>
                        </div>

                        <p className="text-cocoa-light leading-relaxed mb-6 max-w-md">
                            Jajanan kering premium Nusantara yang menghadirkan cita rasa pedas berkelas.
                            Setiap produk dibuat dengan bahan pilihan dan proses yang penuh dedikasi.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-deep-cocoa text-ivory flex items-center justify-center hover:bg-accent-amber transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg font-bold text-deep-cocoa mb-6">
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-cocoa-light hover:text-accent-amber transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-amber/50"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg font-bold text-deep-cocoa mb-6">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-cocoa-light">halo@nurasa.store</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-cocoa-light">+62 851-3714-3942</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-cocoa-light">Jakarta Selatan, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="bg-gradient-to-r from-deep-cocoa to-cocoa-dark rounded-2xl p-8 mb-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h4 className="font-serif text-xl font-bold text-ivory mb-2">
                                Pesan Produk Nurasa Sekarang
                            </h4>
                            <p className="text-warm-cream/70 text-sm">
                                Pilih cara pemesanan yang paling nyaman untuk Anda
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/6285137143942?text=Halo%20Nurasa,%20saya%20ingin%20pesan%20produk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>Chat WhatsApp</span>
                            </a>
                            <a
                                href="https://shopee.co.id/nurasa.store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 48 48">
                                    <path d="M24 4c-4.418 0-8 3.582-8 8h-6c-1.105 0-2 .895-2 2v28c0 1.105.895 2 2 2h28c1.105 0 2-.895 2-2V14c0-1.105-.895-2-2-2h-6c0-4.418-3.582-8-8-8zm0 4c2.209 0 4 1.791 4 4H20c0-2.209 1.791-4 4-4zm-10 8h4v4c0 1.105.895 2 2 2s2-.895 2-2v-4h4v4c0 1.105.895 2 2 2s2-.895 2-2v-4h4v24H14V16z" />
                                </svg>
                                <span>Beli di Shopee</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-deep-cocoa/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-cocoa-light text-sm">
                            © {currentYear} Nurasa. Seluruh hak cipta dilindungi.
                        </p>
                        <p className="text-cocoa-light/60 text-sm italic font-serif">
                            "Ada Cerita di Setiap Rasa"
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
