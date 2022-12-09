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
    plus.addEventListener("click", addToCartClicked);
    updateTotal();
  }
}

function addItemToCart(title, price, imgSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("header__cart__row");
  var cartItems = document.getElementsByClassName("cart-items")[0];

  //create the .cart-item cart-column
  let cartItemCartColumn = document.createElement("div");
  cartItemCartColumn.className = "header__cart__row__item cart-column";
  cartRow.appendChild(cartItemCartColumn);

  //create the cart-item-image

  let cartImage = document.createElement("img");
  cartImage.setAttribute("alt", "shopped product");
  cartImage.setAttribute("src", imgSrc);
  cartImage.className = "header__cart__row__image";
  cartItemCartColumn.appendChild(cartImage);

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
}

function removeCartItem(event) {
  console.log(event.target);
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateTotal();
}

function addToCartClicked(event) {
  var plus = event.target;
  var shopItem = plus.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("article__name")[0].innerText;
  var price = shopItem.getElementsByClassName("article__container__price")[0]
    .innerText;
  let img = shopItem.querySelector("img");
  let imgSrc = img.src;
  addItemToCart(title, price, imgSrc);
  updateTotal();
  var removeItemButtons = document.getElementsByClassName(
    "header__cart__quantity__remove"
  );
  for (var i = 0; i < removeItemButtons.length; i++) {
    console.log("coucou");
    var button = removeItemButtons[i];

    button.addEventListener("click", removeCartItem);
  }
}

function updateTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("header__cart__row");
  var base = 0;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "€" + base.toFixed(2);

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("header__cart__price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "header__cart__quantity__input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    var total1 = price * quantity;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "€" + total1.toFixed(2);

    quantityElement.addEventListener("change", (event) => {
      if (cartRows.length > 1) {
        for (i = 0; i < cartRows.length; i++) {
          var input = event.target;

          if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
          }
          var newQuantity = quantityElement.value;
          // let value = quantityElement.value;
          var newTotal = price * input.value;
        }
        var result = newTotal + total1;
        console.log(result);
        document.getElementsByClassName("cart-total-price")[0].innerText =
          "€" + result.toFixed(2);
      } else {
        quantity = quantityElement.value;
        anotherTotal = Number(price * quantity);
        document.getElementsByClassName("cart-total-price")[0].innerText =
          "€" + anotherTotal.toFixed(2);
      }
    });
  }

  //  var total = base + total1
  //  document.getElementsByClassName("cart-total-price")[0].innerText =
  //  "€" + newTotal.toFixed(2);
}
//   var quantityElement = cartRow.getElementsByClassName(
//     "header__cart__quantity__input"
//   )[0];
