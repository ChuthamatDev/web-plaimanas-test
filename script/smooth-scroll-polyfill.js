;(function () {
    if ('scrollBehavior' in document.documentElement.style) return

    var nativeScrollTo = window.scrollTo.bind(window)
    var nativeScrollBy = window.scrollBy.bind(window)
    var nativeRequestAnimationFrame =
        window.requestAnimationFrame ||
        function (cb) {
            return setTimeout(cb, 16)
        }

    function smoothScroll(targetX, targetY, duration) {
        var startX = window.scrollX || window.pageXOffset
        var startY = window.scrollY || window.pageYOffset
        var distanceX = targetX - startX
        var distanceY = targetY - startY

        var baseDuration = Math.abs(distanceX) + Math.abs(distanceY)
        var totalDuration = Math.max(200, Math.min(600, baseDuration))
        var startTime = null

        function ease(progress) {
            return 0.5 * (1 - Math.cos(Math.PI * progress))
        }

        function step(timestamp) {
            if (startTime === null) startTime = timestamp
            var elapsed = timestamp - startTime
            var progress = Math.min(elapsed / totalDuration, 1)
            var factor = ease(progress)

            nativeScrollTo(
                startX + distanceX * factor,
                startY + distanceY * factor
            )

            if (elapsed < totalDuration) {
                nativeRequestAnimationFrame(step)
            }
        }

        nativeRequestAnimationFrame(step)
    }

    function patchWindowScroll(methodName) {
        var original =
            methodName === 'scrollBy' ? nativeScrollBy : nativeScrollTo

        window[methodName] = function (firstArg, secondArg) {
            var isObject = firstArg && typeof firstArg === 'object'
            if (isObject && firstArg.behavior === 'smooth') {
                var left =
                    typeof firstArg.left === 'number'
                        ? firstArg.left
                        : window.scrollX || window.pageXOffset
                var top =
                    typeof firstArg.top === 'number'
                        ? firstArg.top
                        : window.scrollY || window.pageYOffset

                if (methodName === 'scrollBy') {
                    left += window.scrollX || window.pageXOffset
                    top += window.scrollY || window.pageYOffset
                }

                smoothScroll(left, top)
                return
            }

            return original.apply(window, arguments)
        }
    }

    patchWindowScroll('scroll')
    patchWindowScroll('scrollTo')
    patchWindowScroll('scrollBy')

    var originalScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function (arg) {
        var behavior =
            arg && typeof arg === 'object'
                ? arg.behavior
                : typeof arg === 'string'
                  ? arg
                  : null

        if (behavior === 'smooth') {
            var rect = this.getBoundingClientRect()
            smoothScroll(
                rect.left + (window.scrollX || window.pageXOffset),
                rect.top + (window.scrollY || window.pageYOffset)
            )
            return
        }

        return originalScrollIntoView.call(this, arg === undefined ? true : arg)
    }
})()
