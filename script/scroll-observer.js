export const initScrollAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    const sectionsToAnimate = document.querySelectorAll(
        'main > section, .site-footer'
    )

    sectionsToAnimate.forEach((section) => {
        section.classList.add('fade-up-element')
        observer.observe(section)
    })
}
