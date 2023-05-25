$(function () {
  // declarations
  var startTime = 9;
  var timeBlocks = [
    "hour-9",
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
  // use hour as a reference for naming local storage, as well as html div elements
  var today = dayjs();
  // var hrBucket = "hour-" + today.format('HH');
  // var hrBucket = "hour-" + 20;


  // handle displaying the time
  function displayTime() {
    var rightNow = today.format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(`It is ${rightNow} right now!`);
  }
  // set the time table page
  $.each(timeBlocks, function (i, timeBlock) {
    timeIndex = startTime + i;
    var texts;
    // textarea value is to be equal to that of the local storage
    var descriptionText = localStorage.getItem(timeBlock);
    if (!descriptionText) {
      texts = "";
    } else {
      texts = descriptionText;
    }
    timeTable.append(`<div id="${timeBlock}" class="row time-block">
    <div class="col-2 col-md-1 hour text-center py-3">${timeBlock}</div>
    <textarea id="comment-${i}" class="col-8 col-md-10 description" rows="3">${texts}</textarea>
    <button id="${i}" class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
    </div>`);
    // check for present time segment
    var entry = $(`#${timeBlock}`);
    if (timeIndex === today.hour()) {
      entry.addClass("present");
    } else if (timeIndex < today.hour()) {
      entry.addClass("past");
    } else {
      entry.addClass("future");
    }
  })
  //saving subroutin
  var saveBtn = $('.saveBtn');
  function saveDetail(event) {
    event.preventDefault();
    var texts = $(`#comment-${this.id}`);
    storageName = Number(this.id) + startTime;
    //save this to loca storage with timeBlock name
    localStorage.setItem(`hour-${storageName}`, `${texts.val()}`);
  };
  saveBtn.on('click', saveDetail);
  displayTime();
});
