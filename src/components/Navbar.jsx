import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoText from '../assets/logo/NurasaText.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: isHomePage ? '#beranda' : '/' },
        { name: 'Filosofi', href: isHomePage ? '#filosofi' : '/#filosofi' },
        { name: 'Katalog', href: '/katalog' },
        { name: 'Cerita', href: isHomePage ? '#cerita' : '/#cerita' },
        { name: 'Kontak', href: isHomePage ? '#kontak' : '/#kontak' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-warm-cream/95 backdrop-blur-md shadow-lg py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-start">
                        <div className="flex flex-col justify-start">
                            <img
                                src={logoText}
                                alt="Nurasa"
                                className="h-8 object-contain object-left mb-0.5 hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-xs text-cocoa-light italic">Ada Cerita di Setiap Rasa</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-deep-cocoa font-medium hover:text-accent-amber transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-amber transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to="/katalog" className="btn-primary text-sm px-6 py-2.5">
                            Lihat Katalog
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-deep-cocoa p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
                        }`}
                >
                    <div className="glass rounded-2xl p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-deep-cocoa font-medium hover:text-accent-amber transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Link to="/katalog" className="btn-primary w-full text-center text-sm mt-4 block py-3">
                            Lihat Katalog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
