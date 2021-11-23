function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = decideWinner(playerSelection, computerSelection);
    console.log(result);
    return showResult(result, playerSelection, computerSelection);
}

let roundsPlayedDiv = document.querySelector(".round-count");
let roundScoreDiv = document.querySelector(".round-score");
let roundOutcomeDiv = document.querySelector(".round-outcome");
let finalOutcome = document.querySelector(".final-results");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => { 
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.textContent;
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        roundsPlayed++;
    })
})


