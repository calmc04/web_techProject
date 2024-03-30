var playerScore = 0;
var incrementAmount = 1;
var additionalBonus = 0;
var multiplierIncreaseTimes = 0;
var incrementIncreaseTimes = 0;
var autoIncreaseTimes = 0;
var multiplierClicks = 1;
var multiplierAutoIncrease = 1;
var autoAddCost = 10
var multiplierCost = 25
var incrementCost = 50

setInterval(scoreRefresh, 500);

function addCount() {
	playerScore += incrementAmount * multiplierClicks;
	//playerScore += 1
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;

	if (playerScore >= (autoAddCost - 100)) {
		autoAddButton1.style.display = "block";
		autoAddButton1.textContent = "Money Printer Upgrade - £" + autoAddCost;
	}
	if (playerScore >= (multiplierCost - 100)) {
		multiplierButton1.style.display = "block";
		multiplierButton1.textContent = "Higher Quality Ink - £" + multiplierCost;
	}
	if (playerScore >= (incrementCost - 100)) {
		incrementButton1.style.display = "block";
		incrementButton1.textContent = "More Processing Power - £" + incrementCost;
	}
	if (playerScore < incrementCost) {
		incrementButton1.disabled = true;
	}
	else {
		incrementButton1.disabled = false;
	}
	if (playerScore < multiplierCost) {
		multiplierButton1.disabled = true;
	}
	else {
		multiplierButton1.disabled = false;
	}
	if (playerScore < autoAddCost) {
		autoAddButton1.disabled = true;
	}
	else {
		autoAddButton1.disabled = false;
	}

}

function multiplierIncrease() {
	// Takes away default price 
	if (multiplierIncreaseTimes == 0) {
		playerScore = playerScore - 25;
	}
	else {
		playerScore = playerScore - (5 * (multiplierIncreaseTimes * 4));	
	}
	multiplierIncreaseTimes += 1;
	multiplierClicks += 0.1 + (multiplierIncreaseTimes / 4);
	multiplierCost = (28 * (multiplierIncreaseTimes * 7));
	multiplierButton1.style.display = "none";
}

function autoIncrease() {
	if (autoIncreaseTimes == 0) {
		playerScore = playerScore - 10;
	}
	else {
		playerScore = playerScore - (10 * (multiplierIncreaseTimes * 5));
	}

	autoIncreaseTimes += 1;
	playerScore += autoIncreaseTimes * multiplierAutoIncrease;
	autoAddButton1.style.display = "none";
	autoAddCost = (10 * (multiplierIncreaseTimes * 5));
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
}

function incrementIncrease() {
	if (incrementIncreaseTimes == 0) {
		playerScore = playerScore - 50;
	}
	else {
		playerScore = playerScore - (35 * (incrementIncreaseTimes * 8));
	}

	incrementIncreaseTimes += 1;
	incrementAmount += incrementIncreaseTimes * incrementIncreaseTimes;
	incrementButton1.style.display = "none";
	incrementCost = (35 * (incrementIncreaseTimes * 8));
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
}

// buggy mess
function autoIncreaseTimer() {
	autoAddCost = (1 * (autoIncreaseTimes * 10));
	if (autoIncreaseTimes == 0) {
		playerScore = playerScore - 10;
	}
	else {
		playerscore -= (10 * (multiplierIncreaseTimes * 5));	
	}
	setInterval(autoIncrease, 1000);
}

function screenRefresh() {
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
}

function subMenu() {
	subBarDiv.style.display = "block"
}

// going to need to come up with a way for you to see future upgrades and know how much current ones cost