// Import our custom CSS
import '/src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const interiorDetailingCard = document.getElementById("interior_detailing");
    const exteriorDetailingCard = document.getElementById("exterior_detailing");
    const fullDetailingCard = document.getElementById("full_detailing");
    const basicServiceCard = document.getElementById("basic_service_repair");
    const continueBtn = document.getElementById("continue");

    var selectedService = "";

    interiorDetailingCard.addEventListener("click", () => {
        selectedService = "interior_detailing";
    })

    exteriorDetailingCard.addEventListener("click", () => {
        selectedService = "exterior_detailing";
    })

    fullDetailingCard.addEventListener("click", () => {
        selectedService = "full_detailing";
    })

    basicServiceCard.addEventListener("click", () => {
        selectedService = "basic_service_repair";
    })

    // Save data on button click
    continueBtn.addEventListener("click", () => {
        const selectedDate = dateInput.value;
        const selectedTime = timeInput.value;

        if (!selectedDate || !selectedTime || selectedService === "") {
            alert("Please select a date, time, and image!");
            return;
        }

        const bookingData = {
            date: selectedDate,
            time: selectedTime,
            service: selectedService
        };

        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        window.location.href = '/swerv/booking/experts';
    });
});