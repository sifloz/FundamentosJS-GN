var button = document.querySelector("button");
var pre = document.querySelector("#data");
var loadingText = document.querySelector("#loading");

var data = {
    currentDate: new Date(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
};

var getData = function() {
    console.log("Call API...");
    loadingText.style.display = "block";
    setTimeout(() => {
        loadingText.style.display = "none";
        pre.appendChild(document.createTextNode(JSON.stringify(data)))
    }, 2000);
}

var printMessage = function() {
    button.innerText = "Button clicked"
    console.log("Button clicked")
    getData();
    button.removeEventListener("click", printMessage)
}

button.addEventListener("click", printMessage);