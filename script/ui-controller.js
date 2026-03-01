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

    const options = selector.querySelectorAll('.lang-option')
    const langLabel = btn.querySelector('.lang-label')

    if (options.length && langLabel) {
        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation()

                // Swap Text between label and option
                const currentLang = langLabel.textContent.trim()
                const newLang = option.textContent.trim()
                
                langLabel.textContent = newLang
                option.textContent = currentLang

                // Close the dropdown
                selector.classList.remove('active')
                btn.setAttribute('aria-expanded', 'false')
            })
        })
    }
}

export const initEditorialDropdown = () => {
    const editorialMenu = document.querySelector('[data-menu="editorial"]')
    let timeoutId = null

    if (!editorialMenu) return

    const showMenu = () => {
        if (isMobile()) return

        clearTimeout(timeoutId)
        editorialMenu.classList.add('active')
        document.body.classList.add('editorial-mode')
    }

    const hideMenu = () => {
        if (isMobile()) return

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
