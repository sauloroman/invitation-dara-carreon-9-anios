import React from 'react'
import { motion } from 'framer-motion'
import { WhatsappLogoIcon, PhoneIcon } from '@phosphor-icons/react'
import { useInvitationConfig } from '@/common/hooks'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'

import bg from '@/assets/images/icons/bg-confirmation.jpg'
import icon from '@/assets/images/icons/character-5.png'
import borderPattern from '@/assets/images/icons/bg.1.jpg'
import cuteStar from '@/assets/images/icons/estrellitas-cute.svg'
import cuerdaLeft from '@/assets/images/icons/cuerda-left.png'
import cuerdaRight from '@/assets/images/icons/cuerda-right.png'

const PHONE_NUMBER = '4493626123'
const WHATSAPP_URL = `https://wa.me/52${PHONE_NUMBER}?text=${encodeURIComponent('¡Hola! Quiero confirmar mi asistencia al cumpleaños de Dara ✨🤠')}`

const STARS_DATA: Array<{
    id: number
    mod: string
    duration: number
    delay: number
    y: number[]
    rot: number[]
    scale: number[]
}> = [
        { id: 1, mod: '1', duration: 3.2, delay: 0, y: [-4, 5, -4], rot: [-6, 6, -6], scale: [0.95, 1.08, 0.95] },
        { id: 2, mod: '2', duration: 3.6, delay: 0.4, y: [5, -5, 5], rot: [5, -7, 5], scale: [1.06, 0.94, 1.06] },
        { id: 3, mod: '3', duration: 2.9, delay: 0.2, y: [-3, 4, -3], rot: [-4, 5, -4], scale: [0.93, 1.07, 0.93] },
        { id: 4, mod: '4', duration: 3.8, delay: 0.6, y: [4, -6, 4], rot: [6, -5, 6], scale: [1.07, 0.93, 1.07] },
        { id: 5, mod: '5', duration: 3.3, delay: 0.1, y: [-5, 5, -5], rot: [-5, 7, -5], scale: [0.96, 1.09, 0.96] },
        { id: 6, mod: '6', duration: 3.5, delay: 0.5, y: [6, -4, 6], rot: [7, -6, 7], scale: [1.05, 0.94, 1.05] },
        { id: 7, mod: '7', duration: 3.1, delay: 0.3, y: [-4, 6, -4], rot: [-6, 5, -6], scale: [0.94, 1.06, 0.94] },
        { id: 8, mod: '8', duration: 3.7, delay: 0.7, y: [5, -5, 5], rot: [5, -8, 5], scale: [1.08, 0.95, 1.08] },
        { id: 9, mod: '9', duration: 3.0, delay: 0.2, y: [-3, 5, -3], rot: [-4, 6, -4], scale: [0.95, 1.07, 0.95] },
        { id: 10, mod: '10', duration: 3.9, delay: 0.6, y: [6, -4, 6], rot: [6, -6, 6], scale: [1.06, 0.92, 1.06] },
        { id: 11, mod: '11', duration: 3.4, delay: 0.3, y: [-5, 4, -5], rot: [-5, 7, -5], scale: [0.93, 1.08, 0.93] },
        { id: 12, mod: '12', duration: 3.6, delay: 0.5, y: [4, -6, 4], rot: [7, -5, 7], scale: [1.07, 0.95, 1.07] },
    ]

export const ConfirmationSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const confirmationConfig = sections.confirmation

    if (!confirmationConfig?.showConfirmation) {
        return null
    }

    return (
        <section id="confirmation" className="confirmation-section">
            <div className="confirmation-section__bg" style={{ backgroundImage: `url(${bg})` }}></div>

            {STARS_DATA.map((s) => (
                <motion.div
                    key={s.id}
                    className={`confirmation-section__cute-star confirmation-section__cute-star--${s.mod}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: s.delay * 0.4 }}
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

            <div className="confirmation-section__container">
                <div className="confirmation-section__header-top">
                    <motion.div
                        className="confirmation-section__rope confirmation-section__rope--left"
                        initial={{ opacity: 0, x: -25, rotate: -8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                        <motion.img
                            src={cuerdaLeft}
                            alt="Cuerda izquierda"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>

                    <div className="confirmation-section__icon">
                        <img src={icon} alt="Jessie Confirmación" />
                    </div>

                    <motion.div
                        className="confirmation-section__rope confirmation-section__rope--right"
                        initial={{ opacity: 0, x: 25, rotate: 8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 }}
                    >
                        <motion.img
                            src={cuerdaRight}
                            alt="Cuerda derecha"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />
                    </motion.div>
                </div>

                <SectionHeader
                    pretitle="Confirmación de Asistencia"
                    title="¿Nos Acompañas?"
                    align="center"
                />

                <div className="confirmation-section__cards">
                    <motion.div
                        className="confirmation-card"
                        style={{ backgroundImage: `url(${borderPattern})` }}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="confirmation-card__inner">
                            <div className="confirmation-card__badge confirmation-card__badge--whatsapp">
                                <WhatsappLogoIcon size={34} weight="fill" />
                            </div>
                            <h3 className="confirmation-card__title">★ WHATSAPP ★</h3>
                            <p className="confirmation-card__desc">
                                Envía un mensaje a la mamá de Dara para confirmar tu asistencia
                            </p>
                            <span className="confirmation-card__phone">449 362 6123</span>
                            <Button
                                variant="primary"
                                className="confirmation-card__btn"
                                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                                icon={<WhatsappLogoIcon size={22} weight="bold" />}
                            >
                                Enviar WhatsApp
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="confirmation-card"
                        style={{ backgroundImage: `url(${borderPattern})` }}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        <div className="confirmation-card__inner">
                            <div className="confirmation-card__badge confirmation-card__badge--phone">
                                <PhoneIcon size={34} weight="fill" />
                            </div>
                            <h3 className="confirmation-card__title">★ LLAMADA ★</h3>
                            <p className="confirmation-card__desc">
                                Llama directamente a la mamá de Dara para confirmar tu lugar
                            </p>
                            <span className="confirmation-card__phone">449 362 6123</span>
                            <Button
                                variant="primary"
                                className="confirmation-card__btn"
                                onClick={() => window.open(`tel:${PHONE_NUMBER}`, '_self')}
                                icon={<PhoneIcon size={22} weight="bold" />}
                            >
                                Llamar Ahora
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
