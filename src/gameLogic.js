let userScore = 0;
let compScore = 0;
let round = 0;

const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const finalResult = document.getElementById("final-result");
const playAgainBtn = document.getElementById("play-again");

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

    if (userchoice === compChoice) {
        drawGame();
    } else if (userchoice === "rock") {
        compChoice === "paper" ? compWin() : userWin();
    } else if (userchoice === "scissors") {
        compChoice === "rock" ? compWin() : userWin();
    } else if (userchoice === "paper") {
        compChoice === "scissors" ? compWin() : userWin();
    }

    finalCheck(); // ✅ call final result checker
};

const drawGame = () => {
    result.innerText = "Game is Draw";
};

const userWin = () => {
    userScore++;
    result.innerText = "You Won This Round";
};

const compWin = () => {
    compScore++;
    result.innerText = "You Lost This Round";
};

const finalCheck = () => {
    if (round === 3) {
        if (userScore > compScore) {
            finalResult.innerText = "CONGRATS!! YOU WON!!";
        } else if (userScore === compScore) {
            finalResult.innerText = "IT'S A DRAW!";
        } else {
            finalResult.innerText = "SORRY! YOU LOST...";
        }

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
    result.innerText = "";
    finalResult.innerText = "";
    playAgainBtn.style.display = "none";
});
