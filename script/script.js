import { initNavigation } from './navigation.js';
import { initHeroAnimation } from './hero-animation.js';

// เริ่มทำงานเมื่อ DOM พร้อม
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroAnimation();
});
