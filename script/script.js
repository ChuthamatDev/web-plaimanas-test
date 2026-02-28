import { initNavigation } from './navigation.js'
import { initHeroAnimation } from './hero-animation.js'
import {
    initLanguageSelector,
    initEditorialDropdown,
    initScrollToTop,
} from './ui-controller.js'
import { initFAQ } from './faq.js'
import { initScrollAnimations } from './scroll-observer.js'

const initializers = [
    initLanguageSelector,
    initEditorialDropdown,
    initNavigation,
    initHeroAnimation,
    initFAQ,
    initScrollToTop,
    initScrollAnimations,
]

const bootstrapApplication = () => {
    initializers.forEach((initializeFeature) => initializeFeature())
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApplication)
} else {
    bootstrapApplication()
}
