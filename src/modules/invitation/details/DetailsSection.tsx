import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'

import frame from '@/assets/images/icons/marco-details.png'
import character3 from '@/assets/images/icons/character-3.png'
import character4 from '@/assets/images/icons/character-4.png'

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 20,
        },
    },
}

export const DetailsSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const detailsConfig = sections.details

    if (detailsConfig?.showDetails === false) {
        return null
    }

    return (
        <section id="details" className="details-section">
            <motion.div
                className="details-section__scallop"
                aria-hidden="true"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <svg
                    className="details-section__scallop-svg"
                    width="100%"
                    height="38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="details-scallop-pattern"
                            x="0"
                            y="0"
                            width="64"
                            height="38"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect width="64" height="38" fill="#ffffff" />
                            <path
                                d="M 0,38 L 0,32 A 32,32 0 0,1 64,32 L 64,38 Z"
                                fill="var(--details-pink, #ffc1d9)"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="38"
                        fill="url(#details-scallop-pattern)"
                    />
                </svg>
            </motion.div>

            <div className="details-section__container">
                <div className="details-section__frame-wrapper">
                    <img
                        src={frame}
                        alt="Marco de soga"
                        className="details-section__frame-img"
                    />

                    <motion.div
                        className="details-section__character"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                        <motion.img
                            src={character3}
                            alt="Jessie"
                            className="details-section__character-img"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>

                    <motion.div
                        className="details-section__character details-section__character--right"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 }}
                    >
                        <motion.img
                            src={character4}
                            alt="Jessie en la otra esquina"
                            className="details-section__character-img"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />
                    </motion.div>

                    <div className="details-section__frame-content">
                        <div className="details-section__curve-wrapper">
                            <svg
                                viewBox="0 0 320 52"
                                className="details-section__curve-svg"
                                aria-label="Notas Vaqueras"
                            >
                                <path
                                    id="details-curve-path"
                                    d="M 15,44 Q 160,8 305,44"
                                    fill="none"
                                />
                                <text>
                                    <textPath
                                        href="#details-curve-path"
                                        startOffset="50%"
                                        textAnchor="middle"
                                    >
                                        Notas Vaqueras
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        <div className="details-section__notices">
                            <motion.div
                                className="details-section__notice"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3 className="details-section__notice-title">
                                    ★ PUNTUALIDAD ★
                                </h3>
                                <p className="details-section__notice-text">
                                    ¡Llega a tiempo para no perderte ningún juego!
                                </p>
                            </motion.div>

                            <motion.div
                                className="details-section__notice"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3 className="details-section__notice-title">
                                    ★ ¡GRAN DIVERSIÓN! ★
                                </h3>
                                <p className="details-section__notice-text">
                                    ¡Ven con toda la energía para jugar, reír y pasarla increíble!
                                </p>
                            </motion.div>

                            <motion.div
                                className="details-section__notice"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3 className="details-section__notice-title">
                                    ★ ¡ALERGIAS! ★
                                </h3>
                                <p className="details-section__notice-text">
                                    Si tienes alguna alergia o restricción alimenticia, favor de notificar.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
