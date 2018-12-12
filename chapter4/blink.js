var onoff = require ('onoff');
var Gipo = onoff.Gipo, 
	led = new Gipo(4,'out'), interval;

	interval = setInterval (function()  {
		var value = (led.readSync() + 1) % 2;
		led.write(value, function() {
			console.log("Changed LED state to:" + value);
		});
	}, 2000);

	process.on('SIGNIT' , function () {
		clearInterval(interval);
		led.writeSync(0);
		led.unexport();
		console.log('bye , bey');
		process.exit();
	});