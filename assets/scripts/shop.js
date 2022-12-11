var articles = [];

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
  updateTotal();
}

function ready() {
  var addToCart = document.getElementsByClassName("article__addButton");
  for (var i = 0; i < addToCart.length; i++) {
    var plus = addToCart[i];
    var index = i;
    plus.addEventListener("click", addToCartClicked);
    updateTotal();
  }
}

function addItemToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("header__cart__row");
  var cartItems = document.getElementsByClassName("cart-items")[0];

  //create the .cart-item cart-column
  let cartItemCartColumn = document.createElement("div");
  cartItemCartColumn.className = "header__cart__row__item cart-column";
  cartRow.appendChild(cartItemCartColumn);

  //create the cart-item-image

  //create the cart-item-title span
  let cartTitle = document.createElement("span");
  cartTitle.className = "header__cart__row__title";
  cartTitle.innerText = title;
  cartItemCartColumn.appendChild(cartTitle);

  //create the header__cart__price cart-column span
  let cartPrice = document.createElement("span");
  cartPrice.className = "header__cart__price cart-column";
  cartPrice.innerText = price;
  cartRow.appendChild(cartPrice);

  //create the header__cart__quantity cart-column div
  let cartQuantity = document.createElement("div");
  cartQuantity.className = "header__cart__quantity cart-column";
  cartRow.appendChild(cartQuantity);

  //create the header__cart__quantity__input input type number, value 1
  let quantityButton = document.createElement("input");
  quantityButton.className = "header__cart__quantity__input";
  quantityButton.setAttribute("type", "number");
  quantityButton.setAttribute("value", "1");
  cartQuantity.appendChild(quantityButton);

  //create the removeItem button REMOVE
  let removeButton = document.createElement("button");
  removeButton.className = "header__cart__quantity__remove";
  removeButton.innerText = "REMOVE";
  cartQuantity.appendChild(removeButton);

  cartItems.append(cartRow);

  var priceToPush = parseFloat(price.replace("€", ""))

  let index = 0;
  index++;
  articles.push({ Name: title, Price: priceToPush, Index: index })


}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  articles = articles.filter(v => v !== title);
  updateTotal();
  console.table(articles)
}

function addToCartClicked(event) {
  var plus = event.target;
  var shopItem = plus.parentElement;
  var title = shopItem.getElementsByClassName("article__name")[0].innerText;
  var price = shopItem.getElementsByClassName("article__container__price")[0]
    .innerText;
  //let img = shopItem.querySelector("img");
  //let imgSrc = img.src;
  addItemToCart(title, price);
  updateTotal();
  var removeItemButtons = document.getElementsByClassName(
    "header__cart__quantity__remove"
  );
  for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i];

    button.addEventListener("click", removeCartItem);

  }
  console.table(articles)
}

function updateTotal() {
  var total = 0;
  var quantityElement = document.getElementsByTagName("input")[0];

//   console.log(cartOfPrices)


//   quantityElement.addEventListener("change", (event) => {
//     var value = event.target.value;

//     for (var i = 0; i < cartOfPrices.length; i++) {
    //   total = cartOfPrices[i] * value
    //   console.log(Number(cartOfPrices[i]), value)
    //   console.log(total)
//     }
//   });

  document.getElementsByClassName("cart-total-price")[0].innerText =
    "€" + total;
}
//   var quantityElement = cartRow.getElementsByClassName(
//     "header__cart__quantity__input"
//   )[0];
