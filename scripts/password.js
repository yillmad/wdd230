const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password-confirm");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

function checkSame() {
    if (password1.value !== password2.value){
        message.textContent = "❗Passwords DO NO MATCH!";
        message.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password2.focus();
    } else {
        message.style.display ="none";
        password2.style.backgroundColor = "rgba(240, 228, 177, 0.4)";
        password2.style.color = "#000";
    }
}