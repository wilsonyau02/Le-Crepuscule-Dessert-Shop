window.addEventListener("load",checkCartStatus);
window.onscroll = function() {scrollFunction()};

document.getElementById('userlogin').addEventListener("click", function(){
  location.href = "membership.html";
});

//Go to top button function
//Get the button
var mybutton = document.getElementById("gototopBtn");
// When the user scrolls down 20px from the top of the document, show the button


function scrollFunction() {
if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    mybutton.style.display = "block";
} 
else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function gototopFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


//Slideshow at first image
var imageIndex = 1;
autoSlide(imageIndex);//Call function autoSlide
function autoSlide(n){
  var i;
  var y = document.getElementsByClassName("myimage");
  if (n > y.length){imageIndex = 1 }//Set imageIndex to 1 if n larger than y.length (3)
  if (n < 1){imageIndex = y.length}//Set imageIndex to 3 if n < 1
  for (i = 0; i < y.length; i++) {//Use for loop to hide all the element with class name "myimage"
    y[i].style.display= "none";
  }
  imageIndex++;//Do increment for imageInex
  if (imageIndex > y.length){imageIndex = 1}
  y[imageIndex-1].style.display="block";//Display image
  setTimeout(autoSlide,5000);//Execute autoSlide() function after waiting 5000 miliseconds
}



//Search function in allproduct.html
function searchproduct() {
  let count=0;//Initialization count with 0
  //Get the value input from user
  let input = document.getElementById('searchbar').value
  //convert value input to lowercase
  input=input.toLowerCase();
  let x = document.getElementsByClassName('cakeText');
  let y = document.getElementsByClassName('cakelist');
  //Display none for element with id "noresult"
  document.getElementById('noresult').style.display="none";
  for (i = 0; i < x.length; i++) {
      //Validate if the value input included in cake description
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          y[i].style.display="none";//Display none if not included
      }
      else {
          y[i].style.display="block";	//Display as block if included
          count++;//increment count (count = count + 1)
      }
  }
  //Display "No results found" if count = 0
  if (count == 0){
      document.getElementById('noresult').style.display="block";
  }
}


// Onmouseover event at macarons images
function showMacaronsTitle(){
  document.getElementById("MacaronDescrit").innerHTML="Macarons";
  document.getElementById("MacaronDescrit").style.cssText="padding:25px;font-size:25px;font-family:sans-serif;text-align:center;";

}
function showMacaronsDetails(text){
  document.getElementById("MacaronDescrit").innerHTML=text;
  document.getElementById("MacaronDescrit").style.cssText="padding:15px;font-size:20px;font-family:sans-serif;text-align:center;";
}


// Gallery in each product page
function clickit(images){
  var expandImg = document.getElementById("expandedImg");//Get element
  expandImg.src = images.src;//Use the same src in expanded image as the iage being clicked on from the grod
  expandImg.parentElement.style.display="block";//Show the container element
}
document.getElementById("openImg").click();//Get the element with id and click on it



//Check login status to determine cart status whether disabled or not

function checkCartStatus(){
  if (localStorage.getItem("status") == "true"){
      document.getElementById("addcartBtn").disabled = false;
  }
  else if (localStorage.getItem("status") == "false" ||localStorage.getItem("status") == "" ){
      alert("Please log in before you want to add to cart.");
      document.getElementById("addcartBtn").disabled = true;
     
  }
}




//Information for product such as description and store info
function openTitle(title,element){
  var i, infocontent;
  infocontent = document.getElementsByClassName("infocontent");
  for (i = 0; i < infocontent.length; i++){
    infocontent[i].style.display="none";//Hide the all element by default
  }
  var infotitle = document.getElementsByClassName("infotitle");
  for (i = 0; i < infotitle.length; i++){
    infotitle[i].style.cssText="border-bottom:none;color:gray;";//Remove underline from title
  }
  document.getElementById(title).style.cssText="display:block";//show the specific tab content
  element.style.cssText="border-bottom:3px rgb(182, 149, 83) solid;color:rgb(182, 149, 83)";//underline the title
}
//Get the element with id 'open' and click on it
document.getElementById("open").click();





// Display pickmyself div if click the checkbox
function displayPickBox(){
  var bool = document.getElementById("assortedBox").checked;

  if (bool == true){
    document.getElementById("pickmyself").style.display="none";
    document.getElementById("addcartBtn").disabled = false;
  }
  else{
    document.getElementById("pickmyself").style.display="block";
    document.getElementById("addcartBtn").disabled = true;
  }
}





//Macarons Quantity in macarons page(12pcs)
function totalQuantity(x){
  var q1 =  parseInt(document.getElementById("QTY1").value,10);
  var q2 =  parseInt(document.getElementById("QTY2").value,10);
  var q3 =  parseInt(document.getElementById("QTY3").value,10);
  var q4 =  parseInt(document.getElementById("QTY4").value,10);
  var q5 =  parseInt(document.getElementById("QTY5").value,10);
  var q6 =  parseInt(document.getElementById("QTY6").value,10);
  var q7 =  parseInt(document.getElementById("QTY7").value,10);
  var q8 =  parseInt(document.getElementById("QTY8").value,10);
  var q9 =  parseInt(document.getElementById("QTY9").value,10);

  var n = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;
                                   
  if ( n > x){
    alert("The maximum quantity for each box is " + x + "!!! Please do another order if u want.")
    document.getElementById("addcartBtn").disabled = true;
  }
  else if (n < x){
    document.getElementById("addcartBtn").disabled = true;
    document.getElementById("addCartButton").cssText = "Backgroundcolor:rgba(104, 101, 101, 0.781);"
  }

  else{
      document.getElementById("addcartBtn").disabled = false;
  }

  document.getElementById("totalQTY").value = n;
}


//Quantity button text
function plus(n){

	//Return string to a decimal(10) number
	var value = parseInt(document.getElementById("Qty").value,10);
	value=value + n;//Increment value 
	if (value < 1){
	  document.getElementById("Qty").value = 1;//Always display "1" as minimum value
	}
	else{
	  document.getElementById("Qty").value = value;//Display value when user click "+" by increment value
	}
}



//Check add to cart

// document.getElementById('addCartBtn').onclick = clicked

// function clicked(){
//   if (localStorage.getItem("status") == "true"){
//     alert('The product is added to the cart successfully!')
// 	  var quantity =document.getElementById("Qty").value;
//     document.getElementById("quantity").innerHTML= quantity;
//   }
//   else {
//     alert("Please login before you want to add to cart or purchase something.")
//   }
//	
//}
//Go to top button function
//Get the button
// var mybutton = document.getElementById("gototopBtn");
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
//     mybutton.style.display = "block";
//   } 
//   else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// function gototopFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


