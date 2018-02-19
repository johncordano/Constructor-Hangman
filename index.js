var inquirer = require("inquirer");
var Game = require("./game.js");


var hangmanGame = new Game();
var guessesRemaining = 10;
var guessesTotal = 0;

console.log("Let's play hangman.\n");
console.log ("Word to guess: " + hangmanGame.currentWord.displayWordCharPlaceholders() + "\n");

// console.log('first character in word: ', hangmanGame.currentWord.wordCharacters[0].character);

var displayPrompt = function() {
	if (guessesTotal < 10) {


inquirer
	.prompt ([
	{
	type:"input",
	message: "Enter a letter:",
	name:"playerLetter"
	}
	]).then (function(guess) {

		var guessedLetter = guess.playerLetter;
		
		// console.log('Guessed letter', guessedLetter);

		currentWordCharacters = hangmanGame.currentWord.wordCharacters;

		// console.log('current word length:', currentWordCharacters.length);

		console.log("\nWord to guess: " + hangmanGame.currentWord.reviewWordCharacter(guessedLetter))

		for (var i = 0; i < currentWordCharacters.length; i++) {
			if (currentWordCharacters[i].character == guessedLetter) {
				console.log("Your guess is correct.");
				var correct = true;
				guessesRemaining--;
				console.log("Guesses remaining: " + guessesRemaining + "\n");
				// return;	
			}
		}
		if (correct !== true) {
				console.log("Your guess is incorrect.");
				guessesRemaining--;
				console.log("Guesses remaining: " + guessesRemaining + "\n");
			}
		guessesTotal++;
		displayPrompt();
	
	})

	} else {
		console.log("Game Over.");
	}
};

displayPrompt();










// Accommodate multiple words in string.

// Delete game.js?

// comments. guess letter.

// Game over logic for a win.

// Need to provide another word when game over. Here's the next word:

// Need to get rid of double guesses remaining.


