import { isSelected, toggleSelection } from "./selection.js";

export const drinks = [
    { id: "gin-tonica", nome: "Gin Tônica", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin-tonica.jpg", ingredientes: ["Gin", "Água tônica", "Limão siciliano", "Zimbro"] },
    { id: "fitzgerald", nome: "Fitzgerald", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/fitzgerald.jpg", ingredientes: ["Gin", "Limão", "Xarope de açúcar", "Bitter aromático"] },
    { id: "gin-tropical", nome: "Gin Tropical", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin-tropical.jpg", ingredientes: ["Gin", "Maracujá", "Tônica", "Especiarias"] },
    { id: "Clover Club", nome: "Clover Club", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/clover-club.jpg", ingredientes: ["Gin", "Framboesa", "Suco de limão Siciliano", "Xarope de açúcar", "Clara de ovo"] },
    { id: "Tom Collins", nome: "Tom Collins", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/tom-collins.jpg", ingredientes: ["Gin", "Suco de limão Tahiti", "Xarope de açúcar", "Água com gás", "Cereja Marrasquino"] },
    { id: "Perfect Martini", nome: "Perfect Martini", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/perfect-martini.jpg", ingredientes: ["Gin", "Vermute seco", "Vermute tinto", "Casca de Laranja"] },
    { id: "Southside Cocktail", nome: "Southside Cocktail", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/southside-cocktail.jpg", ingredientes: ["Gin", "Suco de limão Tahiti", "Xarope de açúcar", "Hortelã"] },
    { id: "Martinez", nome: "Martinez", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/martinez.jpg", ingredientes: ["Gin", "Vermute doce", "Licor de Cereja luxardo", "Bitter aromático", "Casca de laranja"] },
    { id: "Gin Fresh", nome: "Gin Fresh", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin-fresh.jpg", ingredientes: ["Gin", "Suco de limão Siciliano", "Xarope de açúcar", "Lillet blanc"] },
    { id: "Gibson Martini", nome: "Gibson Martini", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gibson-martini.png", ingredientes: ["Gin", "Vermute seco", "Cebola em conserva"] },
    { id: "Negroni", nome: "Negroni", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/negroni.jpg", ingredientes: ["Gin", "Vermute tinto", "Campari", "Casca de laranja"] },
    { id: "moscow-mule", nome: "Moscow Mule", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/moscow-mule.jpg", ingredientes: ["Vodka", "Limão", "Xarope de gengibre", "Espuma de gengibre"] },
    { id: "caipiroska", nome: "Caipiroska", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/caipiroska.jpg", ingredientes: ["Vodka", "Limão", "Açúcar", "Gelo"] },
    { id: "sex-on-the-beach", nome: "Sex on the Beach", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/sex-on-the-beach.jpg", ingredientes: ["Vodka", "Licor de pêssego", "Laranja", "Cranberry"] },
    { id: "screwdriver", nome: "Screwdriver", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/screwdriver.jpg", ingredientes: ["Vodka", "Suco de laranja", "Gelo"]},
    { id: "lagoa Azul", nome: "Lagoa Azul", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/lagoa-azul.jpg", ingredientes: ["Vodka", "Blue Curaçao", "Suco de limão", "Gelo", "Xarope de açúcar", "Limão Tahiti", "Cereja"] },
    { id: "Watermelon Martini" , nome: "Watermelon Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/watermelon-martini.jpg", ingredientes: ["Vodka", "Melancia", "Suco de limão", "licor de laranja", "Xarope de açúcar"] },
    { id: "Black Russian", nome: "Black Russian", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/black-russian.jpg", ingredientes: ["Vodka", "Licor de café"] },
    { id: "Kamikaze Cocktail", nome: "Kamikaze Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/kamikaze-cocktail.jpg", ingredientes: ["Vodka", "Licor de laranja", "Suco de limão", "Xarope de açúcar"] },
    { id: "Apple Sour Martini", nome: "Apple Sour Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/apple-sour-martini.jpg", ingredientes: ["Vodka", "Xarope de maçã verde", "Suco de limão", "Xarope de açúcar", "Licor de laranja"] },
    { id: "Madras Cocktail", nome: "Madras Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/madras-cocktail.jpg", ingredientes: ["Vodka", "Suco de laranja", "Suco de cranberry", "Fatia de Laranja"] },
    { id: "White Russian", nome: "White Russian", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/white-russian.jpg", ingredientes: ["Vodka", "Licor de café", "Creme de leite"] },
    { id: "Cape Codder", nome: "Cape Codder", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/cape-codder.jpg", ingredientes: ["Vodka", "Suco de cranberry", "Gelo", "Suco de Limão Tahiti"] },
    { id: "Expresso Martini", nome: "Expresso Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/expresso-maritni.jpg", ingredientes: ["Vodka", "Licor de café", "Café expresso", "Xarope de açúcar"] },
    { id: "Sea Breeze Cocktail", nome: "Sea Breeze Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/sea-breeze-cocktail.jpg", ingredientes: ["Vodka", "Suco de cranberry", "Suco de grapefruit", "Fatia de grapefruit", "Gelo"] },
    { id: "Pineapple Martini", nome: "Pineapple Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/pineapple-martini.jpg", ingredientes: ["Vodka", "Abacaxi", "Licor de laranja", "Xarope de açúcar"] },
    { id: "Bloody Mary", nome: "Bloody Mary", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/bloody-mary.jpg", ingredientes: ["Vodka", "Suco de tomate", "Molho inglês", "Pimenta", "Limão", "Pitada de Sal"] },
    { id: "Vodka Martini", nome: "Vodka Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka-martini.jpg", ingredientes: ["Vodka", "Vermute seco", "Azeitona"] },    
    { id: "caipirinha", nome: "Caipirinha", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/caipirinha.jpg", ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"] },
    { id: "caipirinha-frutas", nome: "Caipirinha de Frutas", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/caipirinha-frutas.jpg", ingredientes: ["Cachaça", "Frutas da estação", "Açúcar", "Gelo"] },
    { id: "rabo-de-galo", nome: "Rabo de Galo", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/rabo-de-galo.jpg", ingredientes: ["Cachaça", "Vermute tinto", "Bitter", "Casca de laranja"] },
    { id: "pink-lemonade", nome: "Pink Lemonade", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/pink-lemonade.jpg", ingredientes: ["Limão", "Frutas vermelhas", "Água com gás", "Xarope artesanal"] },
    { id: "mojito-zero", nome: "Mojito sem Álcool", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/mojito.jpg", ingredientes: ["Limão", "Hortelã", "Água com gás", "Açúcar"] },
    { id: "tropical-fresh", nome: "Tropical Fresh", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/tropical-fresh.jpg", ingredientes: ["Abacaxi", "Maracujá", "Hortelã", "Água de coco"] }
];

const optimizedImage = (path) => path.replace(/\.(jpe?g|png)$/i, ".webp");

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
            const image = document.createElement("img"); image.src = optimizedImage(drink.imagem); image.alt = ""; image.loading = "lazy"; image.decoding = "async";
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
    const image = document.createElement("img"); image.src = optimizedImage(drink.imagem); image.alt = `Apresentação do drink ${drink.nome}`; image.width = 400; image.height = 400;
    const copy = document.createElement("div");
    const category = document.createElement("p"); category.className = "eyebrow"; category.textContent = drink.rotulo;
    const title = document.createElement("h2"); title.id = "drink-modal-title"; title.textContent = drink.nome;
    const list = document.createElement("ul"); list.className = "ingredients"; drink.ingredientes.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); });
    const button = document.createElement("button"); button.type = "button"; button.className = "button button-dark";
    const syncLabel = () => { button.textContent = isSelected(drink.id) ? "Remover do orçamento" : "Adicionar ao orçamento"; };
    button.addEventListener("click", () => { toggleSelection(drink.id); syncLabel(); }); syncLabel();
    copy.append(category, title, list, button); wrapper.append(image, copy); return wrapper;
}
