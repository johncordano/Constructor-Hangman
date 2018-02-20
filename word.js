// The word.js file populates the letters in a word characters array, and updates the characters that are displayed in the hangman word in the terminal.
var Letter = require("./letter.js");

// Create the Word constructor function, which has a hangman word as its parameter.
function Word(word) {
    // Create the wordCharacters property that is initially an empty array.
    this.wordCharacters = [];
    // Create the displayWordCharPlaceholders function, which has no parameters.
    this.displayWordCharPlaceholders = function() {
        // Loop through the hangman word characters, call the displayLetter function in the letter.js file for each character in the wordCharacters array, display each character in the terminal, and insert a blank space after each character. At the start of the same, this function displays each character as an underline character.
        var wordInPlaceholders = '';
        for (var i = 0; i < word.length; i++) {
            wordInPlaceholders += this.wordCharacters[i].displayLetter() + ' ';
        }
        return wordInPlaceholders;
    };
    // Create the reviewWordCharacter function, which has a player-guessed letter as its parameter.
    this.reviewWordCharacter = function(guessedLetter) {
        // Loop through the wordCharacters array, and call the processGuess function in the letter.js file to evaluate the player-guessed letter. Then run the displayWordCharPlaceholders function to call the displayLetter function in the letter.js file to update the character in the terminal. 
        for (var i = 0; i < this.wordCharacters.length; i++) {
            this.wordCharacters[i].processGuess(guessedLetter);
        }
        return this.displayWordCharPlaceholders();
    };
    // Create a function to populate the wordCharacters array with the characters in the hangman word.
    this.populateLetters = function() {
        for (var i = 0; i < word.length; i++) {
            var wordCharacter = new Letter(word.charAt(i));
            this.wordCharacters.push(wordCharacter);
        }
    };
    // Run the populateLetters function when the wordCharacters array is empty.
    if (this.wordCharacters.length === 0) {
        this.populateLetters();
    }
}

module.exports = Word;