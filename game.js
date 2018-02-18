// The Game.js file selects from a word bank a random hangman word for the player to guess.
var Word = require("./word.js");

function Game() {
    this.wordBank = ["dragonfly", "skipper", "sublime", "incisive", "cosmetic"];

    this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWord = new Word(this.randomWord);
}
var hangman = new Game();
console.log('random word:', hangman.randomWord);

module.exports = Game;