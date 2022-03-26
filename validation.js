//Collection of  all inputs
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const pCode = document.querySelector("#pCode");

const age = document.querySelector("#age");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");




// seting default value to null for selectIndex
function Removedefault() {
    const province = document.querySelector("#province");
    province.selectedIndex = -1;

}

// checking the validity
function checkValidity() {
    //Regular expression
    var regexpostalcode = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(pCode.value.toUpperCase());
    var regexemail = /^([a-z A-Z\d\.-]+)@([a-z\d]+)\.([a-z\d]{2,8})$/.test(email.value);
    var regexpassword = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/.test(password.value);

    let formValidity = true;

    if (regexpostalcode==false) {
        pCode.setCustomValidity("Please Enter the correct postal code");
        formValidity = false;
    }
    else {
        pCode.setCustomValidity("")
    }

    if (regexemail==false) {
        email.setCustomValidity("Please Enter the correct formatted email");
        formValidity = false;

    }
    else {
        email.setCustomValidity("");
    }

    if (regexpassword == false) {
        password.setCustomValidity("Please include One upperCase Letter and one digit");
        formValidity = false;
    }

    else {
        password.setCustomValidity("");
    }

    if (password.value !== cPassword.value) {
        password.setCustomValidity("Please make sure the passwords match");
        cPassword.setCustomValidity("Please make sure the passwords match");
        formValidity = false;
    }
  
    if (formValidity) {
        window.alert("thank you for registering, your form was submitted successfully");
    }
    

}

function resetform() {
    document.getElementById('form').reset();
    
    
}



// creating eventlistener
function createEventListener() {
    var submit = document.getElementById("submit");
    if (submit.addEventListener) {
        submit.addEventListener("click", checkValidity, false);
    }
    else if (submit.addEventListener) {
        submit.addEventListener("onclick", checkValidity);
    }

    
}



function setUpPage() {
    Removedefault();
    createEventListener();

}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
