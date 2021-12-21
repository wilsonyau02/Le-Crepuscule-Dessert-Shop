
// Get the modal
var chatmodal = document.getElementById("chatModal");


// Get the button that opens the modal
var chatbtn = document.getElementById("chatBtn");


// Get the <span> element that closes the modal
var chatspan = document.getElementsByClassName("chat-close")[0];


// When the user clicks the button, open the modal 
chatbtn.onclick = function() {
  chatmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
chatspan.onclick = function() {
  chatmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == chatmodal) {
    chatmodal.style.display = "none";
  }
}


let del_fee = () => {
  let ele = document.getElementById('ask-msg');
  ele.innerHTML = 'I want know about the <span id="livechatTitle">delivery fees</span>.';
  let firstmsg = document.getElementById('firstmsg');
  firstmsg.innerHTML = 'RM20.00';
}

let op_time = () => {
  let ele = document.getElementById('ask-msg');
  ele.innerHTML = 'I want know about the <span id="livechatTitle">operation time</span>.';
  let firstmsg = document.getElementById('firstmsg');
  firstmsg.innerHTML = 'Monday - Friday&ensp; : &ensp;9am - 7pm<br>Saturday - Sunday:&emsp;9am - 5pm';
}

let pay_met = () => {
  let ele = document.getElementById('ask-msg');
  ele.innerHTML = 'I want know about <span id="livechatTitle">payment method</span>.';
  let firstmsg = document.getElementById('firstmsg');
  firstmsg.innerHTML = 'Credit card only.';
}

let abt_pro = () => {
  let ele = document.getElementById('ask-msg');
  ele.innerHTML = 'I want know about <span id="livechatTitle">product category</span>.';
  let firstmsg = document.getElementById('firstmsg');
  firstmsg.innerHTML = 'Whole Cake, Macarons and Cupcakes.';
}

