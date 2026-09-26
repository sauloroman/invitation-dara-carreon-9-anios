import React from 'react'
import { useMenu } from '@/common/hooks'

import { HeroSection } from './hero/HeroSection'
import { ScratchCardSection } from './addons/scratch-card/ScratchCardSection'
import { CountdownSection } from './countdown/CountdownSection'
import { MonogramSection } from './addons/monogram/MonogramSection'
import { OurStorySection } from './addons/our-story/OurStorySection'
import { PlacesSection } from './places/PlacesSection'
import { LodgingAndWeatherSection } from './addons/lodging-weather/LodgingAndWeatherSection'
import { DressCodeSection } from './dress-code/DressCodeSection'
import { FaqAndMenuSection } from './addons/faq-menu/FaqAndMenuSection'
import { DetailsSection } from './details/DetailsSection'
import { ConfirmationSection } from './confirmation/ConfirmationSection'
import { RsvpSection } from './rsvp/RsvpSection'
import { FarewellSection } from './farewell/FarewellSection'

export const Invitation: React.FC = () => {
    const { activeVariant, isMenuVisible } = useMenu()

    const hasMenuBarClass = isMenuVisible && activeVariant === 'bar' ? 'invitation--has-menu-bar' : ''
    const containerClass = `invitation ${hasMenuBarClass}`.trim()

    return (
        <main className={containerClass}>
            <HeroSection />
            <CountdownSection />
            <PlacesSection />
            <DressCodeSection />
            <RsvpSection />
            <DetailsSection />
            <ConfirmationSection />
            <FarewellSection />

            {/* AddOns */}
            <ScratchCardSection />
            <MonogramSection />
            <OurStorySection />
            <LodgingAndWeatherSection />
            <FaqAndMenuSection />
        </main>
    )
}
