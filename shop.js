let btns = document.querySelectorAll("button");


for(let i=0; i<btns.length; i++){
  const btn=btns [i];
btn.addEventListener("click", function(event){
  // console.log(event.target);
  // alert("yo")
alert(event.target.getAttribute("data-webshop-product"))
});


}
