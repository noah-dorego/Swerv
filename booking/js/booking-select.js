// Import our custom CSS
import '/src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const interiorDetailingCard = document.getElementById("interior_detailing");
const exteriorDetailingCard = document.getElementById("exterior_detailing");
const fullDetailingCard = document.getElementById("full_detailing");
const basicServiceCard = document.getElementById("basic_service_repair");

function updateSelectedCard(selectedService) {
    if (selectedService == "interior_detailing") {
        interiorDetailingCard.style.outline = "thick solid #000000";
        exteriorDetailingCard.style.outline = "";
        fullDetailingCard.style.outline = "";
        basicServiceCard.style.outline = "";
    } else if (selectedService == "exterior_detailing") {
        interiorDetailingCard.style.outline = "";
        exteriorDetailingCard.style.outline = "thick solid #000000";
        fullDetailingCard.style.outline = "";
        basicServiceCard.style.outline = "";
    } else if (selectedService == "full_detailing") {
        interiorDetailingCard.style.outline = "";
        exteriorDetailingCard.style.outline = "";
        fullDetailingCard.style.outline = "thick solid #000000";
        basicServiceCard.style.outline = "";
    } else if (selectedService == "basic_service_repair") {
        interiorDetailingCard.style.outline = "";
        exteriorDetailingCard.style.outline = "";
        fullDetailingCard.style.outline = "";
        basicServiceCard.style.outline = "thick solid #000000";
    } else {
        interiorDetailingCard.style.outline = "";
        exteriorDetailingCard.style.outline = "";
        fullDetailingCard.style.outline = "";
        basicServiceCard.style.outline = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    const timeInput = document.getElementById("time");
    const continueBtn = document.getElementById("continue");

    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    var selectedService = bookingData["service"] ?? "";
    selectedService && updateSelectedCard(selectedService);

    interiorDetailingCard.addEventListener("click", () => {
        selectedService = "interior_detailing";
        updateSelectedCard(selectedService);
    })

    exteriorDetailingCard.addEventListener("click", () => {
        selectedService = "exterior_detailing";
        updateSelectedCard(selectedService);
    })

    fullDetailingCard.addEventListener("click", () => {
        selectedService = "full_detailing";
        updateSelectedCard(selectedService);
    })

    basicServiceCard.addEventListener("click", () => {
        selectedService = "basic_service_repair";
        updateSelectedCard(selectedService);
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