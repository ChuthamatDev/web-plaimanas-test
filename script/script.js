import { initNavigation } from './navigation.js'
import { initHeroAnimation } from './hero-animation.js'
import { initLanguageSelector, initScrollToTop } from './ui-controller.js'
import { initFAQ } from './faq.js'
import { initScrollAnimations } from './scroll-observer.js'
import { initVideoOptimizer } from './video-optimizer.js'

const initializers = [
    initLanguageSelector,
    initNavigation,
    initHeroAnimation,
    initFAQ,
    initScrollToTop,
    initScrollAnimations,
    initVideoOptimizer,
]

const bootstrapApplication = () => {
    console.time('App Initialized in');

    initializers.forEach((initializeFeature) => {
        try {
            initializeFeature();
        } catch (error) {
            console.error(`Failed to initialize module: ${initializeFeature.name}`, error);
        }
    });

    console.timeEnd('App Initialized in');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrapApplication)
} else {
    bootstrapApplication()
}