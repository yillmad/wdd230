const emailInput = document.querySelector("#email");
const emailPattern = /[a-zA-Z0-9._%+-]+@byui\.edu$/;

document.addEventListener("DOMContentLoaded", function() {
    emailInput.addEventListener("input", function() {
        if (!emailPattern.test(emailInput.value)) {
            emailInput.setCustomValidity("Please enter a valid email address ending with @byui.edu");
        } else {
            emailInput.setCustomValidity("");
        }
    });
});