var inquirer = require("inquirer");
var Game = require("./game.js");


var hangmanGame = new Game();

var guessesRemaining = 7;


console.log("Let's play hangman!");

console.log ("\n\nHangman word to guess: ", hangmanGame.currentWord.displayWordCharPlaceholders());

console.log('first character in word: ', hangmanGame.currentWord.wordCharacters[0].character);

inquirer
	.prompt ([
	{
	type:"input",
	message: "Enter a guess letter:",
	name:"playerLetter"
	}
	]).then (function(guess) {

		var guessedLetter = guess.playerLetter;

		guessesRemaining -= 1;

		console.log("Guesses remaining: " + guessesRemaining);
		
		console.log('Guessed letter', guessedLetter);

		currentWordCharacters = hangmanGame.currentWord.wordCharacters;

		console.log('current word length:', currentWordCharacters.length);

		console.log("Hangman word to guess: ",hangmanGame.currentWord.reviewWordCharacter(guessedLetter))

		for (var i = 0; i < currentWordCharacters.length; i++) {
			if (currentWordCharacters[i].character == guessedLetter) {
				console.log("Your guess is correct!");
				var correct = true;
				return;	
			}
		}
		if (correct !== true) {
				console.log("Your guess is incorrect.");
			}

		

		

		
		
	})








// Need to put this processing in a loop.
// inquirer-recursive-npm

// Accommodate multiple words in string.


// Need to provide You didn't guess the word. Here's the next word: and You guessed the word. Here's the next word:
