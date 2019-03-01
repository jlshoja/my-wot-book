var http = require('http'),
	request = require ('request'),
	fs = require ('fs');

var serviceRootUrl = 'http://localhost:8686';
http.createServer(function(req, res) {
	console.log('New incoming client request...');

	if (req.url === '/log') {
		getTemperature(res);
	} else {
		res.writeHeader(200, {"Content-Type": "text/plain"});
		res.write('Please use /log');
		res.end();
	}
}).listen(8787);
	
function getTemperature(res) {
	request ({url: serviceRootUrl + '/temperature', json:true}, function (err,resp,body) {
		if (err) throw err;
		if (resp.statusCode===200) {
			console.log(body);
			var temp = body.temperature;
			getLight (res , temp);
		}
	});
}

function getLight(res , temp) {
	request ({url: serviceRootUrl + '/light', json:true} , function(err,resp,
		body) {
		if (err) throw err;
		if (resp.statusCode===200) {
			console.log(body);
			var light = body.light;
			logValuesReply(res, temp, light);
		}
	});
}

function logValuesReply(res, temp, light) {
  var logEntry = 'Temperature: ' + temp + ' Light: ' + light;
 fs.appendFile('log.txt', logEntry + '\n', encoding = 'utf8', function (err) 
{
    if (err) throw err;
    res.writeHeader(200, {"Content-Type": "text/plain"});  Return to 
    res.write(logEntry); the client.
    res.end();
  });
}
