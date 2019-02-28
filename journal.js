// Variable Declarations
let form = document.getElementById("formContact");

// Function to console.log user contact info 
function output() {
    const contactFirstName = document.getElementById("contactFirstName").value;
    const contactLastName = document.getElementById("contactLastName").value;
    const contactEmail = document.getElementById("contactEmail").value;
    console.log("The user's contact information is:");
    console.log("Name: " + contactFirstName + " " + contactLastName + " Email: " + contactEmail + ".");
}

// addEventListener
form.addEventListener("click", output);