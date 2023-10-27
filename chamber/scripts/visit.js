// Get Element by ID
var lastVisitElement = document.getElementById("last-date");
var daysBetween = document.getElementById("days-between");

// Get current date
var today = new Date();

// Get last visit date from local storage
var lastVisit = localStorage.getItem("lastVisit");

// If last visit date is not set, set it to today and display the welcome message
if (lastVisit === null) {
    localStorage.setItem("lastVisit", today);
    lastVisitElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate days between visits
    var days = calculateDateBetween(today, lastVisit);

    // Display appropriate message
    if (days < 1) {
        lastVisitElement.textContent = "Back so soon! Awesome!";
    } else {
        var daysText = (days === 1) ? "day" : "days";
        lastVisitElement.textContent = "You last visited " + days + " " + daysText + " ago.";
    }

    daysBetween.textContent = days;
}

// Set last visit date to today
localStorage.setItem("lastVisit", today);

function calculateDateBetween(today, lastVisit) {
    var lastVisitDate = new Date(lastVisit);
    var diff = today.getTime() - lastVisitDate.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
