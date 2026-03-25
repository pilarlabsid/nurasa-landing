import { useState, useEffect } from 'react';

const TopProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const startTimeout = setTimeout(() => {
            if (!isMounted) return;
            setVisible(true);
            setProgress(15);
        }, 0);
        
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) return 90;
                return prev + Math.random() * 15;
            });
        }, 100);

        const timeout = setTimeout(() => {
            if (!isMounted) return;
            clearInterval(interval); 
            setProgress(100);
            
            setTimeout(() => {
                if (!isMounted) return;
                setVisible(false);
                // Reset after fade out completes
                setTimeout(() => {
                     if (isMounted) setProgress(0);
                }, 300); 
            }, 400); // Wait for width to reach 100%
        }, 800); 

        return () => {
            isMounted = false;
            clearTimeout(startTimeout);
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    // Always render to allow opacity transitions
    return (
        <div 
            className={`fixed top-0 left-0 w-full h-[3px] z-[99999] pointer-events-none transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className="h-full bg-accent-amber transition-all duration-300 ease-out"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(181, 98, 27, 0.7)' }}
            />
        </div>
    );
};

export default TopProgressBar;
