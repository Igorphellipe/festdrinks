import { initAnimations } from "./animations.js";
import { initHeroCarousel } from "./carousel.js";
import { initDrinks } from "./drinks.js";
import { initModals } from "./modal.js";

document.documentElement.classList.remove("no-js"); document.documentElement.classList.add("js");
const initMenu = () => {
    const header = document.querySelector("[data-header]"); const menu = document.querySelector("[data-menu]"); const toggle = document.querySelector("[data-menu-toggle]");
    if (!menu || !toggle) return;
    const close = () => { menu.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Abrir menu"); };
    toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; menu.classList.toggle("menu-open", open); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); });
    menu.addEventListener("click", (event) => { if (event.target.closest("a")) close(); }); document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
    const updateHeader = () => header?.classList.toggle("header-scrolled", scrollY > 24); updateHeader(); addEventListener("scroll", updateHeader, { passive: true });
};
const modals = initModals(); initDrinks({ openDrink: modals.openDrink }); initMenu(); initHeroCarousel(); initAnimations();
const year = document.querySelector("[data-current-year]"); if (year) year.textContent = new Date().getFullYear();
