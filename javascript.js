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

    function playRound(humanChoice, computerChoice) {

        let winner;

        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                winner = "tie";
            } else if (computerChoice == "paper") {
                winner = "lose";
                computerScore++;
            } else {
                winner = "win";
                humanScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                winner = "tie";
            } else if (computerChoice == "scissors") {
                winner = "lose";
                computerScore++;
            } else {
                winner = "win";
                humanScore++;
            }
        } else {
            if (computerChoice === "scissors") {
                winner = "tie";
            } else if (computerChoice == "rock") {
                winner = "lose";
                computerScore++;
            } else {
                winner = "win";
                humanScore++;
            }
        }

        if (winner == "win") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (winner == "lose") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log(`You tie! Both picked ${humanChoice}.`);
        }
    }

    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Your score: ${humanScore}; Computer's score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("You lose. Computer wins!");
    } else {
        console.log("Tie!");
    }

}

playGame();