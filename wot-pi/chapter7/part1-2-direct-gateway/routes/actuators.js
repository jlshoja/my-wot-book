//Initial version:

var express = require('express'),
router = express.Router(),
resources = require('./../resources/model');

router.route('/').get(function (req, res, next) { // #A
  req.result = resources.pi.actuators;
  next();
});

router.route('/leds').get(function (req, res, next) { // #C
    req.result = resources.pi.actuators.leds;
	next();
});

router.route('/leds/:id').get(function (req, res, next) { //#D
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function(req,res,next){
	var selectedLed = resources.pi.actuators.leds[req.params.id];
	selectedLed.value = req.body.value;
	console.info('Chanded LED %s value to %s', req.params.id, selectedLed.value);
	req.result = selectedLed;
	next();
});

module.exports = router;

//#A Create a new route for a GET request
//#B Reply with the actuators model when this route is selected
//#C This route serves a list of LEDs
//#D with :id we inject a variable in the path which will be the LED number
//#E the path variables are accessible via req.params.id we use this to select the right object in our model and return it
