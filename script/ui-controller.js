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