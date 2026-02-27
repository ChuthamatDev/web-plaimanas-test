import { initNavigation } from './navigation.js'
import { initHeroAnimation } from './hero-animation.js'
import { initLanguageSelector, initEditorialDropdown } from './ui-controller.js'

const initializers = [
    initLanguageSelector,
    initEditorialDropdown,
    initNavigation,
    initHeroAnimation,
]

const bootstrapApplication = () => {
    initializers.forEach((initializeFeature) => initializeFeature())
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApplication)
} else {
    bootstrapApplication()
}
