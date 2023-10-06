var pastBlock = $('#past');
var presentBlock = $('#present');
var futureBlock = $('#future');
var inputDesc = $('.description');
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
  pastBlock.click(saveButton);
  presentBlock.click(saveButton);
  futureBlock.click(saveButton);
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currHour = dayjs().format('H a');
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  var savedWork = localStorage.getItem('work');
  if (savedWork)
  {
    savedWork = JSON.parse(savedWork);
  }
  else
  {
    savedWork = [];
  }
  // var projPastDesc = pastBlock.inputDesc.val();
  // var projPresentDesc = presentBlock.inputDesc.val();
  // var projFutureDesc = futureBlock.inputDesc.val();

  // var newWork = {
  //   pastInfo: projPastDesc,
  //   presentInfo: projPresentDesc,
  //   futureInfo: projFutureDesc,
  // }

  // savedWork.push(newWork);
  // localStorage.setItem('work', JSON.stringify(savedWork));

  // pastBlock.inputDesc.val('');
  // presentBlock.inputDesc.val('');
  // futureBlock.inputDesc.val('');
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime(){
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currTimeDisplay.text(rightNow);
  }
  displayTime();
  setInterval(displayTime, 1000);
});
