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
    let result;
    let message;
    const playerSelectionLowerCase = playerSelection.toLowerCase();

    switch (computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    result = "draw";
                    break;
                case "paper":
                    result = "loss";
                    break;
                case "scissors":
                    result = "win";
                    break;
            }
            break;
        case "paper":
            switch(playerSelection) {
                case "rock":
                    result = "win";
                    break;
                case "paper":
                    result = "draw";
                    break;
                case "scissors":
                    result = "loss";
                    break;
            }
            break;
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    result = "loss";
                    break;
                case "paper":
                    result = "win";
                    break;
                case "scissors":
                    result = "draw";
                    break;
            }
            break;
    }
    
    //output win or lose message
    switch (result) {
        case "win":
            message = `You Win! ${playerSelectionLowerCase} beats ${computerSelection}`;
            break;
        case "draw":
            message = `You Draw! ${playerSelectionLowerCase} draws ${computerSelection}`;;
            break;
        case "loss":
            message = `You Lose! ${playerSelectionLowerCase} loses ${computerSelection}`;;
            break;
    }
    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Pick Rock, Paper or Scissors!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

//play game!
game();