let hamburguerMenuIcon = document.getElementById("hamburguer-menu");
let hamburguerMenuContent = document.getElementById("menu");
let itemQuantitiesArray = document.getElementsByClassName("user-input-quantity");
let priceArray = document.querySelectorAll('.subtotal');
let totalPrice = 0;
let imagesArray = document.querySelectorAll('.images-carousel');
let imagesContainer = document.getElementsByClassName("images-container");
let currentImageFocus = 1;
let imagesWidthArray;

//Thank you, @Erik from StackOverflow for this solution: (https://stackoverflow.com/a/37335153) (Research by Willian)
Array.prototype.forEach.call(itemQuantitiesArray, update);

/* imagesArray.forEach(element => {
    imagesWidthArray[currentImageFocus] = element.width;
}); */



function update(val, i){
    val.addEventListener('input', function(){
        var x = val.value;
        let subtotal = (x*document.getElementsByClassName('price-description')[i].getAttribute("data-amount")).toFixed(2); 
    priceArray[i].innerHTML = "$" + subtotal;
        updateTotal();
    });
  };

function updateTotal () {  
    totalPrice = 0;
  priceArray.forEach(element => {
    if(element.innerHTML!='0')
    totalPrice += parseFloat(element.innerHTML.slice(1));
    else totalPrice += parseFloat(element.innerHTML.slice(0));
    document.getElementById('total').innerHTML =  "$" + totalPrice.toFixed(2);
});   
}

function openHamburguerMenu() {
    hamburguerMenuContent.style.width = "250px";
    console.log("Open");
}

function closeMenu() {
    hamburguerMenuContent.style.width = "0px";
    console.log("Closed");
}

function animateImages() {
    imagesArray.forEach(element => {
        element.style.transform = "translateX(-"+currentImageFocus*630+"px)";
    });
    currentImageFocus++;
    
    if (currentImageFocus == 6) {
        currentImageFocus = 0;
        imagesArray.forEach(element => {
            element.style.transform = "translateX(0px)";
        });
    }

}
setInterval(animateImages, 2000);