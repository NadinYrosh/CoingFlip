// coin flip: randomly returns 1 or 0, where 1 = heads and 0 = tails
function flipCoin() {
	return  Math.round(Math.random());
}

// price generator: returns a random number between low and high
function generatePrice(low, high) {
	var betweenTheRange = Math.random();
	betweenTheRange = betweenTheRange * (high - low) + low;
	return betweenTheRange;
}

// simulate people pay events
function populateEvent(price, payer) {
	return { payer: payer, price: price };
}

function generateEvent(low, high) {
	var price = generatePrice(low, high);
	var payer = flipCoin();
	return populateEvent(price, payer);
}

// generate numberOfEvents events 
function generateEvents(numberOfEvents, low, high) {
	var events = [];
	for(var i = 0; i < numberOfEvents; i++ ) {	
		var event = generateEvent(low, high);
		events.push(event);
	}
	return events;
}

// see how much money each person paid
 function moneySpentPerPerson(events) {
 	var p0 = 0;
 	var p1 = 0;
 	for(event of events) {
 		if (event.payer === 0) {
			p0 = event.price + p0;
 		} else {
 			p1 = event.price + p1;
 		}
 	}
 	return {totalOf0 : p0, totalOf1 : p1};
 }

// % each peron paid
function percentSpentPerPerson(events) {
	var totals = moneySpentPerPerson(events);
	var p0Percent = totals.totalOf0 * (100 / (totals.totalOf0 + totals.totalOf1));
	var p1Percent = totals.totalOf1 * (100 / (totals.totalOf0 + totals.totalOf1));
	return {percentOf0 : p0Percent, percentOf1 : p1Percent};
}

// optional: run a bunch of times... and see the distribution 

//Node run command:
//node -> .load fileName