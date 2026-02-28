export const initLanguageSelector = () => {
    const selector = document.querySelector('#languageSelector')
    const btn = selector.querySelector('.lang-btn')

    if (!selector || !btn) return

    const isMobile = () => window.innerWidth <= 768

    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        selector.classList.toggle('active')
        const isExpanded = selector.classList.contains('active')
        btn.setAttribute('aria-expanded', isExpanded)
    })

    selector.addEventListener('mouseenter', () => {
        if (!isMobile()) {
            selector.classList.add('active')
            btn.setAttribute('aria-expanded', 'true')
        }
    })

    selector.addEventListener('mouseleave', () => {
        if (!isMobile()) {
            selector.classList.remove('active')
            btn.setAttribute('aria-expanded', 'false')
        }
    })

    document.addEventListener('click', () => {
        selector.classList.remove('active')
        btn.setAttribute('aria-expanded', 'false')
    })

    const dropdown = selector.querySelector('.lang-dropdown')
    if (dropdown) {
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation()
        })
    }
}

export const initEditorialDropdown = () => {
    const editorialMenu = document.querySelector('[data-menu="editorial"]')
    let timeoutId = null

    if (!editorialMenu) return

    const showMenu = () => {
        clearTimeout(timeoutId)
        editorialMenu.classList.add('active')
        document.body.classList.add('editorial-mode')
    }

    const hideMenu = () => {
        timeoutId = setTimeout(() => {
            editorialMenu.classList.remove('active')
            document.body.classList.remove('editorial-mode')
        }, 150)
    }

    editorialMenu.addEventListener('mouseenter', showMenu)
    editorialMenu.addEventListener('mouseleave', hideMenu)

    const items = editorialMenu.querySelectorAll('.dropdown-item')
    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            editorialMenu.classList.remove('active')
            document.body.classList.remove('editorial-mode')
        })
    })
}

export const initScrollToTop = () => {
    const scrollBtn = document.getElementById('scrollToHomepageBtn')

    if (!scrollBtn) return

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault()

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}
