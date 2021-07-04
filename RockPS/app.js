let userChoice;
let computerChoice;
let roundResult = [];

function setUserChoice(choice) {
    userChoice = choice;
}

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}

function compareResult() {
    if (userChoice + 1 == computerChoice) {
        console.log("Player lose");
    }
    if (userChoice - 1 == computerChoice) {
        console.log("Player win");
    }

}