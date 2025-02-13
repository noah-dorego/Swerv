// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", () => {
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const car = document.getElementById("car");
    const expert = document.getElementById("expert");
    const request = document.getElementById("request");

    const selectedServiceTitle = document.getElementById("selectedServiceTitle");
    const serviceImageContainer = document.getElementById("selectedServiceImageDiv");
    var img = document.createElement("img");
    img.style = "width: 100%; height: 100%; object-fit: cover; border-radius: 20px;"

    const continueBtn = document.getElementById("continue");

    const bookingData = JSON.parse(localStorage.getItem("bookingData"));

    date.innerHTML += bookingData["date"];
    time.innerHTML += bookingData["time"];
    name.innerHTML += bookingData["name"];
    email.innerHTML += bookingData["email"];
    car.innerHTML += bookingData["car"];
    expert.innerHTML += bookingData["expert"];
    request.innerHTML += bookingData["request"];

    if (bookingData["service"] == "interior_detailing") {
        selectedServiceTitle.innerHTML = "Interior Detailing";
        img.src = "../assets/images/services/interior-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "exterior_detailing") {
        selectedServiceTitle.innerHTML = "Exterior Detailing"
        img.src = "../assets/images/services/exterior-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "full_detailing") {
        selectedServiceTitle.innerHTML = "Full Detailing"
        img.src = "../assets/images/services/full-detailing.jpg";
        serviceImageContainer.append(img);
    } else if (bookingData["service"] == "basic_service_repair") {
        selectedServiceTitle.innerHTML = "Basic Repair/Service"
        img.src = "../assets/images/services/repair.jpg";
        serviceImageContainer.append(img);
    }

    // Save data on button click
    continueBtn.addEventListener("click", () => {

        if (!date || !time || !name || !email || !car || !expert || !request) {
            window.location.href = '/';
            return;
        }

        alert("Your booking has been confirmed! You will be emailed shortly.")

        window.location.href = '/';
    });
});