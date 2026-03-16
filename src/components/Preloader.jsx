import React, { useEffect, useState, useRef } from 'react';
import logoText from '../assets/logo/NurasaText.webp';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showUI, setShowUI] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);
    const startTime = useRef(Date.now());

    useEffect(() => {
        // Always show branding after 400ms if still loading
        const uiTimer = setTimeout(() => {
            setShowUI(true);
            setIsAnimating(true);
        }, 400);

        const hide = () => {
            const elapsed = Date.now() - startTime.current;
            // Ensure preloader is visible for at least 800ms to cover font/style rendering
            const remaining = Math.max(0, 800 - elapsed);
            setTimeout(() => {
                setIsVisible(false);
            }, remaining);
        };

        const handleLoad = async () => {
            try {
                await Promise.all([
                    // Wait for window load (images, scripts)
                    new Promise(resolve => {
                        if (document.readyState === 'complete') resolve();
                        else window.addEventListener('load', resolve, { once: true });
                    }),
                    // Wait for fonts to be fully applied
                    document.fonts.ready
                ]);
                hide();
            } catch {
                hide();
            }
        };

        handleLoad();

        // Absolute fallback: never block user more than 5s
        const fallback = setTimeout(() => hide(), 5000);

        return () => {
            clearTimeout(uiTimer);
            clearTimeout(fallback);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => setShouldRender(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div
            style={{ backgroundColor: '#FAF6F1' }}
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div
                className={`relative flex flex-col items-center w-full max-w-[260px] transition-all duration-500 ${
                    showUI ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
            >
                {/* Branding */}
                <div className="flex flex-col items-center mb-10">
                    <img
                        src={logoText}
                        alt="Nurasa Logo"
                        className="h-12 md:h-14 object-contain"
                    />
                    <p
                        style={{ fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '0.22em' }}
                        className="mt-3 text-[10px] text-deep-cocoa/50 font-medium uppercase"
                    >
                        Ada Cerita di Setiap Rasa
                    </p>
                </div>

                {/* Progress Line */}
                <div className="w-full flex flex-col gap-3">
                    <div className="relative w-full h-[1px] bg-deep-cocoa/10 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-accent-amber origin-left"
                            style={{
                                transform: isAnimating ? 'scaleX(1)' : 'scaleX(0)',
                                transition: 'transform 2000ms cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        />
                    </div>
                    <div className="flex justify-between w-full" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-deep-cocoa/25">Loading</span>
                        <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-accent-amber/50 animate-pulse">Sesaat Lagi...</span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 w-1 h-1 rounded-full bg-accent-amber/20" />
        </div>
    );
};

export default Preloader;
