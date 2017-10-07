'use strict'

//Import packages
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Loads Facebook key from Heroku configurations
const token = process.env.KEY


// Parses body of the request into json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES
app.get('/', function(req, res) {
	res.send("Testing Page")
})


// Facebook 
app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "calhacks") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})

app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			askToDo(sender)
		}
		if (event.message && event.message.attachments && messageAttachments[0].payload.coordinates) {
			//TODO: handle other attachments
			let lat = event.message.attachments[0].payload.coordinates.lat
			let lon = event.message.attachments[0].payload.coordinates.long
			console.log(lat.toString() + " " + lon.toString())
		}
	}
	res.sendStatus(200)
})

function askToDo(sender) {
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json:{
	    	recipient: {id: sender},
    		message: {
    			text:"Please send your location or manually type in a landmark near you",	
	        	quick_replies:[
	        		{
	       			"content_type":"location"
	      			},
	      			{
        			"content_type":"text",
        			"title":"Tell me a joke",
      				}
        		]
        	}
        }
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port")
})
