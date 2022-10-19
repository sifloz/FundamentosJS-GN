var button = document.querySelector("button");

var printMessage = function() {
    button.innerText = "Button clicked"
    console.log("Button clicked")
    button.removeEventListener("click", printMessage)
}

button.addEventListener("click", printMessage);