document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('headerVideo');
  const source = video.querySelector('source');
  const prevBtn = document.getElementById('prevVideo');
  const nextBtn = document.getElementById('nextVideo');
  const controlIcon = document.getElementById('controlIcon');
  const navContainer = document.querySelector('.video-nav');

  // ✅ Get the real, Django-rendered video URLs
  const videos = JSON.parse(navContainer.getAttribute('data-videos'));

  let currentIndex = 0;

  function changeVideo(step) {
    video.style.opacity = 0;
    setTimeout(() => {
      currentIndex = (currentIndex + step + videos.length) % videos.length;
      source.setAttribute('src', videos[currentIndex]);

      // Important: reload after updating source
      video.load();

      // Play again
      video.play().catch(() => {}); // prevent autoplay block errors
      controlIcon.alt = "Pause";
      video.style.opacity = 1;
    }, 300);
  }

  prevBtn.addEventListener('click', () => changeVideo(-1));
  nextBtn.addEventListener('click', () => changeVideo(1));
});
