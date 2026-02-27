export const initHeroAnimation = () => {
    const logoWrapper = document.getElementById('heroLogoWrapper')
    if (!logoWrapper) return

    const updateLogo = () => {
        if (window.scrollY > 50) {
            logoWrapper.classList.add('is-compact')
            window.removeEventListener('scroll', updateLogo)
        }
    }

    updateLogo()

    if (!logoWrapper.classList.contains('is-compact')) {
        window.addEventListener('scroll', updateLogo)
    }
}
