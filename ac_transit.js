//fed in location data

var request = new XMLHttpRequest();

request.open("GET", "http://api.actransit.org/servicenotices/?token=BB71819FE155622579B298B9C09BC87D", false);

var APIkey = "BB71819FE155622579B298B9C09BC87D";

console.log(request.status);
console.log(request.statusText);
