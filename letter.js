var Letter = function () {
	this.correctLetter = correctLetter;
	this.underscore = "_";
	this.guessedLetter = guessedLetter;
	this.processGuess = function () {
		if (guessedLetter === correctLetter) {
			console.log(this.correctLetter);
			console.log("Correct!");	
		}
		else {
			console.log(this.underscore);
			console.log("Incorrect")
		}
	}
}













module.exports = Letter;