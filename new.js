document.addEventListener('DOMContentLoaded', function() {
    // Show the form when the page loads
    document.getElementById('popupForm').style.display = 'flex';

    // Add event listener for the close button
    document.getElementById('closeFormButton').addEventListener('click', function() {
        document.getElementById('popupForm').style.display = 'none';
    });

    // Add event listener for the request OTP button
    document.getElementById('requestOtpButton').addEventListener('click', function() {
        // Simulate OTP request (In real applications, you would send a request to your OTP service)
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        alert(`Your OTP is: ${otp}`);
        // Store the OTP for validation (In real applications, this should be done securely)
        sessionStorage.setItem('generatedOtp', otp);
    });

    // Add event listener for the submit button
    document.getElementById('submitFormButton').addEventListener('click', function() {
        // Validate the OTP
        const enteredOtp = document.getElementById('otp').value;
        const generatedOtp = sessionStorage.getItem('generatedOtp');

        if (enteredOtp === generatedOtp) {
            // OTP is correct, proceed with form submission
            alert('Form submitted!');
            document.getElementById('popupForm').style.display = 'none';
        } else {
            // OTP is incorrect
            alert('Incorrect OTP. Please try again.');
        }
    });
});
