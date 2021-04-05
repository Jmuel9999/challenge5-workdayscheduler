
//document.getElementById("text-area-09").addEventListener("click", addEvent());


//current date and time
const timeDisplay = function() {
    var todaysDate = moment()._d;
    var showTime = document.querySelector("#currentDay");

    showTime.textContent = todaysDate;
    //console.log(moment());
    //console.log(todaysDate);
};

//when user scrolls, show time blocks

//each time block color coded based on past, present or future
const displayTimeBlocks = function () {
    var currentTime = moment()._d;
    //console.log(moment(currentTime).hour());//grabs current time hour
    // console.log(moment(currentTime).isBefore("2021-04-02T23:00"));
    const textAreas = document.querySelectorAll(".textarea");//added dot due to class
    //console.log(textAreas[0].id);
    //substring method
    //console.log(textAreas[0].id.substring(9, 11));
    const textAreaHour = textAreas[0].id.substring(9, 11);
    const currentTimeHour = moment(currentTime).hour();
    //console.log(textAreaHour > currentTimeHour);
    for (let i = 0; i < textAreas.length; i++) {
        //console.log(textAreas[i].id);
        const hour = textAreas[i].id.substring(9, 11);//practice this
        if (hour > currentTimeHour) {
            //console.log(hour + " is after the current time.");
            const el = document.getElementById("textarea-" + hour);
            el.classList.add("future")
        } else if (hour < currentTimeHour) {
            const el = document.getElementById("textarea-" + hour);
            //console.log(hour + " is before the current time.");
            //console.log("mark");
            el.classList.add("past");
        } else {
            const el = document.getElementById("textarea-" + hour);
            console.log(hour + " is the current hour.");
            el.classList.add("present");
        }
    }

};



const saveData = function() {
    const saveButtons = document.querySelectorAll(".saveBtn");
    const textAreas = document.querySelectorAll(".textarea");
    const savedEvent = localStorage.setItem("new event", textAreas.value);
    const storedEvent = localStorage.getItem("new event");
    //when saveButton is clicked..
    saveButtons.forEach(function (element) {
        //each time a button is clicked, it will call eventSubmitHandler
        element.addEventListener("click", savedEvent);
        //prevents page from losing saved input from adding/editing events
        element.addEventListener("click", eventSubmitHandler);
        //console.log("click");
            //for (var i = 0; i < textAreas[i].length; i++) {
                //console.log(textAreas[i])
            //     if (textAreas[i].value !== textAreas[i].value) {
            //         localStorage.setItem("new event", textAreas[i].value);     
            // };
        //};
    });
};
const eventSubmitHandler = function(event) {
    //stops browser from refreshing
    event.preventDefault();
    //console.log("works");
};

// const addEvent = function() {
//     const eventBox = document.getElementById("#textarea-09");
//     const newDiv = document.createElement("div");
//     eventBox.textContent = "";
//     eventBox.appendChild(newDiv);
//     console.log("works");
// };

saveData();
timeDisplay();
displayTimeBlocks();

//document.getElementById("savebtn").addEventListener("click", localStorage.setItem("new event", textAreas.value));















// Pseudo code for challenge 5
//      1 When user lands, the page loads
//      2 Add the curernt date and time for the user
//        (moment.js)
//       3 When user scrolls, show time blocks
//       4 Show standard business hours
//      5 Each time block is color-coded
//      6 Indicate if the block is in past, present, or future
//      7 Add button for user to click on add an event
//      8 When event is clicked, should be able to edit the timeblock
//      9 Create "save" button
//    10 When save button clicked, save event to local storage
//    11 Retrieved data from local storage
//    12 Updated to the DOM
// Actionable Steps
//    1 Create repository
//    2 Clone repository
//    3 Copy starter code to cloned repository
//    4 Test repo - run it
//    5 Save git add .
//    6 push to main repository
//    7 List out the things I know well, knock them out fast