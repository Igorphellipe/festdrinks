import { isSelected, toggleSelection } from "./selection.js";

export const drinks = [
    { id: "gin-tonica", nome: "Gin Tônica", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/gin-tonica.webp", ingredientes: ["Gin", "Água tônica", "Limão siciliano", "Zimbro"] },
    { id: "fitzgerald", nome: "Fitzgerald", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/fitzgerald.webp", ingredientes: ["Gin", "Limão", "Xarope de açúcar", "Bitter aromático"] },
    { id: "gin-tropical", nome: "Gin Tropical", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/gin-tropical.webp", ingredientes: ["Gin", "Maracujá", "Tônica", "Especiarias"] },
    { id: "Clover Club", nome: "Clover Club", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/clover-club.webp", ingredientes: ["Gin", "Framboesa", "Suco de limão Siciliano", "Xarope de açúcar", "Clara de ovo"] },
    { id: "Tom Collins", nome: "Tom Collins", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/tom-collins.webp", ingredientes: ["Gin", "Suco de limão Tahiti", "Xarope de açúcar", "Água com gás", "Cereja Marrasquino"] },
    { id: "Perfect Martini", nome: "Perfect Martini", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/perfect-martini.webp", ingredientes: ["Gin", "Vermute seco", "Vermute tinto", "Casca de Laranja"] },
    { id: "Southside Cocktail", nome: "Southside Cocktail", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/southside-cocktail.webp", ingredientes: ["Gin", "Suco de limão Tahiti", "Xarope de açúcar", "Hortelã"] },
    { id: "Martinez", nome: "Martinez", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/martinez.webp", ingredientes: ["Gin", "Vermute doce", "Licor de Cereja luxardo", "Bitter aromático", "Casca de laranja"] },
    { id: "Gin Fresh", nome: "Gin Fresh", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/gin-fresh.webp", ingredientes: ["Gin", "Suco de limão Siciliano", "Xarope de açúcar", "Lillet blanc"] },
    { id: "Gibson Martini", nome: "Gibson Martini", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/gibson-martini.webp", ingredientes: ["Gin", "Vermute seco", "Cebola em conserva"] },
    { id: "Negroni", nome: "Negroni", categoria: "gin", rotulo: "Gin", imagem: "./assets/drinks/gin/negroni.webp", ingredientes: ["Gin", "Vermute tinto", "Campari", "Casca de laranja"] },
    { id: "moscow-mule", nome: "Moscow Mule", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/moscow-mule.webp", ingredientes: ["Vodka", "Limão", "Xarope de gengibre", "Espuma de gengibre"] },
    { id: "caipiroska", nome: "Caipiroska", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/caipiroska.webp", ingredientes: ["Vodka", "Limão", "Açúcar", "Gelo"] },
    { id: "sex-on-the-beach", nome: "Sex on the Beach", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/sex-on-the-beach.webp", ingredientes: ["Vodka", "Licor de pêssego", "Laranja", "Cranberry"] },
    { id: "screwdriver", nome: "Screwdriver", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/screwdriver.webp", ingredientes: ["Vodka", "Suco de laranja", "Gelo"]},
    { id: "lagoa Azul", nome: "Lagoa Azul", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/lagoa-azul.webp", ingredientes: ["Vodka", "Blue Curaçao", "Suco de limão", "Gelo", "Xarope de açúcar", "Limão Tahiti", "Cereja"] },
    { id: "Watermelon Martini" , nome: "Watermelon Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/watermelon-martini.webp", ingredientes: ["Vodka", "Melancia", "Suco de limão", "licor de laranja", "Xarope de açúcar"] },
    { id: "Black Russian", nome: "Black Russian", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/black-russian.webp", ingredientes: ["Vodka", "Licor de café"] },
    { id: "Kamikaze Cocktail", nome: "Kamikaze Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/kamikaze-cocktail.webp", ingredientes: ["Vodka", "Licor de laranja", "Suco de limão", "Xarope de açúcar"] },
    { id: "Apple Sour Martini", nome: "Apple Sour Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/apple-sour-martini.webp", ingredientes: ["Vodka", "Xarope de maçã verde", "Suco de limão", "Xarope de açúcar", "Licor de laranja"] },
    { id: "Madras Cocktail", nome: "Madras Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/madras-cocktail.webp", ingredientes: ["Vodka", "Suco de laranja", "Suco de cranberry", "Fatia de Laranja"] },
    { id: "White Russian", nome: "White Russian", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/white-russian.webp", ingredientes: ["Vodka", "Licor de café", "Creme de leite"] },
    { id: "Cape Codder", nome: "Cape Codder", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/cape-codder.webp", ingredientes: ["Vodka", "Suco de cranberry", "Gelo", "Suco de Limão Tahiti"] },
    { id: "Expresso Martini", nome: "Expresso Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/expresso-maritni.webp", ingredientes: ["Vodka", "Licor de café", "Café expresso", "Xarope de açúcar"] },
    { id: "Sea Breeze Cocktail", nome: "Sea Breeze Cocktail", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/sea-breeze-cocktail.webp", ingredientes: ["Vodka", "Suco de cranberry", "Suco de grapefruit", "Fatia de grapefruit", "Gelo"] },
    { id: "Pineapple Martini", nome: "Pineapple Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/pineapple-martini.webp", ingredientes: ["Vodka", "Abacaxi", "Licor de laranja", "Xarope de açúcar"] },
    { id: "Bloody Mary", nome: "Bloody Mary", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/bloody-mary.webp", ingredientes: ["Vodka", "Suco de tomate", "Molho inglês", "Pimenta", "Limão", "Pitada de Sal"] },
    { id: "Vodka Martini", nome: "Vodka Martini", categoria: "vodka", rotulo: "Vodka", imagem: "./assets/drinks/vodka/vodka-martini.webp", ingredientes: ["Vodka", "Vermute seco", "Azeitona"] },
    { id: "caipirinha", nome: "Caipirinha", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/cachaca/caipirinha.webp", ingredientes: ["Cachaça", "Limão", "Açúcar", "Gelo"] },
    { id: "caipirinha-frutas", nome: "Caipirinha de Frutas", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/cachaca/caipirinha-frutas.webp", ingredientes: ["Cachaça", "Frutas da estação", "Açúcar", "Gelo"] },
    { id: "rabo-de-galo", nome: "Rabo de Galo", categoria: "cachaca", rotulo: "Cachaça", imagem: "./assets/drinks/cachaca/rabo-de-galo.webp", ingredientes: ["Cachaça", "Vermute tinto", "Bitter", "Casca de laranja"] },
    { id: "pink-lemonade", nome: "Pink Lemonade", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/pink-lemonade.webp", ingredientes: ["Limão", "Frutas vermelhas", "Água com gás", "Xarope artesanal"] },
    { id: "mojito-zero", nome: "Mojito sem Álcool", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/mojito.webp", ingredientes: ["Limão", "Hortelã", "Água com gás", "Açúcar"] },
    { id: "tropical-fresh", nome: "Tropical Fresh", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/tropical-fresh.webp", ingredientes: ["Abacaxi", "Maracujá", "Hortelã", "Água de coco"] },

    // Opções adicionais: altere nome, imagem, descrição e itens conforme o serviço oferecido.
    { id: "espumante", nome: "Espumante", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/hero/hero-02.webp", descricao: "Espumantes selecionados para brindar os momentos especiais do seu evento.", ingredientes: ["Rótulo a definir", "Quantidade conforme o número de convidados", "Serviço gelado"] },
    { id: "mao-de-obra", nome: "Equipe de bar", categoria: "mao-de-obra", rotulo: "Mão de obra", imagem: "./assets/servicos/mao-de-obra.webp", descricao: "Equipe especializada para preparar e servir os drinks durante todo o evento.", ingredientes: ["Bartenders", "Auxiliares de bar", "Montagem e organização"] },
    { id: "balcao-01", nome: "Balcão para eventos", categoria: "balcoes", rotulo: "Balcões", imagem: "./assets/servicos/balcao-01.webp", descricao: "Estrutura de balcão para compor o bar e valorizar a apresentação do evento.", ingredientes: ["Modelo - Balcão Branco com Moldura Marrom", "Montagem no local", "Acabamento personalizado"] },
    { id: "balcao-02", nome: "Balcão para eventos", categoria: "balcoes", rotulo: "Balcões", imagem: "./assets/servicos/balcao-02.webp", descricao: "Estrutura de balcão para compor o bar e valorizar a apresentação do evento.", ingredientes: ["Modelo - Balcão Trançado com Tampo de vidro", "Montagem no local", "Acabamento personalizado"] }
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
    const description = document.createElement("p"); description.className = "drink-description"; description.textContent = drink.descricao ?? "";
    const list = document.createElement("ul"); list.className = "ingredients"; drink.ingredientes.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); });
    const button = document.createElement("button"); button.type = "button"; button.className = "button button-dark";
    const syncLabel = () => { button.textContent = isSelected(drink.id) ? "Remover do orçamento" : "Adicionar ao orçamento"; };
    button.addEventListener("click", () => { toggleSelection(drink.id); syncLabel(); }); syncLabel();
    copy.append(category, title); if (drink.descricao) copy.append(description); copy.append(list, button); wrapper.append(image, copy); return wrapper;
}
