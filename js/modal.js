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
    const budgetLegend = document.querySelector("[data-budget-legend]");
    const budgetHelp = document.querySelector("[data-budget-help]");
    const selectionBar = document.querySelector("[data-selection-bar]");
    const selectionCount = document.querySelector("[data-selection-count]");
    let lastTrigger = null;
    let budgetView = "catalog";

    const categoryOrder = ["gin", "vodka", "cachaca", "sem-alcool", "espumantes", "rum", "whisky", "tequila", "amaretto", "brandy", "pisco", "mao-de-obra", "balcoes"];
    const byName = (a, b) => a.nome.localeCompare(b.nome, "pt-BR");
    const createBudgetButton = (drink) => {
        const button = document.createElement("button");
        const selected = isSelected(drink.id);
        button.type = "button";
        button.textContent = `${selected ? "✓ " : "+ "}${drink.nome}`;
        button.setAttribute("aria-pressed", String(selected));
        button.addEventListener("click", () => toggleSelection(drink.id));
        return button;
    };

    const renderBudgetDrinks = () => {
        if (!budgetList) return;
        budgetList.replaceChildren();
        const selectedDrinks = getSelection().map(getDrink).filter(Boolean).sort(byName);
        const showOnlySelection = budgetView === "selection" && selectedDrinks.length > 0;
        budgetList.classList.toggle("showing-selection", showOnlySelection);
        if (budgetLegend) budgetLegend.textContent = showOnlySelection ? "Itens selecionados" : "Escolha os itens";
        if (budgetHelp) budgetHelp.textContent = showOnlySelection ? "Revise sua seleção antes de enviar." : "Itens organizados por categoria. Selecione o que deseja incluir.";

        if (showOnlySelection) {
            budgetList.append(...selectedDrinks.map(createBudgetButton));
            return;
        }

        categoryOrder.forEach((category) => {
            const categoryDrinks = drinks.filter((drink) => drink.categoria === category).sort(byName);
            if (!categoryDrinks.length) return;
            const group = document.createElement("section");
            group.className = "budget-drink-group";
            const title = document.createElement("h3");
            title.textContent = categoryDrinks[0].rotulo;
            const items = document.createElement("div");
            items.className = "budget-drink-group-items";
            items.append(...categoryDrinks.map(createBudgetButton));
            group.append(title, items);
            budgetList.append(group);
        });
    };
    subscribeSelection((ids) => { if (selectionBar && selectionCount) { selectionCount.textContent = ids.length; selectionBar.hidden = ids.length === 0; } renderBudgetDrinks(); });
    const rememberAndOpen = (dialog, trigger) => { lastTrigger = trigger || document.activeElement; openDialog(dialog); };
    const resetEmptyBudgetForm = (dialog) => {
        if (dialog !== budgetModal || getSelection().length || !form) return;
        form.reset();
        form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
        form.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
        budgetView = "catalog";
        renderBudgetDrinks();
    };
    const close = (dialog) => { resetEmptyBudgetForm(dialog); closeDialog(dialog); lastTrigger?.focus?.(); };
    document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => close(button.closest("dialog"))));
    [drinkModal, budgetModal].forEach((dialog) => {
        dialog?.addEventListener("click", (event) => { if (event.target === dialog) close(dialog); });
        dialog?.addEventListener("close", () => { document.body.classList.remove("modal-open"); lastTrigger?.focus?.(); });
    });
    document.querySelectorAll("[data-open-budget]").forEach((button) => button.addEventListener("click", () => {
        budgetView = button.matches("[data-finalize-budget]") || getSelection().length ? "selection" : "catalog";
        renderBudgetDrinks();
        rememberAndOpen(budgetModal, button);
    }));
    if (form) {
        const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); form.elements.data.min = today.toISOString().slice(0, 10);
        form.addEventListener("submit", (event) => {
            event.preventDefault(); let valid = true;
            [...form.elements].filter((field) => field.matches("input, select")).forEach((field) => { const error = field.parentElement.querySelector(".field-error"); const invalid = !field.checkValidity(); field.setAttribute("aria-invalid", String(invalid)); if (error) error.textContent = invalid ? "Preencha este campo corretamente." : ""; if (invalid) valid = false; });
            const selected = getSelection().map(getDrink).filter(Boolean); const drinksError = form.querySelector("[data-drinks-error]");
            if (!selected.length) { drinksError.textContent = "Selecione ao menos um item."; valid = false; } else drinksError.textContent = "";
            if (!valid) { form.querySelector("[aria-invalid='true']")?.focus(); return; }
            if (WHATSAPP_NUMBER.includes("X")) { drinksError.textContent = "Configure o número do WhatsApp em js/whatsapp.js antes de enviar."; return; }
            window.open(buildWhatsAppUrl(new FormData(form), selected), "_blank", "noopener,noreferrer");
        });
    }
    return { openDrink(drink) { if (!drinkModal || !drinkContent || !drink) return; drinkContent.replaceChildren(createDrinkDetail(drink)); rememberAndOpen(drinkModal, document.activeElement); } };
}
