function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {
        return "rock";
    } else if (x < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice").toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    const hScore = document.querySelector(".h-score");
    const cScore = document.querySelector(".c-score");

    const result = document.querySelector(".result");

    function playRound(humanChoice, computerChoice) {

        let winner;

        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                winner = "tie";
            } else if (computerChoice == "paper") {
                winner = "lose";
                cScore.textContent = 1 + +cScore.textContent;
            } else {
                winner = "win";
                hScore.textContent = 1 + +hScore.textContent;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                winner = "tie";
            } else if (computerChoice == "scissors") {
                winner = "lose";
                cScore.textContent = 1 + +cScore.textContent;
            } else {
                winner = "win";
                hScore.textContent = 1 + +hScore.textContent;
            }
        } else {
            if (computerChoice === "scissors") {
                winner = "tie";
            } else if (computerChoice == "rock") {
                winner = "lose";
                cScore.textContent = 1 + +cScore.textContent;
            } else {
                winner = "win";
                hScore.textContent = 1 + +hScore.textContent;
            }
        }

        const running = document.querySelector(".running");

        const msg = document.createElement("p");

        if (winner == "win") {
            msg.textContent = `You win! You chose ${humanChoice}, computer chose ${computerChoice}.`;
        } else if (winner == "lose") {
            msg.textContent = `You lose! You chose ${humanChoice}, computer chose ${computerChoice}.`;
        } else {
            msg.textContent = `You tie! Both chose ${humanChoice}.`;
        }

        running.appendChild(msg);

        if (hScore.textContent == 5) {
            result.textContent = "You win the game!!!";
            rockButton.removeEventListener("click", playRock);
            paperButton.removeEventListener("click", playPaper);
            scissorsButton.removeEventListener("click", playScissors);
            return;
        }
        if (cScore.textContent == 5) {
            result.textContent = "You lost the game :(";
            rockButton.removeEventListener("click", playRock);
            paperButton.removeEventListener("click", playPaper);
            scissorsButton.removeEventListener("click", playScissors);
            return;
        }
    }

    const playRock = () => playRound("rock", getComputerChoice());
    const playPaper = () => playRound("paper", getComputerChoice());
    const playScissors = () => playRound("scissors", getComputerChoice())

    rockButton.addEventListener("click", playRock);
    paperButton.addEventListener("click", playPaper);
    scissorsButton.addEventListener("click", playScissors);

}


playGame();