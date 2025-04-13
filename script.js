console.log("Script loaded successfully!");
// 1. Starry Night Effect
document.addEventListener("DOMContentLoaded", () => {
    const numStars = 150; // Number of stars
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(star);
    }
});

// 2. Other Future Features (You can add here)
