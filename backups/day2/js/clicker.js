var playerScore = 0;
var incrementAmount = 1;
var additionalBonus = 0;
var multiplierIncreaseTimes = 0;
var incrementIncreaseTimes = 0;
var autoIncreaseTimes = 0;
var multiplierClicks = 1;
var multiplierAutoIncrease = 1;

function addCount() {
	playerScore += incrementAmount * multiplierClicks;
	//playerScore += 1
	document.getElementById('output').innerHTML = "Total Money: $" + playerScore;

	if (playerScore >= (1 * (autoIncreaseTimes * 10))) {
		autoAddButton1.style.display = "block";
	}
	if (playerScore >= (5 * (multiplierIncreaseTimes * 4))) {
		multiplierButton1.style.display = "block";
	}
	if (playerScore >= (10 * (incrementIncreaseTimes * 4))) {
		incrementButton1.style.display = "block";
	}

}

function multiplierIncrease() {
	multiplierIncreaseTimes += 1;
	multiplierClicks += 0.1 + (multiplierIncreaseTimes / 4);
	multiplierButton1.style.display = "none";
}

function autoIncrease() {
	autoIncreaseTimes += 1;
	playerScore += autoIncreaseTimes * multiplierAutoIncrease;
	autoAddButton1.style.display = "none";
	document.getElementById('output').innerHTML = "Total Money: $" + playerScore;
}

function incrementIncrease() {
	incrementIncreaseTimes += 1;
	incrementAmount += incrementIncreaseTimes * incrementIncreaseTimes;
	incrementButton1.style.display = "none";
}

function autoIncreaseTimer() {
	setInterval(autoIncrease, 1000);

}

// going to need to come up with a way for you to see future upgrades and know how much current ones cost