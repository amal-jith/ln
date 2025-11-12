// playPause.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('headerVideo');
    const videoControl = document.getElementById('videoControl');
    const controlIcon = document.getElementById('controlIcon');
    const videoCursor = document.getElementById('videoCursor');
    const videoContainer = document.getElementById('videoContainer');
    const videoNav = document.querySelector('.video-nav');

    const pauseIconPath = videoControl.getAttribute('data-pause-src');
    const playIconPath = videoControl.getAttribute('data-play-src');

    // --- INITIALIZE VIDEO ---
    video.muted = true;
    video.play().then(() => {
        video.pause();
        video.currentTime = 0;
    }).catch(() => {});

    controlIcon.src = playIconPath;
    controlIcon.alt = "Play";

    // --- CUSTOM CURSOR MOVEMENT ---
    videoContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        videoCursor.style.top = `${y}px`;
        videoCursor.style.left = `${x}px`;
    });

    videoContainer.addEventListener('mouseenter', () => {
        videoCursor.style.opacity = 1;
    });

    videoContainer.addEventListener('mouseleave', () => {
        videoCursor.style.opacity = 0;
    });

    // --- HIDE CURSOR WHEN HOVERING ON BUTTONS OR CONTROL ---
    const hideCursorElements = [videoNav, videoControl];
    hideCursorElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            videoCursor.classList.add('hide');
        });
        el.addEventListener('mouseleave', () => {
            // Only show if video is still paused (cursor normally hides after play)
            if (video.paused) {
                videoCursor.classList.remove('hide');
            }
        });
    });

    // --- PLAY / PAUSE LOGIC ---
    videoControl.addEventListener('click', function() {
        if (video.paused) {
            video.muted = false;
            video.play();

            controlIcon.src = pauseIconPath;
            controlIcon.alt = "Pause";

            // Hide cursor when playing
            videoCursor.classList.add('hide');
        } else {
            video.pause();

            controlIcon.src = playIconPath;
            controlIcon.alt = "Play";

            // Show cursor again when paused
            videoCursor.classList.remove('hide');
        }
    });
});
