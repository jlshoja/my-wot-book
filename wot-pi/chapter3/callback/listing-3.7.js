var request = require('request');
request('http://webofthings.org', function(error,resopnse,body){
	if(!error && resopnse.statusCode===200){
		console.log(body);
	}
});
console.log('Testing asynchronous function');