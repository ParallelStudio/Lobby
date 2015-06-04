// An interface for fetching data from the microserver.

var fs = require('fs');
var _ = require('lodash');
var request = require('request');
var xml2js = require('xml2js');

var SERVER_URL = 'http://192.168.0.50/latestsampledata.xml';

module.exports = {
	getData: getData
}

// Fetches data from the microserver and returns it in json
function getData(callback){
	// Until we have an actual server to work with, we fake it with xml file data...
	//getDataFromFile(callback);
	getDataFromServer(callback);
}

function getDataFromServer(callback){
	request(SERVER_URL, function(err, resp, data){
		if(err || (resp && resp.statusCode != 200)){
			console.log("Error fetching xml: " + err + " HTTP " + (resp && resp.statusCode));
			return callback("Error fetching xml: " + err + " HTTP " + (resp && resp.statusCode));
		}
		convertXmlToJson(data, callback);
	});
}

function getDataFromFile(callback){
	fs.readFile('../sample-enhanced.xml', function(err, data){
		if(err){
			return console.log("Error reading file: " + err);
		}
		convertXmlToJson(data, callback);
	});
}

function convertXmlToJson(xml, callback){
	xml2js.parseString(xml, function(err, json){
		// Let's shore up the clumsy json
		var cleaned = _.indexBy(json.oriondata.meas, function(meas){
			return meas.$.name;
		});			
		cleaned = _.mapValues(cleaned, function(value){
			var val = value._;
			if(val.match(/^-?\d+(\.\d+)?$/)){
				val = parseFloat(value._);
			}
			return {
				value: val,
				units: value.$.unit
			}
		});
		callback(err, cleaned);
	});
}
