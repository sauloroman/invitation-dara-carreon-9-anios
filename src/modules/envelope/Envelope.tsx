import React from 'react'
import { useInvitationConfig } from '@/common/hooks'
import { EnvelopeInteractive } from './EnvelopeInteractive'
import { EnvelopeVideo } from './EnvelopeVideo'
import { Reveal } from '@/modules/reveal/Reveal'
import type { EnvelopeConfig } from '@/common/types'

export const Envelope: React.FC = () => {
    const { sections } = useInvitationConfig()
    const envelopConfig = (sections.envelop || sections.envelope) as EnvelopeConfig | undefined
    const envelopeType = envelopConfig?.type || 'deslizante'

    if (envelopeType === 'video-apertura') {
        return <EnvelopeVideo />
    }

    if (envelopeType === 'cerrado-abierto') {
        return <EnvelopeInteractive />
    }

    return <Reveal />
}
