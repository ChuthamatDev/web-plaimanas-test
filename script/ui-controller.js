export const initLanguageSelector = () => {
    const selector = document.querySelector('#languageSelector')
    const btn = selector.querySelector('.lang-btn')

    if (!selector || !btn) return

    // ฟังก์ชันเช็คว่าเป็น Mobile หรือไม่
    const isMobile = () => window.innerWidth <= 768

    // 1. ระบบ Click (สำหรับ Mobile หรือคลิกบน Desktop)
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        selector.classList.toggle('active')
        const isExpanded = selector.classList.contains('active')
        btn.setAttribute('aria-expanded', isExpanded)
    })

    // 2. 💡 THE FIX: เพิ่มระบบ Hover (mouseenter / mouseleave) สำหรับ Desktop
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

    // 3. ปิดเมนูเมื่อคลิกที่อื่นบนหน้าจอ
    document.addEventListener('click', () => {
        selector.classList.remove('active')
        btn.setAttribute('aria-expanded', 'false')
    })

    // 4. ป้องกันเมนูปิดเวลาคลิกข้างใน Dropdown
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
