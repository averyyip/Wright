//fed in location data
var request = require('request');

var APIkey = "/?token=BB71819FE155622579B298B9C09BC87D";

var actransit = {
	getStops: function(lat, lon) {
		request("http://api.actransit.org/transit/stops/" + lat + "/" + lon + "/" + "500" + "/" + APIkey, function (error, response, body) {
		  console.log('error:', error) // Print the error if one occurred
		  console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
		  console.log('body:', body) // Print the HTML for the Google homepage.
		})
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


