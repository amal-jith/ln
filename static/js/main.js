$(document).ready(function(){
    // Select your carousel by its class
    $(".my-custom-carousel").owlCarousel({
        loop: true,           // Enables infinite loop
        margin: 30,           // Space between items in pixels
        nav: false,           // Show next/prev buttons (set to true if needed)
        dots: true,           // Show dots/pagination
        autoplay: false,       // Start automatically
        autoplayTimeout: 5000, // Slide delay in milliseconds

        // Responsive settings for different screen sizes
        responsive: {
            0: {              // For screens 0px and up (mobile)
                items: 1,     // Show 1 item
                stagePadding: 50
            },
            768: {            // For screens 768px and up (tablet)
                items: 2,     // Show 2 items
            },
            1200: {           // For screens 1200px and up (desktop)
                items: 4,     // Show 3 items
            }
        }
    });
});


// Get the button
// Show the button after scrolling down 100px
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Scroll smoothly to the top when clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
