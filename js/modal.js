import { createDrinkDetail, drinks, getDrink } from "./drinks.js";
import { getSelection, isSelected, subscribeSelection, toggleSelection } from "./selection.js";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "./whatsapp.js";

const openDialog = (dialog) => {
    if (!dialog || dialog.hasAttribute("open")) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else { dialog.setAttribute("open", ""); dialog.setAttribute("role", "dialog"); dialog.setAttribute("aria-modal", "true"); }
    document.body.classList.add("modal-open");
};
const closeDialog = (dialog) => {
    if (!dialog || !dialog.hasAttribute("open")) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    document.body.classList.remove("modal-open");
};

export function initModals() {
    const drinkModal = document.querySelector("[data-drink-modal]");
    const drinkContent = document.querySelector("[data-drink-modal-content]");
    const budgetModal = document.querySelector("[data-budget-modal]");
    const budgetPanel = budgetModal ? budgetModal.querySelector(".budget-panel") : null;
    const budgetList = document.querySelector("[data-budget-drinks]");
    const form = document.querySelector("[data-budget-form]");
    const budgetLegend = document.querySelector("[data-budget-legend]");
    const budgetHelp = document.querySelector("[data-budget-help]");
    const selectionBar = document.querySelector("[data-selection-bar]");
    const selectionCount = document.querySelector("[data-selection-count]");
    let lastTrigger = null;
    let budgetView = "catalog";
    let activeCategory = "";

    const categoryOrder = ["gin", "vodka", "cachaca", "sem-alcool", "espumantes", "rum", "whisky", "tequila", "amaretto", "brandy", "pisco", "mao-de-obra", "balcoes"];
    const byName = (a, b) => a.nome.localeCompare(b.nome, "pt-BR");
    const createBudgetButton = (drink) => {
        const button = document.createElement("button");
        const selected = isSelected(drink.id);
        const indicator = document.createElement("span");
        const label = document.createElement("span");
        button.type = "button";
        button.className = "budget-drink-button";
        indicator.className = "budget-option-indicator";
        indicator.setAttribute("aria-hidden", "true");
        indicator.textContent = selected ? "✓" : "+";
        label.className = "budget-option-label";
        label.textContent = drink.nome;
        button.appendChild(indicator);
        button.appendChild(label);
        button.setAttribute("aria-pressed", String(selected));
        button.addEventListener("click", () => toggleSelection(drink.id));
        return button;
    };

    const createCategoryButton = (category, categoryDrinks) => {
        const button = document.createElement("button");
        const isActive = activeCategory === category;
        button.type = "button";
        button.className = "budget-category-button";
        button.textContent = categoryDrinks[0].rotulo;
        button.setAttribute("aria-pressed", String(isActive));
        button.addEventListener("click", () => { activeCategory = isActive ? "" : category; renderBudgetDrinks(); });
        return button;
    };

    const createSelectionPreview = (selectedDrinks) => {
        const group = document.createElement("section");
        group.className = "budget-drink-group budget-selection-preview";
        const title = document.createElement("h3");
        const items = document.createElement("div");
        title.textContent = `Sua seleção (${selectedDrinks.length})`;
        items.className = "budget-drink-group-items";
        selectedDrinks.forEach((drink) => items.appendChild(createBudgetButton(drink)));
        group.appendChild(title);
        group.appendChild(items);
        return group;
    };

    const renderBudgetDrinks = () => {
        if (!budgetList) return;
        budgetList.textContent = "";
        const selectedDrinks = getSelection().map(getDrink).filter(Boolean).sort(byName);
        const showOnlySelection = budgetView === "selection" && selectedDrinks.length > 0;
        budgetList.classList.toggle("showing-selection", showOnlySelection);
        if (form) form.classList.toggle("has-selection", selectedDrinks.length > 0);
        if (budgetPanel) budgetPanel.classList.toggle("has-selection", selectedDrinks.length > 0);
        if (budgetLegend) budgetLegend.textContent = showOnlySelection ? "Itens selecionados" : "Escolha os itens";
        if (budgetHelp) {
            if (showOnlySelection || (selectedDrinks.length && !activeCategory)) budgetHelp.textContent = "Revise os itens escolhidos ou selecione outra categoria.";
            else if (activeCategory) budgetHelp.textContent = "Escolha os itens ou toque novamente na categoria para fechá-la.";
            else budgetHelp.textContent = "Selecione uma categoria e depois escolha os itens desejados.";
        }

        if (showOnlySelection) {
            budgetList.append(...selectedDrinks.map(createBudgetButton));
            return;
        }

        const categories = document.createElement("div");
        categories.className = "budget-categories";
        categoryOrder.forEach((category) => {
            const categoryDrinks = drinks.filter((drink) => drink.categoria === category).sort(byName);
            if (!categoryDrinks.length) return;
            categories.appendChild(createCategoryButton(category, categoryDrinks));
        });
        budgetList.appendChild(categories);

        if (selectedDrinks.length && activeCategory) {
            const showSelection = document.createElement("button");
            showSelection.type = "button";
            showSelection.className = "budget-show-selection";
            showSelection.textContent = `Ver seleção (${selectedDrinks.length})`;
            showSelection.addEventListener("click", () => { activeCategory = ""; renderBudgetDrinks(); });
            budgetList.appendChild(showSelection);
        }

        if (!activeCategory) {
            if (selectedDrinks.length) {
                budgetList.appendChild(createSelectionPreview(selectedDrinks));
                return;
            }
            const prompt = document.createElement("div");
            prompt.className = "budget-category-prompt";
            prompt.innerHTML = '<span aria-hidden="true">1</span><p><strong>Comece por uma categoria</strong><span>Toque em uma opção acima para visualizar os drinks.</span></p>';
            budgetList.appendChild(prompt);
            return;
        }

        const categoryDrinks = drinks.filter((drink) => drink.categoria === activeCategory).sort(byName);
        if (!categoryDrinks.length) { activeCategory = ""; renderBudgetDrinks(); return; }
        const group = document.createElement("section");
        group.className = "budget-drink-group budget-drink-group-active";
        const title = document.createElement("h3");
        title.textContent = `Escolha em ${categoryDrinks[0].rotulo}`;
        const items = document.createElement("div");
        items.className = "budget-drink-group-items";
        categoryDrinks.forEach((drink) => items.appendChild(createBudgetButton(drink)));
        group.appendChild(title);
        group.appendChild(items);
        budgetList.appendChild(group);
    };
    subscribeSelection((ids) => { if (selectionBar && selectionCount) { selectionCount.textContent = ids.length; selectionBar.hidden = ids.length === 0; } renderBudgetDrinks(); });
    const rememberAndOpen = (dialog, trigger) => { lastTrigger = trigger || document.activeElement; openDialog(dialog); };
    const resetEmptyBudgetForm = (dialog) => {
        if (dialog !== budgetModal || getSelection().length || !form) return;
        form.reset();
        form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
        form.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
        budgetView = "catalog";
        activeCategory = "";
        renderBudgetDrinks();
    };
    const restoreFocus = () => { if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus(); };
    const close = (dialog) => { resetEmptyBudgetForm(dialog); closeDialog(dialog); restoreFocus(); };
    document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => close(button.closest("dialog"))));
    [drinkModal, budgetModal].forEach((dialog) => {
        if (!dialog) return;
        dialog.addEventListener("click", (event) => { if (event.target === dialog) close(dialog); });
        dialog.addEventListener("close", () => { document.body.classList.remove("modal-open"); restoreFocus(); });
    });
    document.querySelectorAll("[data-open-budget]").forEach((button) => button.addEventListener("click", () => {
        budgetView = button.matches("[data-finalize-budget]") || getSelection().length ? "selection" : "catalog";
        if (budgetView === "catalog") activeCategory = "";
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
            if (!valid) { const invalidField = form.querySelector("[aria-invalid='true']"); if (invalidField) invalidField.focus(); return; }
            if (WHATSAPP_NUMBER.includes("X")) { drinksError.textContent = "Configure o número do WhatsApp em js/whatsapp.js antes de enviar."; return; }
            window.open(buildWhatsAppUrl(new FormData(form), selected), "_blank", "noopener,noreferrer");
        });
    }
    return { openDrink(drink) { if (!drinkModal || !drinkContent || !drink) return; drinkContent.textContent = ""; drinkContent.appendChild(createDrinkDetail(drink)); rememberAndOpen(drinkModal, document.activeElement); } };
}
