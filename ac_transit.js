//fed in location data

var request = new XMLHttpRequest();
var APIkey = "/?token=BB71819FE155622579B298B9C09BC87D";

function getStops(lat, lon) {
	request.open("GET", "http://api.actransit.org/transit/stops/" + lat + "/" + lon "/" + APIkey, false);
	console.log(request.status);
	console.log(request.statusText);
}

function getPredictions(stopid) {
	request.open("GET", "http://api.actransit.org/transit/stops/" + stopid + "/predictions/" + APIkey, false);
	//Gives all predictions
	console.log(request.status);
	console.log(request.statusText);
}

function getBusPredictions(stopid, bus_number) {
	var predictions = getPredictions(stopid);
	//Sieve and cull the unnecessary routes
}
