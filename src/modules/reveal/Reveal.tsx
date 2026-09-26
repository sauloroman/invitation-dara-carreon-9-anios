import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useReveal, useMusicPlayer, useConfetti } from '@/common/hooks'
import { getSharedAudio } from '@/common/hooks/useMusicPlayer'
import { Particles } from '@/common/components/particles/Particles'
import { RevealRight } from './RevealRight/RevealRight'
import { RevealLeft } from './RevealLeft/RevealLeft'
import start from '@/assets/images/icons/estrella.png'

const CONFETTI_COLORS = [
    '#ED1378', // Rosa Jessie
    '#FFE600', // Amarillo Toy Story
    '#762A73', // Morado intenso
    '#00B4D8', // Azul vaquero brillante
    '#FF6EA7', // Rosa chicle
    '#FFA500', // Naranja dorada
    '#FFFFFF', // Destellos blancos
]

export const Reveal: React.FC = () => {
    const navigate = useNavigate()
    const { onPlayMusic } = useMusicPlayer()
    const { fireConfetti } = useConfetti()

    const handleExtremeReached = () => {
        // 1. Iniciar la música de inmediato y de forma síncrona con el gesto del usuario
        try {
            onPlayMusic()
        } catch (e) {
            console.warn('Audio play error:', e)
        }

        // 2. Disparar confeti de celebración
        try {
            fireConfetti({
                particleCount: 600,
                preset: 'side-cannons',
                colors: CONFETTI_COLORS,
                spread: 110,
                startVelocity: 85,
                scalar: 1.3,
                zIndex: 99999,
            })

            fireConfetti({
                particleCount: 160,
                preset: 'explosion',
                origin: { x: 0.5, y: 0.5 },
                colors: CONFETTI_COLORS,
                scalar: 1.25,
                zIndex: 99999,
            })
        } catch (e) {
            console.error('Confetti error:', e)
        }

        // 3. Navegar a la invitación principal
        setTimeout(() => {
            navigate('/invitation')
        }, 420)
    }

    const {
        containerRef,
        containerWidth,
        x,
        leftWidth,
        handleDrag,
        handleDragEnd,
    } = useReveal({
        onExtremeReached: handleExtremeReached,
        threshold: 25,
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
                onDragEnd={handleDragEnd}
                onPointerDown={() => {
                    // Desbloquear audio en el primer toque del usuario
                    try {
                        const audio = getSharedAudio()
                        if (audio && audio.paused) {
                            audio.load()
                        }
                    } catch (err) {
                        console.debug('Audio pre-warm suppressed:', err)
                    }
                }}
            >
                <div className="reveal__handle-line" />
                <div className="reveal__handle-container">
                    <span className="reveal__handle-label">Desliza</span>
                    <div className="reveal__handle-button">
                        <img src={start} alt="Deslizar sobre" />
                    </div>
                </div>
                <div className="reveal__handle-line" />
            </motion.div>
        </div>
    )
}
