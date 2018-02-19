// The Game.js file selects from a word bank a random hangman word for the player to guess.
var Word = require("./word.js");

function Game() {
    this.wordBank = ["dragonfly", "skipper", "apple", "incisive", "boardwalks"];

    this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWord = new Word(this.randomWord);
}

// console.log('random word:', hangman.randomWord);
// console.log('current word:', hangman.currentWord);

module.exports = Game;