import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'

import character from '@/assets/images/icons/character-6.png'
import placesIcon from '@/assets/images/icons/places-icon.png'
import sombrero2 from '@/assets/images/icons/sombrero-2.png'
import star from '@/assets/images/icons/estrella.png'
import cuteStar from '@/assets/images/icons/estrellitas-cute.svg'
import bullseye from '@/assets/images/icons/tiro-al-blanco-3.png'

const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
}

const messageVariants: Variants = {
    hidden: { opacity: 0, y: -25, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 190,
            damping: 15,
        },
    },
}

const characterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, y: 25 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 14,
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
            delay: 0.2,
        },
    },
}

const nameVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.88 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 240,
            damping: 15,
        },
    },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 16,
        },
    },
}

const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 14,
        },
    },
}

const floatingStars = [
    { id: 1, className: 'farewell__cute-star--1', duration: 3.2, delay: 0, y: [-4, 5, -4], rot: [-6, 6, -6], scale: [0.95, 1.08, 0.95] },
    { id: 2, className: 'farewell__cute-star--2', duration: 3.6, delay: 0.4, y: [5, -5, 5], rot: [5, -7, 5], scale: [1.06, 0.94, 1.06] },
    { id: 3, className: 'farewell__cute-star--3', duration: 2.9, delay: 0.2, y: [-3, 4, -3], rot: [-4, 5, -4], scale: [0.93, 1.07, 0.93] },
    { id: 4, className: 'farewell__cute-star--4', duration: 3.8, delay: 0.6, y: [4, -6, 4], rot: [6, -5, 6], scale: [1.07, 0.93, 1.07] },
]

