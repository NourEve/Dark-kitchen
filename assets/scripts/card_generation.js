const italianDishes = [
    {
        dishName: "Quatro Fromaggi",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Parmesan, gorgonzola, mozzarella and provolone",
        price: "10€", // €
        icon: "./assets/images/4fromages.webp"
    },

    {
        dishName: "Margherita",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "tomato, mozzarella, fresh basilic, salt and olive oil.",
        price: "8€", // €
        icon: "./assets/images/margarita.webp"
    },

    {
        dishName: "Pepperoni",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Tomato, mozzarella, spicy salami, onions",
        price: "12€", // €
        icon: "./assets/images/peperroni.webp"
    },

    {
        dishName: "Hawaii",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "A réécrire ",
        price: "7€", // €
        icon: "./assets/images/hawaii.webp"
    },

    {
        dishName: "Scampis",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Mozzarella, scampis, feta cheese, tomato, fennel, oregano, black olives.",
        price: "13.50€", // €
        icon: "./assets/images/creme-scampi.webp"
    },

    {
        dishName: "Ham-Mushroom",
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Mushrooms, gruyère cheese, oregano, ham, mozzarella, green olives , tomato.",
        price: "14€", // €
        icon: "./assets/images/ham-mushroom.webp"
    },

    {
        dishName: "Tomato-Mozarrella",
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Mozzarella, tomato, fresh basilic.",
        price: "12.50€", // €
        icon: "./assets/images/mozzarella-tomato.webp"
    },

    {
        dishName: "Bolognèse",
        mainCat: "Pasta",
        subCat: "Spaghetti",
        description: "Ground beef, tomato sauce, onions, celery, carots, and olive oil.",
        price: "10.50€", // €
        icon: "./assets/images/bolognèse.webp"
    },

    {
        dishName: "4 Cheeses",
        mainCat: "Pasta",
        subCat: "Tagliatelle",
        description: "Parmesan, gorgonzola, mozzarella, comté.",
        price: "11€", // €
        icon: "assets/images/tagliatelle.webp"
    },


    {
        dishName: "Tartufa",
        mainCat: "Pasta",
        subCat: "Farfale",
        description: "Black truffle, sour cream, fresh basilic.",
        price: "10.50€", // €
        icon: "./assets/images/farfale-truffes.webp"
    },

    {
        dishName: "Vongole",
        mainCat: "Pasta",
        subCat: "Spaghetti",
        description: "à modifier",
        price: "13.50€", // €
        icon: "assets/images/spaghetti-scampi.webp"
    },

    {
        dishName: "Risotto",
        mainCat: "Other",
        subCat: "",
        description: "Rice, cuttlefish, white wine, shallots, parsley.",
        price: "13.50€", // €
        icon: "assets/images/risotto.webp"
    },

    {dishName: " Lasagne",
    mainCat: "Other",
    subCat: "",
    description: "à modifier",
    price: "14.50€", // €
    icon: "assets/images/lasagne.webp"
    },


    {dishName: " Ossobuco",
    mainCat: "Other",
    subCat: "",
    description: "à modifier",
    price: "15€", // €
    icon: "assets/images/ossobuco.webp"
    },



    {
        dishName: "Crème brulée",
        mainCat: "Desserts",
        subCat: "",
        description: "Chef's crème brulée, made of vanilla and caramel.",
        price: "6.50€", // €
        icon: "assets/images/crème brulée.webp"
    },


    {
        dishName: "Tiramisu",
        mainCat: "Desserts",
        subCat: "",
        description: "The Chef'speciality , traditionnal recepe! ",
        price: "7€", // €
        icon: "assets/images/tiramisu.webp"
    },


    {
        dishName: "Apple crumble",
        mainCat: "Desserts",
        subCat: "",
        description: "For the pleasure of the greediest, a sweet sweetness.",
        price: "7.50€", // €
        icon: "assets/images/crumble.webp"
    },

    {
        dishName: "Fanta",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "assets/images/fanta.webp"
    },

    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "assets/images/coca.webp"
    },



    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Light",
        price: "2.50€", // €
        icon: "assets/images/coca.webp"
    },

    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Zéro",
        price: "2.50€", // €
        icon: "assets/images/coca.webp"
    },

    {
        dishName: "Water",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Still",
        price: "2.50€", // €
        icon: "assets/images/water.webp"
    },

    {
        dishName: "Water",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Sparkling",
        price: "2.50€", // €
        icon: "assets/images/water.webp"
    },

    {
        dishName: "Sprite",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "assets/images/sprite.webp"
    },

    {
        dishName: "Red wine",
        mainCat: "Beverage",
        subCat: "Alcohols",
        description: "Lambrusco",
        price: "18.50€", // €
        icon: "assets/images/red-wine.webp"
    },

    {
        dishName: "White wine",
        mainCat: "Beverage",
        subCat: "Alcohols",
        description: "Pinot grigio",
        price: "15€", // €
        icon: "assets/images/white-wine.webp"
    }
]

function generateCards() {
    let main = document.getElementsByTagName("main")[0];
    let section = document.createElement("section");
    section.className = "main__section";

    for (let dish of italianDishes) {
        // Create the article
        let article = document.createElement("article");
        article.className = dish.mainCat + " " + dish.subCat + " main__section__article article"

        // Create the title (dish name)
        let title = document.createElement("h2");
        title.innerText = dish.dishName;
        title.className = "article__name";
        article.appendChild(title);

        // create the container for the following infos
        let container = document.createElement("div");
        container.className = "article__container";
        article.appendChild(container);

        // Create the dish main category
        let dishmainCat = document.createElement("h3");
        dishmainCat.innerText = dish.mainCat;
        dishmainCat.className = "article__container__mainCat";
        dishmainCat.setAttribute("title", "mainCat");
        container.appendChild(dishmainCat);

        // Create the sub category
        let subCat = document.createElement("h3");
        subCat.innerText = dish.subCat;
        subCat.className = "article__container__subCat";
        subCat.setAttribute("title", dish.subCat);
        container.appendChild(subCat);

        // Create the description pin
        let description = document.createElement("p");
        description.innerText = dish.description;
        description.className = "article__container__description";
        container.appendChild(description);

        // Create the price pin
        let price = document.createElement("h3")
        price.innerText = dish.price;
        price.className = "article__container__price";
        container.appendChild(price);

        // Create a div for the picture
        let divPicture = document.createElement('div')
        divPicture.className = "article__img"
        article.appendChild(divPicture)

        // Create the picture
        let picture = document.createElement("img");
        picture.setAttribute("alt", dish.dishName);
        picture.setAttribute("src", dish.icon);
        picture.setAttribute("title", dish.dishName);
        picture.className = "article__img__bg";
        divPicture.appendChild(picture);

        // Create the "add" button
        let addItem = document.createElement("img")
        addItem.setAttribute("alt", "add");
        addItem.setAttribute("src", "assets/images/icones/ajout-panier.webp");
        addItem.className = "article__addButton";
        article.appendChild(addItem);

        section.appendChild(article);
        main.appendChild(section);
    }
}

generateCards();
