    /*Step 1: How to activate the key commands and then
    define the variables.
    Step 2: For userGuess, we take in the input from event
    For computerGuess, it is randomized from
    computerChoices*/

    /* Set the computer choices. */
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    /* Initialize */
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var arr = [];

/* Sets the computer to the random numbers., */
/*Records the keypress and then sets it to the user press. */

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        arr.push(userGuess);
        guesses--;

                if (userGuess == computerGuess) {
                    wins++; guesses = 9;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    arr = [];
                }
                if (guesses <= 0) {
                    losses++; guesses = 9;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    arr = [];
                }



            //Taking the tallies and displaying them in HTML

    var html = "<p> Guess what letter I am thinking of </p>" +
                "<p> wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses left: " + guesses + "</p>" +
                "<p> Your guesses so far: " + arr + "</p>";

            // Placing the html in to the game id.

    document.querySelector('#game').innerHTML = html;