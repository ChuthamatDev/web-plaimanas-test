// script/hero-animation.js

export const initHeroAnimation = () => {
    const heroLogo = document.getElementById('heroLogoFixed');
    if (!heroLogo) return;

    const handleInitialScroll = () => {
        // เมื่อเริ่มเลื่อนหน้าจอ (เกิน 50px) ให้เริ่มการย่อแบบครั้งเดียวจบ
        if (window.scrollY > 50) {
            heroLogo.classList.add('shrunk');
            
            // ลบ Event Listener ออกทันทีเพื่อให้ทำงานแค่ครั้งเดียวตามโจทย์
            window.removeEventListener('scroll', handleInitialScroll);
        }
    };

    window.addEventListener('scroll', handleInitialScroll);
    
    // ตรวจสอบกรณีที่โหลดหน้ามาแล้วอยู่กลางหน้าพอดี (เช่น หลัง Refresh)
    if (window.scrollY > 50) {
        heroLogo.classList.add('shrunk');
    }
};

