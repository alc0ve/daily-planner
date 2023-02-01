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
    console.log(currentHour);

    //with TA help
    $('.time-block').each(function () {
      var myHour = parseInt($(this).attr("id").split("-")[1]);

      if (currentHour > myHour) {
        //add past
        $(this).addClass('past');
      } else if (currentHour === myHour) {
        //add present
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        //add future
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    })
  }

  //better call that fx!
  trackTime();

  //GET from localStorage, id attr for each time block
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
