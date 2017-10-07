//fed in location data
var request = require("xmlhttprequest")
var APIkey = "/?token=BB71819FE155622579B298B9C09BC87D";

var actransit = {
	getStops: function(lat, lon) {
		request.open("GET", "http://api.actransit.org/transit/stops/" + lat + "/" + lon + "/" + "500" + "/" + APIkey, false);
		console.log(request.status);
		console.log(request.statusText);
	},

	getPredictions: function(stopid) {
		request.open("GET", "http://api.actransit.org/transit/stops/" + stopid + "/predictions/" + APIkey, false);
		//Gives all predictions
		console.log(request.status);
		console.log(request.statusText);
		return 
	},

	getBusPredictions: function(stopid, bus_number) {
		var predictions = getPredictions(stopid);

		//Sieve and cull the unnecessary routes
	}
}

module.exports = actransit

