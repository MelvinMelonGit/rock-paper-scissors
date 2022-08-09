//instatiate scores
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');
let playerScore = 0; 
let computerScore = 0; 

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
        playerScore++;
    }

    else {
        message = `You Lose! ${playerSelectionLowerCase} loses ${computerSelection}`;
        computerScore++;
    }

    playerPoints.innerText = playerScore;
    computerPoints.innerText = computerScore;

    return message;
}

function playSelection() {
    const playerSelection = this.innerText;
    const computerSelection = getComputerChoice();
    const results = document.querySelector('#results');

    if (playerScore === 0 && computerScore === 0) results.innerText = "";

    const addResult = document.createElement('div');
    addResult.innerText = playRound(playerSelection, computerSelection);
    results.appendChild(addResult);
    if(playerScore === 5) {
       getWinner("Player");
    }
    if(computerScore === 5) {
        getWinner("Computer");
    }
}

function getWinner(winner) {
    results.innerText = `${winner} wins!`;
    playerScore = 0;
    computerScore = 0;
    playerPoints.innerText = playerScore;
    computerPoints.innerText = computerScore;
}

function game() { 
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', playSelection));
}

//play game!
game();