export const FarewellSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const farewellConfig = sections.farewell

    if (farewellConfig && (farewellConfig as Record<string, unknown>).showFarewell === false) {
        return null
    }

    const thankYouMsg = (farewellConfig as Record<string, unknown>)?.thankYouMessage as string || 'Te estaré esperando con emoción'

    return (
        <section id="farewell" className="farewell">
            <div className="farewell__scallop farewell__scallop--top" aria-hidden="true">
                <svg
                    className="farewell__scallop-svg"
                    width="100%"
                    height="38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="farewell-scallop-pattern-top"
                            x="0"
                            y="0"
                            width="64"
                            height="38"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect width="64" height="38" fill="#ffffff" />
                            <path
                                d="M 0,38 L 0,32 A 32,32 0 0,1 64,32 L 64,38 Z"
                                fill="var(--farewell-yellow, #FEF093)"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="38"
                        fill="url(#farewell-scallop-pattern-top)"
                    />
                </svg>
            </div>

            <motion.div
                className="farewell__star farewell__star--tl"
                variants={starVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.25, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.img
                    src={star}
                    alt="Estrella sheriff"
                    animate={{
                        rotate: [-6, 8, -6],
                        y: [0, -5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.6,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            <motion.div
                className="farewell__star farewell__star--tr"
                variants={starVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.25, rotate: -20 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.img
                    src={star}
                    alt="Estrella sheriff"
                    animate={{
                        rotate: [6, -8, 6],
                        y: [0, 5, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                />
            </motion.div>

            <motion.div
                className="farewell__horseshoe"
                initial={{ opacity: 0, scale: 0.4, rotate: -25 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 14 }}
                whileHover={{ scale: 1.2, rotate: 6 }}
                whileTap={{ scale: 0.92 }}
            >
                <motion.img
                    src={placesIcon}
                    alt="Herradura vaquera"
                    animate={{
                        y: [0, -6, 0],
                        rotate: [-12, -4, -12],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            {floatingStars.map(s => (
                <motion.div
                    key={s.id}
                    className={`farewell__cute-star ${s.className}`}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: s.delay }}
                >
                    <motion.img
                        src={cuteStar}
                        alt="Estrellita mágica"
                        animate={{
                            y: s.y,
                            rotate: s.rot,
                            scale: s.scale,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: s.duration,
                            ease: 'easeInOut',
                            delay: s.delay,
                        }}
                    />
                </motion.div>
            ))}

            <motion.div
                className="farewell__container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.div
                    className="farewell__curved-message"
                    variants={messageVariants}
                >
                    <svg
                        className="farewell__curved-message-text"
                        viewBox="0 0 320 65"
                        aria-label="¡Hasta el Infinito y Más Allá!"
                    >
                        <path
                            id="farewell-curve-path"
                            d="M 20,55 Q 160,10 300,55"
                            fill="none"
                        />
                        <text>
                            <textPath
                                href="#farewell-curve-path"
                                startOffset="50%"
                                textAnchor="middle"
                            >
                                ¡Hasta el Infinito y Más Allá!
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                <motion.div
                    className="farewell__character-center"
                    variants={characterVariants}
                >
                    <motion.img
                        src={character}
                        alt="Jessie"
                        className="farewell__character-img"
                        initial={{ opacity: 0, scale: 0.65, y: 25 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -8, 0],
                        }}
                        transition={{
                            opacity: { duration: 0.4, delay: 0.2 },
                            scale: { type: 'spring', stiffness: 220, damping: 14, delay: 0.2 },
                            y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.6 },
                        }}
                    />

                    <motion.div
                        className="farewell__badge-text"
                        variants={stickerVariants}
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ¡Te Espero!
                    </motion.div>
                </motion.div>

                <motion.div
                    className="farewell__name"
                    variants={nameVariants}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                >
                    <span className="farewell__name-top">
                        DARITA
                    </span>
                    <div className="farewell__name-banner">
                        <span className="farewell__name-banner-text">
                            Especial
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="farewell__card"
                    variants={cardVariants}
                >
                    <motion.div
                        className="farewell__hat"
                        initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.3 }}
                        whileHover={{ scale: 1.18, rotate: 8 }}
                        whileTap={{ scale: 0.92 }}
                    >
                        <motion.img
                            src={sombrero2}
                            alt="Sombrero vaquero café"
                            animate={{
                                y: [0, -5, 0],
                                rotate: [-9, -4, -9],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3.5,
                                ease: 'easeInOut',
                            }}
                        />
                    </motion.div>

                    <div className="farewell__card-inner">
                        <div className="farewell__card-badge">
                            <span>★ MENSAJE ESPECIAL ★</span>
                        </div>

                        <p className="farewell__kids-quote">
                            «¡Tener amigos como tú hace que cada día sea una gran aventura!»
                        </p>

                        <div className="farewell__thankyou-pill">
                            <span className="farewell__thankyou-text">
                                ✨ {thankYouMsg} ✨
                            </span>
                        </div>

                        <p className="farewell__signature">
                            Con mucho cariño, <strong className="farewell__signature-name">Darita</strong> 💕
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="farewell__bullseye"
                    variants={cardVariants}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.img
                        src={bullseye}
                        alt="Tiro al Blanco"
                        animate={{
                            y: [0, -6, 0],
                            rotate: [-2, 3, -2],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.2,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                <motion.footer
                    className="farewell__credits"
                    variants={cardVariants}
                >
                    <p className="farewell__credits-line">
                        Hecho con <span className="farewell__credits-heart">❤️</span> por{' '}
                        <a
                            href="https://www.instagram.com/tuamigoinvitaciones/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="farewell__credits-link"
                        >
                            TuAmigoInvitaciones
                        </a>
                    </p>
                    <p className="farewell__credits-line farewell__credits-line--promo">
                        ¿Quieres una invitación como esta?{' '}
                        <a
                            href="tel:4496548073"
                            className="farewell__credits-link farewell__credits-link--phone"
                        >
                            Llama al 4496548073
                        </a>
                    </p>
                </motion.footer>
            </motion.div>
        </section>
    )
}
