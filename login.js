document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            email: email,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes('Login successful')) {
            window.location.href = '/';
        } else {
            errorMessage.textContent = data;
            errorMessage.style.display = 'block';
        }
    });
});
