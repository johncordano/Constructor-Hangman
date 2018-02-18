var Letter = require("./letter.js");
var Word = require("./word.js");
var Game = require("./game.js");
var inquirer = require("inquirer");

console.log("Let's play hangman!");

// Need to display word placeholders

inquirer
	.prompt ([
	{
	type:"input",
	message: "Enter a guess letter:",
	name:"guessedLetter"
	}
	]).then (function(guess) {
		if (Letter.character === guess.guessedLetter) {
			console.log("Correct.");
		}
	})

// Need to provide Correct. and Incorrect. messages.

// Need to provide ? guesses remaining.

// Need to provide You didn't guess the word. Here's the next word: and You guessed the word. Here's the next word:
