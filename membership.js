

 x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("optButton");
var m = document.getElementById("loginBtn");
var n = document.getElementById("registerBtn");

function showregister(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
    m.style.color="black";
    n.style.color="white";
}

function showlogin(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
    m.style.color="white";
    n.style.color="black";
}

closeBox.onclick = function(){
    var loginBox = document.getElementById("loginCover");
    loginBox.style.display = "none";
}

function checkstatus(){
    let loginStatus = localStorage.getItem("status");
    if (loginStatus){
        if (loginStatus == "true"){
            document.getElementById("loginCover").style.display = "none";
        }
        else if (loginStatus == "false" ||loginStatus == "" ){
            document.getElementById("loginCover").style.display = "block";
        }
    }
    else{
        localStorage.setItem("status", "");
    }
    
}





//Register function to check if the customer details are correct
function register(){
    var registername = document.getElementById("RUsername").value;
    var registerpassword = document.getElementById("RPassword").value;
    var registercfmpassword= document.getElementById("RCPassword").value;
    var registeremail = document.getElementById("Remail").value;
    
    if (registername.length == 0){
        document.getElementById("RUsername").focus();
        alert("Empty field is not allowed! Please field in username.");
    }
    else if(registername.length < 8 || registername.length > 12){
        document.getElementById("RUsername").value = "";
        document.getElementById("RUsername").focus();
        alert("Please make sure the range of the username's length is between 8 to 12.");
    }
    else if(registerpassword.length==0){
        document.getElementById("RPassword").focus();
        alert("Empty field is not allowed! Please fill in password.");
    }
    else if(registerpassword.length < 8){
        document.getElementById("RPassword").value = "";
        document.getElementById("RPassword").focus();
        alert("Please enter at least 8 characters for your password.");
    }
    else if(registercfmpassword.length==0){
        document.getElementById("RCPassword").focus();
        alert("Empty field is not allowed! Please fill in confirm password.");
    }
    else if(registeremail.length==0){
        document.getElementById("Remail").focus();
        alert("Empty field is not allowed! Please fill in password.");
    }
    else if(registerpassword != registercfmpassword){
        document.getElementById("RPassword").value = "";
        document.getElementById("RCPassword").value = "";
        document.getElementById("RPassword").focus();
        alert("Unmatched password and confirm password! Please enter again.");
    }
    else{
        let userdata = JSON.parse(localStorage.getItem('users'));//parse data into Javascript object which is 'userdata' variable
        if(userdata) {//the array is not empty
            userdata.push({name: registername, password: registerpassword, email:registeremail});//add item into an array
            localStorage.setItem('users', JSON.stringify(userdata));//convert object into string
            alert("Register successfully!!! Now you can login as the user.");
        } else {
            localStorage.setItem('users', JSON.stringify([{name: registername, password: registerpassword}]));//set the item value into the array if the current array is empty
            alert("Register successfully!!! Now you can login as the user.");
        }
    }
}

//Login function to check if the user input is match with registered details
function login(){
    var loginname= document.getElementById("LUsername").value;
    var loginpassword= document.getElementById("LPassword").value;

    if (loginname.length == 0){
        document.getElementById("LUsername").value = "";
        document.getElementById("LUsername").focus();
        alert("Empty field is not allowed! Please field in username");
    }
    else if(loginpassword.length ==0){
        document.getElementById("LPassword").value = "";
        document.getElementById("LPassword").focus();
        alert("Empty field is not allowed! Please fill in password.");
    }
    else {
        // alert("Login successfully! Welcome, "+ storedName+ "!.");
        // prompt("Click 'Ok' to go to home page or 'Cancel' to remain here.");
        let userdata = JSON.parse(localStorage.getItem('users'));//parse data into Javascript object which is 'userdata' variable
        if(userdata) {
            var count = 0;
            for (let i = 0; i < userdata.length; i++){
                if (loginname == userdata[i].name && loginpassword == userdata[i].password) {
                    localStorage.setItem("status","true");
                    localStorage.setItem("index",i);
                    if (confirm('You are logged in , ' + loginname + "\n(Click 'Ok' to go to home page or 'Cancel' to remain here")==1){
                        return location.replace("home.html");
                    }
                    else {
                        return location.replace("membership.html");
                    }
                }
                else if (loginname == userdata[i].name && loginpassword != userdata[i].password){
                    document.getElementById("LPassword").value = "";
                    document.getElementById("LPassword").focus();
                    localStorage.setItem("status","false");
                    return alert("Incorrect password. Please try again");
                }
                else if (loginname != userdata[i].name) {
                    count ++;
                }
            }
            if (count == userdata.length){
                document.getElementById("LUsername").value = "";
                document.getElementById("LUsername").focus();
                localStorage.setItem("status","false");
                return alert("Invalid username. Please register first if you have not register yet.");
            }
        } 
        else {
            localStorage.setItem('users', '[]');
        }
        localStorage.setItem("status","false");
        return alert("Invalid username. Please register first if you have not register yet.");
    }
}

// var loginImage=document.getElementById("userlogin");
// loginImage.addEventListener('mouseover',function(){
//     let userdata = JSON.parse(localStorage.getItem('users'));
//     let index = JSON.parse(localStorage.getItem('index'));
//     var profile = `<div>
//     <table>
//     <legend>
//     <tr><th>Name</th><td>${userdata[index].name}</td></tr>
//     <tr><th>Email</th><td>${userdata[index].email}</td></tr>

//     </legend>
//     </table>
//     </div>`


// });