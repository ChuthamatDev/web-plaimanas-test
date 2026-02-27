export const initNavigation = () => {
    const navCenter = document.querySelector('.nav-center')
    const mobileBtn = document.querySelector('.mobile-menu-btn')
    const editorialMenu = document.querySelector('[data-menu="editorial"]')

    if (!navCenter || !mobileBtn || !editorialMenu) return

    const editorialLink = editorialMenu.querySelector('.editorial-toggle')
    const chevron = editorialMenu.querySelector('.mobile-chevron')
    let timeoutId = null

    const isMobile = () => window.innerWidth <= 768

    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        const isOpen = navCenter.classList.toggle('open')

        document.body.style.overflow = isOpen ? 'hidden' : ''
    })

    if (editorialLink) {
        editorialLink.addEventListener('click', (e) => {
            if (isMobile()) {
                e.preventDefault()
                editorialMenu.classList.toggle('mobile-expanded')

                if (chevron) {
                    const isExpanded =
                        editorialMenu.classList.contains('mobile-expanded')
                    chevron.style.transform = isExpanded
                        ? 'rotate(-180deg)'
                        : 'rotate(0deg)'
                }
            }
        })
    }

    const allNavLinks = document.querySelectorAll(
        '.nav-menu > li:not([data-menu="editorial"]) .nav-link'
    )
    const navBar = document.querySelector('.navbar')

    const showDesktopMenu = () => {
        if (isMobile()) return
        clearTimeout(timeoutId)
        editorialMenu.classList.add('active')
        document.body.classList.add('editorial-mode')
    }

    const hideDesktopMenu = () => {
        if (isMobile()) return
        timeoutId = setTimeout(() => {
            editorialMenu.classList.remove('active')
            document.body.classList.remove('editorial-mode')
        }, 150)
    }

    editorialMenu.addEventListener('mouseenter', showDesktopMenu)

    allNavLinks.forEach((link) => {
        link.addEventListener('mouseenter', hideDesktopMenu)
    })

    if (navBar) {
        navBar.addEventListener('mouseleave', hideDesktopMenu)
    }

    window.addEventListener('resize', () => {
        if (!isMobile()) {
            navCenter.classList.remove('open')
            editorialMenu.classList.remove('mobile-expanded')
            document.body.style.overflow = ''
            if (chevron) chevron.style.transform = 'rotate(0deg)'
        } else {
            editorialMenu.classList.remove('active')
            document.body.classList.remove('editorial-mode')
        }
    })
}
