//CURRENT SCORES
let playerScore = document.querySelector(".player-score");
playerScore.textContent = 0;

let computerScore = document.querySelector(".computer-score");
computerScore.textContent = 0;

//COMPUTER SELECTIONS
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//PLAYER SELECTIONS
let btnRock = document.getElementById("rock-btn");
let selectRock = btnRock.addEventListener("click", () =>
  playGame("rock", computerPlay())
);

let btnPaper = document.getElementById("paper-btn");
let selectPaper = btnPaper.addEventListener("click", () =>
  playGame("paper", computerPlay())
);

let btnScissors = document.getElementById("scissors-btn");
let selectScissors = btnScissors.addEventListener("click", () =>
  playGame("scissors", computerPlay())
);

let btn = document.getElementsByClassName("btn");

//PLAY A ROUND
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return ++playerScore.textContent;
  } else return ++computerScore.textContent;
}

//PLAY GAME
function playGame(playerSelection, computerSelection) {
  if (playerScore.textContent >= 5) return alert("Player Wins");
  if (computerScore.textContent >= 5) return alert("Computer Wins ");
  else playRound(playerSelection, computerSelection);
}
