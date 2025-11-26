// A simple effect for the welcome text
document.addEventListener('DOMContentLoaded', function() {
    const welcomeElement = document.getElementById('welcome-text');
    const originalText = welcomeElement.textContent;
    welcomeElement.textContent = ''; // Clear the text initially
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            welcomeElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Typing speed in milliseconds
        }
    }

    // Run the typing effect 1 second after the page loads
    setTimeout(typeWriter, 1000);
});

// You can add more interactive scripts here later
