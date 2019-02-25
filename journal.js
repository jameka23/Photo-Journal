// Variable Declarations
let contactFirstName = document.getElementById("contactFirstName");
let contactLastName = document.getElementById("contactLastName");
let contactEmail = document.getElementById("contactEmail");
let form = document.getElementById("contactMe");

// addEventListener
form.addEventListener("submit", output);

// Function to console.log user contact info 
function output(contactFirstName, contactLastName, contactEmail) {
    console.log("The user's contact information is:");
    console.log("Name: " + contactFirstName + " " + contactLastName + " Email: " + contactEmail + ".");
}

