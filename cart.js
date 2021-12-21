
// Get the modal
var cartmodal = document.getElementById("cartModal");

// Get the button that opens the modal
var cartbtn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var cartspan = document.getElementsByClassName("cart-close")[0];

// When the user clicks the button, open the modal 
cartbtn.onclick = function() {
  cartmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cartspan.onclick = function() {
  cartmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cartmodal) {
    cartmodal.style.display = "none";
  }
}