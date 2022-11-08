// let btns = document.querySelectorAll("button");


// for(let i=0; i<btns.length; i++){
//   const btn=btns [i];
// btn.addEventListener("click", function(event){
//   // console.log(event.target);
//   // alert("yo")
// alert(event.target.getAttribute("data-webshop-product"))
// });


// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
 const shoppingCart = document.getElementById("shoppingCart")

shoppingCart.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const cartList = document.getElementById("cartList")

function addItems(e){
  localStorage.setItem("CartItem",e.getAttribute("data-webshop-product"))
  modal.style.display = "block";
  cartList.innerHTML = localStorage.getItem("CartItem")
}
