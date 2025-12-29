const possibleMoves = ['rock', 'paper', 'scissors']
const numberOfRounds = 5

let humanScore = 0
let computerScore = 0

function getComputerChoice(moves) {
    let computerChoice = Math.floor(Math.random() * 3)
    return moves[computerChoice]
};

function getHumanChoice(moves) {
    let humanChoice = prompt("Make your move: ")

    while (!humanChoice || !moves.includes(humanChoice.toLowerCase())) {
        humanChoice = prompt("Unallowed move! Try again")
    }

    return humanChoice.toLowerCase()
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerScore++;
            console.log('You lose! Paper beats Rock');          
        } else if (computerChoice == 'scissors') {
            humanScore++;
            console.log('You win! Rock beats Scissors');   
        } else {
            console.log('Draw!');  
        } 
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            humanScore++;
            console.log('You win! Paper beats Rock');   
        } else if (computerChoice == 'scissors') {
            computerScore++;
            console.log('You lose! Scissors beat Paper');
        } else {
            console.log('Draw!');
        }
    } else {
        if (computerChoice == 'rock') {
            computerScore++;
            console.log('You lose! Rock beats Scissors');
        } else if (computerChoice == 'paper') {
            humanScore++;
            console.log('You win! Scissors beat Paper');
        } else {
            console.log('Draw!');
        }
    }
};

function playGame(numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {
        let humanSelection = getHumanChoice(possibleMoves)
        let computerSelection = getComputerChoice(possibleMoves)

        console.log('Player choice: ' + humanSelection);
        console.log('Computer choice: ' + computerSelection);
        
        playRound(humanSelection, computerSelection)

        console.log('Player score: ' + humanScore);
        console.log('Computer score: ' + computerScore);

    }
}

playGame(numberOfRounds);

if (humanScore > computerScore) {
    console.log("Player wins!");
} else if (humanScore < computerScore) {
    console.log("Computer wins!");
} else {
    console.log("Draw!");
}


