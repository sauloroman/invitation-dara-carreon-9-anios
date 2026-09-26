import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { useInvitationConfig, useCalendar } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Countdown } from '@/common/components/countdown/Countdown'

import frame from '@/assets/images/icons/marco.png'
import star from '@/assets/images/icons/estrella.png'
import cuteStar from '@/assets/images/icons/estrellitas-cute.svg'
import tiroAlBlanco from '@/assets/images/icons/tiro-al-blanco.png'
import boot from '@/assets/images/icons/bota.png'

const frameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.88, y: 35 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 190,
            damping: 15,
            staggerChildren: 0.14,
            delayChildren: 0.25,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 240,
            damping: 16,
        },
    },
}

const starVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -35 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 320,
            damping: 12,
            delay: 0.45,
        },
    },
}

const bootVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, y: 30, rotate: -20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: -6,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 14,
            delay: 0.35,
        },
    },
}

export const CountdownSection: React.FC = () => {
    const { sections } = useInvitationConfig()

    const countdownConfig = sections.countdown
    const messageConfig = sections.message?.message || ''
    const { monthTitle, weekdays, days } = useCalendar()

    if (!countdownConfig?.showCountdown || !countdownConfig?.targetDate) {
        return null
    }

    return (
        <section id="countdown" className="countdown-section">
            <motion.div
                className="countdown-section__frame"
                variants={frameVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="countdown-section__star countdown-section__star--tr"
                    variants={starVariants}
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
                            duration: 3.5,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                <motion.div
                    className="countdown-section__star countdown-section__star--bl"
                    variants={starVariants}
                    whileHover={{ scale: 1.25, rotate: -20 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.img
                        src={star}
                        alt="Estrella sheriff"
                        animate={{
                            rotate: [6, -8, 6],
                            y: [0, 4, 0],
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
                    className="countdown-section__cute-star countdown-section__cute-star--1"
                    variants={starVariants}
                    whileHover={{ scale: 1.22, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.img
                        src={cuteStar}
                        alt="Estrellita cute"
                        animate={{
                            y: [0, -6, 0],
                            rotate: [-4, 5, -4],
                            scale: [0.96, 1.06, 0.96],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.2,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                <motion.div
                    className="countdown-section__cute-star countdown-section__cute-star--2"
                    variants={starVariants}
                    whileHover={{ scale: 1.22, rotate: -12 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.img
                        src={cuteStar}
                        alt="Estrellita cute"
                        animate={{
                            y: [0, 6, 0],
                            rotate: [4, -5, 4],
                            scale: [1.05, 0.95, 1.05],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.6,
                            ease: 'easeInOut',
                            delay: 0.7,
                        }}
                    />
                </motion.div>

                <motion.div
                    className="countdown-section__bullseye"
                    variants={starVariants}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.92 }}
                >
                    <motion.img
                        src={tiroAlBlanco}
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

                <img src={frame} alt="Marco" className="countdown-section__frame-img" />

                <div className="countdown-section__container">
                    <motion.div variants={itemVariants}>
                        <SectionHeader
                            pretitle="CUENTA REGRESIVA"
                            title="Fecha Especial"
                            align="center"
                            variant="uppercase"
                        />
                    </motion.div>

                    <motion.div
                        className="countdown-section__content"
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <Countdown
                            targetDate={countdownConfig.targetDate}
                            variant="minimal"
                        />
                    </motion.div>

                    <motion.div className="countdown-section__calendar" variants={itemVariants}>
                        {monthTitle && (
                            <p className="countdown-section__calendar-title">
                                <span className="countdown-section__calendar-star" aria-hidden="true">★</span>
                                <span className="countdown-section__calendar-title-text">{monthTitle}</span>
                                <span className="countdown-section__calendar-star" aria-hidden="true">★</span>
                            </p>
                        )}
                        <div className="countdown-section__calendar-grid">
                            {weekdays.map(day => (
                                <div key={day} className="countdown-section__calendar-head">
                                    {day}
                                </div>
                            ))}
                            {days.map(dayItem => {
                                if (dayItem.isFeatured) {
                                    return (
                                        <motion.div
                                            key={dayItem.id}
                                            className="countdown-section__calendar-day countdown-section__calendar-day--featured"
                                            animate={{
                                                scale: [1, 1.15, 1],
                                                boxShadow: [
                                                    '0 2px 8px rgba(237, 19, 120, 0.4)',
                                                    '0 4px 16px rgba(237, 19, 120, 0.75)',
                                                    '0 2px 8px rgba(237, 19, 120, 0.4)',
                                                ],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: 'easeInOut',
                                            }}
                                            whileHover={{ scale: 1.25, rotate: 10 }}
                                            whileTap={{ scale: 0.92 }}
                                        >
                                            <span className="countdown-section__calendar-num">{dayItem.dayNumber}</span>
                                        </motion.div>
                                    )
                                }
                                return (
                                    <div
                                        key={dayItem.id}
                                        className={[
                                            'countdown-section__calendar-day',
                                            !dayItem.isCurrentMonth ? 'countdown-section__calendar-day--muted' : '',
                                        ].filter(Boolean).join(' ')}
                                    >
                                        <span className="countdown-section__calendar-num">{dayItem.dayNumber}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {messageConfig && (
                <motion.div
                    className="countdown-section__message"
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 18,
                        delay: 0.2,
                    }}
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <span className="countdown-section__message-text">
                        {messageConfig}
                    </span>
                </motion.div>
            )}

            <motion.div
                className="countdown-section__boot"
                variants={bootVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.15, rotate: 0 }}
                whileTap={{ scale: 0.94 }}
            >
                <motion.img
                    src={boot}
                    alt="Bota vaquera"
                    animate={{
                        y: [0, -5, 0],
                        rotate: [-8, -2, -8],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3.5,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>
        </section>
    )
}
