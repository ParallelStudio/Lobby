// An interface for fetching data from the microserver.

var fs = require('fs');
var _ = require('lodash');
var xml2js = require('xml2js');

module.exports = {
	getData: getData
}

// Fetches data from the microserver and returns it in json
function getData(callback){
	// Until we have an actual server to work with, we fake it with xml file data...
	getDataFromFile(callback);
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
			return {
				value: value._,
				units: value.$.unit
			}
		});
		callback(err, cleaned);
	});
}
