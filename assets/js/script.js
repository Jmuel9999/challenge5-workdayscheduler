
let textAreas = document.querySelectorAll(".textarea");


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

$( document ).ready(function() {
    //listen for save button clicks
    $(".saveBtn").on("click", function () {
    //save to storage here
    const value = $(this).siblings(".description").val();
    const time = $(this).parent("textDiv").attr("id");
    //save in localStorage
    localStorage.setItem(time, value);
    document.addEventListener("click", eventSubmitHandler);
  });
});
// const saveData = function() {
//     const saveButtons = document.querySelectorAll(".saveBtn");
//     //const textAreas = document.querySelectorAll(".textarea");
//     console.log(saveButtons);
//     saveButtons.forEach(function (element) {
//         for (var i = 0; saveButtons[i].length; i++) {
//             if (textAreas !== null) {
//                 localStorage.setItem("new event", textAreas[i]);
//             }    
//             eventSubmitHandler();
//             console.log("works");
//         };
//     });
// };

const eventSubmitHandler = function(event) {
    //stops browser from refreshing
    event.preventDefault();
    //console.log("works");
};

//saveData();
timeDisplay();
displayTimeBlocks();

document.addEventListener("new event", textAreas.value);
document.addEventListener("", eventSubmitHandler);














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
//    7 List out the things I know well, knock them out 