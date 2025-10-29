// playPause.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the elements using their IDs
    const video = document.getElementById('headerVideo');
    const videoControl = document.getElementById('videoControl');
    const controlIcon = document.getElementById('controlIcon');

    if (!video || !videoControl || !controlIcon) {
        // Exit if any element is missing
        console.error("Video control elements not found on the page.");
        return;
    }

    // 2. Read the image paths from the data attributes
    // This is safe because the paths were processed by the template engine in the HTML
    const pauseIconPath = videoControl.getAttribute('data-pause-src');
    const playIconPath = videoControl.getAttribute('data-play-src');

    // The video starts *playing* due to 'autoplay', so the initial icon is 'pause.png'

    videoControl.addEventListener('click', function() {
        if (video.paused) {
            // 1. If video is PAUSED, play it
            video.play();

            // 2. Update icon to PAUSE (meaning it's currently playing)
            controlIcon.src = pauseIconPath;
            controlIcon.alt = "Pause";

        } else {
            // 1. If video is PLAYING, pause it
            video.pause();

            // 2. Update icon to PLAY (meaning it's currently paused)
            controlIcon.src = playIconPath;
            controlIcon.alt = "Play";
        }
    });
});