//hw for section 5, Timers

var time_left = 0;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;


$(document).ready(function () {
    $("#ready").on('click', function () {
        intervalID = setInterval(timer, 1000);
        time_left = parseInt($("#timer").text());
        $("#start").css("visibility", "hidden");
        $("#questions").css("visibility", "visible");
    });

    $("#quiz").on('submit', function (event) {
        event.preventDefault();
        console.log("HERE");
    });

    $('#try_again').click(function() {
        location.reload();
    });
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
    get_score();
    $("#answers").css("visibility", "visible");
    $("#questions").css("visibility", "hidden");
    correct = 0;
    wrong = 0;
    unanswered = 0;
}

function get_score() {
    for (var i = 1; i <= 6; i++) {
        var selValue = $('input[name=q' + i + ']:checked').val();

        if (selValue == 1) {
            correct++;
        } else if (selValue == 0) {
            wrong++;
        } else {
            unanswered++;
        }
    }
    console.log(correct, wrong, unanswered);
    $("#RA").text(correct);
    $("#WA").text(wrong);
    $("#UnA").text(unanswered);
}