import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import type { RootState } from '@/store/store'
import { playMusic, pauseMusic } from '@/store/ui/music.slice'
import { useInvitationConfig } from './useInvitationConfig'
import type { MusicPlayerProps, MusicPlayerVariant, ButtonVariant } from '@/common/types'
import song from '@/assets/music/song.mp3'

let sharedAudio: HTMLAudioElement | null = null

export const getSharedAudio = (): HTMLAudioElement | null => {
    if (typeof window === 'undefined') return null
    if (!sharedAudio) {
        sharedAudio = new Audio(song)
        sharedAudio.loop = true
        sharedAudio.preload = 'auto'
    }
    return sharedAudio
}

export const useMusicPlayer = (props?: MusicPlayerProps) => {
    const dispatch = useDispatch()
    const isPlaying = useSelector((state: RootState) => state.music.isPlaying)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { theme, ui, config } = useInvitationConfig()
    const location = useLocation()
    const musicConfig = ui?.music || theme?.music

    useEffect(() => {
        const audio = getSharedAudio()
        if (!audio) return

        if (isPlaying) {
            if (audio.paused) {
                audio.play().catch((err) => {
                    console.warn('Audio play was prevented by browser policy:', err)
                })
            }
        } else {
            if (!audio.paused) {
                audio.pause()
            }
        }
    }, [isPlaying])

    const onPlayMusic = () => {
        dispatch(playMusic())
        const audio = getSharedAudio()
        if (audio && audio.paused) {
            audio.play().catch((err) => {
                console.warn('Direct play prevented:', err)
            })
        }
    }

    const onPauseMusic = () => {
        dispatch(pauseMusic())
        const audio = getSharedAudio()
        if (audio && !audio.paused) {
            audio.pause()
        }
    }

    const onToggleMusic = () => {
        const audio = getSharedAudio()
        if (isPlaying) {
            dispatch(pauseMusic())
            if (audio && !audio.paused) {
                audio.pause()
            }
        } else {
            dispatch(playMusic())
            if (audio && audio.paused) {
                audio.play().catch((err) => {
                    console.warn('Toggle play prevented:', err)
                })
            }
        }
    }

    const isHiddenRoute = location.pathname === '/envelope' || location.pathname === '/search'
    const isMusicVisible = (props?.show ?? musicConfig?.show ?? config?.hasMusic ?? true) && !isHiddenRoute
    const activeVariant: MusicPlayerVariant = props?.variant || musicConfig?.variant || 'floating'
    const activeBtnVariant: ButtonVariant = props?.buttonVariant || musicConfig?.buttonVariant || theme.buttonVariant || 'primary'
    const activeSongTitle = props?.songTitle || musicConfig?.songTitle || 'Música de fondo'
    const activeArtistName = props?.artistName || musicConfig?.artistName || 'Música del evento'

    return {
        isPlaying,
        isMusicVisible,
        audioRef,
        activeVariant,
        activeBtnVariant,
        activeSongTitle,
        activeArtistName,
        onPlayMusic,
        onPauseMusic,
        onToggleMusic,
    }
}



