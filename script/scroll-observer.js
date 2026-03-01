export const initScrollAnimations = () => {
    const elementsToAnimate = document.querySelectorAll('.fade-up-element');
    
    if (!elementsToAnimate.length) return;
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px'
    });

    elementsToAnimate.forEach((el) => observer.observe(el));
};