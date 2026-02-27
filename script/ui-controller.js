export const initLanguageSelector = () => {
    const selector = document.querySelector('#languageSelector')
    const btn = selector.querySelector('.lang-btn')

    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        selector.classList.toggle('active')
        const isExpanded = selector.classList.contains('active')
        btn.setAttribute('aria-expanded', isExpanded)
    })

    document.addEventListener('click', () => {
        selector.classList.remove('active')
        btn.setAttribute('aria-expanded', 'false')
    })

    selector.querySelector('.lang-dropdown').addEventListener('click', (e) => {
        e.stopPropagation()
    })
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
