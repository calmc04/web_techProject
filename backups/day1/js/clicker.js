var playerScore = 0;
var multiplier = 1;
var additionalBonus = 0;


function addCount() {
	playerScore += 1 * multiplier;
	//playerScore += 1
	document.getElementById('output').innerHTML = playerScore;

	if (playerScore >= 1) {
		subButton.style.display = "AUTOCOUNT";
	}
	if (playerScore >= 2) {
		subButton.style.display = "block";
	}
}