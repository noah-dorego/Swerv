// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload

    // Show Bootstrap toast
    var toast = new bootstrap.Toast(document.getElementById("successToast"));
    toast.show();
});