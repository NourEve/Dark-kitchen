const italianDishes = [
    {
        dishName: "Quatro Fromaggi",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Parmesan, gorgonzola, mozzarella and provolone",
        price: "10€", // €
        icon: "./assets/images/Pizza-quatre-fromages-traditionnelle-italienne.jpg"
    },

    {
        dishName: "Margherita",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "tomato, mozzarella, fresh basilic, salt and olive oil.",
        price: "8€", // €
        icon: "./assets/images/Margherita-Pizza-scaled.jpg"
    },

    {
        dishName: "Pepperoni",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Tomato, mozzarella, spicy salami, onions",
        price: "12€", // €
        icon: "./assets/images/pizza-pepperoni.jpg"
    },

    {
        dishName: "Napolitaine",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Peeled tomato, oil, garlic, oregano and salt.",
        price: "7€", // €
        icon: "./assets/images/pizza_napolitaine-659x600.jpg"
    },

    {
        dishName: "Scampis",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Mozzarella, scampis, feta cheese, tomato, fennel, oregano, black olives.",
        price: "13.50€", // €
        icon: "./assets/images/pizza-scampis.jpg"
    },

    {
        dishName: "Ham-Mushroom",
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Mushrooms, gruyère cheese, oregano, ham, mozzarella, green olives , tomato.",
        price: "14€", // €
        icon: "./assets/images/calzone-jambon-champi.jpg"
    },

    {
        dishName: "Tomato-Mozarrella",
        mainCat: "Pizza",
        subCat: "Calzone",
        description: "Mozzarella, tomato, fresh basilic.",
        price: "12.50€", // €
        icon: "./assets/images/calzone-tomate-mozza.jpg"
    },

    {
        dishName: "Bolognèse",
        mainCat: "Pasta",
        subCat: "Spaghetti",
        description: "Ground beef, tomato sauce, onions, celery, carots, and olive oil.",
        price: "10.50€", // €
        icon: "./assets/images/pâte-bolognaise.jpg"
    },

    {
        dishName: "4 Cheeses",
        mainCat: "Pasta",
        subCat: "Penne",
        description: "Parmesan, gorgonzola, mozzarella, comté.",
        price: "11€", // €
        icon: "./assets/images/penne-4-fromages.jpg"
    },


    {
        dishName: "Tartufa",
        mainCat: "Pasta",
        subCat: "Penne",
        description: "Black truffle, sour cream, fresh basilic.",
        price: "10.50€", // €
        icon: "./assets/images/penne-a-la-truffe-creme.jpg"
    },

    {
        dishName: "Vongole",
        mainCat: "Pasta",
        subCat: "Spaghetti",
        description: "Clams, cherry tomatoes, white wine, garlic, parsley.",
        price: "13.50€", // €
        icon: "./assets/images/pate-vongole.jpg"
    },

    {
        dishName: "Risotto with cuttlefish",
        mainCat: "Other",
        subCat: "",
        description: "Rice, cuttlefish, white wine, shallots, parsley.",
        price: "13.50€", // €
        icon: "./assets/images/risotto.jpg"
    },

    {dishName: " Milanese Cutlets",
    mainCat: "Other",
    subCat: "",
    description: "Cutlets, parmesan and pepper.",
    price: "14.50€", // €
    icon: "./assets/images/escalope.jpg"
    },


    {dishName: " Beef Spezzatino",
    mainCat: "Other",
    subCat: "",
    description: "Braised beef, carotts, tomatoes, parsley, potatoes and celery.",
    price: "15€", // €
    icon: "./assets/images/beef.jpg"
    },



    {
        dishName: "Crème brulée",
        mainCat: "Desserts",
        subCat: "",
        description: "Chef's crème brulée, made of vanilla and caramel.",
        price: "6.50€", // €
        icon: "./assets/images/dessert-creme-brulee.jpeg"
    },


    {
        dishName: "Tiramisu",
        mainCat: "Desserts",
        subCat: "",
        description: "The Chef'speciality , traditionnal recepe! ",
        price: "7€", // €
        icon: "./assets/images/dessert-tiramisu.jpg"
    },


    {
        dishName: "Apple crumble",
        mainCat: "Desserts",
        subCat: "",
        description: "For the pleasure of the greediest, a sweet sweetness.",
        price: "7.50€", // €
        icon: "./assets/images/crumble-aux-pommes.jpeg"
    },

    {
        dishName: "Fanta",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/Fanta.jpg"
    },

    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/coca.jpg"
    },



    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Light",
        price: "2.50€", // €
        icon: "./assets/images/coca-light.jpg"
    },

    {
        dishName: "Coca-Cola",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Zéro",
        price: "2.50€", // €
        icon: "./assets/images/coca-zero.jpg"
    },

    {
        dishName: "Water",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Still",
        price: "2.50€", // €
        icon: "./assets/images/eau-plate.jpg"
    },

    {
        dishName: "Water",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "Sparkling",
        price: "2.50€", // €
        icon: "./assets/images/eau-pet.jpg"
    },

    {
        dishName: "Sprite",
        mainCat: "Beverage",
        subCat: "Soft",
        description: "",
        price: "2.50€", // €
        icon: "./assets/images/sprite.jpg"
    },

    {
        dishName: "Red wine",
        mainCat: "Beverage",
        subCat: "Alcohols",
        description: "Lambrusco",
        price: "18.50€", // €
        icon: "./assets/images/vin-rouge.jpg"
    },

    {
        dishName: "White wine",
        mainCat: "Beverage",
        subCat: "Alcohols",
        description: "Pinot grigio",
        price: "15€", // €
        icon: "./assets/images/vin-blanc.jpg"
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
        addItem.setAttribute("src", "assets/images/icones/ajout-panier.png");
        addItem.className = "article__addButton";
        divPicture.appendChild(addItem);

        section.appendChild(article);
        main.appendChild(section);
    }
}

generateCards();
