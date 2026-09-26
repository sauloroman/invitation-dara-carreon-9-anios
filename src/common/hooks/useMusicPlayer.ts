import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import type { RootState } from '@/store/store'
import { playMusic, pauseMusic } from '@/store/ui/music.slice'
import { useInvitationConfig } from './useInvitationConfig'
import type { MusicPlayerProps, MusicPlayerVariant, ButtonVariant } from '@/common/types'
import song from '@/assets/music/song.mp3'

export const useMusicPlayer = (props?: MusicPlayerProps) => {
    const dispatch = useDispatch()
    const isPlaying = useSelector((state: RootState) => state.music.isPlaying)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { theme, ui, config } = useInvitationConfig()
    const location = useLocation()
    const musicConfig = ui?.music || theme?.music

    useEffect(() => {
        // Al igual que en nubes-y-sonrisas, la música se inicializa y reproduce automáticamente
        // en cuanto se entra a /invitation, ya que el usuario acaba de interactuar arrastrando el sobre.
        if (location.pathname !== '/invitation') {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
                dispatch(pauseMusic())
            }
            return
        }

        const audio = new Audio(song)
        audio.loop = true
        audio.volume = 0.55
        audioRef.current = audio

        audio.play()
            .then(() => {
                dispatch(playMusic())
            })
            .catch((error) => {
                console.log('Autoplay prevented by browser, waiting for user gesture:', error)
                dispatch(pauseMusic())
            })

        return () => {
            audio.pause()
            audioRef.current = null
            dispatch(pauseMusic())
        }
    }, [location.pathname, dispatch])

    const onPlayMusic = () => {
        if (!audioRef.current) return
        audioRef.current.play()
            .then(() => dispatch(playMusic()))
            .catch((err) => console.error('Playback failed:', err))
    }

    const onPauseMusic = () => {
        if (!audioRef.current) return
        audioRef.current.pause()
        dispatch(pauseMusic())
    }

    const onToggleMusic = () => {
        if (!audioRef.current) return
        if (isPlaying) {
            audioRef.current.pause()
            dispatch(pauseMusic())
        } else {
            audioRef.current.play()
                .then(() => dispatch(playMusic()))
                .catch((err) => console.error('Playback failed:', err))
        }
    }

    // Ocultar botón en el sobre (ruta / o /envelope) para que coincida exactamente con nubes-y-sonrisas
    const isHiddenRoute = location.pathname === '/' || location.pathname === '/envelope' || location.pathname === '/search'
    const isMusicVisible = (props?.show ?? musicConfig?.show ?? config?.hasMusic ?? true) && !isHiddenRoute
    const activeVariant: MusicPlayerVariant = props?.variant || musicConfig?.variant || 'floating'
    const activeBtnVariant: ButtonVariant = props?.buttonVariant || musicConfig?.buttonVariant || theme.buttonVariant || 'primary'
    const activeSongTitle = props?.songTitle || musicConfig?.songTitle || 'Música de fondo'
    const activeArtistName = props?.artistName || musicConfig?.artistName || 'Música del evento'

    return {
        isPlaying,
        isMusicVisible,
        activeVariant,
        activeBtnVariant,
        activeSongTitle,
        activeArtistName,
        onPlayMusic,
        onPauseMusic,
        onToggleMusic,
    }
}
