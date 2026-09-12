export function initEventVideos() {
    const cards = [...document.querySelectorAll("#eventos .event-card")];
    if (!cards.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(hover: hover) and (pointer: fine)");
    const visible = new Set();
    let active = null;

    const pause = () => {
        if (!active) return;
        active.querySelector("video").pause();
        active.classList.remove("is-playing");
        active = null;
    };

    const play = (card) => {
        if (reducedMotion.matches || document.hidden || !visible.has(card) || active === card) return;
        pause();
        const video = card.querySelector("video");
        if (video.classList.contains("is-unavailable")) return;
        active = card;
        video.play().then(() => {
            if (active === card && visible.has(card) && !document.hidden && !reducedMotion.matches) {
                card.classList.add("is-playing");
            } else {
                video.pause();
            }
        }).catch(() => {
            if (active === card) pause();
        });
    };

    cards.forEach((card) => {
        const video = card.querySelector("video");
        card.addEventListener("pointerenter", () => {
            if (desktop.matches) play(card);
        });
        card.addEventListener("pointerleave", () => {
            if (desktop.matches && active === card) pause();
        });
        card.querySelector(".event-play").addEventListener("click", () => {
            if (desktop.matches || reducedMotion.matches) return;
            if (active === card) pause();
            else play(card);
        });
        video.addEventListener("error", () => {
            video.classList.add("is-unavailable");
            card.classList.add("is-unavailable");
            if (active === card) pause();
        }, true);
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    visible.add(target);
                    if (desktop.matches && target.matches(":hover")) play(target);
                }
                else {
                    visible.delete(target);
                    if (active === target) pause();
                }
            });
        });
        cards.forEach((card) => observer.observe(card));
    }

    reducedMotion.addEventListener?.("change", pause);
    desktop.addEventListener?.("change", pause);
    document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
}
