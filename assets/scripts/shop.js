var removeItemButtons = document.getElementsByClassName('removeItem');
console.log(removeItemButtons);

for (var i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}