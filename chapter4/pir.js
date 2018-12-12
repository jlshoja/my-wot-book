
var Gpio = require ('onoff').Gpio;
var sensor = new Gpio(17,'in', 'both');

sensor.watch(function(err,value) {
	if (err) exit(err);
	console.log(value ? 'there is some one' : 'not anymore');
});
 function exit(err) {
 	if (err) console.log('An error occurred :' + err );
 	sensor.unexport();
 	console.log('Bye , Bye');
 	process.exit();
 	 }

 	 process.on('SIGINT', exit);