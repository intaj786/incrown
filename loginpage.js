function togglePassword() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

   
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to another page upon successful login
        window.location.href = "intajkhan.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
