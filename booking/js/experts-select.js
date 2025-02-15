// Import our custom CSS
import '/src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const darren = document.getElementById("darren");
const jenny = document.getElementById("jenny");
const jason = document.getElementById("jason");

function updateSelectedCard(selectedExpert) {
    if (selectedExpert == "darren") {
        darren.style.outline = "thick solid #000000";
        jenny.style.outline = "";
        jason.style.outline = "";
    } else if (selectedExpert == "jenny") {
        darren.style.outline = "";
        jenny.style.outline = "thick solid #000000";
        jason.style.outline = "";
    } else if (selectedExpert == "jason") {
        darren.style.outline = "";
        jenny.style.outline = "";
        jason.style.outline = "thick solid #000000";
    } else {
        darren.style.outline = "";
        jenny.style.outline = "";
        jason.style.outline = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const continueBtn = document.getElementById("continue");

    darren.addEventListener("click", () => {
        selectedExpert = "darren";
        updateSelectedCard(selectedExpert);
    })

    jenny.addEventListener("click", () => {
        selectedExpert = "jenny";
        updateSelectedCard(selectedExpert);
    })

    jason.addEventListener("click", () => {
        selectedExpert = "jason";
        updateSelectedCard(selectedExpert)
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