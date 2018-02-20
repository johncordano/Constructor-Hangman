// The index file displays prompts, messages, and hangman words for the player, and includes logic to update the remaining guesses and to start and restart the game.
var inquirer = require("inquirer");
var Game = require("./game.js");

// Create global variables.
var hangmanGame = new Game();
var guessesRemaining = 10;
var displayPromptCount = 0;
var wordToGuessInitial = hangmanGame.currentWord.displayWordCharPlaceholders();
// Display a game-start message and the number of placeholders in the hangman word to guess.
console.log("Let's play hangman.\n");
console.log("Word to guess: " + wordToGuessInitial + "\n");
// Display a prompt for the player to enter a letter in the terminal.
var displayPrompt = function() {
    if (displayPromptCount < 100) {
        inquirer
            .prompt([{
                type: "input",
                message: "Enter a letter:",
                name: "playerLetter"
            }]).then(function(guess) {
            	// Create a variable for the player-guessed letter.
                var guessedLetter = guess.playerLetter;
                // Create a variable for the characters in the current hangman word.
                var currentWordCharacters = hangmanGame.currentWord.wordCharacters;
                // Create a variable for the word to guess and display the placeholders for that word in the terminal.
                var wordToGuessSubsequent = hangmanGame.currentWord.reviewWordCharacter(guessedLetter);
                console.log("\nWord to guess: " + wordToGuessSubsequent);
                // Create a variable that indicates if the player's guess is correct.
                var correct = false;
                // Loop through the current word characters, compare each character to the player-guessed letter, and change the correct variable to true if a word character is the same as the player-guessed letter.
                for (var i = 0; i < currentWordCharacters.length; i++) {
                    if (currentWordCharacters[i].character == guessedLetter) {
                        correct = true;
                    }
                }
                // If the correct variable is true, display the appropriate message in the terminal, decrease the remaining guesses by 1, and display a guesses-remaining message in the terminal.
                if (correct == true) {
                    console.log("Your guess is correct.");
                    guessesRemaining--;
                    console.log("Guesses remaining: " + guessesRemaining + "\n");
                }
                // Need to enter logic to end the game when the player guesses the word.
                // If the correct variable is false, display the appropriate message in the terminal, decrease the remaining guesses by 1, and display a guesses-remaining message in the terminal.
                if (correct == false) {
                    console.log("Your guess is incorrect.");
                    guessesRemaining--;
                    console.log("Guesses remaining: " + guessesRemaining + "\n");
                }
                // If the guesses remaining is 0, display the appropriate message in the terminal, and set the remaining guesses to 10.
                if (guessesRemaining == 0) {
                    console.log("You've used all your guesses.\nHere's another word: " + wordToGuessInitial + "\n");
                    guessesRemaining = 10;
                }
                // Increase the display prompt count by 1.
                displayPromptCount++;
                // Run the displayPrompt function.
                displayPrompt();
            })
    }
};
// Run the displayPrompt function.
displayPrompt();

// Delete game.js?
// Game over logic for a win. 
// Need to get a new word when the game is over.