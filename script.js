$("button").on("click", function () {
    var timeId = $(this).attr("time");
    var userTask = $(timeId).val();
    localStorage.setItem(timeId, userTask);
});

var nineAm = localStorage.getItem("#9am");
if (nineAm) {
    $("#9am").val(nineAm);
}

for (var i = 9; i <= 17; i++) {

    var today = new Date();
    //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();//
    var amPm = "am";
    if (i >= 12) {
        amPm = "pm";
    }
    var hour = i;
    if (i > 12) {
        hour -= 12;
    }

    var targetId = "#" + hour + amPm;
    var currentTime = today.getHours()

    var className = "future";
    if (currentTime < i) {
      className = "class future";
    }else if (currentTime > i) {
        className  = "class past";
    }else {
        className  = "class current";
    }
    $(targetId).addClass(className);
    

}

var tenAm = localStorage.getItem("#10am");
if (tenAm) {
    $("#10am").val(tenAm);
}

var elevenAm = localStorage.getItem("#11am");
if (elevenAm) {
    $("#11am").val(elevenAm);
}

var twelvePm = localStorage.getItem("#12pm");
if (twelvePm) {
    $("#12pm").val(twelvePm);
}

var onePm = localStorage.getItem("#1pm");
if (onePm) {
    $("#1pm").val(onePm);
}

var twoPm = localStorage.getItem("#2pm");
if (twoPm) {
    $("#2pm").val(twoPm);
}

var threePm = localStorage.getItem("#3pm");
if (threePm) {
    $("#12pm").val(threePm);
}

var fourPm = localStorage.getItem("#4pm");
if (fourPm) {
    $("#12pm").val(fourPm);
}

var fivePm = localStorage.getItem("#5pm");
if (fivePm) {
    $("#5pm").val(fivePm);
}


/// Moment JS examples
$("#currentDay").text(moment().format("MM/DD/YYYY"));
console.log(moment().format("HH:mm A"));
console.log(moment().format("h:mm a"));
