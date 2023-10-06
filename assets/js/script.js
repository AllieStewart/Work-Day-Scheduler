//var pastBlock = $('#past'); //grey
//var presentBlock = $('#present'); //red
//var futureBlock = $('#future'); //green

var timeBlock = $('.time-block');

// The hour class in each div, next to time-block
//var hour = $('.hour');
var currHour = dayjs().format('H a');
//var inputDesc = $('.description');
var saveButton = $('.saveBtn');
var currTimeDisplay = $('#currentDay');

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
  //
  saveButton.on("click", function(event)
  {
    event.preventDefault();

    var newDate = $(this).parent().attr("id");
    var newText = $(this).siblings($('.description')).val();
    localStorage.setItem(newDate, newText);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  for (var i = 9; i < 18; i++)
  {
    var block = $('#hour-' + i);

      if (block < currHour)
      {
        timeBlock.removeClass("future");
        timeBlock.removeClass("present");
        timeBlock.addClass("past");
      }

      else if (block === currHour)
      {
        timeBlock.removeClass("past");
        timeBlock.removeClass("future");
        timeBlock.addClass("present");
      }

      else
      {
        timeBlock.removeClass("present");
        timeBlock.removeClass("past");
        timeBlock.addClass("future");
      }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (var i = 9; i < 18; i++)
{
  //var block = $('#hour-' + i);
  $('#hour .description').val(localStorage.getItem("hour-" + i));
}
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime(){
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currTimeDisplay.text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);
});
