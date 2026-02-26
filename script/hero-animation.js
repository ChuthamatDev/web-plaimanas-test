export const initHeroAnimation = () => {
    const logoWrapper = document.getElementById('heroLogoWrapper');
    if (!logoWrapper) return;

    // Reset to large state, then animate once to compact on initial load.
    logoWrapper.classList.remove('is-compact');

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            logoWrapper.classList.add('is-compact');
        });
    });
};
