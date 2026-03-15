const Features = () => {
    const features = [
        {
            title: 'Rempah Orisinal',
            description: 'Menggunakan cabai asli dan rempah pilihan dari petani lokal, bukan sekadar bubuk instan.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: 'Daily Fresh',
            description: 'Kami menjamin produk yang Anda terima adalah produksi terbaru untuk menjaga keriukan maksimal.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: 'Higienis & Aman',
            description: 'Diproses dengan standar kebersihan tinggi dan dikemas rapat untuk menjaga kualitas rasa.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-ivory overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((item, idx) => (
                        <div key={idx} className="flex gap-6 items-start group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-warm-cream flex items-center justify-center text-accent-amber group-hover:bg-deep-cocoa group-hover:text-ivory transition-all duration-500 shadow-sm">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-serif text-xl font-bold text-deep-cocoa mb-2">{item.title}</h3>
                                <p className="text-cocoa-light text-sm leading-relaxed opacity-80">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
