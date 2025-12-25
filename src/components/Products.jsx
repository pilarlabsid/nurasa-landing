import originalImg from '../assets/products/Original.jpg';
import pedasImg from '../assets/products/Pedas.jpg';
import extraPedasImg from '../assets/products/Extra Pedas.jpg';

const Products = () => {
    const products = [
        {
            name: 'Basreng Original',
            tagline: 'Gurih Aromatik Daun Jeruk',
            description: 'Bumbu gurih khas daun jeruk yang harum. Keriuk renyah dengan aroma segar yang cocok untuk semua kalangan.',
            features: ['Bumbu Daun Jeruk', 'Renyah Sempurna', 'Premium Quality'],
            badge: 'Best Seller',
            level: 0,
            image: originalImg,
        },
        {
            name: 'Basreng Pedas',
            tagline: 'Pedas yang Membelai',
            description: 'Sensasi pedas yang pas dan nikmat. Perpaduan bumbu gurih dengan cabai pilihan yang memberikan kehangatan di setiap gigitan.',
            features: ['Cabai Pilihan', 'Pedas Seimbang', 'Renyah Krispi'],
            badge: 'Favorite',
            level: 1,
            image: pedasImg,
        },
        {
            name: 'Basreng Extra Pedas',
            tagline: 'Untuk Pecinta Pedas Sejati',
            description: 'Level pedas maksimal untuk Anda yang berani! Racikan cabai ekstra dengan bumbu khas yang membuat ketagihan.',
            features: ['Extra Cabai', 'Pedas Nampol', 'Sensasi Maksimal'],
            badge: 'Hot!',
            level: 2,
            image: extraPedasImg,
        },
    ];

    const SpicyLevel = ({ level }) => {
        return (
            <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i <= level
                            ? level === 2
                                ? 'bg-accent-red'
                                : level === 1
                                    ? 'bg-accent-amber'
                                    : 'bg-cocoa-light'
                            : 'bg-deep-cocoa/20'
                            }`}
                    />
                ))}
                <span className="text-xs text-cocoa-light ml-1">
                    {level === 0 ? 'Tidak Pedas' : level === 1 ? 'Pedas' : 'Extra Pedas'}
                </span>
            </div>
        );
    };

    return (
        <section id="produk" className="relative py-32 bg-warm-cream overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 radial-bg"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4">
                        Koleksi Rasa
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-cocoa mb-6">
                        Basreng <span className="italic text-accent-amber">Premium</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-cocoa-light text-lg">
                        Bakso goreng renyah dengan bumbu pilihan. Tersedia dalam 3 level rasa
                        untuk menemani setiap momen bersantai Anda.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="group relative bg-ivory rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                        >
                            {/* Product Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-cocoa/40 via-transparent to-transparent"></div>

                                {/* Badge */}
                                <span className={`absolute top-4 right-4 text-ivory text-xs font-medium px-4 py-1.5 rounded-full ${product.level === 2 ? 'bg-accent-red' : 'bg-accent-amber'
                                    }`}>
                                    {product.badge}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Spicy Level Indicator */}
                                <div className="mb-3">
                                    <SpicyLevel level={product.level} />
                                </div>

                                <p className="text-accent-amber text-sm font-medium tracking-wider mb-2">
                                    {product.tagline}
                                </p>
                                <h3 className="font-serif text-2xl font-bold text-deep-cocoa mb-4 group-hover:text-accent-amber transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-cocoa-light text-sm leading-relaxed mb-6">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs px-3 py-1 rounded-full bg-warm-cream text-deep-cocoa border border-deep-cocoa/10"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/6285137143942?text=Halo%20Nurasa,%20saya%20ingin%20pesan%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full btn-secondary text-sm py-3 group-hover:bg-deep-cocoa group-hover:text-ivory group-hover:border-deep-cocoa transition-all duration-300 text-center"
                                >
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gift Ready Section */}
                <div className="mt-20 text-center">
                    <a
                        href="https://wa.me/6285137143942?text=Halo%20Nurasa,%20saya%20ingin%20pesan%20Basreng%20untuk%20hadiah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-ivory rounded-full px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                        <svg className="w-8 h-8 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        <div className="text-left">
                            <p className="font-serif font-bold text-deep-cocoa">Gift-Ready Packaging</p>
                            <p className="text-sm text-cocoa-light">Klik untuk pesan paket hadiah istimewa</p>
                        </div>
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-cocoa-light">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">Bahan Berkualitas</span>
                    </div>
                    <div className="w-px h-4 bg-cocoa-light/30 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm font-medium">Higienis & Aman</span>
                    </div>
                    <div className="w-px h-4 bg-cocoa-light/30 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        <span className="text-sm font-medium">Pengiriman Seluruh Indonesia</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
