
//current date and time
var timeDisplay = function() {
    var todaysDate = moment()._d;
    var showTime = document.querySelector("#currentDay");

    showTime.textContent = todaysDate;
    //console.log(moment());
    //console.log(todaysDate);
};

//when user scrolls, show time blocks


timeDisplay();