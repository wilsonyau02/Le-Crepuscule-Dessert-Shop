const inputs = document.querySelectorAll('.Dinput');

function focusField(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurField(){
    let parent = this.parentNode.parentNode;
    if(this.value==""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(inputs => {
    inputs.addEventListener('focus', focusField);
    inputs.addEventListener('blur', blurField);
})

function delivery(){
    var Uname = document.getElementById("nameD").value;
    var Uemail = document.getElementById("emailD").value;
    var Uphone = document.getElementById("phoneD").value;
    var Uaddress = document.getElementById("addressD").value;
    var Upostcode = document.getElementById("postcodeD").value;
    var Ucity = document.getElementById("cityD").value;

    if(Uname.length == 0){
        document.getElementById("nameD").focus();
        alert("Please fill in your name.");
    }
    else if (Uname.length <5 || Uname.length > 25){
        document.getElementById("nameD").focus();
        alert("Please enter a proper name.");
    }
    else if(Uemail.length == 0){
        document.getElementById("emailD").focus();
        alert("Please fill in your email.");
    }
    else if(Uphone.length == 0){
        document.getElementById("phoneD").focus();
        alert("Please enter your phone number in case we need to contact you about your order.");
    }
    else if(isNaN(Uphone)){
        document.getElementById("phoneD").focus();
        alert("Your phone number must be digit number.");
    }
    else if(Uphone.length<10||Uphone.length>14){
        document.getElementById("phoneD").focus();
        alert("Please enter a proper phone number with the hint shown.");
    }
    else if(Uaddress.length == 0){
        document.getElementById("addressD").focus();
        alert("Please fill in address.");
    }
    else if(Upostcode.length == 0 || Upostcode.length != 5){
        document.getElementById("postcodeD").focus();
        alert("Please fill in post code of your area.");
    }
    else if(Upostcode.length!=5){
        document.getElementById("postcodeD").focus();
        alert("Please fill in proper post code.");
    }
    else if(Upostcode.charAt(0)!=5 && Upostcode.charAt(0)!=6){
        document.getElementById("postcodeD").focus();
        alert("Please fill in correct post code for KL area.");
    }
    else if(Ucity.length == 0){
        document.getElementById("cityD").focus();
        alert("Please fill in your city");
    }
    else {
        payment_modal();
    }
}

function payment_modal(){
    // Get the modal
    var paymentmodal = document.getElementById("paymentModal");
    paymentmodal.style.display = "block";
}

function success(){
    var card = document.getElementById("card-no-text").value;
    var date = document.getElementById("date-text").value;
    var ccv = document.getElementById("ccv-text").value;
    var purchase = document.getElementById('purchase-btn');
   
    if(card.length == 0){
        document.getElementById("card-no-text").focus();
        alert("Please fill in your credit card number!");
    }
    else if(card.length != 16){
        document.getElementById("card-no-text").focus();
        alert("Credit card number must be 16 digits!");
    }
    else if(card.length == 16 && isNaN(card)){
        document.getElementById("card-no-text").focus();
        alert("Credit card number cannot consist any alphabets and symbols!");
    }
    else if(date.length == 0){
        document.getElementById("date-text").focus();
        alert("Please choose the expiration date!");
    }
    else if(ccv.length == 0){
        document.getElementById("ccv-text").focus();
        alert("Please fill in ccv number!");
    }
    else if(ccv.length != 3){
        document.getElementById("ccv-text").focus();
        alert("Credit card number must be 3 digits!");
    }
    else if(ccv.length == 3 && isNaN(ccv)){
        document.getElementById("ccv-text").focus();
        alert("CCV cannot consist any alphabets and symbols!");
    }
    else{
        alert("Paid successfully!");
        location.replace('home.html');
        localStorage.removeItem('orderproduct');
        localStorage.removeItem('cartNumber');
        localStorage.removeItem('total price');
    }
}