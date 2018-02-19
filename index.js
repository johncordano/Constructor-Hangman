var inquirer = require("inquirer");
var Game = require("./game.js");


var hangmanGame = new Game();
var guessesRemaining = 10;
var displayPromptCount = 0;
var wordToGuessInitial = hangmanGame.currentWord.displayWordCharPlaceholders();

console.log("Let's play hangman.\n");
console.log("Word to guess: " + wordToGuessInitial + "\n");

// console.log('first character in word: ', hangmanGame.currentWord.wordCharacters[0].character);


var displayPrompt = function() {
    if (displayPromptCount < 100) {
        inquirer
            .prompt([{
                type: "input",
                message: "Enter a letter:",
                name: "playerLetter"
            }]).then(function(guess) {

                var guessedLetter = guess.playerLetter;

                // console.log('Guessed letter', guessedLetter);

                var currentWordCharacters = hangmanGame.currentWord.wordCharacters;

                // console.log('current word length:', currentWordCharacters.length);

                var wordToGuessSubsequent = hangmanGame.currentWord.reviewWordCharacter(guessedLetter);

                console.log("\nWord to guess: " + wordToGuessSubsequent);

                var correct = false;

                for (var i = 0; i < currentWordCharacters.length; i++) {
                    if (currentWordCharacters[i].character == guessedLetter) {
                        correct = true;
                    }
                }
                if (correct == true) {
                    console.log("Your guess is correct.");
                    guessesRemaining--;
                    console.log("Guesses remaining: " + guessesRemaining + "\n");
                }
                // Need to enter logic to end the game when the player guesses the word.
                if (correct == false) {
                    console.log("Your guess is incorrect.");
                    guessesRemaining--;
                    console.log("Guesses remaining: " + guessesRemaining + "\n");
                }
                if (guessesRemaining == 0) {
                    console.log("You've used all your guesses.\nHere's another word: " + wordToGuessInitial + "\n");
                    guessesRemaining = 10;
                }

                displayPromptCount++;

                // console.log("Display prompt count: " + displayPromptCount);
               
                displayPrompt();

                
                
            })

    }

};

displayPrompt();

// Delete game.js?

// comments. guess letter? characters for letter? Create a constructor? Create a function?

// Game over logic for a win. 

// Need to get a new word when the game is over.

