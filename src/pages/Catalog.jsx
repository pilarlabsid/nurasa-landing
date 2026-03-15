import { useState, useEffect } from 'react';
import { products, categories } from '../data/products';

const Catalog = () => {
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;
        if (selectedCategory !== 'Semua') {
            result = result.filter(p => p.category === selectedCategory);
        }
        if (searchTerm) {
            result = result.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredProducts(result);
    }, [selectedCategory, searchTerm]);

    return (
        <div className="pt-32 pb-20 min-h-screen bg-warm-cream">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-deep-cocoa mb-4">
                        Katalog <span className="text-accent-amber italic">Nurasa</span>
                    </h1>
                    <p className="text-cocoa-light max-w-2xl mx-auto">
                        Jelajahi seluruh koleksi jajanan premium kami. Dari renyahnya Basreng hingga lezatnya Popcorn Gourmet.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    {/* Categories */}
                    <div className="flex gap-2 p-1 bg-ivory/50 rounded-2xl border border-deep-cocoa/5 overflow-x-auto w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                                    selectedCategory === cat
                                        ? 'bg-deep-cocoa text-ivory shadow-lg transform scale-105'
                                        : 'text-cocoa-light hover:bg-warm-cream'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Cari produk favoritmu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-ivory border border-deep-cocoa/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-amber/20 focus:border-accent-amber transition-all"
                        />
                        <svg className="absolute left-4 top-3.5 w-5 h-5 text-cocoa-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-ivory rounded-[2.5rem] overflow-hidden border border-deep-cocoa/5 hover:shadow-[0_20px_50px_rgba(61,35,20,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-80 overflow-hidden shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-cocoa/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Price Tag */}
                                    <div className="absolute bottom-6 left-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white font-serif text-2xl font-bold">{product.price}</p>
                                    </div>

                                    {/* Category Badge */}
                                    <span className="absolute top-6 left-6 px-4 py-1.5 bg-ivory/90 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase text-deep-cocoa">
                                        {product.category}
                                    </span>

                                    {/* Status Badge */}
                                    {product.badge && (
                                        <span className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-ivory text-[10px] font-bold tracking-widest uppercase ${
                                            product.badge === 'Hot!' || product.badge === 'New Arrival' ? 'bg-accent-red' : 'bg-accent-amber'
                                        }`}>
                                            {product.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8 lg:p-10 flex flex-col flex-grow">
                                    <h3 className="font-serif text-2xl font-bold text-deep-cocoa mb-2 group-hover:text-accent-amber transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-accent-amber text-xs font-medium tracking-widest uppercase mb-4">
                                        {product.tagline}
                                    </p>
                                    <p className="text-cocoa-light text-sm leading-relaxed mb-8 opacity-80 line-clamp-3">
                                        {product.description}
                                    </p>

                                    {/* Action */}
                                    <div className="flex items-center justify-between pt-6 border-t border-deep-cocoa/5 mt-auto">
                                        <a
                                            href={`https://wa.me/6285137143942?text=Halo%20Nurasa,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-deep-cocoa font-bold text-sm group/btn"
                                        >
                                            Pesan Sekarang
                                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6 text-deep-cocoa/20">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-deep-cocoa">Produk tidak ditemukan</h3>
                        <p className="text-cocoa-light">Coba gunakan kata kunci lain.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
