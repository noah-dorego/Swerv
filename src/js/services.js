// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const interiorDetailingCard = document.getElementById("interior_detailing");
const exteriorDetailingCard = document.getElementById("exterior_detailing");
const fullDetailingCard = document.getElementById("full_detailing");
const basicServiceCard = document.getElementById("basic_service_repair");

document.addEventListener("DOMContentLoaded", () => {
    var selectedService = "";

    interiorDetailingCard.addEventListener("click", () => {
        selectedService = "interior_detailing";
        localStorage.setItem("bookingData", JSON.stringify({ service: selectedService }));
        window.location.href = '/swerv/booking/select';
    })

    exteriorDetailingCard.addEventListener("click", () => {
        selectedService = "exterior_detailing";
        localStorage.setItem("bookingData", JSON.stringify({ service: selectedService }));
        window.location.href = '/swerv/booking/select';
    })

    fullDetailingCard.addEventListener("click", () => {
        selectedService = "full_detailing";
        localStorage.setItem("bookingData", JSON.stringify({ service: selectedService }));
        window.location.href = '/swerv/booking/select';
    })

    basicServiceCard.addEventListener("click", () => {
        selectedService = "basic_service_repair";
        localStorage.setItem("bookingData", JSON.stringify({ service: selectedService }));
        window.location.href = '/swerv/booking/select';
    })
});
