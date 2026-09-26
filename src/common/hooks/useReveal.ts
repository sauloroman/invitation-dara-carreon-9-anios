import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

interface UseRevealOptions {
    onExtremeReached?: (side: 'left' | 'right') => void
    threshold?: number
}

export const useReveal = ({ onExtremeReached, threshold = 20 }: UseRevealOptions = {}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0))
    const [isTriggered, setIsTriggered] = useState(false)

    const x = useMotionValue(containerWidth / 2)
    const leftWidth = useTransform(x, (val) => `${val}px`)

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setContainerWidth(rect.width)
            x.set(rect.width / 2)
        }
    }, [x])

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                setContainerWidth(rect.width)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const triggerSlide = (side: 'left' | 'right') => {
        if (isTriggered) return
        setIsTriggered(true)
        if (side === 'left') {
            x.set(0)
        } else {
            x.set(containerWidth)
        }
        onExtremeReached?.(side)
    }

    const handleDrag = () => {
        if (isTriggered || containerWidth === 0) return
        const currentX = x.get()

        if (currentX <= threshold) {
            triggerSlide('left')
        } else if (currentX >= containerWidth - threshold) {
            triggerSlide('right')
        }
    }

    const handleDragEnd = () => {
        if (isTriggered || containerWidth === 0) return
        const currentX = x.get()

        if (currentX <= containerWidth * 0.35 || currentX <= threshold) {
            triggerSlide('left')
        } else if (currentX >= containerWidth * 0.65 || currentX >= containerWidth - threshold) {
            triggerSlide('right')
        }
    }

    return {
        containerRef,
        containerWidth,
        x,
        leftWidth,
        handleDrag,
        handleDragEnd,
        isTriggered,
        reset: () => {
            setIsTriggered(false)
            if (containerRef.current) {
                x.set(containerRef.current.offsetWidth / 2)
            } else {
                x.set(containerWidth / 2)
            }
        },
    }
}
