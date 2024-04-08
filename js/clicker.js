var playerScore = 0;
if (sessionStorage.getItem('score') == null) {
	var playerScore = 0;
}
else {
	var playerScore = parseInt(sessionStorage.getItem('score'));
}

var incrementPurchases = 0;
if (sessionStorage.getItem('incrementPurchases') == null) {
	var incrementPurchases = 0;
}
else {
	var incrementPurchases = parseInt(sessionStorage.getItem('incrementPurchases'));
}

var multiplierPurchases = 0;
if (sessionStorage.getItem('multiplierPurchases') == null) {
	var multiplierPurchases = 0;
}
else {
	var multiplierPurchases = parseInt(sessionStorage.getItem('multiplierPurchases'));
}

var autoAddPurchases = 0;
if (sessionStorage.getItem('autoAddPurchases') == null) {
	var autoAddPurchases = 0;
}
else {
	var autoAddPurchases = parseInt(sessionStorage.getItem('autoAddPurchases'));
}

var multiplierCost = 25;
if (sessionStorage.getItem('multiplierCost') == null) {
	var multiplierCost = 25;
}
else {
	var multiplierCost = parseInt(sessionStorage.getItem('multiplierCost'));
}

var incrementCost = 100;
if (sessionStorage.getItem('incrementCost') == null) {
	var incrementCost = 100;
}
else {
	var incrementCost = parseInt(sessionStorage.getItem('incrementCost'));
}

var autoAddCost = 250;
if (sessionStorage.getItem('autoAddCost') == null) {
	var autoAddCost = 250;
}
else {
	var autoAddCost = parseInt(sessionStorage.getItem('autoAddCost'));
}

setInterval(screenRefresh, 200);
setInterval(autoAdd, 100);

function addCount() {
	if (multiplierPurchases >= 1){
		playerScore += ((1 + incrementPurchases) * (multiplierPurchases * 1.1));	
	}
	else {
		playerScore += (1 + incrementPurchases);
	}
	
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
	
	
	if (playerScore >= (autoAddCost - 100)) {
		autoAddButton1.style.display = "block";
		autoAddButton1.textContent = "Basic Money Printer - £" + autoAddCost;
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


function autoAdd() {
	if (autoAddPurchases >= 1) {
		playerScore += (autoAddPurchases * 5)
		sessionStorage.setItem('score', playerScore);
		document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
	}
}

function purchaseAutoAdd() {
	playerScore -= autoAddCost;
	autoAddPurchases += 1;
	autoAddCost += 200
	sessionStorage.setItem('autoAddPurchases', autoAddPurchases);
	sessionStorage.setItem('autoAddCost', autoAddCost);
	autoAddButton1.style.display = "none";

}

function incrementIncrease() {
	playerScore -= incrementCost;
	incrementButton1.style.display = "none";
	incrementCost += 100
	incrementPurchases += 1;
	sessionStorage.setItem('incrementCost', incrementCost);
	sessionStorage.setItem('incrementPurchases', incrementPurchases);
	
}

function multiplierIncrease() {
	playerScore -= multiplierCost;
	multiplierButton1.style.display = "none";
	multiplierCost += 150
	multiplierPurchases += 1;
	sessionStorage.setItem('multiplierPurchases', multiplierPurchases);
	sessionStorage.setItem('multiplierCost', multiplierCost);
}

// Refreshes screen
function screenRefresh() {
	document.getElementById('output').innerHTML = "Total Money: £" + playerScore;
	sessionStorage.setItem('score', playerScore);
}


// Displays nav bar
function subMenu() {
	subBarDiv.style.display = "block"
}