import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReveal, useConfetti } from '@/common/hooks'
import { Particles } from '@/common/components/particles/Particles'
import { RevealRight } from './RevealRight/RevealRight'
import { RevealLeft } from './RevealLeft/RevealLeft'
import start from '@/assets/images/icons/estrella.png'

const CONFETTI_COLORS = [
    '#ED1378',
    '#FFE600',
    '#762A73',
    '#00B4D8',
    '#FF6EA7',
    '#FFA500',
    '#FFFFFF',
]

export const Reveal: React.FC = () => {
    const navigate = useNavigate()
    const { fireConfetti } = useConfetti()

    const handleExtremeReached = () => {
        try {
            fireConfetti({
                particleCount: 200,
                preset: 'side-cannons',
                colors: CONFETTI_COLORS,
                zIndex: 99999,
            })
        } catch {
            // Ignorar error de confeti si falla
        }

        navigate('/invitation')
    }

    const {
        containerRef,
        containerWidth,
        x,
        leftWidth,
        handleDrag,
    } = useReveal({
        onExtremeReached: handleExtremeReached,
        threshold: 20,
    })

    return (
        <div className="reveal" ref={containerRef}>
            <Particles count={25} variant="glitter" zIndex={3} />

            <div className="reveal__pane reveal__pane--right">
                <RevealRight />
            </div>

            <motion.div
                className="reveal__pane reveal__pane--left"
                style={{ width: leftWidth }}
            >
                <RevealLeft />
            </motion.div>

            <motion.div
                className="reveal__handle"
                drag="x"
                dragConstraints={{ left: 0, right: containerWidth }}
                dragElastic={0}
                dragMomentum={false}
                style={{ x }}
                onDrag={handleDrag}
            >
                <div className="reveal__handle-line" />
                <div className="reveal__handle-container">
                    <span className="reveal__handle-label">Desliza</span>
                    <div className="reveal__handle-button">
                        <img src={start} alt="start" />
                    </div>
                </div>
                <div className="reveal__handle-line" />
            </motion.div>
        </div>
    )
}
