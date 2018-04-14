//starting alerts

var greeting = alert("Welcome. All burger products have been loaded onto a rocket ship and will launch into the sun. However, the ship will not launch if you score points on this quiz.");

var ok = alert("You have 60 seconds to save the world's burger. Click 'OK' to start!");

//setting timer

var countdown = 60;

var timeInterval;

function timer() {
    timeInterval = setInterval(decrement, 1000);
}

function decrement() {
    countdown--;

    $("#time").html("<h3>Time remaining: " + countdown + "</h3>");

    if (countdown === 0) {

        // the stop function is called
        stop();

        // the results function shows player their results
        results();

        // reloads game
        tryAgain();

    }

}

//function for quiz

function results() {

    // variable that creates an array from form questions

    var theQuestions = document.forms[0];

    // set variable for score, starting at 0

    var score = 0;

    // create for loop for the array of form questions

    for (var i = 0; i < theQuestions.length; i++) {

        // sets condition with if statements and tally score

        if (theQuestions[2].checked) {
            score++;
            if (theQuestions[7].checked) {
                score++;
            }
            if (theQuestions[9].checked) {
                score++;
            }
            if (theQuestions[12].checked) {
                score++;
            }
            if (theQuestions[19].checked) {
                score++;
            }
            alert("Congratulations! You got " + score + " right!");
            alert("Humanity will be allowed to enjoy their burgers!");
            break;
        }
        else {
            score = 0;
            alert("You failed!");
            alert("Ship launching in 3...2...1...");
            break;
        }
    }
}

// button to start game again. jQuery code to bring page back to the top

function tryAgain() {
    location.reload();
    $('html,body').scrollTop(0);
}

// code stops the timer

function stop() {
    clearInterval(timeInterval);
}

// code executes timer

timer();