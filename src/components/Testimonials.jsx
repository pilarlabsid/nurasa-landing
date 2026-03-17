import { useState, useRef } from 'react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const maxIndex = reviews.length - 1;
        if (scrollWidth <= 0) {
            setActiveIndex(0);
            return;
        }
        const index = Math.round((scrollLeft / scrollWidth) * maxIndex);
        setActiveIndex(index);
    };

    const scrollTo = (index) => {
        if (!scrollRef.current) return;
        const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const maxIndex = reviews.length - 1;
        const scrollToPosition = (scrollWidth / maxIndex) * index;
        scrollRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
    };
    const reviews = [
        {
            name: 'Shinta Amelia',
            role: 'Pecinta Pedas',
            text: 'Basreng paling renyah yang pernah saya coba. Pedasnya nampol tapi nggak bikin tenggorokan sakit. Bumbunya benar-benar meresap!',
            rating: 5
        },
        {
            name: 'Andi Pratama',
            role: 'Food Enthusiast',
            text: 'Popcorn Caramelnya juara! Rasanya mirip brand mall tapi kemasannya jauh lebih eksklusif. Cocok banget buat teman nonton.',
            rating: 5
        },
        {
            name: 'Maya Sartika',
            role: 'Ibu Rumah Tangga',
            text: 'Langganan buat bingkisan arisan. Semua teman bilang enak dan packagingnya sangat mewah. Pelayanan adminnya juga ramah sekali.',
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-deep-cocoa relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="rays-decoration"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-accent-amber font-medium tracking-[0.3em] uppercase text-sm mb-4">
                        Suara Pelanggan
                    </p>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-ivory">
                        Apa Kata <span className="italic text-accent-amber">Mereka?</span>
                    </h2>
                </div>

                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth md:mx-0 md:px-0 md:pb-0 md:overflow-visible hide-scrollbar"
                >
                    {reviews.map((review, idx) => (
                        <div key={idx} className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center bg-cocoa-dark/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-ivory/10 hover:border-accent-amber/30 transition-all duration-500 flex flex-col h-full">
                            <div className="flex gap-1 mb-6 text-accent-amber">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-warm-cream/80 text-lg leading-relaxed mb-8 italic flex-grow">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-ivory/5">
                                <div className="w-10 h-10 rounded-full bg-accent-amber/20 flex items-center justify-center text-accent-amber font-bold">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-ivory font-bold text-sm">{review.name}</h4>
                                    <p className="text-warm-cream/40 text-xs uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Dots Indicator */}
                <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
                    {reviews.map((_, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => scrollTo(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-accent-amber' : 'w-1.5 bg-ivory/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
