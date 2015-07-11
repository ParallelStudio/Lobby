var request = require('request');
var osc = require('node-osc');
var api_key = require('./api_key').api_key;

if(process.argv.length <= 2){
	return usage();
}

var args = process.argv.slice(2);
var period = args[0] * 1000;

var client = new osc.Client('localhost', 9009);	//hard coded ftw

console.log("Ok cool, we'll fetch weather every " + period + "ms...");

fetchWeather();

function usage(){
	console.log("Usage: node app.js <interval-seconds>");
}

function fetchWeather(){
	console.log("Fetching Redmond weather from Weather Underground...");
	request({
			url: buildUrl(),
			method: 'GET',
			json: true
		}, 
		function(err, resp, result){
			if(err || (resp.statusCode != 200)){
				console.log("Error fetching weather: " + err + ", HTTP " + resp.statusCode);
				return;
			}
			var weather = stripResult(result);
			console.log(weather);
			client.send('/microserver/mtTemp1', weather.temp, function(){});
			client.send('/microserver/mtRainRate', weather.rain, function(){});
			client.send('/microserver/mt2MinRollAvgWindSpeed', weather.wind, function(){});
			client.send('/microserver/mtSolarRadiation', weather.solar, function(){});
			setTimeout(fetchWeather, period);
		});
}

function stripResult(json){
	var obs = json.current_observation;
	return {
		temp: parseFloat(obs.temp_f),
		solar: obs.solarradiation == '--' ? 0 : parseFloat(obs.solarradiation),
		wind: parseFloat(obs.wind_mph),
		rain: parseFloat(obs.precip_1hr_in)
	}
}

function buildUrl(){
	// return 'http://api.wunderground.com/api/' + api_key + '/conditions/q/WA/Redmond.json';
	// return 'http://api.wunderground.com/api/' + api_key + '/conditions/q/pws:KWAREDMO86.json';	//maybe has solar??
	return 'http://api.wunderground.com/api/' + api_key + '/conditions/q/pws:KWAREDMO103.json'; //maybe has solar??
}