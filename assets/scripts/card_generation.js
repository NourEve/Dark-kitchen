const italianDishes = [
    {
        dishName: "Quatro Fromaggi",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur reiciendis blanditiis beatae placeat harum, deleniti laborum, corrupti aliquam temporibus architecto eveniet facere unde cum? Labore a sunt natus illum!",
        price: "10€", // €
        Icon: "./assets/images/YOUR/ICON"
    },

    {
        dishName: "Margherita",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur reiciendis blanditiis beatae placeat harum, deleniti laborum, corrupti aliquam temporibus architecto eveniet facere unde cum? Labore a sunt natus illum!",
        price: "8.50€", // €
        Icon: "./assets/images/YOUR/ICON"
    },

    {
        dishName: "Capra Miele",
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur reiciendis blanditiis beatae placeat harum, deleniti laborum, corrupti aliquam temporibus architecto eveniet facere unde cum? Labore a sunt natus illum!",
        price: "12€", // €
        Icon: "./assets/images/YOUR/ICON"
    },

    {
        dishName: "Reine",
        mainCat: "Pizza",
        subCat: "Tomato",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur reiciendis blanditiis beatae placeat harum, deleniti laborum, corrupti aliquam temporibus architecto eveniet facere unde cum? Labore a sunt natus illum!",
        price: "7€", // €
        Icon: "./assets/images/YOUR/ICON"
    },

    {
        dishName: "Savoyarde", // excuse my french
        mainCat: "Pizza",
        subCat: "Cream",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur reiciendis blanditiis beatae placeat harum, deleniti laborum, corrupti aliquam temporibus architecto eveniet facere unde cum? Labore a sunt natus illum!",
        price: "13.50€", // €
        Icon: "./assets/images/YOUR/ICON"
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
        picture.setAttribute("src", dish.Icon);
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
