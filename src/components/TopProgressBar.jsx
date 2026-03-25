import { useState, useEffect } from 'react';

const TopProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Start the progress bar EXACTLY once when the React App first boots up
        const startTimeout = setTimeout(() => {
            setVisible(true);
            setProgress(15);
        }, 0);
        
        // Simulate network/rendering progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return 90;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Finish the progress bar quickly
        const timeout = setTimeout(() => {
            clearInterval(interval); // Prevent interval from pushing it back to 90
            setProgress(100);
            setTimeout(() => {
                setVisible(false);
            }, 400); // Wait for CSS transition (200ms) to finish smoothly before hiding
        }, 800); // Wait a bit longer to simulate real load before closing

        return () => {
            clearTimeout(startTimeout);
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[99999] pointer-events-none">
            <div
                className="h-full bg-accent-amber transition-all duration-200 ease-out"
                style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(181, 98, 27, 0.7)' }}
            />
        </div>
    );
};

export default TopProgressBar;
