import { isSelected, toggleSelection } from "./selection.js";

export const drinks = [
    { id: "gin-tonica", nome: "Gin Tônica", categoria: "gin", rotulo: "Gin", imagem: "./assets/hero/hero-01.png", ingredientes: ["Gin", "Água tônica", "Limão siciliano", "Zimbro"] },
    { id: "fitzgerald", nome: "Fitzgerald", categoria: "gin", rotulo: "Gin", imagem: "./assets/hero/hero-02.png", ingredientes: ["Gin", "Limão", "Xarope de açúcar", "Bitter aromático"] },
    { id: "gin-tropical", nome: "Gin Tropical", categoria: "gin", rotulo: "Gin", imagem: "./assets/hero/hero-03.png", ingredientes: ["Gin", "Maracujá", "Tônica", "Especiarias"] },
    { id: "moscow-mule", nome: "Moscow Mule", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/hero/hero-02.png", ingredientes: ["Vodka", "Limão", "Xarope de gengibre", "Espuma de gengibre"] },
    { id: "caipiroska", nome: "Caipiroska", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/hero/hero-03.png", ingredientes: ["Vodka", "Limão", "Açúcar", "Gelo"] },
    { id: "sex-on-the-beach", nome: "Sex on the Beach", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/hero/hero-01.png", ingredientes: ["Vodka", "Licor de pêssego", "Laranja", "Cranberry"] },
    { id: "caipirinha", nome: "Caipirinha", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/hero/hero-03.png", ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"] },
    { id: "caipirinha-frutas", nome: "Caipirinha de Frutas", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/hero/hero-01.png", ingredientes: ["Cachaça", "Frutas da estação", "Açúcar", "Gelo"] },
    { id: "rabo-de-galo", nome: "Rabo de Galo", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/hero/hero-02.png", ingredientes: ["Cachaça", "Vermute tinto", "Bitter", "Casca de laranja"] },
    { id: "pink-lemonade", nome: "Pink Lemonade", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/hero/hero-01.png", ingredientes: ["Limão", "Frutas vermelhas", "Água com gás", "Xarope artesanal"] },
    { id: "mojito-zero", nome: "Mojito sem Álcool", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/hero/hero-02.png", ingredientes: ["Limão", "Hortelã", "Água com gás", "Açúcar"] },
    { id: "tropical-fresh", nome: "Tropical Fresh", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/hero/hero-03.png", ingredientes: ["Abacaxi", "Maracujá", "Hortelã", "Água de coco"] }
];

export const getDrink = (id) => drinks.find((drink) => drink.id === id);

export function initDrinks({ openDrink }) {
    const grid = document.querySelector("[data-drinks-grid]");
    const filters = document.querySelectorAll("[data-filter]");
    if (!grid) return;

    const render = (filter = "todos") => {
        const visible = filter === "todos" ? drinks : drinks.filter((drink) => drink.categoria === filter);
        grid.replaceChildren(...visible.map((drink) => {
            const card = document.createElement("button");
            card.type = "button"; card.className = "drink-card"; card.dataset.drinkId = drink.id;
            card.setAttribute("aria-label", `Ver detalhes de ${drink.nome}`);
            const image = document.createElement("img"); image.src = drink.imagem; image.alt = ""; image.loading = "lazy"; image.decoding = "async";
            const content = document.createElement("span"); content.className = "drink-card-content";
            const name = document.createElement("p"); name.textContent = drink.nome;
            const hint = document.createElement("span"); hint.textContent = "Ver drink";
            content.append(name, hint); card.append(image, content); return card;
        }));
    };

    filters.forEach((button) => button.addEventListener("click", () => {
        filters.forEach((item) => { item.classList.toggle("filter-active", item === button); item.setAttribute("aria-pressed", String(item === button)); });
        render(button.dataset.filter);
    }));
    grid.addEventListener("click", (event) => { const card = event.target.closest("[data-drink-id]"); if (card) openDrink(getDrink(card.dataset.drinkId)); });
    render();
}

export function createDrinkDetail(drink) {
    const wrapper = document.createElement("article"); wrapper.className = "drink-detail";
    const image = document.createElement("img"); image.src = drink.imagem; image.alt = `Apresentação do drink ${drink.nome}`; image.width = 400; image.height = 400;
    const copy = document.createElement("div");
    const category = document.createElement("p"); category.className = "eyebrow"; category.textContent = drink.rotulo;
    const title = document.createElement("h2"); title.id = "drink-modal-title"; title.textContent = drink.nome;
    const list = document.createElement("ul"); list.className = "ingredients"; drink.ingredientes.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); });
    const button = document.createElement("button"); button.type = "button"; button.className = "button button-dark";
    const syncLabel = () => { button.textContent = isSelected(drink.id) ? "Remover do orçamento" : "Adicionar ao orçamento"; };
    button.addEventListener("click", () => { toggleSelection(drink.id); syncLabel(); }); syncLabel();
    copy.append(category, title, list, button); wrapper.append(image, copy); return wrapper;
}
