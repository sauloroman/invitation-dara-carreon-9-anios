import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

interface UseRevealOptions {
    onExtremeReached?: () => void;
    threshold?: number;
}

export const useReveal = ({ onExtremeReached, threshold = 15 }: UseRevealOptions = {}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isTriggered, setIsTriggered] = useState(false);

    const x = useMotionValue(containerWidth / 2);
    const leftWidth = useTransform(x, (val) => `${val}px`);

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setContainerWidth(rect.width);
            x.set(rect.width / 2);
        }
    }, [x]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerWidth(rect.width);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDrag = () => {
        if (isTriggered || containerWidth === 0) return;
        const currentX = x.get();

        if (currentX <= threshold || currentX >= containerWidth - threshold) {
            setIsTriggered(true);
            if (onExtremeReached) {
                onExtremeReached();
            }
        }
    };

    return {
        containerRef,
        containerWidth,
        x,
        leftWidth,
        handleDrag,
        isTriggered,
        reset: () => {
            setIsTriggered(false);
            if (containerRef.current) {
                x.set(containerRef.current.offsetWidth / 2);
            } else {
                x.set(containerWidth / 2);
            }
        },
    };
};
