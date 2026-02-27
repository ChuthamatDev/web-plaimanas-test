export const initFAQ = () => {
    const tabs = document.querySelectorAll('.faq-tab')
    const groups = document.querySelectorAll('.faq-group')

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'))
            groups.forEach((g) => g.classList.remove('active'))

            tab.classList.add('active')

            const targetId = tab.getAttribute('data-target')
            document.getElementById(targetId).classList.add('active')
        })
    })

    const accordions = document.querySelectorAll('.faq-accordion')

    accordions.forEach((acc) => {
        const questionBtn = acc.querySelector('.faq-question')

        questionBtn.addEventListener('click', () => {
            const isOpen = acc.classList.contains('is-open')

            if (isOpen) {
                acc.classList.remove('is-open')
                questionBtn.setAttribute('aria-expanded', 'false')
            } else {
                acc.classList.add('is-open')
                questionBtn.setAttribute('aria-expanded', 'true')
            }
        })
    })
}
