//The user chooses which to play, and the computer counters based on a randomly chosen number.
//We are editing the below game to be played a maximum of three times before the user is told they have exceeded the attempts.


var round = 0; //variable to keep track of how many rounds the user has played, in order to limit it to 3
	
		

//This function is used if the player chooses Rock.
function playRock() {
	
	if (round > 2) {
		alert("You have played your three rounds for today. Come back tomorrow.")
	}
	
	else{
		
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. Draw!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. You win!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. You lose!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
	
	round = round + 1;
	}
}

//This function is used if the player chooses Paper.
function playPaper() {
		
	if (round > 2) {
		alert("You have played your three rounds for today. Come back tomorrow.")
	}
	
	else{
		
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. You win!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. Draw!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. You lose!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
	
	round = round + 1;
	}
}

//This function is used if the player chooses Scissors.
function playScissors() {
		
	if (round > 2) {
		alert("You have played your three rounds for today. Come back tomorrow.")
	}
	
	else{
		
	var comp = counterattack();
	
	if (comp == "Rock") {
		alert("Computer chose Rock. You lose!");
	}
	
	else if (comp == "Paper") {
		alert("Computer chose Paper. You win!");
	}
	
	else if (comp == "Scissors") {
		alert("Computer chose Scissors. Draw!");
	}
	
	//This should never appear, assuming there are no errors.
	else {
		alert("error");
	}
	
	round = round + 1;
	}
}

function counterattack() {
	//A random number is chosen: either 0, 1, or 2.
	//The computer's counterattack is decided by this number.
	
	const rando = Math.floor(Math.random() * 3);
	
	if (rando == 0) {
		return "Rock";
	}
	
	else if (rando == 1) {
		return "Paper";
	}
	
	else if (rando == 2) {
		return "Scissors";
	}
	
	//This should never be chosen, assuming there are no errors.
	else {
		return "error"
	}

}