const possibleMoves = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(moves) {
    
    let computerChoice = Math.floor(Math.random() * 3)
    
    console.log("Computer choice: " + moves[computerChoice]);
    
    return moves[computerChoice]
};

function getHumanChoice() {
    let humanChoice = prompt("Choose your move:")

    console.log("Human choice: " + humanChoice);

    return humanChoice
};

getComputerChoice(possibleMoves);
getHumanChoice();

