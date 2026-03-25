import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { cartCount } = useCart();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Katalog', href: '/katalog' },
        { name: 'Tentang Kami', href: '/tentang' },
        { name: 'Kontak', href: '/kontak' },
    ];

    // Compute navbar classes and styles
    const navClasses = isHomePage
        ? isScrolled
            ? 'backdrop-blur-md shadow-lg py-3 lg:py-4'
            : 'bg-transparent py-5 lg:py-6'
        : isScrolled
            ? 'backdrop-blur-md shadow-lg py-3 lg:py-4'
            : 'backdrop-blur-sm shadow-sm py-3 lg:py-4';

    // For non-home pages, always enforce solid background via inline style
    // This ensures Tailwind's custom color opacity issue doesn't cause transparency
    const navStyle = !isHomePage
        ? { backgroundColor: 'rgba(250, 246, 241, 0.97)' }
        : isScrolled
            ? { backgroundColor: 'rgba(250, 246, 241, 0.95)' }
            : {};

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}
                style={navStyle}
            >
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-start">
                            <div className="flex flex-col justify-start">
                                <img
                                    src="/logo-text.webp"
                                    alt="Nurasa"
                                    width="240"
                                    height="80"
                                    fetchPriority="high"
                                    loading="eager"
                                    className="h-7 lg:h-9 w-auto object-contain object-left mb-0.5 lg:mb-1 hover:scale-105 transition-transform duration-300"
                                />
                                <p className="text-[8px] lg:text-xs text-cocoa-light italic">Ada Cerita di Setiap Rasa</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="relative text-deep-cocoa font-medium hover:text-accent-amber transition-colors duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-amber transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-deep-cocoa hover:text-accent-amber transition-colors group"
                                aria-label="Buka keranjang"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-accent-red text-ivory text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-warm-cream animate-fade-in">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <Link 
                                to="/katalog" 
                                className="btn-primary text-sm px-6 py-2.5"
                            >
                                Lihat Katalog
                            </Link>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-deep-cocoa"
                                aria-label="Buka keranjang"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 bg-accent-red text-ivory text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-warm-cream">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button
                                className="text-deep-cocoa p-2"
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
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
                            }`}
                    >
                        <div className="bg-ivory/95 backdrop-blur-xl rounded-[1.5rem] p-5 space-y-4 border border-deep-cocoa/5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`block font-medium transition-all duration-300 ${location.pathname === link.href ? 'text-accent-amber' : 'text-deep-cocoa hover:text-accent-amber'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    to="/katalog"
                                    className="btn-primary w-full text-center text-sm font-bold uppercase tracking-wider block py-3.5 rounded-xl shadow-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Lihat Katalog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Cart Drawer Overlay */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};


export default Navbar;
