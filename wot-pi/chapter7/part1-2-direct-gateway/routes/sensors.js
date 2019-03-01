var express = require('express');
var router = express.Router();
var resources = require('./../resources/model');

router.route('/').get(function(req,res,next) {
	req.result = resources.pi.sensors;
	console.log('req.result=',req.result);
	next();
});

router.route('/pir').get(function(req,res,next) {
	req.result = resources.pi.sensors.pir;
	next();
});

router.route('/temperature').get(function(req,res,next) {
	req.result = resources.pi.sensors.temperature;
next();
});

router.route('/humidity').get(function(req,res,next) {
	req.result = resources.pi.sensors.humidity;
next();
});

module.exports = router;

