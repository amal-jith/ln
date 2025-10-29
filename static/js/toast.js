    document.addEventListener('DOMContentLoaded', function () {
        // Select all elements with the class 'toast' that are inside the toast container
        var toastElList = document.querySelectorAll('.toast-container .toast');

        // Loop through each toast element
        toastElList.forEach(function(toastEl) {
            // Initialize the Bootstrap Toast instance
            var toast = new bootstrap.Toast(toastEl, {
                // Set the delay for auto-hiding (e.g., 5000ms = 5 seconds)
                delay: 5000
            });
            // Show the toast immediately
            toast.show();
        });
    });