document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.lastVisit) {
        localStorage.lastVisit = Date.now();
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
    	var lastVisitTime = parseInt(localStorage.lastVisit);
        var currentTime = Date.now();
        var timeDifference = currentTime - lastVisitTime;
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        if (daysDifference < 1) {
          displayMessage("Back so soon! Awesome!");
        } else {
          var daysText = (daysDifference === 1) ? "day" : "days";
          displayMessage("You last visited " + daysDifference + " " + daysText + " ago.");
        }
        localStorage.lastVisit = currentTime;
      }

function displayMessage(message) {
    document.getElementById('visits').innerText = message;
    }
});