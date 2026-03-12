let search = document.getElementById("search");
let products = document.querySelectorAll(".product");

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();

products.forEach(function(product){

let text = product.innerText.toLowerCase();

if(text.includes(filter)){
product.style.display="block";
}else{
product.style.display="none";
}

})

});

let cartCount = 0;

let buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(function(btn){

btn.addEventListener("click", function(){

cartCount++;

document.getElementById("cart-count").innerText = cartCount;

});

});