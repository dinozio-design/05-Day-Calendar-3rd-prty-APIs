// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
  // declarations
  var startTime = 15;
  var timeBlocks = [
    "hour-09",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17"
  ];
  // DOM element references
  var timeDisplayEl = $('#currentDay');
  var timeTable = $('#container');
  var saveBtn = $('.saveBtn');
  // use hour as a reference for naming local storage, as well as html div elements
  var today = dayjs();
  // var hrBucket = "hour-" + today.format('HH');
  var hrBucket = "hour-" + 20;


  // handle displaying the time
  function displayTime() {
    var rightNow = today.format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(`It is ${rightNow} right now!`);
  }

// set the time table page
  $.each(timeBlocks, function (i,timeBlock) {
    console.log("start time is: ", startTime);
    timeIndex = startTime + i;
    timeTable.append(`<div id="${timeBlock}" class="row time-block">
  <div class="col-2 col-md-1 hour text-center py-3">${timeBlock}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
 </div>`);
 var entry = $(`#${timeBlock}`);
//  console.log("Now it is : ", today.hour());
 console.log("array object is: ", timeBlock);
 console.log("this is entry: ", entry);
 console.log("i count is: ", i);
 console.log("time Index is : ",timeIndex);
 if (timeIndex === today.hour()){
  entry.addClass("present");
 } else if (timeIndex < today.hour()){
  entry.addClass("past");
 } else {
  entry.addClass("future");
 }
  })


  saveBtn.on('click', function () {
    // console.log(this);
    // console.log(typeof timeTable.children("#hour-09").children().eq(1));

  });
  displayTime();

});


  // TODO: Add a listener for click events on the save button. 
  
  //This code should use the id in the containing time-block as a key to save the user input in local storage. 
  
  //HINT: What does `this` reference in the click listener function? 

  //How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?
  //

  // ```
  // GIVEN I am using a daily planner to create a schedule

  // WHEN I scroll down
  // THEN I am presented with timeblocks for standard business hours
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // WHEN I click into a timeblock
  // THEN I can enter an event
  // WHEN I click the save button for that timeblock
  // THEN the text for that event is saved in local storage
  // WHEN I refresh the page
  // THEN the saved events persist
  // ```
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page. [DONE!]
  
  // make it count down the seconds

