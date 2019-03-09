//elements
let emailInp = document.getElementById("email");
let passwordInp = document.getElementById("password");

//nametags
let emailTag = document.querySelector('#emailTag');
let passwordTag = document.querySelector('#passwordTag');

let validationCount = 0;

// let name = document.getElementById("name").value;
// let surname = document.getElementById("surname").value;
// let date = document.getElementById("date").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;


/// === === === === === Login JAVASCRIPT

const validationForm = document.getElementById("validationForm");
validationForm.addEventListener("click", MyLogin);

function MyLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    /// === === === === EMAIL VALIDATION

    if(email == ""){
        emailInp.placeholder = "Enter Your email";
        emailTag.innerHTML = "Enter Your email";
        emailTag.style.color = "#FF6473";
        emailTag.style.backgroundColor = "#fff";
        emailInp.value = "";
        
        if(emailInp.focus){
            emailInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        emailTag.innerHTML = "";
        emailInp.style.border = '2px solid #1abc9c';
        emailValidated_empty = true;
    }         
     

    if(email.indexOf("@") <= -1){
        emailInp.placeholder = "email Must Contain (@)";
        emailTag.innerHTML = "email Must Contain (@)";
        emailTag.style.color = "#FF6473";
        emailTag.style.backgroundColor = "#fff";
        emailInp.value = "";
        
        if(emailInp.focus){
            emailInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        emailTag.innerHTML = "";
        emailInp.style.border = '2px solid #1abc9c';
        emailValidated_withAt = true;
    }  
     

    /// === === === === EMAIL VALIDATION
    



    /// === === === === PASSWORD VALIDATION

    if(password == ""){
        passwordInp.placeholder = "Enter Your password";
        passwordTag.innerHTML = "Enter Your password";
        passwordTag.style.color = "#FF6473";

        if(passwordInp.focus){ 
            passwordInp.style.border = '2px solid #FF6473';
        } 
        return false;
    }else{
        passwordTag.innerHTML = "";
        passwordInp.style.border = '2px solid #1abc9c';
        passwordValidated_empty = true;
    }
     

    if( password.length <= 4 ){
        passwordInp.placeholder = "Must be (+4) Symols";
        passwordTag.innerHTML = "Must be (+4) Symols";
        passwordTag.style.color = "#FF6473";
        passwordTag.style.backgroundColor = "#fff";
        passwordInp.value = "";
        
        if(passwordInp.focus){
            passwordInp.style.border = '2px solid #FF6473';
        }
        return false;
    }else{
        passwordTag.innerHTML = "";
        passwordInp.style.border = '2px solid #1abc9c';
        passwordValidated_lenght = true;
    }

    /// === === === === PASSWORD VALIDATION
    if (emailValidated_empty &&
        emailValidated_withAt &&
        passwordValidated_empty &&
        passwordValidated_lenght) {
        let validated = document.getElementById('validated');
        validated.style.opacity ="1";    
    }
}

/// === === === === === Login JAVASCRIPT

