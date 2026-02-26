const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const initHeroAnimation = () => {
    const heroContainer = document.querySelector('.hero-scroll-container');
    const logoWrapper = document.getElementById('heroLogoWrapper');

    if (!heroContainer || !logoWrapper) return;

    const maxScale = 1;
    const minScale = 0.18;
    let ticking = false;

    const updateLogo = () => {
        const containerTop = heroContainer.offsetTop;
        const triggerDistance = Math.max(
            heroContainer.offsetHeight - window.innerHeight,
            1
        );
        const progress = clamp(
            (window.scrollY - containerTop) / triggerDistance,
            0,
            1
        );
        const scale = maxScale - (maxScale - minScale) * progress;

        logoWrapper.style.setProperty('--hero-logo-scale', scale.toFixed(4));
        logoWrapper.classList.toggle('is-compact', progress >= 0.98);
        ticking = false;
    };

    const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateLogo);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();
};
