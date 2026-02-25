/**
 * Unified Navigation Controller
 * จัดการทั้ง Desktop (Hover Overlay) และ Mobile (Hamburger Menu) ในที่เดียว
 */

export const initNavigation = () => {
    const navCenter = document.querySelector('.nav-center');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const editorialMenu = document.querySelector('[data-menu="editorial"]');
   
    
    if (!navCenter || !mobileBtn || !editorialMenu) return;

    const editorialLink = editorialMenu.querySelector('.editorial-toggle');
    const chevron = editorialMenu.querySelector('.mobile-chevron');
    let timeoutId = null;

    const isMobile = () => window.innerWidth <= 768;

    // --- 1. Mobile Logic: Hamburger Menu Toggle ---
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navCenter.classList.toggle('open');
        
        // ล็อค Scroll ของ Body เมื่อเปิดเมนู
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // --- 2. Mobile Logic: Editorial Sub-menu Toggle ---
    if (editorialLink) {
        editorialLink.addEventListener('click', (e) => {
            if (isMobile()) {
                e.preventDefault();
                editorialMenu.classList.toggle('mobile-expanded');
                
                // หมุนลูกศร Chevron
                if (chevron) {
                    const isExpanded = editorialMenu.classList.contains('mobile-expanded');
                    chevron.style.transform = isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)';
                }
            }
        });
    }

    // --- 3. Desktop Logic: Editorial Hover (Immersive Focus) ---
    const allNavLinks = document.querySelectorAll('.nav-menu > li:not([data-menu="editorial"]) .nav-link');
    const navBar = document.querySelector('.navbar');

    const showDesktopMenu = () => {
        if (isMobile()) return;
        clearTimeout(timeoutId);
        editorialMenu.classList.add('active');
        document.body.classList.add('editorial-mode');
    };

    const hideDesktopMenu = () => {
        if (isMobile()) return;
        timeoutId = setTimeout(() => {
            editorialMenu.classList.remove('active');
            document.body.classList.remove('editorial-mode');
        }, 150);
    };

    // เปิด Focus เมื่อนำเมาส์เข้าพื้นที่ Editorial (รวม Dropdown)
    editorialMenu.addEventListener('mouseenter', showDesktopMenu);

    // ปิด Focus เมื่อ "ขยับไปที่เมนูหลักอื่นๆ" ตามโจทย์
    allNavLinks.forEach(link => {
        link.addEventListener('mouseenter', hideDesktopMenu);
    });

    // ปิด Focus เมื่อเอาเมาส์ออกจากแถบ Header ทั้งหมด
    if (navBar) {
        navBar.addEventListener('mouseleave', hideDesktopMenu);
    }

    // --- 4. Cleanup on Window Resize ---
    window.addEventListener('resize', () => {
        if (!isMobile()) {
            navCenter.classList.remove('open');
            editorialMenu.classList.remove('mobile-expanded');
            document.body.style.overflow = '';
            if (chevron) chevron.style.transform = 'rotate(0deg)';
        } else {
            editorialMenu.classList.remove('active');
            document.body.classList.remove('editorial-mode');
        }
    });

    // --- 5. Language Selector Logic ---
    const langBtn = document.querySelector('.lang-btn');
    const langSelector = document.querySelector('#languageSelector');
    if (langBtn && langSelector) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });
        document.addEventListener('click', () => langSelector.classList.remove('active'));
    }
};

// เริ่มทำงานเมื่อ DOM พร้อม
document.addEventListener('DOMContentLoaded', initNavigation);