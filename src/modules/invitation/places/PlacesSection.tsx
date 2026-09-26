import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { MapPinIcon } from '@phosphor-icons/react'

import frame from '@/assets/images/icons/frame.png'
import character2 from '@/assets/images/icons/character-2.png'
import tiroAlBlanco2 from '@/assets/images/icons/tiro-al-blanco-2.png'
import sombrero from '@/assets/images/icons/sombrero.png'
import cuteStar from '@/assets/images/icons/estrellitas-cute.svg'

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.88, y: 35 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 180,
            damping: 15,
            staggerChildren: 0.12,
            delayChildren: 0.2,
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
            delay: 0.4,
        },
    },
}

export const PlacesSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const placesConfig = sections.places

    if (!placesConfig?.showPlaces || !placesConfig?.locations) {
        return null
    }

    return (
        <section id="places" className="places-section">
            <div className="places-section__wave places-section__wave--top">
                <svg
                    width="100%"
                    height="100%"
                    id="svg-places-top"
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 0,600 L 0,150 C 114.82296650717703,143.6937799043062 229.64593301435406,137.38755980861242 326,124 C 422.35406698564594,110.61244019138756 500.23923444976083,90.14354066985648 578,105 C 655.7607655502392,119.85645933014352 733.3971291866029,170.03827751196175 842,178 C 950.6028708133971,185.96172248803825 1090.1722488038276,151.70334928229664 1195,140 C 1299.8277511961724,128.29665071770336 1369.9138755980862,139.14832535885168 1440,150 L 1440,600 L 0,600 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#fef093"
                        fillOpacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    />
                    <path
                        d="M 0,600 L 0,350 C 111.7224880382775,373.2057416267943 223.444976076555,396.41148325358853 319,404 C 414.555023923445,411.58851674641147 493.9425837320575,403.5598086124402 588,406 C 682.0574162679425,408.4401913875598 790.7846889952152,421.34928229665076 887,405 C 983.2153110047848,388.65071770334924 1066.9186602870814,343.0430622009569 1157,329 C 1247.0813397129186,314.9569377990431 1343.5406698564593,332.47846889952154 1440,350 L 1440,600 L 0,600 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#fef093"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-1"
                    />
                </svg>
            </div>

            <div className="places-section__container">
                {placesConfig.locations.map((loc, idx) => (
                    <motion.div
                        key={idx}
                        className="places-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <motion.div
                            className="places-card__character"
                            variants={itemVariants}
                            whileHover={{ scale: 1.15, rotate: 4 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.img
                                src={character2}
                                alt="Jessie la vaquerita"
                                animate={{
                                    y: [0, -10, 0, -4, 0],
                                    rotate: [-2, 3, -1, 2, -2],
                                    scale: [1, 1.04, 0.98, 1.02, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.2,
                                    ease: 'easeInOut',
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__bullseye"
                            variants={itemVariants}
                            whileHover={{ scale: 1.15, rotate: -4 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.img
                                src={tiroAlBlanco2}
                                alt="Tiro al Blanco"
                                animate={{
                                    y: [0, -10, 2, -5, 0],
                                    rotate: [2, -3, 1, -2, 2],
                                    scale: [1, 1.03, 0.98, 1.02, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.4,
                                    ease: 'easeInOut',
                                    delay: 0.25,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__hat"
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, rotate: 25 }}
                            whileTap={{ scale: 0.92 }}
                        >
                            <motion.img
                                src={sombrero}
                                alt="Detalle sombrero"
                                animate={{
                                    y: [0, -7, 0, -3, 0],
                                    rotate: [7, 20, 5, 17, 7],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.9,
                                    ease: 'easeInOut',
                                    delay: 0.4,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__cute-star places-card__cute-star--1"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: 20 }}
                            whileTap={{ scale: 0.88 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [-6, 14, -6],
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
                            className="places-card__cute-star places-card__cute-star--2"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: -20 }}
                            whileTap={{ scale: 0.88 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [6, -14, 6],
                                    scale: [1.16, 0.9, 1.16],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.1,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__cute-star places-card__cute-star--3"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: 25 }}
                            whileTap={{ scale: 0.88 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, -7, 0],
                                    rotate: [-8, 12, -8],
                                    scale: [0.9, 1.2, 0.9],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.6,
                                    ease: 'easeInOut',
                                    delay: 0.3,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__cute-star places-card__cute-star--4"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: -25 }}
                            whileTap={{ scale: 0.88 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, 7, 0],
                                    rotate: [8, -12, 8],
                                    scale: [1.18, 0.92, 1.18],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.3,
                                    ease: 'easeInOut',
                                    delay: 0.8,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="places-card__cute-star places-card__cute-star--5"
                            variants={starVariants}
                            whileHover={{ scale: 1.35, rotate: 18 }}
                            whileTap={{ scale: 0.88 }}
                        >
                            <motion.img
                                src={cuteStar}
                                alt="Estrellita brillante"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [-5, 15, -5],
                                    scale: [0.92, 1.16, 0.92],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.7,
                                    ease: 'easeInOut',
                                    delay: 0.45,
                                }}
                            />
                        </motion.div>

                        <img src={frame} alt="Marco" className="places-card__frame-img" />

                        <div className="places-card__content">
                            <motion.div
                                className="places-card__arch-wrap"
                                variants={itemVariants}
                                animate={{
                                    y: [0, -4, 0],
                                    rotate: [-1, 1, -1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.5,
                                    ease: 'easeInOut',
                                }}
                                whileHover={{ scale: 1.08 }}
                            >
                                <svg className="places-card__arch-svg" viewBox="0 0 380 65">
                                    <path
                                        id={`places-curve-${idx}`}
                                        d="M 15,50 Q 190,10 365,50"
                                        fill="none"
                                    />
                                    <text className="places-card__arch-text">
                                        <textPath
                                            href={`#places-curve-${idx}`}
                                            startOffset="50%"
                                            textAnchor="middle"
                                        >
                                            Acompáñanos a Celebrar
                                        </textPath>
                                    </text>
                                </svg>
                            </motion.div>

                            <motion.div
                                className="places-card__name"
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
                                    className="places-card__name-top"
                                    animate={{
                                        rotate: [-0.8, 0.8, -0.8],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3.1,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    UBICACIONES
                                </motion.span>
                                <motion.div
                                    className="places-card__name-banner"
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
                                    <span className="places-card__name-banner-text">
                                        NO TE PIERDAS
                                    </span>
                                </motion.div>
                            </motion.div>

                            <motion.div className="places-card__location" variants={itemVariants}>
                                <motion.p
                                    className="places-card__location-name"
                                    variants={itemVariants}
                                    animate={{
                                        scale: [1, 1.03, 1],
                                        y: [0, -2.5, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3.0,
                                        ease: 'easeInOut',
                                        delay: 0.3,
                                    }}
                                    whileHover={{ scale: 1.06 }}
                                >
                                    {loc.title || 'Área de Salón Multiusos'}
                                </motion.p>
                                <motion.p
                                    className="places-card__location-address"
                                    variants={itemVariants}
                                    animate={{
                                        y: [0, -2, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3.4,
                                        ease: 'easeInOut',
                                        delay: 0.6,
                                    }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {loc.location || 'Av. Mediterraneo 104, Rancho Santa Monica, Aguascalientes, Ags, México'}
                                </motion.p>
                            </motion.div>

                            {loc.url && (
                                <motion.div
                                    variants={itemVariants}
                                    className="places-card__button-wrap"
                                    animate={{
                                        scale: [1, 1.04, 1, 1.04, 1],
                                        y: [0, -3, 0, -2, 0],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3.0,
                                        ease: 'easeInOut',
                                        repeatDelay: 1.2,
                                    }}
                                >
                                    <Button
                                        variant="primary"
                                        onClick={() => window.open(loc.url, '_blank')}
                                        className="places-card__button"
                                        icon={
                                            <motion.span
                                                animate={{
                                                    y: [0, -5, 0, -2, 0],
                                                    scale: [1, 1.22, 1],
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.6,
                                                    ease: 'easeInOut',
                                                }}
                                                style={{ display: 'inline-flex' }}
                                            >
                                                <MapPinIcon size={26} weight="fill" />
                                            </motion.span>
                                        }
                                    >
                                        Ver ubicación
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="places-section__wave places-section__wave--bottom">
                <svg
                    width="100%"
                    height="100%"
                    id="svg-places-bottom"
                    viewBox="0 0 1440 590"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 0,600 L 0,150 C 114.82296650717703,143.6937799043062 229.64593301435406,137.38755980861242 326,124 C 422.35406698564594,110.61244019138756 500.23923444976083,90.14354066985648 578,105 C 655.7607655502392,119.85645933014352 733.3971291866029,170.03827751196175 842,178 C 950.6028708133971,185.96172248803825 1090.1722488038276,151.70334928229664 1195,140 C 1299.8277511961724,128.29665071770336 1369.9138755980862,139.14832535885168 1440,150 L 1440,600 L 0,600 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#fef093"
                        fillOpacity="0.53"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    />
                    <path
                        d="M 0,600 L 0,350 C 111.7224880382775,373.2057416267943 223.444976076555,396.41148325358853 319,404 C 414.555023923445,411.58851674641147 493.9425837320575,403.5598086124402 588,406 C 682.0574162679425,408.4401913875598 790.7846889952152,421.34928229665076 887,405 C 983.2153110047848,388.65071770334924 1066.9186602870814,343.0430622009569 1157,329 C 1247.0813397129186,314.9569377990431 1343.5406698564593,332.47846889952154 1440,350 L 1440,600 L 0,600 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#fef093"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-1"
                    />
                </svg>
            </div>
        </section>
    )
}
