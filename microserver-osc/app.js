
var osc = require('node-osc');
var microserver = require('./microserver');
var _ = require('lodash');

if(process.argv.length <= 2){
	return usage();
}

var args = process.argv.slice(2);
var hostport = args[0].split(/:/);
var interval = parseInt(args[1])*1000;

console.log("Opening OSC client to " + hostport[0] + " on port " + hostport[1]);
var client = new osc.Client(hostport[0], hostport[1]);

setInterval(pollServer, 1000);

function pollServer(){
	microserver.getData(function(err, data){
		if(err){
			return console.log("Error fetching data from server: " + err);
		}
		data = _.mapValues(data, function(value){ return value.value; });
		_.forIn(data, function(value, key){
			client.send('/microserver/' + key, value, function(){
				//nop
			});
		});
		process.stdout.write(".");
	});
}

function usage(){
	console.log("Usage: node app.js <host>:<port> <interval-seconds>");
}
