import { createDrinkDetail, drinks, getDrink } from "./drinks.js";
import { getSelection, isSelected, subscribeSelection, toggleSelection } from "./selection.js";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "./whatsapp.js";

const openDialog = (dialog) => { if (!dialog?.showModal || dialog.open) return; dialog.showModal(); document.body.classList.add("modal-open"); };
const closeDialog = (dialog) => { if (!dialog?.open) return; dialog.close(); document.body.classList.remove("modal-open"); };

export function initModals() {
    const drinkModal = document.querySelector("[data-drink-modal]");
    const drinkContent = document.querySelector("[data-drink-modal-content]");
    const budgetModal = document.querySelector("[data-budget-modal]");
    const budgetList = document.querySelector("[data-budget-drinks]");
    const form = document.querySelector("[data-budget-form]");
    const selectionBar = document.querySelector("[data-selection-bar]");
    const selectionCount = document.querySelector("[data-selection-count]");
    let lastTrigger = null;

    const renderBudgetDrinks = () => {
        if (!budgetList) return;
        budgetList.replaceChildren();
        drinks.forEach((drink) => { const button = document.createElement("button"); const selected = isSelected(drink.id); button.type = "button"; button.textContent = `${selected ? "✓ " : "+ "}${drink.nome}`; button.setAttribute("aria-pressed", String(selected)); button.addEventListener("click", () => toggleSelection(drink.id)); budgetList.append(button); });
    };
    subscribeSelection((ids) => { if (selectionBar && selectionCount) { selectionCount.textContent = ids.length; selectionBar.hidden = ids.length === 0; } renderBudgetDrinks(); });
    const rememberAndOpen = (dialog, trigger) => { lastTrigger = trigger || document.activeElement; openDialog(dialog); };
    const close = (dialog) => { closeDialog(dialog); lastTrigger?.focus?.(); };
    document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => close(button.closest("dialog"))));
    [drinkModal, budgetModal].forEach((dialog) => {
        dialog?.addEventListener("click", (event) => { if (event.target === dialog) close(dialog); });
        dialog?.addEventListener("close", () => { document.body.classList.remove("modal-open"); lastTrigger?.focus?.(); });
    });
    document.querySelectorAll("[data-open-budget]").forEach((button) => button.addEventListener("click", () => rememberAndOpen(budgetModal, button)));
    if (form) {
        const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); form.elements.data.min = today.toISOString().slice(0, 10);
        form.addEventListener("submit", (event) => {
            event.preventDefault(); let valid = true;
            [...form.elements].filter((field) => field.matches("input, select")).forEach((field) => { const error = field.parentElement.querySelector(".field-error"); const invalid = !field.checkValidity(); field.setAttribute("aria-invalid", String(invalid)); if (error) error.textContent = invalid ? "Preencha este campo corretamente." : ""; if (invalid) valid = false; });
            const selected = getSelection().map(getDrink).filter(Boolean); const drinksError = form.querySelector("[data-drinks-error]");
            if (!selected.length) { drinksError.textContent = "Selecione ao menos um drink."; valid = false; } else drinksError.textContent = "";
            if (!valid) { form.querySelector("[aria-invalid='true']")?.focus(); return; }
            if (WHATSAPP_NUMBER.includes("X")) { drinksError.textContent = "Configure o número do WhatsApp em js/whatsapp.js antes de enviar."; return; }
            window.open(buildWhatsAppUrl(new FormData(form), selected), "_blank", "noopener,noreferrer");
        });
    }
    return { openDrink(drink) { if (!drinkModal || !drinkContent || !drink) return; drinkContent.replaceChildren(createDrinkDetail(drink)); rememberAndOpen(drinkModal, document.activeElement); } };
}
