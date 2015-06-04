function visualization_example (){
//$('#SIR_check').attr('checked', true);
//visualize_sir("C67","","2010","m","SIR","Bladder Cancer","map","");


		// connect to endpoint and send sparql query
//var endpoint="http://www.friedrichmueller-gi.de:8181/parliament/sparql";
var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
				//var endpoint="http://giv-lodumdata.uni-muenster.de:8080/openrdf-workbench/repositories/cancerdata/";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };

				
				//get sparql query from textarea
				//request.query=$("#sparqlQuery").val();
				
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select   ?GKZ ?CI_lower_level ?CI_upper_level   ?Label  FROM <http://www.friedrichmueller-gi.de:8080/context/cancerdata/CI95> WHERE { ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality <http://www.example.org/def/Cancer> \"C672010m\" . ?Municipality  <http://www.example.org/def/CI_lowerlimit> ?CI_lower_level   . ?Municipality  <http://www.example.org/def/CI_upperlimit> ?CI_upper_level.?Municipality <http://www.example.org/def/Municipality> ?Label}";
		


	
				//sent request
				$.ajax({
					dataType: "jsonp",
					//some sparql endpoints do only support "sparql-results+json" instead of simply "json"
					beforeSend: function(xhrObj){xhrObj.setRequestHeader("Accept","application/sparql-results+json");},
					data: request,
					url: queryUrl,
					success: callbackFunc
				});


		//handles the ajax response
			function callbackFunc(results) {
			
			
			
				WLBoundaries_new = WLBoundaries;
		//sparql();
		//alert(WLBoundaries_new.features[1].properties.GKZ); 
		//alert(results.results.bindings[1].c.value)
		
		//global variable from sparql.js with the result set of the defined query

		// Merge information from the WLBoundaries geojson and the new queried result set.
				for(var i=0;i<WLBoundaries_new.features.length;i++){

				var randomnumber= (Math.floor(Math.random()*230+1)+0);
				for(var n=0;n<results.results.bindings.length;n++){

				if(WLBoundaries_new.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
					
						// Math random to generate 
						//WLBoundaries_new.features[i].properties.SIR= results.results.bindings[randomnumber].SIR.value; // value from variable ?c see sparql query
			WLBoundaries_new.features[i].properties.CI_lower_level= results.results.bindings[randomnumber].CI_lower_level.value;
			WLBoundaries_new.features[i].properties.CI_upper_level= results.results.bindings[randomnumber].CI_upper_level.value;
					}
			}}
			
			
var layerControl = new L.Control.Layers({
			
		});
			

var colorFunction = new L.HSLHueFunction(new L.Point(0, 60), new L.Point(4, 0), {outputSaturation: '100%', outputLuminosity: '25%'});
	var fillColorFunction = new L.HSLHueFunction(new L.Point(0, 60), new L.Point(4, 0), {outputSaturation: '100%', outputLuminosity: '50%'});
			
			var legendControl = new L.Control.Legend();
		
		legendControl.addTo(map);
		layerControl.addTo(map);
		// dvf_display (WLBoundaries_new,'properties','CI_lower_level',4,0,check_choice);
		
		var options = {
			recordsLayer: 'features',
			locationMode: L.LocationModes.GEOJSON,
			
			codeField: 'GKZ',
			 // A GeoJSON FeatureCollection that will be used to lookup boundaries/location
			locationTextField: 'GKZ',
			 // Whether or not to include a background boundary so people know what boundary each marker is associated with
			layerOptions: {
				fillOpacity: 0.9,
				opacity: 1,
				weight: 1
			},
			displayOptions: {}
		};
		
		options.displayOptions['properties.CI_lower_level'] = {
			fillColor: fillColorFunction,
			color: colorFunction
		};
		
		var nlPopLayerChoropleth = new L.ChoroplethDataLayer(WLBoundaries_new, options);
		layerControl.addOverlay(nlPopLayerChoropleth, 'Choropleth');
		
var range = L.Util.getNumericRange(WLBoundaries_new, 'GKZ');

		var options2 = {
			lrecordsLayer: 'features',
			locationMode: L.LocationModes.GEOJSON,
			codeField: 'GKZ',
			//locationLookup: WLBoundaries_new, // A GeoJSON FeatureCollection that will be used to lookup boundaries/location
			locationTextField: 'GKZ',
			includeBoundary: true, // Whether or not to include a background boundary so people know what boundary each marker is associated with
			layerOptions: {
				fillOpacity: 0.9,
				opacity: 1,
				weight: 1
			},
			displayOptions: {
				
					
				}
			
		};
		options2.displayOptions['properties.GKZ']= {
					displayName: 'Population',
					fillColor: new L.HSLSaturationFunction(new L.Point(range[0], 0), new L.Point(range[1], 1), {
						outputHue: 240
					}),
					color: new L.HSLSaturationFunction(new L.Point(range[0], 0), new L.Point(range[1], 1	), {
						outputHue: 240,
						outputLuminosity: '35%'
					})
					}
					
		var nlPopLayerChoropleth = new L.ChoroplethDataLayer(WLBoundaries_new, options2);
		//layerControl.addOverlay(nlPopLayerChoropleth, 'Choropleth');
	

	
		var symbolOptions = $.extend(true, {}, options2, {
			layerOptions: {
				numberOfSides: 50,
				fillOpacity: 1.0,
				gradient: true
			},
			displayOptions: {
				
			}
			
		});
		
		
		symbolOptions.displayOptions['properties.GKZ']= {
					displayName: 'Population',
					fillColor: new L.HSLLuminosityFunction(new L.Point(range[0], 1), new L.Point(range[1], 0.5), {
						outputHue: 0
					}),
					color: new L.HSLLuminosityFunction(new L.Point(range[0], 0.7), new L.Point(range[1], 0.2), {
						outputHue: 0
					}),
					radius: new L.LinearFunction([range[0], 15],[range[1], 25]),
					innerRadius: new L.LinearFunction([range[0], 5],[range[1], 15])
				}
				
		var nlPopLayerSymbol = new L.DataLayer(WLBoundaries_new, symbolOptions);
		
		// Added for index key testing - should change layer styling after 5 seconds
/*		setTimeout(function () {
			var func = new L.HSLHueFunction(new L.Point(90000, 200), new L.Point(635100, 330));
			nlPopLayerSymbol.setDisplayOption('GKZ', {
				fillColor:func, 
				color: func
			});
		}, 5000); */
		map.addLayer(nlPopLayerSymbol);
		layerControl.addOverlay(nlPopLayerSymbol, 'Proportional Symbol');






























		
		
// Remove the US results
		
/*
		var currentElectionOptions = {
			recordsLayer: 'features',
			locationMode: L.LocationModes.GEOJSON,
			
			
			codeField: 'GKZ',
			 // A GeoJSON FeatureCollection that will be used to lookup boundaries/location
			locationTextField: 'GKZ',
			
			layerOptions: {
				fillOpacity: 0.9,
				opacity: 1,
				weight: 0.5,
				radius: 10,
				width: 5,
				barThickness: 5
			},
			chartOptions:{},
			// Use displayOptions to dynamically size the radius and barThickness according to the number of
			// polling results
			displayOptions: {},
				
			
			tooltipOptions: {
				iconSize: new L.Point(80,55),
				iconAnchor: new L.Point(-5,55)
			},
			onEachRecord: function (layer,record) {
				var $html = $(L.HTMLUtils.buildTable(record));

				layer.bindPopup($html.wrap('<div/>').parent().html(),{
					minWidth: 400,
					maxWidth: 400
				});
			}
		};

		currentElectionOptions.displayOptions['CI_upper_level']={
		
					radius: new L.LinearFunction(new L.Point(0, 10), new L.Point(0.4, 100)),
					barThickness: new L.LinearFunction(new L.Point(0, 4), new L.Point(0.4, 80))
				};
		
		
		currentElectionOptions.chartOptions['properties.CI_lower_level.value']= {
					color: 'hsl(0,100%,25%)',
					fillColor: 'hsl(0,70%,60%)',
					maxValue: 4,
					maxHeight: 20,
					displayName: 'Romney',
					displayText: function (value) {
						return value.toFixed(2);
					}
				};
				currentElectionOptions.chartOptions['properties.CI_upper_level.value']= {
					color: 'hsl(240,100%,25%)',
					fillColor: 'hsl(240,70%,60%)',
					maxValue: 4,
					maxHeight: 20,
					displayName: 'Obama',
					displayText: function (value) {
						return value.toFixed(2);
					}
				};
			
		
		
		
		
		var pollingResultsLayer = new L.PieChartDataLayer(WLBoundaries_new,currentElectionOptions);

		map.addLayer(pollingResultsLayer);		
		
*/		
/*		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////		
		
		var symbolOptions = $.extend(true, {}, options, {
			layerOptions: {
				numberOfSides: 50,
				fillOpacity: 1.0,
				gradient: true
			},
			
			//getIndexKey: function (location, record) {
			//	return location.text;
			//},
			displayOptions: {}
		});
		
		
		
		
		symbolOptions.displayOptions['properties.CI_lower_level']= {
					displayName: 'Population',
					fillColor: new L.HSLLuminosityFunction(new L.Point(0, 1), new L.Point(0.1, 0.5), {
						outputHue: 0
					}),
					color: new L.HSLLuminosityFunction(new L.Point(0, 0.7), new L.Point(0.1, 0.2), {
						outputHue: 0
					}),
					radius: new L.LinearFunction([0, 15],[0.1, 25]),
					innerRadius: new L.LinearFunction([0, 5],[0.1, 15])
				
			}
		
		
		
		var nlPopLayerSymbol = new L.DataLayer(WLBoundaries_new, symbolOptions);
		
		// Added for index key testing - should change layer styling after 5 seconds
	/*	setTimeout(function () {
			var func = new L.HSLHueFunction(new L.Point(0, 200), new L.Point(4, 330));
			nlPopLayerSymbol.setDisplayOption('GKZ', {
				fillColor:func, 
				color: func
			});
		}, 5000); 
		
		map.addLayer(nlPopLayerSymbol);
		layerControl.addOverlay(nlPopLayerSymbol, 'Proportional Symbol');
			
*/			
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			
}			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			////////////////////////////////////////////////////////
			/*
var minimum=0;
var maximum=230;			
			
			
			alert(results.results.bindings[1].CI_lower_level.value);
			
			WLBoundaries_new = WLBoundaries;
		//sparql();
		//alert(WLBoundaries_new.features[1].properties.GKZ); 
		//alert(results.results.bindings[1].c.value)
		
		//global variable from sparql.js with the result set of the defined query

		// Merge information from the WLBoundaries geojson and the new queried result set.
				for(var i=0;i<WLBoundaries_new.features.length;i++){

				var randomnumber= (Math.floor(Math.random()*maximum+1)+minimum);
				for(var n=0;n<results.results.bindings.length;n++){

				if(WLBoundaries_new.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
					
						// Math random to generate 
						//WLBoundaries_new.features[i].properties.SIR= results.results.bindings[randomnumber].SIR.value; // value from variable ?c see sparql query
			WLBoundaries_new.features[i].properties.CI_lower_level= results.results.bindings[randomnumber].CI_lower_level.value;
			WLBoundaries_new.features[i].properties.CI_upper_level= results.results.bindings[randomnumber].CI_upper_level.value;
					}
			}}
			
			
			
		// Remove the US results
		//delete data[0];

		var currentElectionOptions = {
			recordsLayer: 'WLBoundaries_new.features',
			locationMode: L.LocationModes.GEOJSON,
			codeField: 'null',
			
				chartOptions:{'properties.CI_lower_level.value': {
				
					color: 'hsl(0,100%,25%)',
					fillColor: 'hsl(0,70%,60%)',
					maxValue: 1,
					maxHeight: 20,
					displayName: 'CI_lower_level',
					displayText: function (value) {
						return value.toFixed(2);
					}
				},
				'properties.CI_upper_level.value': {
					color: 'hsl(240,100%,25%)',
					fillColor: 'hsl(240,70%,60%)',
					maxValue: 1,
					maxHeight: 20,
					displayName: 'CI_upper_level',
					displayText: function (value) {
						return value.toFixed(2);
					}
					}
				},
			layerOptions: {
				fillOpacity: 0.9,
				opacity: 1,
				weight: 0.5,
				radius: 10,
				width: 5,
				barThickness: 5
			},
			// Use displayOptions to dynamically size the radius and barThickness according to the number of
			// polling results
			
				displayOptions:{'properties.CI_upper_level.value':{
				
					radius: new L.LinearFunction(new L.Point(0, 10), new L.Point(3, 100)),
					barThickness: new L.LinearFunction(new L.Point(0, 4), new L.Point(3, 80))
					}
				},
			
			tooltipOptions: {
				iconSize: new L.Point(80,55),
				iconAnchor: new L.Point(-5,55)
			},
			onEachRecord: function (layer,record) {
				var $html = $(L.HTMLUtils.buildTable(record));

				layer.bindPopup($html.wrap('<div/>').parent().html(),{
					minWidth: 400,
					maxWidth: 400
				});
			}
			
		};

		var pollingResultsLayer = new L.PieChartDataLayer(WLBoundaries_new,currentElectionOptions);

		map.addLayer(pollingResultsLayer);

		var legend = pollingResultsLayer.getLegend({
			className: 'well'
		});

		$('#legend').append(legend);
	
	}
	
	// Loading local data for now, since HuffPo's API seems to be broken from a jQuery/JSONP
	// standpoint
	//loadData(pollsterData);
	
	// Huffington Post updated their Pollster API, and JSONP doesn't seem to work correctly
	// Commented out for now
	/*
	$.ajax({
		url: 'http://elections.huffingtonpost.com/pollster/api/charts.jsonp',
		data: {
			callback: 'pollsterCallback',
			topic: '2012-president'
		},
		type: 'GET',
		jsonpCallback: 'pollsterCallback',
		cache: true,
		async: false,
		crossDomain: true,
		dataType: 'jsonp',
		error: function (jqXHR, textStatus, errorThrown) {
			console.log('Error');
			console.log(jqXHR.responseText);
		},
		success: function (data, textStatus, jqXHR) {
			loadData(data);
		}
	});
	*/

}