function taxiFare() {
	distance= document.getElementById('miles').value // or with JQuery $('#miles').val()
	time= document.getElementById('hours').value  // or with JQuery $('#time').val()
	baseFare = 2.50;
	costPerMile = 2.00;
	nightSurcharge = 0.50; // 8pm to 6am, every night
	cost = baseFare + (costPerMile * distance);
	if (distance !==""&&time!==""){
	// 8pm (20) or if it is before 6am (6)
	if (time >= 20 || time < 6) {
		cost += nightSurcharge*distance;
	}
	return document.getElementById('total').innerHTML = 'Your taxi trip will cost $' + cost + '!';}
};