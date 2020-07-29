$("button").on("click", function () {
    var timeId = $(this).attr("time");
    var userTask = $(timeId).val();
    localStorage.setItem(timeId, userTask);
});

var nineAm = localStorage.getItem("#9am");
if (nineAm) {
    $("#9am").val(nineAm);
}

for (var i = 9; i < 17; i++) {
    // Get the current hour

    var amPm = "am";
    if (i >= 12) {
        amPm = "pm";
    }
    var hour = i;
    if (i > 12) {
        hour -= 12;
    }

    

    var targetId = "#" + hour + amPm;

    var className = "future";
    // If currentTime > i => class future
    // else if currentTime < i class past
    // else class current

    $(targetId).addClass(className);


}

/// Moment JS examples
console.log(moment().format("MM/DD/YYY"));
console.log(moment().format("HH:mm A"));
console.log(moment().format("h:mm a"));