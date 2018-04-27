
	var keyboardchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var userGuessArray = []
	var computerGuess = keyboardchoices[Math.floor(Math.random() * keyboardchoices.length)];
	var wins = 0;
	var losses = 0;
	var guessesleft = 7;


	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		userGuessArray.push(userGuess)

		

		if (userGuess == computerGuess) {
			alert("You guessed correctly!");
			wins++;
			guessesleft = 7;
			userGuessArray = []
			computerGuess = keyboardchoices[Math.floor(Math.random() * keyboardchoices.length)];
		
		} else if (guessesleft == 0) {
			alert("You lose!");
			losses++;
			guessesleft = 7;
			userGuessArray = []
			computerGuess = keyboardchoices[Math.floor(Math.random() * keyboardchoices.length)];
		
		
		}else if (userGuess !== computerGuess) {
			guessesleft--;}

		document.querySelector('.wins').innerHTML = "Wins: " + wins;

		document.querySelector('.losses').innerHTML = "Losses: " + losses;

		document.querySelector('.left').innerHTML = "Guesses left: " + guessesleft;

		document.querySelector('.guesses').innerHTML = "Your guesses so far: " + userGuessArray;
		



	}