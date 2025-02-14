// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    const darren = document.getElementById("darren");
    const jenny = document.getElementById("jenny");
    const jason = document.getElementById("jason");
    const continueBtn = document.getElementById("continue");

    darren.addEventListener("click", () => {
        selectedExpert = "darren";
    })

    jenny.addEventListener("click", () => {
        selectedExpert = "jenny";
    })

    jason.addEventListener("click", () => {
        selectedExpert = "jason";
    })

    var selectedExpert = "";

    // Save data on button click
    continueBtn.addEventListener("click", () => {

        if (selectedExpert === "") {
            alert("Please select an Expert!");
            return;
        }

        const bookingData = JSON.parse(localStorage.getItem("bookingData"));

        bookingData["expert"] = selectedExpert;

        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        window.location.href = '/swerv/booking/info';
    });
});