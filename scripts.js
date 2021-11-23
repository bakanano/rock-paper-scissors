function computerPlay() {
    let items = ["Rock", "Paper", "Scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
    let result = decideWinner(playerSelection, computerSelection);
    return showResult(result, playerSelection, computerSelection);
}

function decideWinner(playerSelection, computerSelection) {
    let tie;
    let win;
    let lose;
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            tie = true;
        }
        if (computerSelection == "Paper") {
            lose = true;
        }
        if (computerSelection == "Scissors") {
            win = true;
        }
    }
    
    if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            win = true;
        }
        if (computerSelection == "Paper") {
            tie = true;
        }
        if (computerSelection == "Scissors") {
            lose = true;
        }
    }
    
    if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            lose = true;
        }
        if (computerSelection == "Paper") {
            win = true;
        }
        if (computerSelection == "Scissors") {
            tie = true;
        }
    }

    if (tie) {
        return "tie";
    }
    else if (win) {
        playerWinCount++;
        return "win";
    }
    else {
        computerWinCount++;
        return "lose";
    }
}

function showResult(result, playerSelection, computerSelection) {
    if (result == "tie") {
        return roundOutcomeDiv.textContent = "Tie";
    } else if (result == "win") {
        return roundOutcomeDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return roundOutcomeDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function updateCounters(roundResult) {
    roundsPlayedDiv.textContent = `Number of rounds played: ${roundsPlayed}`;
    roundScoreDiv.textContent = `Player ${playerWinCount} : ${computerWinCount} Computer`;
}

function stopGame() {
    finalOutcome.textContent = `Game finished! Final game score is ${playerWinCount} : ${computerWinCount}`

}
let roundsPlayed = 0;
let playerWinCount = 0;
let computerWinCount = 0;

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
        updateCounters(roundResult);
        if (playerWinCount == 5 || computerWinCount == 5) {
            stopGame();
        }
    })
})


