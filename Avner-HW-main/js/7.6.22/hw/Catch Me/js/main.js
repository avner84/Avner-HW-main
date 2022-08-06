const miniDiv = document.querySelector("#smallDiv");
const h3Timer = document.querySelector("#runTime");
const h3Score = document.querySelector("#h3Score");
const h3MissedClicks = document.querySelector("#h3MissedClicks");
const container = document.querySelector("#container");
const h3Level = document.querySelector("#h3Level");
const h3pointsToNextLevel = document.querySelector("#h3pointsToNextLevel");
const header = document.querySelector("h1");
const colorsMiniDiv = ["red", "yellow", "greenyellow", "blue", "white"];

var time = 60;
var timerInterval = null;
var moveTimeout = null;
var scores = 0;
var level = 1;
var missedClicks = 0;
var pointToNextLevel = 10;
var divEscapeTime = 300;
var divRotationTime = 2;

header.addEventListener("click", restart);

miniDiv.style.animationPlayState = 'paused';



let winners = [];
const user = {};

let flag = true; //?




function moveDiv() {
    if (!moveTimeout) {
        moveTimeout = setTimeout(function() {
            var top = Math.floor(Math.random() * 80) + 5;
            var left = Math.floor(Math.random() * 87) + 3;
            miniDiv.style.top = top + "%";
            miniDiv.style.left = left + "%";
            clearTimeout(moveTimeout);
            moveTimeout = null;
        }, divEscapeTime);
    }
}

function rotateDiv() {
    miniDiv.style.WebkitTransitionDuration = "2s";
    miniDiv.style.webkitTransform = "rotate(360deg)";
    // miniDiv.style.animationIterationCount = "infinite";
}

function runTimer() {
    timerInterval = setInterval(function() {
        if (time > 0) {
            time--;
            h3Timer.innerHTML = time;
        } else {
            gameOver();
        }
    }, 1000);
}

function addPositiveScore(event) {
    scores += level * 10;
    h3Score.innerHTML = scores;
    event.stopPropagation();
    pointToNextLevel -= 1;
    h3pointsToNextLevel.innerHTML = pointToNextLevel;

    if (pointToNextLevel === 0) {
        nextLevel();
    }
}

function negativeScore() {
    missedClicks += 1;
    h3MissedClicks.innerHTML = missedClicks;

    scores -= level;
    h3Score.innerHTML = scores;
}

function nextLevel() {

    if (level === 6) {
        gameOver()
    } else {

        miniDiv.style.backgroundColor = colorsMiniDiv[level];
        pointToNextLevel = 10;
        h3pointsToNextLevel.innerHTML = pointToNextLevel;
        level += 1;
        h3Level.innerHTML = level;
        time += 10;
        h3Timer.innerHTML = time;
        divEscapeTime -= 50;
        divRotationTime -= 0.25;
        miniDiv.style.animationDuration = divRotationTime + "s"


    }
}

function gradesDirector() {
    if (winners.length < 5) {
        newWinner();
    } else {
        if (winners.length > 1) {
            winners.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade)); //Arranges the array from high grade to low
            if (winners[winners.length - 1].grade < scores) {
                winners.pop();
                newWinner();
            }

        }

    }


    header.innerHTML = "click here to start the game";
    header.style.color = "purple";
    header.addEventListener("click", restart);

}

function newWinner() {
    user.name = prompt(
        `Congratulations on your achievement!
    Please enter your name to enter our list of winners`
    );

    if (user.name == null) {
        user.name = "unnamed";
    }

    user.grade = scores;
    winners.push(user);
    if (winners.length > 1) {
        winners.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade)); //Arranges the array from high grade to low
    }
    localStorage.setItem("Winners", JSON.stringify(winners));
    updateWinersList()
}

function updateWinersList() {
    if (localStorage.getItem("Winners")) {
        winners = JSON.parse(localStorage.getItem("Winners"));
        let winnerDetails = "";
        winners.forEach(
            (element) =>
            (winnerDetails += `<div class="h5WinnerDetails">
            <h5>${element.name}</h5>
            <h5>${element.grade}</h5>
        </div>`)
        );
        document.querySelector("#winnersList").innerHTML = winnerDetails;
    }
}

function restart() {
    updateWinersList();
    header.innerHTML = "CATCH ME IF YOU CAN";
    header.style.color = "black";

    time = 60;
    h3Timer.innerHTML = time;

    scores = 0;
    h3Score.innerHTML = scores;

    level = 1;
    h3Level.innerHTML = level;

    missedClicks = 0;
    h3MissedClicks.innerHTML = missedClicks;

    pointToNextLevel = 10;
    h3pointsToNextLevel.innerHTML = pointToNextLevel;

    divEscapeTime = 300;
    divRotationTime = 2;
    timerInterval = null;
    moveTimeout = null;

    miniDiv.addEventListener("mouseover", moveDiv);
    miniDiv.addEventListener("mousedown", addPositiveScore);
    container.addEventListener("click", negativeScore);
    header.removeEventListener("click", restart);
    miniDiv.style.animationPlayState = 'running';


    runTimer();
}


function gameOver() {


    clearInterval(timerInterval);
    stopGame();

    setTimeout(function() {
        alert("GAME OVER");
        gradesDirector();
    }, 50);


}

function stopGame() {

    miniDiv.style.transform = "rotate(360deg)";

    miniDiv.removeEventListener("mouseover", moveDiv);
    miniDiv.removeEventListener("mousedown", addPositiveScore);
    container.removeEventListener("click", negativeScore);
    miniDiv.style.animationPlayState = 'paused';
    miniDiv.style.transform = "rotate(360deg)";
    miniDiv.style.top = "5%";
    miniDiv.style.left = "3%";


    if (moveTimeout) {
        clearTimeout(moveTimeout);
        moveTimeout = null;
    }

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

}

updateWinersList();