import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Wait for fonts and all assets to be ready
        window.onload = () => {
            setTimeout(() => {
                setIsVisible(false);
            }, 800); // Small buffer for visual comfort
        };

        // Fallback in case window.onload doesn't fire (already loaded)
        if (document.readyState === 'complete') {
            setTimeout(() => {
                setIsVisible(false);
            }, 800);
        }

        return () => {
            window.onload = null;
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // Match transiton duration
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-warm-cream transition-opacity duration-500 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="relative">
                {/* Decorative rotating circle */}
                <div className="absolute inset-0 -m-8 border-2 border-dashed border-accent-amber/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                
                <div className="flex flex-col items-center gap-6 animate-pulse">
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-deep-cocoa tracking-tighter">
                        NURASA
                    </h1>
                    
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-[bounce_1s_infinite_0ms]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-[bounce_1s_infinite_200ms]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-[bounce_1s_infinite_400ms]"></div>
                    </div>
                </div>
            </div>

            <p className="absolute bottom-12 text-[10px] font-bold tracking-[0.3em] uppercase text-cocoa-light/40">
                Ada Cerita di Setiap Rasa
            </p>
        </div>
    );
};

export default Preloader;
