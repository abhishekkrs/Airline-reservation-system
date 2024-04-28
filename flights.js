document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    var oneWayRadio = document.getElementById("oneWayRadio");
    var roundTripRadio = document.getElementById("roundTripRadio");
    var returnDateField = document.getElementById("returnDateField");
    var bookingForm = document.getElementById("bookingForm");
    var bookingResults = document.getElementById("bookingResults");

    // Function to toggle return date visibility
    function toggleReturnDate() {
        if (roundTripRadio.checked) {
            returnDateField.style.display = "block";
        } else {
            returnDateField.style.display = "none";
        }
    }

    // Event listeners for radio buttons
    oneWayRadio.addEventListener("change", toggleReturnDate);
    roundTripRadio.addEventListener("change", toggleReturnDate);

    // Handle form submission
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Collect form data
        var tripType = roundTripRadio.checked ? "Round Trip" : "One Way";
        var departureDate = document.getElementById("departureDate").value;
        var returnDate = document.getElementById("returnDate").value;
        var sourceAirport = document.getElementById("sourceAirport").value;
        var destinationAirport = document.getElementById("destinationAirport").value;
        var passengers = document.getElementById("passengers").value;

        // Validate inputs (simple validation)
        if (!departureDate || !sourceAirport || !destinationAirport || !passengers) {
            alert("Please complete all required fields.");
            return;
        }

        if (roundTripRadio.checked && !returnDate) {
            alert("Please enter a return date for round trips.");
            return;
        }

        // Display booking information (simulating search result)
        bookingResults.innerHTML = `
            <h2>Flight Details:</h2>
            <p>Trip Type: ${tripType}</p>
            <p>From: ${sourceAirport} to ${destinationAirport}</p>
            <p>Departure Date: ${departureDate}</p>
            ${roundTripRadio.checked ? `<p>Return Date: ${returnDate}</p>` : ""}
            <p>Passengers: ${passengers}</p>
        `;
    });
});
