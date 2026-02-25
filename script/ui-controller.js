export const initLanguageSelector = () => {
    const selector = document.querySelector('#languageSelector');
    const btn = selector.querySelector('.lang-btn');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        selector.classList.toggle('active');
        const isExpanded = selector.classList.contains('active');
        btn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', () => {
        selector.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
    });

    selector.querySelector('.lang-dropdown').addEventListener('click', (e) => {
        e.stopPropagation();
    });
};

export const initEditorialDropdown = () => {
    const editorialMenu = document.querySelector('[data-menu="editorial"]');
    let timeoutId = null;

    if (!editorialMenu) return; // Guard clause ป้องกัน Error ถ้าหา Element ไม่เจอ

    const showMenu = () => {
        clearTimeout(timeoutId);
        editorialMenu.classList.add('active');
        document.body.classList.add('editorial-mode'); 
    };

    const hideMenu = () => {
        timeoutId = setTimeout(() => {
            editorialMenu.classList.remove('active');
            document.body.classList.remove('editorial-mode');
        }, 150); // ระยะเวลาหน่วง 150ms ให้ความรู้สึกที่พอดีที่สุด
    };

    editorialMenu.addEventListener('mouseenter', showMenu);
    editorialMenu.addEventListener('mouseleave', hideMenu);

    // ป้องกัน Event Bubbling เมื่อคลิกเมนูข้างใน
    const items = editorialMenu.querySelectorAll('.dropdown-item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            // ไม่ต้องใส่ e.preventDefault() ถ้าจะให้ Link ไปหน้าอื่นจริงๆ
            editorialMenu.classList.remove('active');
            document.body.classList.remove('editorial-mode');
        });
    });
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    initEditorialDropdown();
});