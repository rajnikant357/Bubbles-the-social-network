const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign Up form submitted');
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    if (email === "rajnikantg357@gmail.com" && password === "rajnikant@123") {
        alert('Logged in successfully');
        window.location.href = 'mypage.html';
    } else {
        alert('Invalid email or password');
    }
});