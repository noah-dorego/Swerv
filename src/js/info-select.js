// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const carInput = document.getElementById("carInput");
    const requestInput = document.getElementById("requestInput");

    const selectedServiceTitle = document.getElementById("selectedServiceTitle");
    const serviceImageContainer = document.getElementById("selectedServiceImageDiv");
    var img = document.createElement("img");
    img.style = "width: 100%; height: 100%; object-fit: cover; border-radius: 20px;"

    const continueBtn = document.getElementById("continue");

    const bookingData = JSON.parse(localStorage.getItem("bookingData"));

    if (bookingData["service"] == "interior_detailing") {
        selectedServiceTitle.innerHTML = "Interior Detailing";
        img.src = "./assets/images/services/interior-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "exterior_detailing") {
        selectedServiceTitle.innerHTML = "Exterior Detailing"
        img.src = "./assets/images/services/exterior-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "full_detailing") {
        selectedServiceTitle.innerHTML = "Full Detailing"
        img.src = "./assets/images/services/full-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "basic_service_repair") {
        selectedServiceTitle.innerHTML = "Basic Repair/Service"
        img.src = "./assets/images/services/repair.jpg";
        serviceImageContainer.append(img);
    }

    // Save data on button click
    continueBtn.addEventListener("click", () => {
        const name = nameInput.value;
        const email = emailInput.value;
        const car = carInput.value;
        const request = requestInput.value;


        if (!name || !email || !car) {
            alert("Please enter your name, email and car information!");
            return;
        }

        const bookingData = JSON.parse(localStorage.getItem("bookingData"));

        bookingData["name"] = name;
        bookingData["email"] = email;
        bookingData["car"] = car;
        bookingData["request"] = request;

        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        window.location.href = '/swerv/booking/confirm';
    });
});