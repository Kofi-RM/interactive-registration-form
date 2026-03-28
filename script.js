let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")

let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError")
let confirmPasswordError = document.getElementById("confirmPasswordError")
let form = document.getElementById("registrationForm");

if (localStorage.getItem("username")) {
    console.log(localStorage.getItem("username"))
    username.value = localStorage.getItem("username")
}

username.addEventListener("blur", () => {
    if (username.validity.valid) {
        usernameError.textContent = "";
    } else {
        usernameError.textContent = "A username with 5 characters of more is required"

    }
})

email.addEventListener("blur", () => {
    if (email.validity.valid) {
        emailError.textContent ="";
    } else {
        emailError.textContent = "Please enter a valid email (example@blank.com)"
    }
})

password.addEventListener("blur", () => {
     if (password.validity.valid) {
        passwordError.textContent ="";
    } else {
        passwordError.textContent = "Please enter a password with at least 8 characters, an upper and lowercase letter, and a number"
    }
})

confirmPassword.addEventListener("blur", () => {
       if (confirmPassword.value === password.value) {
        confirmPasswordError.textContent ="";
        confirmPassword.validity.valid = true;
    } else {
        confirmPassword.validity.valid = false;
        confirmPasswordError.textContent = "Please make sure your passwords match"
    }
})
form.addEventListener("submit", (event) => {
    let error = false;
    event.preventDefault();


console.log(username.validity)
if (!username.validity.valid) {
usernameError.textContent = "A username with 5 characters of more is required"
error = true;
}
 if (!email.validity.valid) {
       emailError.textContent = "Please enter a valid email (example@blank.com)"
        error = true;
    } 
 if (!password.validity.valid) {
        passwordError.textContent = "Please enter a password with at least 8 characters, an upper and lowercase letter, and a number"
        error = true;
    } 

      if (!confirmPassword.validity.valid) {
        confirmPasswordError.textContent = "Please make sure your passwords match"
        error = true;
    }

    if (!error) {
        alert("You have successfully registered")
        localStorage.setItem("username", username.value)
    }
}) 