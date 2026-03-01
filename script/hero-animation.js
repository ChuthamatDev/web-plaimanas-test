
export const initHeroAnimation = () => {
    const logoWrapper = document.getElementById('heroLogoWrapper')
    const heroSection = document.querySelector('.hero-scroll-container')
    
    if (!logoWrapper || !heroSection) return

    let ticking = false

    const updateLogo = () => {
        const scrollY = window.scrollY
        
        if (scrollY > 20) {
            logoWrapper.classList.add('is-compact')
        } else {
            logoWrapper.classList.remove('is-compact')
        }

        ticking = false
    }

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateLogo)
            ticking = true
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    
    updateLogo()
}
