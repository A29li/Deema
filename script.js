document.addEventListener('DOMContentLoaded', (event) => {
    // ----------------------------------------------------------------------
    // 1. Welcome Modal Functionality (نافذة الترحيب)
    // ----------------------------------------------------------------------
    const welcomeModal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn");
    const enterBtn = document.getElementById("modal-close-btn");

    // Show the modal on page load
    welcomeModal.style.display = "block";

    // Close modal when user clicks on (x) or "Enter Site"
    closeBtn.onclick = function() {
        welcomeModal.style.display = "none";
    }
    enterBtn.onclick = function() {
        welcomeModal.style.display = "none";
    }
    // Close modal if user clicks outside of it
    window.onclick = function(event) {
        if (event.target == welcomeModal) {
            welcomeModal.style.display = "none";
        }
    }


    // ----------------------------------------------------------------------
    // 2. Product Details Modal Functionality (نافذة تفاصيل المنتج)
    // ----------------------------------------------------------------------
    const graySuitModal = document.getElementById("gray-suit-modal");
    const openBtn = document.querySelector('[data-product-id="gray-suit"]');
    const closeDetailsBtn = graySuitModal.querySelector(".details-close-btn");

    // Open the details modal
    openBtn.onclick = function() {
        graySuitModal.style.display = "block";
        currentImageIndex = 0; // Reset gallery to first image
        showImage(currentImageIndex);
    }

    // Close the details modal
    closeDetailsBtn.onclick = function() {
        graySuitModal.style.display = "none";
    }

    // Close modal if user clicks outside of it
    window.onclick = function(event) {
        if (event.target == graySuitModal) {
            graySuitModal.style.display = "none";
        }
        // Keep the welcome modal check
        if (event.target == welcomeModal) {
            welcomeModal.style.display = "none";
        }
    }

    // ----------------------------------------------------------------------
    // 3. Image Gallery Functionality (معرض الصور داخل النافذة المنبثقة)
    // ----------------------------------------------------------------------
    let currentImageIndex = 0;
    const images = graySuitModal.querySelectorAll('.gallery-image');
    const dots = graySuitModal.querySelectorAll('.dot');

    function showImage(n) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Loop functionality
        if (n >= images.length) {
            currentImageIndex = 0;
        } else if (n < 0) {
            currentImageIndex = images.length - 1;
        } else {
            currentImageIndex = n;
        }

        images[currentImageIndex].classList.add('active');
        dots[currentImageIndex].classList.add('active');
    }

    // Add event listeners to dots for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Initialize the gallery when the page loads
    showImage(0); 

});
