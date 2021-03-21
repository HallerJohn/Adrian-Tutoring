// The max number of timeslots, because there is 9 hours from 9am-5pm.
const MAX_TIMESLOTS = 9;

// Get all of the time-block elements.
var timeSlots = document.getElementsByClassName ("time-block");
// Get all of the saveBtn elements.
var saveTaskButtons = document.getElementsByClassName ("saveBtn");
// Get all of the textarea elements.
var textAreas = document.getElementsByClassName ("textarea");
// Get all of the hour elements.
var times = document.getElementsByClassName("hour");



// When the page loads.
window.addEventListener("load", function(){
    // Generate all the html elements for timeblocks
    generateElements();
    // Set the times for timeblocks
    initTimes();
    // Add effects when the save buttons are clicked
    addButtons();
    // Update the text areas to match the information in local storage.
    updateTextAreas();
    // Update the colors of the textareas depending on the time of day.
    updateColors();
})

// Adds effects to all of the save buttons.
function addButtons(){
    // For each of the save buttons
    for (i = 0; i < saveTaskButtons.length;i++) {
        // Wait for the button to be clicked
        saveTaskButtons [i].addEventListener("click", function(event){
            // Find the number of the button being clicked
            var elementIndex = findElementIndex(saveTaskButtons, event.target);
    
            // Store the number of the task, and the task itself
            localStorage.setItem(elementIndex, textAreas[elementIndex].value);
        })
    }
}


// Used to find the number of an element in a group of elements
function findElementIndex(collection, element){
    // For each elemenet in the group
    for (i = 0; i < collection.length; i++){
        // If the element matches the one you have.
        // Return the number of the element.
        if (collection[i] == element) return i;
    }
}
// Used to create the times used for timeblocks
function initTimes(){
    var currDay = document.getElementById("currentDay");
    // Set the current day
    currDay.textContent = moment().format('MM-DD-YYYY');

    // for each time block
    for (i = 0; i < times.length; i++){
        // Display the time in moment forn
        times[i].textContent = moment(9+i, 'hh').format('hha');
    }
}
// Updates the content of the text areas.
function updateTextAreas(){
    // For each text area
    for (i = 0; i < textAreas.length; i++){
        // Get the task from local storage.
        var task = localStorage.getItem(i);
        // If there is a task
        if (task){
            // Display the task
            textAreas[i].value = task;
        }
        // If there is no task
        else {
            // Display nothing
            textAreas[i].value = "";
        }
    }
}
// Updates the colors of the text areas.
function updateColors(){
    // For each text area.
    for (i = 0; i < textAreas.length; i++){
        // Get the hour for that time block.
        currMoment = moment(times[i].textContent, 'h a')
        // If that moment is before the current time.
        if (moment().isBefore(currMoment)){
            // Add a future class tag.
            textAreas[i].classList.add("future");
        }
        // If the timeblock is equal to the current time.
        else if (currMoment.hours() == moment().hours()){
            // Add a present class tag.
            textAreas[i].classList.add("present");
        }
        // If the timeblock is not in the future or the present, it is in the past.
        else {
            // Add a past class tag.
            textAreas[i].classList.add("past");
        }
        
    }
}
// Generates all of the HTML elements used for the timeblocks.
function generateElements(){
    // Generate as many as needed.
    for (i = 0; i < MAX_TIMESLOTS; i++){
        // The timeblock div.
        var timeslot = document.createElement("div");
        timeslot.classList.add("time-block");

        // The row div.
        var row = document.createElement("div");
        row.classList.add("row");

        // The hour span.
        var hour = document.createElement("span");
        hour.classList.add("hour");

        // The text area.
        var textArea = document.createElement("textarea");
        textArea.classList.add("textarea");

        // The save buttons.
        var saveBtn = document.createElement("button");
        saveBtn.classList.add("saveBtn");
        saveBtn.textContent = "Save";

        // Get the container for all of the timeblocks.
        var container = document.getElementsByClassName("container");
        // Append the timeslots on to the container.
        container[0].appendChild(timeslot);
        // Append the row onto the timeslot.
        timeslot.appendChild(row);
        // Append the hour onto the row.
        row.appendChild(hour);
        // Append the textArea onto the row.
        row.appendChild(textArea);
        // Append the saveBtn onto the row.
        row.appendChild(saveBtn);
    }
}
