$(function() {
  const currHour = dayjs().hour();
  const saveButtons = $(".saveBtn");
  const currTimeDisplay = $("#currentDay");

  // Save task on button click
  saveButtons.on("click", function() {
    const timeBlockId = $(this).closest(".time-block").attr("id");
    const taskDescription = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, taskDescription);
  });

  // Apply past, present, or future classes to time blocks
  $(".time-block").each(function() {
    const blockHour = parseInt($(this).attr("id").split("-")[1]);

    $(this)
      .removeClass("past present future") 
      .addClass(blockHour < currHour ? "past" : blockHour === currHour ? "present" : "future");
  });

  // Load tasks from localStorage
  $(".time-block").each(function() {
    const timeBlockId = $(this).attr("id");
    $(this).find(".description").val(localStorage.getItem(timeBlockId));
  });

  // Display current date and time
  function displayTime() {
    const now = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currTimeDisplay.text(now);
  }

  displayTime();
  setInterval(displayTime, 1000);
});