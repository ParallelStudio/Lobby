
var express = require('express');
var microserver = require('./microserver');

var PORT = 8080;
var app = express();

app.get('/', function (req, res) {
	microserver.getData(function(err, data){
		if(err){
			throw new Error(err);
		}
		res.json(data);
	});
});

var server = app.listen(PORT, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Microserver facade listening at http://%s:%s', host, port);
});
