const italianDishes = [
    {
        dishName: "Quatro Fromaggi",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Parmesan, gorgonzola, mozzarella et du provolone",
        price: "10€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Margherita",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "tomates, mozzarella, basilic frais, sel et huile d'olive.",
        price: "8€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Pepperoni",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Tomate, mozzarella, salami piquant, oignons",
        price: "12€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Napolitaine",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Tomates pelées, huile, ail, origan et sel.",
        price: "7€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Scampis", // excuse my french
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Mozzarella, scampis, feta, tomates, fenouil, origan, olives noires.",
        price: "13.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Jambon-Champignon", // excuse my french
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Champignons, gruyère, origan, jambon, mozzarella, olives vertes, tomate.",
        price: "14€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Tomate-Mozarrella", // excuse my french
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Mozzarella, tomates, basilic.",
        price: "12.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Bolognèse", // excuse my french
        mainCat: "Pâtes",
        subCat: "Spaghetti",
        description: "Bœuf haché, sauce tomate, oignon, céleri, carottes, et huile d'olive.",
        price: "10.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "4 fromages", // excuse my french
        mainCat: "Pâtes",
        subCat: "Penne",
        description: "Parmesan, gorgonzola, mozzarella, comté.",
        price: "11€", // €
        icon: "./assets/images/YOUR/icon"
    },


    {
        dishName: "Tartufa", // excuse my french
        mainCat: "Pâtes",
        subCat: "Penne",
        description: "Truffe noire, crème fraiche, basilic.",
        price: "10.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Vongole", // excuse my french
        mainCat: "Pâtes",
        subCat: "Spaghetti",
        description: "Palourdes, tomates cerises, vin blanc, ail, persil.",
        price: "13.50€", // €
        icon: "./assets/images/YOUR/icon"
    },


    {
        dishName: "Crème brulée", // excuse my french
        mainCat: "Desserts",
        subCat: "",
        description: "Crème brulée du chef, à base de vanille et de caramel.",
        price: "6.50€", // €
        icon: "./assets/images/YOUR/icon"
    },


    {
        dishName: "Tiramisu", // excuse my french
        mainCat: "Desserts",
        subCat: "",
        description: "Spécialité du chef, recette traditionnelle! ",
        price: "7€", // €
        icon: "./assets/images/YOUR/icon"
    },


    {
        dishName: "Crumble aux pommes", // excuse my french
        mainCat: "Desserts",
        subCat: "",
        description: "Pour le plaisir des plus gourmands, une douceur sucrée ",
        price: "7.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Fanta", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Coca-Cola", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Eau", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "Plate",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },
    {
        dishName: "Eau", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "Pétillante",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Coca-Cola", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "Light",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Coca-Cola", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "Zéro",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Sprite", // excuse my french
        mainCat: "Boissons",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Vin rouge", // excuse my french
        mainCat: "Boissons",
        subCat: "Alcools",
        description: "Lambrusco",
        price: "18.50€", // €
        icon: "./assets/images/YOUR/icon"
    },

    {
        dishName: "Vin blanc", // excuse my french
        mainCat: "Boissons",
        subCat: "Alcools",
        description: "Pinot grigio",
        price: "15€", // €
        icon: "./assets/images/YOUR/icon"
    },







];

// italianDishes.sort(() => Math.random() - 0.5);

function generateCards() {
    let main = document.getElementsByTagName("main")[0];
    let section = document.createElement("section");

    for (let dish of italianDishes) {
        // Create the article
        let article = document.createElement("article");
        article.className = dish.dishName;

        // Create the title (dish name)
        let title = document.createElement("h2");
        title.innerText = dish.dishName;
        article.appendChild(title);

        //Generate the flipped shadows text
        // let flipped = document.createElement("h2");
        // flipped.innerText = dish.dishName;
        // flipped.mainCatdishName = "backwards";
        // article.appendChild(flipped);

        // Create the picture
        let picture = document.createElement("img");
        picture.setAttribute("alt", dish.dishName);
        picture.setAttribute("src", dish.icon);
        picture.setAttribute("title", dish.dishName);
        article.appendChild(picture);

        // create the container for the following infos
        let container = document.createElement("div");
        container.className = "container";
        article.appendChild(container);

        // Create the dish main category
        let dishmainCat = document.createElement("h3");
        dishmainCat.innerText = dish.mainCat;
        dishmainCat.className = "mainCat";
        dishmainCat.setAttribute("title", "mainCat");
        container.appendChild(dishmainCat);

        // Create the sub category
        let subCat = document.createElement("h3");
        subCat.innerText = dish.subCat;
        subCat.mainCatdishName = "subCat";
        subCat.setAttribute("title", dish.subCat);
        container.appendChild(subCat);

        // Create the description pin
        let description = document.createElement("p")
        description.innerText = dish.description;
        description.className = "description";
        container.appendChild(description);

        // Create the price pin
        let price = document.createElement("h3")
        price.innerText = dish.price;
        price.className = "price";
        container.appendChild(price);

        section.appendChild(article);
        main.appendChild(section);
    }
}

generateCards();
