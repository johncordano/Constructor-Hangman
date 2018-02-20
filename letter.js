// The letter.js file determines how characters are displayed in the terminal.

// Create the Letter constructor function, which has a hangman word character as its parameter.
function Letter(character) {
    this.character = character;
    // Create a property to indicate if the player has guessed the word character. This boolean property allows for blank spaces as word characters.
    this.guessed = character === ' ' ? true : false;
    // Create the processGuess function, which has a player-guessed letter as its parameter.
    this.processGuess = function(guessedLetter) {
        // If the player-guessed letter is the same as the hangman word character, change the guessed value from the false default to true.
        if (guessedLetter === this.character) {
            this.guessed = true;
        }
    };
    // Create the displayLetter function, which has no parameters.
    this.displayLetter = function() {
        // If the player-guessed letter value is true, display the hangman word character in the terminal. Otherwise, display the underline placeholder in the terminal.
        if (this.guessed === true) {
            return this.character;
        } else {
            return '_';
        }
    };
}

module.exports = Letter;