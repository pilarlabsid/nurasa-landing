import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const ProductCard = ({ product }) => {
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    return (
        <div
            className={`group bg-ivory rounded-[2rem] overflow-hidden border border-deep-cocoa/5 transition-all duration-500 flex flex-col h-full ${
                product.isOutOfStock ? 'opacity-75 grayscale-[0.5]' : 'hover:shadow-[0_30px_60px_rgba(61,35,20,0.1)] hover:-translate-y-1'
            }`}
        >
            {/* Image Container - Reduced Height */}
            <div className="relative h-60 overflow-hidden shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${!product.isOutOfStock && 'group-hover:scale-105'}`}
                />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-ivory/95 backdrop-blur-md rounded-full text-[9px] font-bold tracking-widest uppercase text-deep-cocoa shadow-sm">
                    {product.category}
                </span>

                {/* Status/Sale Badge */}
                <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                    {product.isOutOfStock ? (
                        <span className="px-3 py-1 bg-deep-cocoa/80 backdrop-blur-md text-ivory text-[9px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                            Stok Habis
                        </span>
                    ) : (
                        <>
                            {selectedVariant.originalPrice && (
                                <span className="px-3 py-1 bg-accent-red text-ivory text-[9px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                                    Promo
                                </span>
                            )}
                            {product.badge && !selectedVariant.originalPrice && (
                                <span className={`px-3 py-1 rounded-full text-ivory text-[9px] font-bold tracking-widest uppercase shadow-lg ${
                                    product.badge === 'Hot!' || product.badge === 'New Arrival' ? 'bg-accent-red' : 'bg-accent-amber'
                                }`}>
                                    {product.badge}
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Content - Tighter Padding */}
            <div className="p-5 lg:p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="font-serif text-lg lg:text-xl font-bold text-deep-cocoa mb-0.5 leading-tight">
                        {product.name}
                    </h3>
                    <p className="text-accent-amber text-[9px] lg:text-[10px] font-bold tracking-[0.1em] uppercase opacity-80">
                        {product.tagline}
                    </p>
                </div>

                {/* Price Display - More Compact */}
                <div className="bg-warm-cream/40 rounded-xl p-3 mb-5 border border-deep-cocoa/5">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[9px] text-cocoa-light/50 font-bold uppercase tracking-widest mb-0.5">Harga</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-deep-cocoa">{selectedVariant.price}</span>
                                {selectedVariant.originalPrice && (
                                    <span className="text-xs text-cocoa-light/40 line-through font-medium">{selectedVariant.originalPrice}</span>
                                )}
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[9px] text-cocoa-light/50 font-bold uppercase tracking-widest mb-0.5 block">Netto</span>
                            <span className="text-xs font-bold text-accent-amber">{selectedVariant.size}</span>
                        </div>
                    </div>
                </div>

                {/* Variant Selector - Tighter Grid */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[10px] font-bold text-deep-cocoa/40 uppercase tracking-widest">Pilih Varian</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {product.variants.map(v => (
                            <button 
                                key={v.id}
                                onClick={() => setSelectedVariant(v)}
                                className={`relative py-2 px-2 rounded-xl border-2 transition-all duration-300 ${
                                    selectedVariant.id === v.id 
                                    ? 'bg-ivory border-accent-amber shadow-sm' 
                                    : 'bg-transparent border-deep-cocoa/5 hover:border-deep-cocoa/10 text-cocoa-light'
                                }`}
                            >
                                <span className={`block text-[10px] font-bold mb-0.5 ${selectedVariant.id === v.id ? 'text-deep-cocoa' : ''}`}>
                                    {v.label || v.size}
                                </span>
                                <span className={`block text-[8px] uppercase tracking-tighter opacity-50 ${selectedVariant.id === v.id ? 'text-accent-amber opacity-100' : ''}`}>
                                    {v.packaging.split(' ')[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action - Simplified */}
                <div className="pt-4 border-t border-deep-cocoa/5 mt-auto">
                    <button
                        onClick={() => {
                            if (product.isOutOfStock) return;
                            addToCart(product, selectedVariant);
                            setAdded(true);
                            setTimeout(() => setAdded(false), 2000);
                        }}
                        disabled={product.isOutOfStock}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl transition-all duration-300 shadow-md group/btn ${
                            product.isOutOfStock
                            ? 'bg-deep-cocoa/20 text-deep-cocoa/40 cursor-not-allowed'
                            : added 
                                ? 'bg-green-600 text-ivory' 
                                : 'bg-deep-cocoa text-ivory hover:bg-accent-amber'
                        }`}
                    >
                        <span className="text-xs font-bold uppercase tracking-wider">
                            {product.isOutOfStock ? 'Stok Habis' : added ? 'Berhasil Ditambahkan!' : 'Tambah ke Keranjang'}
                        </span>
                        {!added && !product.isOutOfStock && (
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                        {added && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

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

    const catalogStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://nurasa.store/katalog`,
            "name": product.name,
            "image": `https://nurasa.store/assets/products/${product.name.replace(/ /g, '%20')}.webp`, // Estimate image URL
            "description": product.description
        }))
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-warm-cream">
            <SEO 
                title="Katalog Produk" 
                description="Jelajahi koleksi lengkap camilan premium Nurasa. Basreng berbagai level pedas dan Popcorn Gourmet dengan rasa istimewa."
                url="/katalog"
            />
            <StructuredData data={catalogStructuredData} />
            <div className="max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header */}
                <div className="mb-10 lg:mb-12 text-center">
                    <h1 className="font-serif text-4xl lg:text-6xl font-bold text-deep-cocoa mb-4">
                        Katalog <span className="text-accent-amber italic">Nurasa</span>
                    </h1>
                    <p className="text-cocoa-light text-sm lg:text-base max-w-2xl mx-auto">
                        Jelajahi seluruh koleksi jajanan premium kami. Dari renyahnya Basreng hingga lezatnya Popcorn Gourmet.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    {/* Categories */}
                    <div className="flex gap-2 p-1 bg-ivory/50 rounded-2xl border border-deep-cocoa/5 overflow-x-auto w-full md:w-auto custom-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
                            <ProductCard key={product.id} product={product} />
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
