var fs = require('fs');
var express = require('express');
var app = express();

var SAVESTATE = 'state.json';
var state = loadPersistedValues();

var bodyParser = require('body-parser')
app.use(bodyParser.text())

app.use('/static', express.static(__dirname + '/static', {
	index: false
}));

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');

app.get('/', function(req, res){
	var values = loadPersistedValues();
	res.render('index', values);
});

app.post('/vol/:zone', function(req, res){
	console.log("Changing zone: " + req.params.zone + " to " + req.body);
	state[req.params.zone] = req.body;
	saveState(state);
	res.set('Conent-Type', 'text/plain');
	res.send('ok');
});

app.listen(8080);
console.log("Server listening on port 8080");

function loadPersistedValues(){
	if(fs.existsSync(SAVESTATE)){
		return JSON.parse(fs.readFileSync(SAVESTATE));
	}
	return { zone1: 100, zone2: 100, zone3: 100 };
}

function saveState(state){
	fs.writeFileSync(SAVESTATE, JSON.stringify(state));
}