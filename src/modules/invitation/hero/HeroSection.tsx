import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'

import bg from '@/assets/images/icons/bg.1.jpg'
import character from '@/assets/images/icons/hero-1.png'

const messageVariants: Variants = {
    hidden: { opacity: 0, y: -25, scale: 0.94 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 180,
            damping: 15,
            delay: 0.25,
        },
    },
}

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 190,
            damping: 14,
            delay: 0.35,
        },
    },
}

const stickerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.2, rotate: -8 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 280,
            damping: 13,
            delay: 0.6,
        },
    },
}

const nameVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.88 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 240,
            damping: 15,
            delay: 0.75,
        },
    },
}

const dateContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.9,
            staggerChildren: 0.12,
        },
    },
}

const dateItemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 220,
            damping: 16,
        },
    },
}

const locationContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 1.2,
            staggerChildren: 0.12,
        },
    },
}

const locationItemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 220,
            damping: 16,
        },
    },
}

export const HeroSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const heroConfig = sections.hero

    if (heroConfig?.showHero === false) {
        return null
    }

    return (
        <section id="hero" className="hero-section">
            <div className="hero-section__container">
                <motion.div
                    className="hero-section__message"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <svg
                        className="hero-section__message-text"
                        viewBox="0 0 320 65"
                        aria-label="Estas Invitado a mi"
                    >
                        <path
                            id="hero-curve-path"
                            d="M 20,55 Q 160,10 300,55"
                            fill="none"
                        />
                        <text>
                            <textPath
                                href="#hero-curve-path"
                                startOffset="50%"
                                textAnchor="middle"
                            >
                                Estas Invitado a mi
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                <motion.div
                    className="hero-section__badge"
                    variants={badgeVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-section__badge-image">
                        <img src={bg} alt="Badge" />
                    </div>

                    <div className="hero-section__badge-character">
                        <motion.img
                            src={character}
                            alt="Character"
                            initial={{ opacity: 0, scale: 0.65, y: 25 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -7, 0],
                            }}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.45 },
                                scale: { type: 'spring', stiffness: 220, damping: 13, delay: 0.45 },
                                y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.85 },
                            }}
                        />
                    </div>

                    <motion.div
                        className="hero-section__badge-text"
                        variants={stickerVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Cumpleaños
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-section__name"
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <span className="hero-section__name-top">
                        Darita
                    </span>
                    <div className="hero-section__name-banner">
                        <span className="hero-section__name-banner-text">
                            CUMPLE
                        </span>
                    </div>
                    <span className="hero-section__name-age">
                        9
                    </span>
                </motion.div>

                <motion.div
                    className="hero-section__date"
                    variants={dateContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-section__date-item" variants={dateItemVariants}>
                        Martes
                    </motion.div>
                    <motion.div className="hero-section__date-item" variants={dateItemVariants}>
                        Sep 29
                    </motion.div>
                    <motion.div className="hero-section__date-item" variants={dateItemVariants}>
                        Hora Recreo
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={locationContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-section__location"
                >
                    <motion.p
                        className="hero-section__location-name"
                        variants={locationItemVariants}
                    >
                        Salón de clases #41 Colegio Francés Hidalgo de Aguascalientes S.C.
                    </motion.p>
                    <motion.p
                        className="hero-section__location-address"
                        variants={locationItemVariants}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Av. Del Lago 141, Jardines del Parque, 20286 Aguascalientes, Ags.
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                className="hero-section__scallop"
                aria-hidden="true"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <svg
                    className="hero-section__scallop-svg"
                    width="100%"
                    height="38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hero-scallop-pattern"
                            x="0"
                            y="0"
                            width="64"
                            height="38"
                            patternUnits="userSpaceOnUse"
                        >
                            {/* Fondo blanco limpio */}
                            <rect width="64" height="38" fill="#ffffff" />

                            {/* Onda semicircular rosa ancha y gorda hacia abajo sin borde */}
                            <path
                                d="M 0,0 L 64,0 A 32,32 0 0,1 0,0 Z"
                                fill="var(--hero-pink, #ffc1d9)"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="38"
                        fill="url(#hero-scallop-pattern)"
                    />
                </svg>
            </motion.div>
        </section>
    )
}