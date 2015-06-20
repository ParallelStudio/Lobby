// An interface for fetching data from the microserver.

var fs = require('fs');
var _ = require('lodash');
var request = require('request');
var xml2js = require('xml2js');

var SERVER_URL = 'http://10.0.1.50/latestsampledata.xml';

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
		try {
			convertXmlToJson(data, callback);	
		}
		catch(e){
			console.log("Error converting xml to json");
			console.log(data);
		}
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
	xml = fixXml(xml);
	xml2js.parseString(xml, function(err, json){
		if(err){
			console.log("Error parsing xml: " + err);
			console.log("XML -> " + xml);
			return callback(err, null);
		}
		if(!json.oriondata){
			console.log("BAD DATA: " + xml);
		}
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

function fixXml(xml){
	xml = xml.toString().trim();
	var broken = "</oriondata";  //sometimes we see this instead of a full closing tag
	var ending = xml.substring(xml.length - broken.length);
	if(ending == broken){
		console.log("Broken XML detected, attempting work-around...");
		return xml + ">";
	}
	return xml;
}
