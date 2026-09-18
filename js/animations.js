export function initAnimations() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length || matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach((item) => item.classList.add("revealed")); return; }
    if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("revealed")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }), { threshold: .12 });
    items.forEach((item) => observer.observe(item));
}
