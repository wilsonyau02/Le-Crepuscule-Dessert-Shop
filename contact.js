//Selectall elements in the document with class = "cinput"
const cinputs = document.querySelectorAll('.cinput');

var form = document.getElementById("contactform");

//focusFunc function
function focusFunc(){
    //Declare parent as the parent element of .cinput
    let parent = this.parentNode;
    //Add "focus" into the class name of the parent element
    parent.classList.add("focus");
}

//blurFunc function
function blurFunc(){
    //Declare parent as the parent element of .cinput
    let parent = this.parentNode;
    //If there is empty in the field otherwise the "focus" will not be removed
    if(this.value == ""){
        //Remove "focus" from the class name of the parent element
        parent.classList.remove("focus");
    }
}

//Check the each field is focus or not focus
cinputs.forEach(input => {
    //call focusFunc when the input field get focus
    input.addEventListener("focus", focusFunc);
    //call blurFunc when the input field lose focus
    input.addEventListener("blur", blurFunc);
});

function checkcontact(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if(name.length == 0){
        document.getElementById("name").focus();
        alert("Please fill in your name.");
    }
    else if (name.length <5 || name.length > 25){
        document.getElementById("name").focus();
        alert("Please enter a proper name.");
    }
    else if(email.length == 0){
        document.getElementById("email").focus();
        alert("Please fill in your email.");
    }
    else if(phone.length == 0){
        document.getElementById("phone").focus();
        alert("Please enter your phone number in case we need to contact you.");
    }
    else if(isNaN(phone)){
        document.getElementById("phone").value="";
        document.getElementById("phone").focus();
        alert("Your phone number must be digit number.");
    }
    else if(phone.length<10||phone.length>14){
        document.getElementById("phone").focus();
        alert("Please enter a proper phone number with the hint shown.");
    }
    else if(message.length==0){
        document.getElementById("message").focus();
        alert("Don't leave us blank message..");
    }
    else {
        alert("We received your message! Have a nice day! ")
        return location.replace("contactus.html");
    }
}