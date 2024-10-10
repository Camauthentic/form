document.getElementById('submitBtn').addEventListener('click', function () {
    // Clear previous warnings
    const fields = ['username', 'email', 'phone', 'password', 'confirmPassword', 'ageGroup'];
    fields.forEach(field => {
        document.getElementById(field).style.borderColor = '';
    });

    let isValid = true;

    // Validate Username
    const username = document.getElementById('username').value;
    const usernameRegex = /^[a-z0-9]{4,12}$/;
    if (!usernameRegex.test(username)) {
        document.getElementById('username').style.borderColor = 'orange';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(net|com|org|edu)$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').style.borderColor = 'orange';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone').style.borderColor = 'orange';
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('password').style.borderColor = 'orange';
        isValid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        isValid = false;
    }

    // Validate Age Group
    const ageGroup = document.getElementById('ageGroup').value;
    if (ageGroup === "") {
        document.getElementById('ageGroup').style.borderColor = 'orange';
        isValid = false;
    }

    // Display general warning if any field is invalid
    if (!isValid) {
        alert("Please fix the highlighted fields.");
    } else {
        alert("Form submitted successfully!");
    }
});
