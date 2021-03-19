function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! Player: ${++playerScore} ; Computer: ${computerScore}`;
  } else
    return `Computer win! Player: ${playerScore} ; Computer: ${++computerScore}`;
}

function game() {
  for (i = 1; ; i++) {
    // let playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    if (playerScore === 5 || computerScore === 5) break;
    else continue;
  }
}

console.log(game());
