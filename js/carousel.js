export function initHeroCarousel() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    const counter = document.querySelector(".hero-current");
    if (slides.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let current = 0; let timer;
    const advance = () => { slides[current].classList.remove("hero-slide-active"); current = (current + 1) % slides.length; slides[current].classList.add("hero-slide-active"); if (counter) counter.textContent = String(current + 1).padStart(2, "0"); };
    const start = () => { if (!timer) timer = window.setInterval(advance, 6000); };
    const stop = () => { window.clearInterval(timer); timer = undefined; };
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start()); start();
}
