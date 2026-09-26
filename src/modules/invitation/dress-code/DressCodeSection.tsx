import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'

import cowPrint from '@/assets/images/icons/bg-countdown.jpg'
import pinkBow from '@/assets/images/icons/pink-bow.png'
import tendido from '@/assets/images/icons/tendido.png'
import icon from '@/assets/images/icons/dress-code-icon.png'
import pelota from '@/assets/images/icons/pelota.png'
import cuteStar from '@/assets/images/icons/estrellitas-cute.svg'

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 190,
            damping: 15,
            staggerChildren: 0.1,
            delayChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 220,
            damping: 16,
        },
    },
}

const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -25 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 14,
            delay: 0.35,
        },
    },
}

export const DressCodeSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const dressCodeConfig = sections.dressCode

    if (!dressCodeConfig?.showDressCode) {
        return null
    }

    return (
        <section id="dress-code" className="dress-code-section">
            <div className="dress-code-section__garlands">
                <motion.div
                    className="dress-code-section__garland dress-code-section__garland--left"
                    animate={{ rotate: [-2.2, 2.2, -2.2] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                    style={{ transformOrigin: 'top center' }}
                >
                    <img
                        src={tendido}
                        alt="Colgante decorativo izquierdo"
                        className="dress-code-section__garland-img"
                    />
                </motion.div>
                <motion.div
                    className="dress-code-section__garland dress-code-section__garland--right"
                    animate={{ rotate: [2.2, -2.2, 2.2] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.6 }}
                    style={{ transformOrigin: 'top center' }}
                >
                    <img
                        src={tendido}
                        alt="Colgante decorativo derecho"
                        className="dress-code-section__garland-img"
                    />
                </motion.div>
            </div>

            <div className="dress-code-section__container">
                <motion.div
                    className="dress-code-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    <div
                        className="dress-code-card__cow-bg"
                        style={{ backgroundImage: `url(${cowPrint})` }}
                        aria-hidden="true"
                    />

                    <div className="dress-code-card__arch">
                        <motion.div
                            className="dress-code-card__star dress-code-card__star--1"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: 20 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [-8, 14, -8],
                                    scale: [0.92, 1.18, 0.92],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.8,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="dress-code-card__star dress-code-card__star--2"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: -20 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [8, -12, 8],
                                    scale: [1.16, 0.92, 1.16],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.1,
                                    ease: 'easeInOut',
                                    delay: 0.4,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="dress-code-card__star dress-code-card__star--3"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: 25 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, -7, 0],
                                    rotate: [-6, 15, -6],
                                    scale: [0.9, 1.2, 0.9],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.6,
                                    ease: 'easeInOut',
                                    delay: 0.7,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="dress-code-card__center-character"
                            variants={itemVariants}
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img
                                src={icon}
                                alt="Jessie y Tiro al Blanco"
                                animate={{
                                    y: [0, -8, 0, -3, 0],
                                    rotate: [-1.5, 2, -1, 1.5, -1.5],
                                    scale: [1, 1.03, 0.99, 1.02, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.4,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="dress-code-card__arch-wrap"
                            variants={itemVariants}
                            animate={{
                                y: [0, -4, 0],
                                rotate: [-0.8, 0.8, -0.8],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3.5,
                                ease: 'easeInOut',
                            }}
                            whileHover={{ scale: 1.08 }}
                        >
                            <svg className="dress-code-card__arch-svg" viewBox="0 0 380 65">
                                <path
                                    id="dress-code-curve"
                                    d="M 15,50 Q 190,10 365,50"
                                    fill="none"
                                />
                                <text className="dress-code-card__arch-text">
                                    <textPath
                                        href="#dress-code-curve"
                                        startOffset="50%"
                                        textAnchor="middle"
                                    >
                                        ¡Prepara tu Look Vaquero!
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>

                        <motion.div
                            className="dress-code-card__name"
                            variants={itemVariants}
                            animate={{
                                y: [0, -4, 0],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.9,
                                ease: 'easeInOut',
                            }}
                            whileHover={{ scale: 1.09, rotate: 1.5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="dress-code-card__name-top"
                                animate={{
                                    rotate: [-0.8, 0.8, -0.8],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.1,
                                    ease: 'easeInOut',
                                }}
                            >
                                CÓDIGO DE
                            </motion.span>
                            <motion.div
                                className="dress-code-card__name-banner"
                                animate={{
                                    rotate: [-3, 1, -3],
                                    scale: [1, 1.04, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.5,
                                    ease: 'easeInOut',
                                    delay: 0.2,
                                }}
                            >
                                <span className="dress-code-card__name-banner-text">
                                    VESTIMENTA
                                </span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="dress-code-card__badge-theme"
                            variants={itemVariants}
                            animate={{
                                scale: [1, 1.04, 1],
                                y: [0, -2, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3.0,
                                ease: 'easeInOut',
                                delay: 0.3,
                            }}
                            whileHover={{ scale: 1.08 }}
                        >
                            <span className="dress-code-card__badge-theme-text">
                                ⭐ {dressCodeConfig.title || 'Tu mejor outfit'} ⭐
                            </span>
                        </motion.div>

                        {dressCodeConfig.description && (
                            <motion.p
                                className="dress-code-card__description"
                                variants={itemVariants}
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.4,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                                whileHover={{ scale: 1.03 }}
                            >
                                {dressCodeConfig.description}
                            </motion.p>
                        )}

                        <motion.div
                            className="dress-code-card__tags"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="dress-code-card__tag"
                                animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
                                transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                            >
                                🤠 Estilo Libre / Vaquero
                            </motion.span>
                            <motion.span
                                className="dress-code-card__tag"
                                animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
                                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.2 }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                            >
                                👢 Botas o Tenis Cómodos
                            </motion.span>
                            <motion.span
                                className="dress-code-card__tag"
                                animate={{ y: [0, -3, 0], scale: [1, 1.03, 1] }}
                                transition={{ repeat: Infinity, duration: 3.0, ease: 'easeInOut', delay: 0.4 }}
                                whileHover={{ scale: 1.1, rotate: -2 }}
                            >
                                🎈 ¡A Jugar y Divertirse!
                            </motion.span>
                        </motion.div>
                    </div>

                    <motion.div
                        className="dress-code-card__pink-bow"
                        variants={itemVariants}
                        animate={{
                            rotate: [-8, 2, -8],
                            y: [0, -6, 0],
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.2,
                            ease: 'easeInOut',
                        }}
                        whileHover={{ scale: 1.22, rotate: 12 }}
                        whileTap={{ scale: 0.92 }}
                    >
                        <img src={pinkBow} alt="Moño rosa coquette vaquero" />
                    </motion.div>

                    <motion.div
                        className="dress-code-card__ball"
                        variants={itemVariants}
                        whileHover={{ scale: 1.25, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.img
                            src={pelota}
                            alt="Pelota Toy Story"
                            animate={{
                                y: [0, -12, 0, -4, 0],
                                rotate: [0, 20, 0, -15, 0],
                                scale: [1, 0.96, 1.05, 0.98, 1],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.6,
                                ease: 'easeInOut',
                                delay: 0.35,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
