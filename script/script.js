let hamburguerMenuIcon = document.getElementById("hamburguer-menu");
let hamburguerMenuContent = document.getElementById("menu");
let itemQuantitiesArray = document.getElementsByClassName("user-input-quantity");
let priceArray = document.querySelectorAll('.subtotal');
let totalPrice = 0;

//Thank you, @Erik from StackOverflow for this solution: (https://stackoverflow.com/a/37335153) (Research by Willian)
Array.prototype.forEach.call(itemQuantitiesArray, update);

function update(val, i){
    val.addEventListener('input', function(){
        var x = val.value;
        let subtotal = (x*document.getElementsByClassName('price-description')[i].getAttribute("data-amount")).toFixed(2); 
    priceArray[i].innerHTML = subtotal;
        updateTotal();
    });
  };

function updateTotal () {  
    totalPrice = 0;
  priceArray.forEach(element => {
    totalPrice += parseFloat(element.innerHTML);
    document.getElementById('total').innerHTML =  "$" + totalPrice;
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