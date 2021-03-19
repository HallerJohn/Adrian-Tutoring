var timeslots = document.getElementsByClassName("Timeslot");
var addTaskButtons = document.getElementsByClassName("Add Task Buttons");
var tasks = document.getElementsByClassName("Tasks")
var removeTaskButtons = document.getElementsByClassName("Remove Task Buttons");


// Temporarily here for date at top of page.
// Need to add more date stuff.
var currentDate = document.getElementById("Current Date");
var currDate = new Date();
currentDate.innerHTML = currDate;


updateTimeslots();

// Buttons to add tasks.
for (i = 0; i < addTaskButtons.length; i++){
    addTaskButtons[i].addEventListener("click", function(event){
        var elementIndex = findElementIndex(event.target, addTaskButtons);

        var newTask = prompt("What task would you like to add?");

        localStorage.setItem(elementIndex, newTask);

        updateTimeslots();
    });
}

// Buttons to remove tasks.
for (i = 0; i < removeTaskButtons.length; i++){
    removeTaskButtons[i].addEventListener("click", function(event){
        var elementIndex = findElementIndex(event.target, removeTaskButtons);

        if (localStorage.getItem(elementIndex)){
            var confirmDelete = prompt("Do you want to remove this task? (y/n)");
            switch (confirmDelete){
                case 'y': {
                    localStorage.removeItem(elementIndex);
                    break;
                }
                case 'n': break;
                default : alert("Invalid input");
            }
            
        }

        updateTimeslots();
    });
}

// Redraw the time slots.
function updateTimeslots(){
    for (i = 0; i < timeslots.length; i++){
        tasks[i].innerHTML = localStorage.getItem(i);
    }
}

// Used to find the position of an html element in a collection.
function findElementIndex(element, collection){
    for (i= 0; i < collection.length; i++){
        if (collection[i] == element) return i;
    }
}
