export const initHeroAnimation = () => {
    const logoWrapper = document.getElementById('heroLogoWrapper')
    if (!logoWrapper) return

    const updateLogo = () => {
        if (window.scrollY > 50) {
            logoWrapper.classList.add('is-compact')
        } else {
            logoWrapper.classList.remove('is-compact')
        }
    }

    updateLogo()
    window.addEventListener('scroll', updateLogo)
}
