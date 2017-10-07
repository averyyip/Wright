//fed in location data

var request = new XMLHttpRequest();
var APIkey = "/?token=BB71819FE155622579B298B9C09BC87D";

function getStops(lat, lon) {
	request.open("GET", "http://api.actransit.org/transit/stops/" + lat + "/" + lon "/" + APIkey, false);
	console.log(request.status);
	console.log(request.statusText);

}




