import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import pc from 'picocolors'

import { promptProjectSetup } from './wizard/step0_project_setup.js'
import { promptPackageSelection } from './wizard/step1_package_selection.js'
import { promptThemeAndUI } from './wizard/step2_theme_ui.js'
import { promptHero } from './wizard/step3_hero_sections.js'
import { promptMessageAndFamily } from './wizard/step4_message_family.js'
import { promptPlacesAndItinerary } from './wizard/step5_places_itinerary.js'
import { promptProtocolAndPresents } from './wizard/step6_protocol_presents.js'
import { promptConfirmationAndGraduates } from './wizard/step7_confirmation_graduates.js'
import { promptGallery } from './wizard/step8_gallery_ticket.js'
import { promptAddons } from './wizard/step9_addons.js'
import { promptFarewell } from './wizard/step10_farewell.js'
import { closePrompts, printHeader } from './wizard/prompts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const TEMPLATE_ROOT = path.resolve(__dirname, '..')

const copyRecursive = (src, dest) => {
    const ignoreList = ['node_modules', '.git', 'dist', '.gemini', '.vscode']
    const stats = fs.statSync(src)

    if (stats.isDirectory()) {
        const basename = path.basename(src)
        if (ignoreList.includes(basename)) return

        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true })
        }

        const entries = fs.readdirSync(src)
        for (const entry of entries) {
            copyRecursive(path.join(src, entry), path.join(dest, entry))
        }
    } else {
        fs.copyFileSync(src, dest)
    }
}

