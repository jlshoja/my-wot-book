var express = require('express');
var actuatorsRoutes = require('./../routes/actuators');
var sensorsRoutes = require('./../routes/sensors');
var resources = require('./../resources/model');
var cors = require('cors');
converter = require('./../middleware/converter');

var app = express();

app.use(cors());
app.use ('/pi/actuators', actuatorsRoutes);
app.use ('/pi/sensors', sensorsRoutes);

app.get('/pi',function(req,res) {
	res.send('This is the Wot-Pi!');
});

app.use(converter());

module.exports = app;
