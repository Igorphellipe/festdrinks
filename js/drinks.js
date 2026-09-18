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

    { id: "hugo-spritz", nome: "Hugo Spritz", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/hugo-spritz.webp", novo: true, ingredientes: ["Licor de flor de sabugueiro", "Prosecco", "Água com gás", "Hortelã", "Limão"] },
    { id: "limoncello-spritz", nome: "Limoncello Spritz", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/limoncello-spritz.webp", novo: true, ingredientes: ["Limoncello", "Prosecco", "Água com gás", "Limão siciliano"] },
    { id: "mimosa", nome: "Mimosa", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/mimosa.webp", novo: true, ingredientes: ["Suco de laranja coado", "Espumante"] },
    { id: "lillet-spritz", nome: "Lillet Spritz", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/lillet-spritz.webp", novo: true, ingredientes: ["Lillet Blanc", "Água com gás", "Prosecco", "Laranja"] },
    { id: "aperol-spritz", nome: "Aperol Spritz", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/Aperol-spritz.webp", novo: true, ingredientes: ["Aperol", "Água com gás", "Prosecco", "Laranja"] },
    { id: "kir-royal", nome: "Kir Royal", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/kir-royal.webp", novo: true, ingredientes: ["Vinho branco", "Licor de cassis"] },
    { id: "bellini", nome: "Bellini", categoria: "espumantes", rotulo: "Espumantes", imagem: "./assets/drinks/espumante/bellini.webp", novo: true, ingredientes: ["Suco de pêssego", "Champanhe"] },
    { id: "bacardi-cocktail", nome: "Bacardi Cocktail", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/bacardi-cocktail.webp", novo: true, ingredientes: ["Rum branco", "Suco de limão", "Grenadine"] },
    { id: "cuba-libre", nome: "Cuba Libre", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/cuba-libre.webp", novo: true, ingredientes: ["Rum branco", "Cola", "Limão"] },
    { id: "daiquiri", nome: "Daiquiri", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/daiquiri.webp", novo: true, ingredientes: ["Rum branco", "Suco de limão", "Xarope de açúcar"] },
    { id: "dark-and-stormy", nome: "Dark & Stormy", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/dark-stormy.webp", novo: true, ingredientes: ["Rum escuro", "Ginger Beer", "Limão", "Bitter Aromático Angostura"] },
    { id: "kingston-negroni", nome: "Kingston Negroni", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/kingston-negroni.webp", novo: true, ingredientes: ["Rum envelhecido", "Vermute doce", "Campari"] },
    { id: "pina-colada", nome: "Piña Colada", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/pina-colada.webp", novo: true, ingredientes: ["Rum branco", "Abacaxi", "Leite de coco", "Xarope de açúcar"] },
    { id: "queens-park-swizzle", nome: "Queen's Park Swizzle", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/queens-park-swizzle.webp", novo: true, ingredientes: ["Rum envelhecido", "Suco de limão", "Xarope de açúcar", "Hortelã", "Angostura Aromatic Bitters"] },
    { id: "rum-fashioned", nome: "Rum Fashioned", categoria: "rum", rotulo: "Rum", imagem: "./assets/drinks/rum/rum-fashioned.webp", novo: true, ingredientes: ["Rum envelhecido", "Açúcar", "Angostura Bitters Cacau", "Água com gás", "Bitter de laranja"] },
    { id: "berry-fizz", nome: "Berry Fizz", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/berry-spritz.webp", novo: true, ingredientes: ["Frutas vermelhas", "Suco de limão", "Xarope de açúcar", "Água com gás"] },
    { id: "pineapple-mint-cooler", nome: "Pineapple Mint Cooler", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/pineaple-mint-cooler.webp", novo: true, ingredientes: ["Suco de abacaxi", "Limão", "Hortelã", "Xarope de açúcar", "Água com gás"] },
    { id: "tropical-sunset", nome: "Tropical Sunset", categoria: "sem-alcool", rotulo: "Sem álcool", imagem: "./assets/drinks/sem-alcool/tropical-sunset.webp", novo: true, ingredientes: ["Suco de laranja", "Suco de abacaxi", "Grenadine", "Água com gás"] },
    { id: "black-manhattan", nome: "Black Manhattan", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whiskey", "Amaro Italiano", "Angostura Aromatic Bitters", "Angostura Orange Bitters"] },
    { id: "boulevardier", nome: "Boulevardier", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whiskey", "Campari", "Vermute doce", "Laranja"] },
    { id: "gold-rush", nome: "Gold Rush", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whisky", "Suco de limão siciliano", "Xarope de mel"] },
    { id: "irish-coffee", nome: "Irish Coffee", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Irlandês Whiskey", "Café", "Xarope de açúcar", "Creme de leite", "Noz-moscada"] },
    { id: "jack-lemonade", nome: "Jack Lemonade", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Jack Daniel's", "Limão siciliano", "Xarope de açúcar", "Água", "Suco de limão siciliano"] },
    { id: "manhattan", nome: "Manhattan", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whiskey", "Vermute doce", "Angostura Aromatic Bitters", "Cereja Marrasquino"] },
    { id: "mint-julep", nome: "Mint Julep", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon", "Hortelã", "Xarope de açúcar", "Angostura Bitter"] },
    { id: "new-york-sour-i", nome: "New York Sour I", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon", "Vinho tinto", "Suco de limão siciliano", "Xarope de açúcar", "Clara de ovo"] },
    { id: "new-york-sour-ii", nome: "New York Sour II", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Whiskey Bourbon", "Suco de limão", "Xarope de açúcar", "Vinho tinto"] },
    { id: "old-fashioned", nome: "Old Fashioned", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whiskey", "Açúcar", "Angostura Aromatic Bitters", "Água com gás"] },
    { id: "paper-plane", nome: "Paper Plane", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon", "Aperol", "Amaro Montenegro", "Suco de limão siciliano"] },
    { id: "rusty-nail", nome: "Rusty Nail", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Scotch Whisky", "Drambuie"] },
    { id: "sazerac", nome: "Sazerac", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Rye Whiskey", "Absinto", "Açúcar", "Peychaud's Bitters"] },
    { id: "scofflaw-cocktail", nome: "Scofflaw Cocktail", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon Whiskey", "Vermute seco", "Suco de limão siciliano", "Grenadine", "Orange Bitters"] },
    { id: "whisky-fix", nome: "Whisky Fix", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Bourbon", "Xarope de açúcar", "Suco de limão siciliano", "Cereja Marraquino"] },
    { id: "whisky-sour", nome: "Whisky Sour", categoria: "whisky", rotulo: "Whisky", novo: true, ingredientes: ["Scotch Whisky", "Suco de limão", "Xarope de açúcar", "Clara de ovo", "Angostura Aromatic Bitters"] },
    { id: "tequila-sunrise", nome: "Tequila Sunrise", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila prata", "Suco de laranja", "Xarope de grenadine"] },
    { id: "tequila-manga-pimenta", nome: "Tequila de Manga com Pimenta", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila", "Licor de laranja", "Suco de limão", "Xarope de pimenta", "Pimenta dedo-de-moça", "Manga"] },
    { id: "tequila-blue-margarita", nome: "Tequila Blue Margarita", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila", "Licor de Blue Curaçao", "Suco de limão", "Xarope de açúcar"] },
    { id: "cucaracha", nome: "Cucaracha", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila", "Licor de café"] },
    { id: "paloma-cocktail", nome: "Paloma Cocktail", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila prata", "Suco de grapefruit ou toranja", "Suco de limão tahiti", "Xarope de açúcar"] },
    { id: "tequila-margarita", nome: "Tequila Margarita", categoria: "tequila", rotulo: "Tequila", novo: true, ingredientes: ["Tequila", "Licor de laranja", "Suco de limão", "Xarope de açúcar"] },
    { id: "amaretto-sour", nome: "Amaretto Sour", categoria: "amaretto", rotulo: "Amaretto", novo: true, ingredientes: ["Amaretto", "Whisky escocês", "Suco de limão siciliano", "Xarope de açúcar", "Angostura Bitter", "Bitter de laranja", "Clara de ovo"] },
    { id: "madame-paulista", nome: "Madame Paulista", categoria: "cachaca", rotulo: "Cachaça", novo: true, ingredientes: ["Cachaça envelhecida", "Amaro Rosatto", "Licor de flor de sabugueiro", "Xarope de açúcar", "Bitter de cereja"] },
    { id: "ginga-na-pinga", nome: "Ginga na Pinga", categoria: "cachaca", rotulo: "Cachaça", novo: true, ingredientes: ["Cachaça envelhecida", "Framboesa ou morango", "Polpa de maracujá", "Xarope de açúcar", "Suco de laranja"] },
    { id: "cura-tudo", nome: "Cura Tudo", categoria: "cachaca", rotulo: "Cachaça", novo: true, ingredientes: ["Cachaça", "Gengibre", "Suco de limão siciliano ou tahiti", "Mel"] },
    { id: "macunaima", nome: "Macunaíma", categoria: "cachaca", rotulo: "Cachaça", novo: true, ingredientes: ["Cachaça branca", "Xarope de açúcar", "Fernet", "Suco de limão tahiti"] },
    { id: "brandy-flip", nome: "Brandy Flip", categoria: "brandy", rotulo: "Brandy", novo: true, ingredientes: ["Brandy", "Ovo inteiro", "Xarope de açúcar", "Leite", "Noz-moscada"] },
    { id: "pisco-sour", nome: "Pisco Sour", categoria: "pisco", rotulo: "Pisco", novo: true, ingredientes: ["Pisco", "Xarope de açúcar", "Suco de limão siciliano", "Clara de ovo", "Bitter aromático"] },

    // Opções adicionais: altere nome, imagem, descrição e itens conforme o serviço oferecido.

    { id: "mao-de-obra", nome: "Equipe de bar", categoria: "mao-de-obra", rotulo: "Mão de obra", imagem: "./assets/servicos/mao-de-obra.webp", descricao: "Equipe especializada para preparar e servir os drinks durante todo o evento.", ingredientes: ["Bartenders", "Auxiliares de bar", "Montagem e organização"] },
    { id: "balcao-01", nome: "Balcão para eventos", categoria: "balcoes", rotulo: "Balcões", imagem: "./assets/servicos/balcao-01.webp", descricao: "Estrutura de balcão para compor o bar e valorizar a apresentação do evento.", ingredientes: ["Modelo - Balcão Branco com Moldura Marrom", "Montagem no local", "Acabamento personalizado"] },
    { id: "balcao-02", nome: "Balcão para eventos", categoria: "balcoes", rotulo: "Balcões", imagem: "./assets/servicos/balcao-02.webp", descricao: "Estrutura de balcão para compor o bar e valorizar a apresentação do evento.", ingredientes: ["Modelo - Balcão Trançado com Tampo de vidro", "Montagem no local", "Acabamento personalizado"] }
];

const imagensDosNovosDrinks = {
    "black-manhattan": "./assets/drinks/whisky/black-manhattan.webp",
    boulevardier: "./assets/drinks/whisky/boulevardie.webp",
    "gold-rush": "./assets/drinks/whisky/gold-rush.webp",
    "irish-coffee": "./assets/drinks/whisky/irish-coffee.webp",
    "jack-lemonade": "./assets/drinks/whisky/jack-lemonade.webp",
    manhattan: "./assets/drinks/whisky/manhattan.webp",
    "mint-julep": "./assets/drinks/whisky/mint-julep.webp",
    "new-york-sour-i": "./assets/drinks/whisky/new-york-sour-I.webp",
    "new-york-sour-ii": "./assets/drinks/whisky/new-york-sour-II.webp",
    "old-fashioned": "./assets/drinks/whisky/old-fashioned.webp",
    "paper-plane": "./assets/drinks/whisky/paper-plane.webp",
    "rusty-nail": "./assets/drinks/whisky/rusty-nail.webp",
    sazerac: "./assets/drinks/whisky/sazerac.webp",
    "scofflaw-cocktail": "./assets/drinks/whisky/scofflaw-cocktail.webp",
    "whisky-fix": "./assets/drinks/whisky/whiskey-fix.webp",
    "whisky-sour": "./assets/drinks/whisky/whisky-sour.webp",
    "tequila-sunrise": "./assets/drinks/tequila/tequila-sunrise.webp",
    "tequila-manga-pimenta": "./assets/drinks/tequila/tequila-manga-pimenta.webp",
    "tequila-blue-margarita": "./assets/drinks/tequila/tequila-blue-marguerita.webp",
    cucaracha: "./assets/drinks/tequila/cucaracha.webp",
    "paloma-cocktail": "./assets/drinks/tequila/paloma-cocktail.webp",
    "tequila-margarita": "./assets/drinks/tequila/tequila-margarita.webp",
    "amaretto-sour": "./assets/drinks/whisky/amaretto-sour.webp",
    "madame-paulista": "./assets/drinks/cachaca/Madame-paulista.webp",
    "ginga-na-pinga": "./assets/drinks/cachaca/Ginga-na-Pinga.webp",
    "cura-tudo": "./assets/drinks/cachaca/cura-tudo.webp",
    macunaima: "./assets/drinks/cachaca/macunaíma.webp",
    "brandy-flip": "./assets/drinks/brandy-flip.webp",
    "pisco-sour": "./assets/drinks/pisco.webp"
};

drinks.forEach((drink) => {
    if (!drink.imagem) drink.imagem = imagensDosNovosDrinks[drink.id];
});

export const getDrink = (id) => drinks.find((drink) => drink.id === id);

export function initDrinks({ openDrink }) {
    const grid = document.querySelector("[data-drinks-grid]");
    const filters = document.querySelectorAll("[data-filter]");
    if (!grid) return;

    const render = (filter = "gin") => {
        const visible = drinks.filter((drink) => drink.categoria === filter);
        const cards = visible.map((drink) => {
            const card = document.createElement("button");
            card.type = "button"; card.className = `drink-card${drink.novo ? " drink-card-new" : ""}`; card.dataset.drinkId = drink.id;
            card.setAttribute("aria-label", `Ver detalhes de ${drink.nome}`);
            if (drink.imagem) {
                const image = document.createElement("img"); image.src = drink.imagem; image.alt = ""; image.loading = "lazy"; image.decoding = "async"; card.append(image);
            } else {
                const placeholder = document.createElement("span"); placeholder.className = "drink-card-placeholder"; placeholder.textContent = "Imagem pendente"; card.append(placeholder);
            }
            const content = document.createElement("span"); content.className = "drink-card-content";
            const name = document.createElement("p"); name.textContent = drink.nome;
            const hint = document.createElement("span"); hint.textContent = "Ver drink";
            content.append(name, hint); card.append(content); return card;
        });
        grid.textContent = "";
        cards.forEach((card) => grid.appendChild(card));
    };

    filters.forEach((button) => button.addEventListener("click", () => {
        filters.forEach((item) => { item.classList.toggle("filter-active", item === button); item.setAttribute("aria-pressed", String(item === button)); });
        render(button.dataset.filter);
    }));
    grid.addEventListener("click", (event) => { const card = event.target.closest("[data-drink-id]"); if (card) openDrink(getDrink(card.dataset.drinkId)); });
    const activeButton = document.querySelector("[data-filter].filter-active");
    const activeFilter = activeButton ? activeButton.dataset.filter : "gin";
    render(activeFilter);
}

export function createDrinkDetail(drink) {
    const wrapper = document.createElement("article"); wrapper.className = "drink-detail";
    const image = document.createElement(drink.imagem ? "img" : "div"); image.className = drink.imagem ? "" : "drink-detail-placeholder";
    if (drink.imagem) { image.src = drink.imagem; image.alt = `Apresentação do drink ${drink.nome}`; image.width = 400; image.height = 400; } else { image.textContent = "Imagem pendente"; }
    const copy = document.createElement("div");
    const category = document.createElement("p"); category.className = "eyebrow"; category.textContent = drink.rotulo;
    const title = document.createElement("h2"); title.id = "drink-modal-title"; title.textContent = drink.nome;
    const description = document.createElement("p"); description.className = "drink-description"; description.textContent = drink.descricao || "";
    const list = document.createElement("ul"); list.className = "ingredients"; drink.ingredientes.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); });
    const button = document.createElement("button"); button.type = "button"; button.className = "button button-dark";
    const syncLabel = () => { button.textContent = isSelected(drink.id) ? "Remover do orçamento" : "Adicionar ao orçamento"; };
    button.addEventListener("click", () => { toggleSelection(drink.id); syncLabel(); }); syncLabel();
    copy.append(category, title); if (drink.descricao) copy.append(description); copy.append(list, button); wrapper.append(image, copy); return wrapper;
}
