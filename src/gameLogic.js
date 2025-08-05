let userScore = 0;
let compScore = 0;
let round = 0;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    const choices = document.querySelectorAll("#rock, #paper, #scissors, .choice");
    const result = document.getElementById("result");
    const finalResult = document.getElementById("final-result");
    const playAgainBtn = document.getElementById("play-again");
    const userScoreElement = document.getElementById("user-score");
    const computerScoreElement = document.getElementById("computer-score");

    // Check if all required elements exist
    if (!result || !finalResult || !playAgainBtn || !userScoreElement || !computerScoreElement) {
        console.error("Required game elements not found!");
        return;
    }

    const GenCompChoice = () => {
        const options = ["rock", "paper", "scissors"];
        const rIndx = Math.floor(Math.random() * 3);
        return options[rIndx];
    };

    const playGame = (userchoice) => {
        console.log("User's Choice = " + userchoice);

        const compChoice = GenCompChoice();
        console.log("Computer Choice = " + compChoice);

        round++;

        // Add visual feedback for user's choice
        const userChoiceElement = document.getElementById(userchoice);
        if (userChoiceElement) {
            userChoiceElement.classList.add("choice-selected");
            
            // Remove visual feedback after a short delay
            setTimeout(() => {
                userChoiceElement.classList.remove("choice-selected");
            }, 500);
        }

        if (userchoice === compChoice) {
            drawGame();
        } else if (userchoice === "rock") {
            compChoice === "paper" ? compWin() : userWin();
        } else if (userchoice === "scissors") {
            compChoice === "rock" ? compWin() : userWin();
        } else if (userchoice === "paper") {
            compChoice === "scissors" ? compWin() : userWin();
        }

        // Update score display
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = compScore;

        finalCheck(); // ✅ call final result checker
    };

    const drawGame = () => {
        result.innerText = "Game is Draw";
        result.className = "border-4 px-6 py-3 rounded-2xl text-center text-lg md:text-xl border-yellow-500 bg-yellow-100";
    };

    const userWin = () => {
        userScore++;
        result.innerText = "You Won This Round";
        result.className = "border-4 px-6 py-3 rounded-2xl text-center text-lg md:text-xl border-green-500 bg-green-100";
    };

    const compWin = () => {
        compScore++;
        result.innerText = "You Lost This Round";
        result.className = "border-4 px-6 py-3 rounded-2xl text-center text-lg md:text-xl border-red-500 bg-red-100";
    };

    const finalCheck = () => {
        if (round === 3) {
            if (userScore > compScore) {
                finalResult.innerText = "CONGRATS!! YOU WON!!";
                finalResult.className = "text-xl md:text-2xl font-bold text-green-600";
            } else if (userScore === compScore) {
                finalResult.innerText = "IT'S A DRAW!";
                finalResult.className = "text-xl md:text-2xl font-bold text-yellow-600";
            } else {
                finalResult.innerText = "SORRY! YOU LOST...";
                finalResult.className = "text-xl md:text-2xl font-bold text-red-600";
            }

            // Disable choices after game ends
            choices.forEach(choice => {
                choice.classList.add("game-disabled");
            });

            // Show Play Again button
            playAgainBtn.style.display = "block";
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            if (round < 3) {
                const userchoice = choice.getAttribute("id");
                playGame(userchoice);
            }
        });
    });

    // ✅ Play Again logic
    playAgainBtn.addEventListener("click", () => {
        userScore = 0;
        compScore = 0;
        round = 0;
        result.innerText = "Play Your Move";
        result.className = "border-4 px-6 py-3 rounded-2xl text-center text-lg md:text-xl";
        finalResult.innerText = "";
        finalResult.className = "text-xl md:text-2xl font-bold";
        playAgainBtn.style.display = "none";
        
        // Reset score display
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = compScore;
        
        // Re-enable choices
        choices.forEach(choice => {
            choice.classList.remove("game-disabled");
        });
    });

    console.log("Game initialized successfully!");
}
