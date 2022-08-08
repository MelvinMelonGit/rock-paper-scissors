function getComputerChoice() {
    //return either rock, paper or scissors at random

    //create a random number
    const randomNum = Math.floor(Math.random() * 3);

    let computerChoice;
    //switch case
    switch(randomNum) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    //compare player with computer choice
    let message;
    const playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase === computerSelection) {
        message = `You Draw! ${playerSelectionLowerCase} draws ${computerSelection}`;
    } 
    
    else if ((playerSelectionLowerCase === "rock" && computerSelection === "scissors") ||
    (playerSelectionLowerCase === "paper" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "scissors" && computerSelection === "paper")) {
        message = `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`;
    }

    else {
        message = `You Lose! ${playerSelectionLowerCase} loses ${computerSelection}`;
    }
    return message;
}

function playSelection() {
    const playerSelection = this.innerText;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', playSelection));
}

//play game!
game();