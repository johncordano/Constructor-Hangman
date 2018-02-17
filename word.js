var Letter = require("./letter.js");

function Word(word) {
  this.letters = [];
  this.returnWordAsString = function() {
    var wordAsString = '';
    for (var i = 0; i < word.length; i++) {
      wordAsString += this.letters[i].displayLetter() + ' ';
    }
    return wordAsString;
  };
  this.checkLetters = function(guessedLetter) {
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].processGuess(guessedLetter);
    }
    //console.log('checkLetters this.letters', this.letters);
    console.log(this.returnWordAsString());
    return this.returnWordAsString();
  };
  this.createLetters = function() {
    for (var i = 0; i < word.length; i++) {
      var newLetter = new Letter(word.charAt(i));
      //console.log(newLetter);
      this.letters.push(newLetter);
    }
    //console.log('createLetters this.letters', this.letters);
  };
  if (this.letters.length === 0) {
  	this.createLetters();
  }
}
















module.exports = Word;