const possibleMoves = ["rock", "paper", "scissors"];
const numberOfRounds = 5;

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

function getComputerChoice(moves) {
  let computerChoice = Math.floor(Math.random() * 3);
  return moves[computerChoice];
}

function getHumanChoice(choice) {
  return choice;
}

function displayChoices(humanChoice, computerChoice) {
  console.log("Player choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);
}

function displayScores() {
  console.log("Player score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

function findWinner(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice == "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else {
      console.log("Draw!");
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else if (computerChoice == "scissors") {
      computerScore++;
      console.log("You lose! Scissors beat Paper");
    } else {
      console.log("Draw!");
    }
  } else {
    if (computerChoice == "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (computerChoice == "paper") {
      humanScore++;
      console.log("You win! Scissors beat Paper");
    } else {
      console.log("Draw!");
    }
  }
}

function playRound(humanChoice, computerChoice) {

  displayChoices(humanChoice, computerChoice);

  findWinner(humanChoice, computerChoice);

  displayScores();
}

function playGame(numberOfRounds) {
  for (let i = 1; i <= numberOfRounds; i++) {
    let humanSelection = getHumanChoice(possibleMoves);
    let computerSelection = getComputerChoice(possibleMoves);

    console.log("Player choice: " + humanSelection);
    console.log("Computer choice: " + computerSelection);

    playRound(humanSelection, computerSelection);

    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = getHumanChoice(button.id);
    let computerSelection = getComputerChoice(possibleMoves);
    playRound(humanSelection, computerSelection);
  });
});

// playGame(numberOfRounds);

// if (humanScore > computerScore) {
//     console.log("Player wins!");
// } else if (humanScore < computerScore) {
//     console.log("Computer wins!");
// } else {
//     console.log("Draw!");
// }
