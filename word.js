// The word.js file determines...
var Letter = require("./letter.js");

// Create the Word constructor function, which has a hangman word as its parameter.
function Word(word) {
    // Create the wordCharacters property that is initially an empty array.
    this.wordCharacters = [];
    // Create the displayWordCharPlaceholders function, which has no parameters.
    this.displayWordCharPlaceholders = function() {
        // Loop through the hangman word characters, call the displayLetter function in the letter.js file to display each character in the terminal, and insert a blank space after each character.
        var wordInPlaceholders = '';
        for (var i = 0; i < word.length; i++) {
            wordInPlaceholders += this.wordCharacters[i].displayLetter() + ' ';
            // console.log('word in placeholders:', wordInPlaceholders);
        }
        return wordInPlaceholders;
    };
    // Create the reviewWordCharacter function, which has a player-guessed letter as its parameter.
    this.reviewWordCharacter = function(guessedLetter) {
        // Loop through the wordCharacters array, and call the processGuess function in the letter.js file to evaluate the player-guessed letter.
        for (var i = 0; i < this.wordCharacters.length; i++) {
            this.wordCharacters[i].processGuess(guessedLetter);
        }
        // console.log('review word characters:', this.wordCharacters);
        // console.log('word in placeholders2:', this.displayWordCharPlaceholders());
        return this.displayWordCharPlaceholders();
    };
    // Create a function to populate the wordCharacters array with the characters in the hangman word.
    this.populateLetters = function() {
        for (var i = 0; i < word.length; i++) {
            var wordCharacter = new Letter(word.charAt(i));
            // console.log('Word character:', wordCharacter);
            this.wordCharacters.push(wordCharacter);
        }
        // console.log('wordCharacters array:', this.wordCharacters);
    };
    // Run the populateLetters function when the wordCharacters array is empty.
    if (this.wordCharacters.length === 0) {
        this.populateLetters();
    }
}


// // The following line simulates the hangman word.
// var newWord = new Word('cat');
// // The following line simulates a player-guessed letter of t.
// newWord.reviewWordCharacter('t');
// // The following line simulates a player-guessed letter of x.
// newWord.reviewWordCharacter('x');

module.exports = Word;