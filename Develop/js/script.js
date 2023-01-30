// display today's date
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM D'));

//make function available after document is loaded
$(document).ready(function () {
  //Event for clicking save button
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {

    //get values of description written in text
    var textEnter = $(this).siblings('.description').val();

    //id of hour-x using DOM traversal
    var time = $(this).parent().attr('id');

    //set variables into local storage; (key,value)
    localStorage.setItem(time, textEnter);
  });

  function trackTime() {
    //current hour- 24hr clock
    var currentHour = dayjs().hour();
  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
