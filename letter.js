function Letter (character) {
	this.character = character;
	this.guessed = false;
	this.processGuess = function (guessedLetter) {
		if (guessedLetter === this.character) {
      this.guessed = true;
		}
	};
  this.displayLetter = function () {
    if (this.guessed === true) {
      return this.character;
    } else {
      return '_';
    }
  };
}

// var letter = new Letter('c');
// letter.processGuess('a');
// console.log(letter.displayLetter());
// letter.processGuess('c');
// console.log(letter.displayLetter());
// letter.processGuess('f');
// console.log(letter.displayLetter());

module.exports = Letter;