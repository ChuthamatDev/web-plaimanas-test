import { initNavigation } from './navigation.js'
import { initHeroAnimation } from './hero-animation.js'
import { initLanguageSelector, initEditorialDropdown } from './ui-controller.js'

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector()
    initEditorialDropdown()
    initNavigation()
    initHeroAnimation()
})
