export const initVideoOptimizer = () => {
    const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection
    const isPoorNetwork =
        connection &&
        (connection.effectiveType.includes('2g') || connection.saveData)
    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches

    const skipHeavyMedia = isPoorNetwork

    const videos = document.querySelectorAll('video')
    if (!videos.length) return

    const activateSource = (video) => {
        if (!video.dataset.src || video.src) return

        let source = video.querySelector('source')
        if (!source) {
            source = document.createElement('source')
            source.type = 'video/mp4'
            video.appendChild(source)
        }
        
        source.src = video.dataset.src
        video.load()
        delete video.dataset.src
    }

    const playSafely = async (video) => {
        if (!video.paused || prefersReducedMotion) return

        // Final safety check for mobile compatibility
        video.muted = true
        video.setAttribute('playsinline', '')

        try {
            // Only play if ready or loading
            if (video.readyState < 3) {
                video.load()
            }

            const playPromise = video.play()
            if (playPromise !== undefined) {
                await playPromise
                video.style.opacity = '1'
            }
        } catch (error) {
            // Silently handle autoplay prevention as it's common browser behavior
            // We'll retry on interaction via global event listeners if needed
            if (video.autoplay || video.dataset.playOnVisible) {
                console.debug('[VideoEngine] Autoplay was blocked, waiting for interaction.')
            }
        }
    }

    const loadObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activateSource(entry.target)
                    loadObserver.unobserve(entry.target)
                }
            })
        },
        { rootMargin: '400px 0px' }
    )

    const playbackObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target

                if (video.classList.contains('hover-content')) return

                if (entry.isIntersecting) {
                    if (!skipHeavyMedia) playSafely(video)
                } else {
                    video.pause()
                }
            })
        },
        { threshold: 0.2 }
    )

    videos.forEach((video) => {
        video.muted = true
        video.setAttribute('playsinline', '')

        loadObserver.observe(video)
        playbackObserver.observe(video)

        if (video.classList.contains('hover-content')) {
            const container = video.closest(
                '.collection-item-video, .collection-item-image, .hover-media'
            )
            if (container) {
                const handleHover = () => {
                    activateSource(video)
                    playSafely(video)
                }
                const handleLeave = () => video.pause()

                container.addEventListener('mouseenter', handleHover)
                container.addEventListener('mouseleave', handleLeave)
                container.addEventListener('touchstart', handleHover, {
                    passive: true,
                })
            }
        }
    })
}
