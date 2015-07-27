
var timers = {};

function changeVol(zoneId) {
	var slider = $('#' + zoneId);
	var value = slider.val();
	//console.log("Changing volume for " + zoneId + " to " + value);
	$('#' + zoneId + "val").text(value);
	if(timers[zoneId]){
		clearTimeout(timers[zoneId]);
	}
	timers[zoneId] = setTimeout(function(){
		console.log("SENDING " + value + " to " + zoneId);
		$.ajax({
			url: '/vol/' + zoneId,
			method: 'POST',
			dataType: 'text',
			contentType: 'text/plain',
			data: value
		}).done(function(d){ console.log("RESPONSE: " + d);});
	}, 50);
}