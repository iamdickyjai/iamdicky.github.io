let userChoice;
let computerChoice;
let playerWinCount = 0;
let computerWinCount = 0;

function setUserChoice(choice) {
    userChoice = choice;
    computerPlay();
    compareResult();
    calculateFinalResult();
}

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3) + 1;
    let output = "";
    switch (computerChoice) {
        case 1:
            output = "img/rock.png";
            break;
        case 2:
            output = "img/paper.png";
            break;
        case 3:
            output = "img/scissor.png";
            break;
    }
    document.getElementById("computerChoice").src = output;
}

function compareResult() {
    let result = "";
    if (userChoice < computerChoice) {
        if (computerChoice - userChoice == 1) {
            result = "Player lose";
            console.log("lose");
            computerWinCount++;
        }
        else {
            result = "Player win";
            playerWinCount++;
        }
    }
    else if (userChoice > computerChoice) {
        if (userChoice - computerChoice == 1) {
            result = "Player win";
            playerWinCount++;
        }
        else {
            result = "Player lose";
            console.log("lose");
            computerWinCount++;
        }
    }
    else {
        result = "Draw";
    }

    document.getElementById('result').innerHTML = result;
}

function calculateFinalResult() {
    document.getElementById("currentResult").innerHTML = playerWinCount;
    if (playerWinCount >= 5) {
        showBlock(2);
        document.getElementById("finalResult").innerHTML = "Player has win the battle";
    }
    if (computerWinCount >= 5) {
        showBlock(2);
        document.getElementById("finalResult").innerHTML = "Computer has win the battle";
    }
}

function resetData() {
    userChoice = 0;
    computerChoice = 0;
    playerWinCount = 0;
    computerWinCount = 0;
    document.getElementById("computerChoice").src = "";
    document.getElementById("result").innerHTML = "";
    calculateFinalResult();
}

function showBlock(type) {
    let main = document.getElementById("main");
    let end = document.getElementById("end");
    let intro = document.getElementById("intro");

    if (type == 1) {
        main.style.display = "block";
        intro.style.display = "none";
        end.style.display = "none";
    }
    if (type == 2) {
        main.style.display = "none";
        intro.style.display = "none";
        end.style.display = "block";
    }
    if (type == 0) {
        main.style.display = "none";
        intro.style.display = "block";
        end.style.display = "none";
    }

}