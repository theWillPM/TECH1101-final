let hamburguerMenuIcon = document.getElementById("hamburguerMenu");
let hamburguerMenuContent = document.getElementById("menu");

function openHamburguerMenu() {
    hamburguerMenuContent.style.width = "250px";
    console.log("Open");
}

function closeMenu() {
    hamburguerMenuContent.style.width = "0px";
    console.log("Closed");
}