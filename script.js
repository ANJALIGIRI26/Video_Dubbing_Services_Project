document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to services section on "Learn More" button click
    const learnMoreBtn = document.getElementById("learn-more-btn");
    learnMoreBtn.addEventListener("click", function() {
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    });

    // Form validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            event.preventDefault(); // Prevent form submission
            alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
            event.preventDefault(); // Prevent form submission
            alert("Please enter a valid email address.");
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
