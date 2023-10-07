//var pastBlock = $('#past'); //grey
//var presentBlock = $('#present'); //red
//var futureBlock = $('#future'); //green
// ^kept for color discretion

// currHurr is current hour, saveButton is the 
// save button for each block, currTimeDisplay
// is the time that displays on top of page.
var currHour = dayjs().hour();
var saveButton = $(".saveBtn");
var currTimeDisplay = $("#currentDay");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // When save button clicked, will set time and description to local storage.
  saveButton.on("click", function(event)
  {
    event.preventDefault();

    var newDate = $(this).closest(".time-block").attr("id");
    var newText = $(this).siblings(".description").val();
    localStorage.setItem(newDate, newText);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // When enumerated through each time-block, will add/remove classes
  // based on if the time-block hour matches or does not match the current hour.
  $(".time-block").each(function()
  {
    var block = parseInt($(this).attr("id").split("-")[1]);

      if (block < currHour)
      {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }

      else if (block === currHour)
      {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }

      else
      {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Retrieving from local storage, the hour and description from each time block.
  $('#hour-9 .description').val(localStorage.getItem('hour9'));
  $('#hour-10 .description').val(localStorage.getItem('hour10'));
  $('#hour-11 .description').val(localStorage.getItem('hour11'));
  $('#hour-12 .description').val(localStorage.getItem('hour12'));
  $('#hour-13 .description').val(localStorage.getItem('hour13'));
  $('#hour-14 .description').val(localStorage.getItem('hour14'));
  $('#hour-15 .description').val(localStorage.getItem('hour15'));
  $('#hour-16 .description').val(localStorage.getItem('hour16'));
  $('#hour-17 .description').val(localStorage.getItem('hour17'));

  // TODO: Add code to display the current date in the header of the page.
  // Displays the current time on the top of the page; updates every second.
  function displayTime(){
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currTimeDisplay.text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);
});
