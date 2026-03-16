import React, { useEffect, useState } from 'react';
import logoText from '../assets/logo/NurasaText.webp';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showUI, setShowUI] = useState(false); // Only show branding if it takes too long
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Check if already ready (e.g. from cache)
        if (document.readyState === 'complete' && document.fonts.status === 'loaded') {
            setIsVisible(false);
            setShouldRender(false);
            return;
        }

        // Timer to decided if we should show the branding/loading UI
        const uiTimer = setTimeout(() => {
            setShowUI(true);
            setIsAnimating(true);
        }, 400); // 400ms threshold

        const handleLoad = async () => {
            try {
                // Wait for assets and fonts
                await Promise.all([
                    new Promise(resolve => {
                        if (document.readyState === 'complete') resolve();
                        else window.addEventListener('load', resolve, { once: true });
                    }),
                    document.fonts.ready
                ]);
                
                // Once ready, hide everything
                setIsVisible(false);
            } catch (error) {
                setIsVisible(false);
            }
        };

        handleLoad();
        return () => clearTimeout(uiTimer);
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-warm-cream transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className={`relative flex flex-col items-center w-full max-w-[280px] transition-all duration-700 ${
                showUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
                {/* Branding */}
                <div className="flex flex-col items-center mb-10">
                    <img 
                        src={logoText} 
                        alt="Nurasa Logo" 
                        className="h-12 md:h-14 object-contain"
                    />
                    <p className="mt-3 text-[10px] md:text-[11px] text-deep-cocoa/50 font-medium tracking-[0.25em] uppercase font-sans">
                        Ada Cerita di Setiap Rasa
                    </p>
                </div>

                {/* Intelligent Progress Line */}
                <div className="w-full flex flex-col items-center gap-4">
                    <div className="relative w-full h-[1px] bg-deep-cocoa/10 overflow-hidden">
                        <div 
                            className="absolute inset-0 bg-accent-amber transition-transform duration-[2000ms] cubic-bezier(0.65, 0, 0.35, 1) origin-left"
                            style={{ transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)' }}
                        ></div>
                    </div>
                    <div className="flex justify-between w-full text-[8px] font-bold tracking-[0.2em] text-deep-cocoa/30 uppercase">
                        <span>Loading</span>
                        <span className="animate-pulse">Sesaat Lagi...</span>
                    </div>
                </div>
            </div>

            {/* Bottom Brand Mark */}
            <div className="absolute bottom-12 w-1 h-1 rounded-full bg-accent-amber/20"></div>
        </div>
    );
};

export default Preloader;
