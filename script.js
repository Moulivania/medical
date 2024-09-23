document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your login logic here (e.g., validation, API call, etc.)
        alert(`Logging in with Username: ${username} and Password: ${password}`);
        
        // After successful login, you can redirect to another page
        // window.location.href = 'home.html'; // Example of redirecting to a home page
    });
});
