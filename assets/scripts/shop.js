function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents =
        `   <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}">
        <span class="cart-item-title">${title}</span>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min="1" />
        <button class="removeItem" type="button">REMOVE</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    console.log(updateTotal())
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
    updateTotal();
}

function ready() {
    var addToCart = document.getElementsByClassName("article__addButton")
    for (var i = 0; i < addToCart.length; i++) {
        var plus = addToCart[i];
        plus.addEventListener('click', addToCartClicked)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var removeItemButtons = document.getElementsByClassName('removeItem');
    for (var i = 0; i < removeItemButtons.length; i++) {
        var button = removeItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }
}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateTotal()
    console.log('.')
}

function quantityChanged(event) {
    var input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal()
}

function addToCartClicked(event) {
    var plus = event.target;
    var shopItem = plus.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("article__name")[0].innerText;
    var price = shopItem.getElementsByClassName("article__container__price")[0].innerText;
    var imageSrc = shopItem.getElementsByClassName("article__img")[0].src;
    addItemToCart(title, price, imageSrc)
    updateTotal()
}




function updateTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemContainer.getElementsByClassName("cart-row")
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''));
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = "€" + total.toFixed(2);

    return total;

}
