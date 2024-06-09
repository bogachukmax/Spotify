document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // By default, show the login form
    loginForm.classList.add('active');
});

//2 
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // By default, show the login form
    loginForm.classList.add('active');

    // Handle registration
    registerForm.querySelector('button').addEventListener('click', function (e) {
        e.preventDefault();
        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        if (username && email && password) {
            const user = { username, email, password };
            localStorage.setItem(email, JSON.stringify(user));
            alert('Registration successful!');
            registerForm.reset();
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle login
    loginForm.querySelector('button').addEventListener('click', function (e) {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (email && password) {
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                alert(`Welcome, ${user.username}!`);
                loginForm.reset();
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
});

//3
// Отримання даних користувача


// const storedUser = localStorage.getItem()
if (storedUser) {
    const user = JSON.parse(storedUser);
    console.log(user.username);
}

console.log('!!!');