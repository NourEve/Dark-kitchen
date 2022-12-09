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
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var removeItemButtons = document.getElementsByClassName("removeItem");
  for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  updateTotal();
}

function addItemToCart(title, price, imgSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  // var cartRowContents =
  //     `
  //     <span class="cart-item-title">${title}</span>
  // <span class="cart-price cart-column">${price}</span>
  // <div class="cart-quantity cart-column">
  //     <input class="cart-quantity-input" type="number" value="1" />
  //     <button class="removeItem" type="button">REMOVE</button>
  // </div>`

  //create the .cart-item cart-column
  let cartItemCartColumn = document.createElement("div");
  cartItemCartColumn.className = "cart-item cart-column";
  cartRow.appendChild(cartItemCartColumn);

  //create the cart-item-image

  let cartImage = document.createElement("img");
  cartImage.setAttribute("alt", "shopped product");
  cartImage.setAttribute("src", imgSrc);
  cartImage.className = "cart-item-image";
  cartItemCartColumn.appendChild(cartImage);

  //create the cart-item-title span
  let cartTitle = document.createElement("span");
  cartTitle.className = "cart-item-title";
  cartTitle.innerText = title;
  cartItemCartColumn.appendChild(cartTitle);

  //create the cart-price cart-column span
  let cartPrice = document.createElement("span");
  cartPrice.className = "cart-price cart-column";
  cartPrice.innerText = price;
  cartRow.appendChild(cartPrice);

  //create the cart-quantity cart-column div
  let cartQuantity = document.createElement("div");
  cartQuantity.className = "cart-quantity cart-column";
  cartRow.appendChild(cartQuantity);

  //create the cart-quantity-input input type number, value 1
  let quantityButton = document.createElement("input");
  quantityButton.className = "cart-quantity-input";
  quantityButton.setAttribute("type", "number");
  quantityButton.setAttribute("value", "1");
  cartQuantity.appendChild(quantityButton);

  //create the removeItem button REMOVE
  let removeButton = document.createElement("button");
  removeButton.className = "removeItem";
  cartQuantity.appendChild(removeButton);

  cartItems.append(cartRow);
}

function removeCartItem(event) {
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
  let imgSrc = document.getElementsByClassName("article__img")[0].src;
  addItemToCart(title, price, imgSrc);
  updateTotal();
}

function updateTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;

    quantityElement.addEventListener("change", (event) => {
      var input = event.target;

      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }

      let value = quantityElement.value;
      total = price * value;

      document.getElementsByClassName("cart-total-price")[0].innerText =
        "€" + total.toFixed(2);
    });
  }
}
