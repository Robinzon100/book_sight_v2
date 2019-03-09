
// * * SUBSCRIBE  VALIDACIAS MERE GADAVAKETEB,ROCA CHAVABAREBT. IYOS AXLA ES COMENTARAD DA KIDE RAGACEEBI GADASAKETEBELI AN SHESACVLELI

// let FullNameInp = document.getElementById('FullName');
// let EmailAddressInp = document.getElementById('EmailAddress');

// /// === === === === === REGISTRATION JAVASCRIPT

// const SubValidationForm = document.getElementById("home-en");
// SubValidationForm.addEventListener("click", MySubscribe);

// function MySubscribe() {

//     let FullName = document.getElementById('FullName').value;
//     let EmailAddress = document.getElementById('EmailAddress').value;

//     // === === FULNAME VALIFATIO

//     if (FullName == "") {
//         FullNameInp.placeholder = "Enter Your name";



//         if (FullNameInp.focus) {
//             FullNameInp.style.border = '2px solid #FF6473';
//         }
//         return false;
//     } else {
//         FullNameInp.innerHTML = "";
//         FullNameInp.style.border = '2px solid #1abc9c';
//         FullNameValidated_empty = true;
//     }





//     if (EmailAddress == "") {
//         EmailAddressInp.placeholder = "Enter Your email";
//         EmailAddress.innerHTML = "Enter Your email";

//         EmailAddressInp.value = "";

//         if (EmailAddressInp.focus) {
//             EmailAddressInp.style.border = '2px solid #FF6473';
//         }
//         return false;
//     } else {
//         EmailAddress.innerHTML = "";
//         EmailAddressInp.style.border = '2px solid #1abc9c';
//         EmailAddressInpValidated_empty = true;
//     }


//     if (EmailAddress.indexOf("@") <= -1) {
//         EmailAddressInp.placeholder = "email Must Contain (@)";
//         EmailAddress.innerHTML = "email Must Contain (@)";
//         EmailAddressInp.value = "";

//         if (EmailAddressInp.focus) {
//             EmailAddressInp.style.border = '2px solid #FF6473';
//         }
//         return false;
//     } else {
//         EmailAddress.innerHTML = "";
//         EmailAddressInp.style.border = '2px solid #1abc9c';
//         EmailAddressInpValidated_withAt = true;
//     }
// }