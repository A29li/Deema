document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('welcomeModal');
    const closeButton = document.querySelector('.close-button');
    const enterButton = document.getElementById('enterSiteButton');
    
    // Check if the user has visited before using Local Storage
    const hasVisited = localStorage.getItem('siteVisited');

    if (!hasVisited) {
        // If they haven't visited, show the modal using 'flex' for centering
        modal.style.display = 'flex'; 
    }

    // Function to close the modal and set the visit flag
    function closeModal() {
        modal.style.display = 'none';
        // Set local storage item so the modal doesn't show up again
        localStorage.setItem('siteVisited', 'true');
    }

    // Event Listeners for closing the modal
    closeButton.addEventListener('click', closeModal);
    enterButton.addEventListener('click', closeModal);

    // Close when the user clicks anywhere outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal if the user presses the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});
