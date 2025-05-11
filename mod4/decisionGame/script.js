const game = {
  secretNumber: Math.floor(Math.random() * 100) + 1,
  maxGuesses: 5,
  currentGuesses: 0,
  guesses: [],
};

const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
const guessedList = document.getElementById("guessedList");
const guessesLeft = document.getElementById("guessesLeft");

submitGuess.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❗ Please enter a number between 1 and 100.";
    return;
  }

  // Check if max guesses reached
  if (game.currentGuesses >= game.maxGuesses) {
    message.textContent = `❌ No more guesses left! The number was ${game.secretNumber}.`;
    disableInput();
    return;
  }

  // Track guess
  game.currentGuesses++;
  game.guesses.push(guess);
  updateUI();

  // Check guess
  if (guess === game.secretNumber) {
    message.textContent = `🎉 Congratulations! You guessed the number ${game.secretNumber}!`;
    disableInput();
  } else if (game.currentGuesses === game.maxGuesses) {
    message.textContent = `😞 Out of guesses! The number was ${game.secretNumber}.`;
    disableInput();
  } else if (guess > game.secretNumber) {
    message.textContent = "📉 Too high! Try a lower number.";
  } else {
    message.textContent = "📈 Too low! Try a higher number.";
  }

  // Clear input
  guessInput.value = "";
});

function updateUI() {
  guessedList.textContent = game.guesses.join(", ") || "None";
  guessesLeft.textContent = game.maxGuesses - game.currentGuesses;
}

const playAgainBtn = document.getElementById("playAgain");

playAgainBtn.addEventListener("click", () => {
  // Reset game state
  game.secretNumber = Math.floor(Math.random() * 100) + 1;
  game.currentGuesses = 0;
  game.guesses = [];

  // Reset UI
  guessInput.disabled = false;
  submitGuess.disabled = false;
  guessInput.value = "";
  message.textContent = "";
  updateUI();
  playAgainBtn.classList.add("hidden");
});

function disableInput() {
  guessInput.disabled = true;
  submitGuess.disabled = true;
  playAgainBtn.classList.remove("hidden");
}
