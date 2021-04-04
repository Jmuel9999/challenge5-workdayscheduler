
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

const addEvent = function() {
    const eventBox = document.getElementById("#textarea-09");
    const newDiv = document.createElement("div");
    eventBox.textContent = "anything";
    eventBox.appendChild(newDiv);
    console.log("works");
};


timeDisplay();
displayTimeBlocks();


