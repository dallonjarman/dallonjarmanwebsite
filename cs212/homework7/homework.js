function animateButton() {
    var button = document.getElementById("myButton");
    button.style.backgroundColor = "green";
    setTimeout(function() {
        button.style.backgroundColor = "blue";
    }, 1000);
}