export const initScrollAnimations = () => {
    // 1. เพิ่มคลาสให้กับ block ใหญ่เผื่อไว้
    const sectionsToAnimate = document.querySelectorAll(
        'main > section, .site-footer'
    )
    sectionsToAnimate.forEach((section) => {
        section.classList.add('fade-up-element')
    })

    // 2. ดึงทุก Element ที่มีคลาส .fade-up-element (ครอบคลุมทั้ง Section และ Article หรือลูกอื่นๆ)
    const elementsToAnimate = document.querySelectorAll('.fade-up-element')
    if (!elementsToAnimate.length) return

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // ใส่คลาสให้มัน fade up ขึ้นมา
                entry.target.classList.add('is-visible')
                // ให้รันครั้งเดียวพอ พอโชว์แล้วก็เลิกจับตาดู
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    // เริ่ม Observe ทุก element แบบเรียงตัว
    elementsToAnimate.forEach((el) => {
        observer.observe(el)
    })
}
