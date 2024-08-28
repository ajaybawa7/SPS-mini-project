let choices = ["rock", "paper", "scissors"];
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissor"); //linking by using DOM elements

// Linking of HTML elements where we'll display the choices and result
let userChoiceDisplay = document.getElementById("user-choice");
let computerChoiceDisplay = document.getElementById("computer-choice");
let resultDisplay = document.getElementById("result");
let playAgainBtn = document.getElementById("play-again");

const rockSound = new Audio('rock.mp3');
const paperSound = new Audio('paper.mp3');
const scissorsSound = new Audio('scissor.mp3');


function getComputerChoice() {
    let randomchoice = Math.floor(Math.random() * choices.length);
    return choices[randomchoice];
} // created this function so that computer can choose randomly among three choices(stone paper or scissor)

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function playSound(userChoice) {
    if (userChoice === "rock") {
        rockSound.play();
    } else if (userChoice === "paper") {
        paperSound.play();
    } else if (userChoice === "scissors") {
        scissorsSound.play();
    }
}

// Main function to run the game when a choice is clicked
function playGame(userChoice) {
    playSound(userChoice); // Play sound
    const computerChoice = getComputerChoice(); // Get computer's choice
    const result = determineWinner(userChoice, computerChoice); // Determine result

    // Show the choices and result on the screen
    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;

    // Show the "Play Again" button
    playAgainBtn.style.display = "block";
}

// Event listeners to call function to make the buttons work
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

// it Resets the game and hide the "Play Again" button
playAgainBtn.addEventListener("click", () => {
    userChoiceDisplay.textContent = "Your Choice: ";
    computerChoiceDisplay.textContent = "Computer's Choice: ";
    resultDisplay.textContent = "Result: ";
    playAgainBtn.style.display = "none";
});
