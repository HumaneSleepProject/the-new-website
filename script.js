console.log("Script loaded successfully!");
// 1. Starry Night Effect
document.addEventListener("DOMContentLoaded", () => {
  const numStars = 250; // More stars!
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(star);
    }
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        slides.forEach(slide => (slide.style.display = "none")); // Hide all slides
        slideIndex = (slideIndex + 1) % slides.length; // Next image
        slides[slideIndex].style.display = "block"; // Show current slide
        setTimeout(showSlides, 5000); // Change every 5 seconds
    }

    showSlides(); // Start the slideshow
});
