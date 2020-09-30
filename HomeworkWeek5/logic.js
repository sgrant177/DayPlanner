var currentDate = moment().format('dddd, MMMM Do YYYY');
var currentHour = moment().format('H:00');
var hour = 6;
var timeBlocks = $(".container");
var allPlans = [];
console.log(currentHour);
$(document).ready(function () {
    
    
    var dateEl = $("#currentDay")
    dateEl.text(currentDate);
    // on page load, set the currentDay id to the currentDate variable //
    var storedPlans = JSON.parse(localStorage.getItem("allPlans", allPlans));
    // get locally stored inputs //
    console.log(storedPlans);
    for(i = 0; i < allPlans.length; i++) {
        var userInput = $("input").text();
        userInput = allPlans[i++];
    };
    for (i = 0; i < 12; i++) {
 
        var newDiv = $("<div>");
       // set a variable to create a new div and add the class's row and //
        newDiv.addClass('row');
        // add class of row to new div //
        newDiv.addClass('sheduleRow');
        // add class of scheduleRow to new div //
        timeBlocks.append(newDiv);
        // append the new dive to the timeblock class //

        var timeBox = $("<div>");
        timeBox.addClass('col-md-2');
        // create a new div and add a  class of col-md-2//

        var inputBox = $("<input>");
        inputBox.attr("id", "input-" + hour);
        // create an input and add an id labeling that input by hour //
        var inputSlot = $("<div>");

        inputSlot.addClass('col-md-9');
        inputSlot.attr("id", hour);
        // create a space to add the new input element //

        var saveBtn = $('<index>');
        saveBtn.attr('id', hour);
        saveBtn.attr('class', "far fa-save saveIcon");

        // create a new index to act as our save button //

        var saveSlot = $("<div>");
        saveSlot.attr('col-md-1');
        // add space for the save spot //
        var timeSpan = $("<span>");
        timeSpan.text(hour + ":00");
        hour++;
        // create a spot for the curret hour and add the hour into it //
        newDiv.append(timeBox);
        timeBox.append(timeSpan);
        newDiv.append(inputSlot);
        inputSlot.append(inputBox);
        newDiv.append(saveSlot);
        saveSlot.append(saveBtn);
        // add timeboxs until the condition of the loop is met //
        $(saveBtn).on("click", function (event) {
            event.preventDefault();
            var index = $(this).attr("id");
            var inputId = "#input-" + index;
            var userInput = $(inputId).val();
            allPlans[index-6] = userInput;
            localStorage.setItem("allPlans", JSON.stringify(allPlans));
            //add an event to store the current inpute valure to local storage array //
        });      
        
        changeColor();
    }
    
});



function changeColor() {
   // function to update the color of the timeboxes based on wether it is past, future, or currently that hour //
    $(".col-md-9").each(function() {
        if ($(this).attr("id") === currentHour) {
           $(this).addClass("present") ;
        }

        else if ($(this).attr("id") > currentHour) {
            $(this).addClass("future"); 
        }
        else {
            $(this).addClass("past");
        }
    });
};
