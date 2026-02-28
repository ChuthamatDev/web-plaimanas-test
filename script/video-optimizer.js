/**
 * Smart video playback optimizer using IntersectionObserver.
 * Pauses videos when they are not in the viewport to save CPU/GPU resources.
 */
export const initVideoOptimizer = () => {
    const videos = document.querySelectorAll('video');

    if (!videos.length) return;

    const videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    // Start playing if it's in view
                    const playPromise = video.play();
                    
                    if (playPromise !== undefined) {
                      playPromise.catch(() => {
                        // Handle auto-play prevention if any
                      });
                    }
                } else {
                    // Pause if it's out of view
                    video.pause();
                }
            });
        },
        {
            // Trigger when even a small part of the video is visible
            threshold: 0.1,
        }
    );

    videos.forEach((video) => {
        videoObserver.observe(video);
    });
};
