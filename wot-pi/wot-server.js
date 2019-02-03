var httpServer = require('./servers/http');
var resources = require('./resources/model');
var server = httpServer.listen(resources.pi.port, function(){
	console.info('Your Wot Pi is up and running on port %s',
		resources.pi.port);
});

var DHT11SensorPlugin = require('./plugins/internal/DHT11SensorPlugin');
var ledsPlugin = require('./plugins/internal/ledsPlugin');
var pirPlugin = require('./plugins/internal/pirPlugin');


DHT11SensorPlugin.start({'simulate':true , 'frequency':5000});
ledsPlugin.start({'simulate':true , 'frequency':2000});
pirPlugin.start({'simulate':true , 'frequency':2000});