async function main() {
    try {
        const setup = await promptProjectSetup()
        const packageData = await promptPackageSelection(setup.eventType)
        const defaultNamesByEvent = {
            wedding: 'María & Carlos',
            xv: 'Sofía Guadalupe',
            graduation: 'Graduación 2026',
            kids: 'Mateo',
            birthday: 'Carlos Martínez',
            bautizo: 'Mi Bautizo',
            general: 'Mi Evento',
        }
        const defaultNames = defaultNamesByEvent[packageData.eventType] || 'María & Carlos'
        const themeAndUi = await promptThemeAndUI(
            defaultNames,
            packageData.packageTier !== 'esmeralda'
        )
        const heroData = await promptHero(packageData.eventType)
        const messageFamilyData = await promptMessageAndFamily(
            packageData.eventType,
            packageData.sectionToggles.showFamily
        )
        const placesItineraryData = await promptPlacesAndItinerary(
            heroData.eventDateRaw,
            '17:00 HRS',
            packageData.sectionToggles.showPlaces,
            packageData.sectionToggles.showItinerary
        )
        const protocolPresentsData = await promptProtocolAndPresents(
            packageData.sectionToggles.showDressCode,
            packageData.sectionToggles.showPresents
        )
        const confirmationGraduatesData = await promptConfirmationAndGraduates(
            packageData.eventType,
            packageData.sectionToggles.showGraduates
        )
        const galleryData = await promptGallery(packageData.sectionToggles.showGallery)
        const addonsData = await promptAddons(packageData.selectedAddons)
        const farewellData = await promptFarewell(heroData.hero.names)

        closePrompts()

        printHeader('â³ CREANDO PROYECTO Y COMPILANDO CONFIGURACIÃ“N...')

        
        // Formatear ISO date para cuenta regresiva
        let formattedIsoDate = '2026-11-20'
        if (heroData.eventDateRaw) {
            const parts = heroData.eventDateRaw.split(/[-/]/)
            if (parts.length === 3) {
                if (parts[0].length === 4) {
                    formattedIsoDate = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`
                } else if (parts[2].length === 4) {
                    formattedIsoDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`
                }
            }
        }
        const firstTime = placesItineraryData.places?.locations?.[0]?.time || '18:00 HRS'
        const [hour = '18', minute = '00'] = firstTime.replace(/[^0-9:]/g, '').split(':')
        const paddedHour = hour.padStart(2, '0')
        const paddedMinute = minute.padStart(2, '0')
        const targetDateIso = `${formattedIsoDate}T${paddedHour}:${paddedMinute}:00`

        const finalConfigManifest = {
            eventType: packageData.eventType,
            packageTier: packageData.packageTier,
            commercial: packageData.commercial,
            theme: themeAndUi.theme,
            ui: themeAndUi.ui,
            config: {
                hasTicketingSystem: packageData.hasTicketingSystem,
                hasRSVP: confirmationGraduatesData.confirmation.showConfirmation,
                hasMusic: themeAndUi.ui.music.show,
                hasMenu: themeAndUi.ui.menu.show,
            },
            sections: {
                envelope: {
                    showenvelope: true,
                    type: themeAndUi.envelopeType || 'cerrado-abierto',
                },
                hero: heroData.hero,
                scratchReveal: {
                    showScratchReveal: Boolean(packageData.sectionToggles.showScratchReveal),
                },
                message: messageFamilyData.message,
                countdown: {
                    showCountdown: true,
                    targetDate: targetDateIso,
                },
                family: messageFamilyData.family,
                places: placesItineraryData.places,
                itinerary: placesItineraryData.itinerary,
                dressCode: protocolPresentsData.dressCode,
                details: protocolPresentsData.details,
                presents: protocolPresentsData.presents,

                confirmation: {
                    showConfirmation: confirmationGraduatesData.confirmation.showConfirmation,
                    type: confirmationGraduatesData.confirmation.type || 'abrasa',
                    isQuantityFree: Boolean(confirmationGraduatesData.confirmation.isQuantityFree),
                    whatsappPhone: confirmationGraduatesData.confirmation.whatsappPhone || '',
                    whatsappMessage: confirmationGraduatesData.confirmation.whatsappMessage || '',
                },
                graduates: confirmationGraduatesData.graduates,
                gallery: galleryData.gallery,
                guestPhotos: {
                    showGuestPhotos: Boolean(packageData.sectionToggles.showGuestPhotos),
                    title: 'Fotos de los Invitados',
                    subtitle: 'Comparte tus recuerdos y momentos de la fiesta con nosotros',
                },
                ticket: {
                    showTicket: Boolean(packageData.hasTicketingSystem),
                },

                addons: addonsData,
                farewell: farewellData,
            },
        }

        // 1. Copiar template
        const targetPath = setup.targetPath
        copyRecursive(TEMPLATE_ROOT, targetPath)

        // 2. Escribir invitation.config.json
        const configPath = path.join(targetPath, 'invitation.config.json')
        fs.writeFileSync(configPath, JSON.stringify(finalConfigManifest, null, 2), 'utf-8')
        console.log(`\n${pc.green('âœ… Archivo invitation.config.json generado exitosamente.')}`)

        // 3. Sincronizar tokens SCSS del tema
        try {
            console.log(pc.cyan('ðŸŽ¨ Compilando tokens SCSS del tema en la nueva invitaciÃ³n...'))
            execSync('node scripts/sync-theme.js', { cwd: targetPath, stdio: 'inherit' })
        } catch (e) {
            console.warn(pc.yellow('âš ï¸ Nota: Recuerda ejecutar npm run theme:sync en la carpeta generada.'))
        }

        printHeader('Â¡PROYECTO DE INVITACIÃ“N CREADO Y CONFIGURADO CON Ã‰XITO!')
        console.log(`ðŸ“Œ ${pc.bold('Tipo de Evento:')} ${packageData.eventType.toUpperCase()} (${packageData.packageTier})`)
        console.log(`ðŸ“Œ ${pc.bold('UbicaciÃ³n:')} ${targetPath}\n`)
        console.log('Para iniciar el proyecto ejecuta:\n')
        console.log(`   cd "${targetPath}"`)
        console.log('   npm install')
        console.log('   npm run dev\n')

    } catch (err) {
        console.error(err)
        closePrompts()
    }
}

main()

