const possibleMoves = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice(moves) {
    
    let computerChoice = Math.floor(Math.random() * 3)
    return moves[computerChoice]
};

function getHumanChoice() {
    let humanChoice = prompt("Choose your move:")
    return humanChoice
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

const humanSelection = getHumanChoice().toLowerCase()
const computerSelection = getComputerChoice(possibleMoves)

console.log('Player choice: ' + humanSelection);
console.log('Computer choice: ' + computerSelection);

playRound(humanSelection, computerSelection);

console.log('Player score: ' + humanScore);
console.log('Computer score: ' + computerScore);
