
var expect = require('chai').expect;
var microserver = require('../microserver');

describe('test suite for microserver', function(){
	it('makes usable json', function(done){
		microserver.getData(function(err, json){
			//Not comprehensive, just spot check a few data points...
			expect(json.mtWetAirDensity.value).to.equal(0.0821);
			expect(json.mtWetAirDensity.units).to.equal('poundsPerFt3');
			expect(json.mtTemp1.value).to.equal(21.4);
			expect(json.mtTemp1.units).to.equal('degreeF');
			expect(json.mt2MinRollAvgWindSpeed.value).to.equal(17.7);
			expect(json.mt2MinRollAvgWindSpeed.units).to.equal('mph');
			done();
		});
	});

	it('workds around microserver bad xml', function(done){
		//Note: you have to manually switch microserver to file mode and break the xml to test this
		microserver.getData(function(err, json){
			console.log(err);
			//Not comprehensive, just spot check a few data points...
			expect(json.mtWetAirDensity.value).to.equal(0.0821);
			expect(json.mtSolarRadiation.value).to.equal(823);
			done();
		});
	});
});
