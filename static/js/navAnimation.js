gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link-head');

    // Create a single Timeline for perfect synchronization
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: "top top",      // Animation begins when the page is at the very top
            end: "top -80",        // Animation completes after 80 pixels of scrolling (a smooth distance)
            scrub: true,           // KEY: Links the animation progress directly to the scrollbar
            // Optional: markers: true // Uncomment this to visualize the start/end points
        }
    });

    // --- 1. Navbar Background and Shadow Transition ---
    tl.to(navbar, {
        backgroundColor: "#000000", // Final state: Solid white
        boxShadow: "0 0px 4px rgba(255,255,255, 0.3)", // Final state: Subtle, more noticeable shadow
        ease: "none" // Use 'none' with scrub for a linear, smooth scroll-linked transition
    }, 0); // The '0' ensures this animation starts at the very beginning of the timeline.

    // --- 2. Link Color Transition ---
    tl.to(navLinks, {
        color: "#FFF", // Final state: Dark text color
        ease: "none"
    }, 0); // The '0' ensures this animation starts simultaneously with the background change.

    // Optional: Animate the button color or text if needed.

});