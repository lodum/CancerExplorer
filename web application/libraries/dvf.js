function dvf2 ()
{

	//Setup mapping between number of electoral votes and color/fillColor.   In this case, we're going to vary color from green (hue of 120) to red (hue of 0) with a darker border (lightness of 25%) and lighter fill (lightness of 50%)
var colorFunction = new L.HSLHueFunction(new L.Point(1, 60), new L.Point(100, 0), {outputSaturation: '100%', outputLuminosity: '25%'});
var fillColorFunction = new L.HSLHueFunction(new L.Point(1, 60), new L.Point(1000000000, 0), {outputSaturation: '100%', outputLuminosity: '50%'});



var electionData = WLBoundaries;
var options = {
	recordsLayer: 'features.properties.GKZ',
	//recordsField: 'GKZ',
	locationMode: L.LocationModes.GEOJSON,
	codeField: 'GKZ',
	locationTextField: 'GKZ',
	displayOptions: {
		GKZ: {
			displayName: 'TARGET_FID',
			color: colorFunction,
			fillColor: fillColorFunction
		}
	},
	layerOptions: {
		fillOpacity: 0.5,
		opacity: 1,
		weight: 1
	},
	tooltipOptions: {
		iconSize: new L.Point(80,55),
		iconAnchor: new L.Point(-5,55)
	}
};

// Create a new choropleth layer from the available data using the specified options
var electoralVotesLayer = new L.ChoroplethDataLayer(electionData, options);



  
// Create and add a legend
$('#legend').append(electoralVotesLayer.getLegend({
	numSegments: 20,
	width: 80,
	className: 'well'
}));

map.addLayer(electoralVotesLayer);








}