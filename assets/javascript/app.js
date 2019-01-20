//hw for section 5, Timers


var time_left = 60;
var intervalID;

$(document).ready(function () {
    intervalID = setInterval(timer, 1000);
   

});


function timer() {
    time_left--;
    $("#timer").text(time_left);
    if (time_left === 0) {
        stop();
    }
}

function stop() {
    clearInterval(intervalID);
}