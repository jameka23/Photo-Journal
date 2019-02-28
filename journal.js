// Variable Declarations
let form = document.getElementById("formContact");
// let contactFirstName = document.getElementById("contactFirstName");
// let contactLastName = document.getElementById("contactLastName");
// let contactEmail = document.getElementById("contactEmail");

// Function to console.log user contact info 
// function output() {
//     // let contactFirstName = document.getElementById("contactFirstName").value;
//     // let contactLastName = document.getElementById("contactLastName").value;
//     // let contactEmail = document.getElementById("contactEmail").value;
//     console.log("The user's contact information is:");
//     console.log("Name: " + contactFirstName.value + " " + contactLastName.value + " Email: " + contactEmail.value + ".");
// }

function output() {
    let contactFirstName = document.getElementById("contactFirstName").value;
    let contactLastName = document.getElementById("contactLastName").value;
    let contactEmail = document.getElementById("contactEmail").value;
    console.log("The user's contact information is:");
    console.log("Name: " + contactFirstName + " " + contactLastName + " Email: " + contactEmail + ".");
}

// addEventListener
form.addEventListener("click", output);