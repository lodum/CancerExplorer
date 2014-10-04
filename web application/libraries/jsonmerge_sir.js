

// function to visualize chloropleth SIR/CI map
function visualize_sir (sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice){

//check multiple queries
if (querynumber==1){
if (secondquery==true){
 info.removeFrom(map)
}
}
// connect to endpoint and send sparql query

	var endpoint="http://10.10.6.8:8080/openrdf-sesame/repositories/cancerdata";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results+json' };

		
		//get sparql query from textarea
		//request.query=$("#sparqlQuery").val();
		if (check_choice=="SIR"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?SIR ?GKZ WHERE {?Municipality  <http://www.example.org/def/"+sir_cancer+"_"+sir_year+"_"+sir_gender+"_SIR> ?SIR. ?Municipality <http://www.example.org/def/GKZ> ?GKZ.   } "; //Limit 20
}

	if (check_choice=="CI_lower_level"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CI_lower_level ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_lowerlimit> ?CI_lower_level   } "; //Limit 20
}

	if (check_choice=="CI_upper_level"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CI_upper_level ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_upperlimit> ?CI_upper_level   } "; //Limit 20
}

if (check_choice=="Carcinogen"){

		request.query="PREFIX  rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select ?a WHERE {?a a <http://www.example.org/Carcinogenes_"+sir_cancer+sir_cancer_add+"> } "; //Limit 20
}
//alert(request.query);

//?a <http://www.example.org/def/GKZ> ?c
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

//Clear result HTML div
		$("#resultdiv").empty();	   
		//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
		htmlString="<table class=\"table table-striped\">";

// Special case carcinogen information		
	if (check_choice=="Carcinogen"){	
		
		htmlString+="Here you see <b>carcinogens</b> that are likely to cause <b> "+sir_cancer+" Cancer</b>";
	}	
		//write table head
		htmlString+="<tr>";
			$.each(results.head.vars, function(index2, value2) { 
				htmlString+="<th>?"+value2+"</th>";
			 });
		htmlString+="</tr>";
		//write table body
		$.each(results.results.bindings, function(index1, value1) { 
			htmlString+="<tr>";
			$.each(results.head.vars, function(index2, value2) { 
				htmlString+="<td>"+value1[value2].value+"</td>";
				
				//console.log(value1[value2].value)
			 });
			htmlString+="</tr>";
			
		});

		htmlString+="</table>";
		$("#resultdiv").html(htmlString);


// functionalities which are not necessary for carcinogen information
if (check_choice!="Carcinogen"){

var WLBoundaries_new
WLBoundaries_new = WLBoundaries;
//sparql();
//alert(WLBoundaries_new.features[1].properties.GKZ); 
//alert(results.results.bindings[1].c.value)
//global variable from sparql.js with the result set of the defined query

// Merge information from the WLBoundaries geojson and the new queried result set.
for(var i=0;i<WLBoundaries_new.features.length;i++){


for(var n=0;n<results.results.bindings.length;n++){

	if(WLBoundaries_new.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
	if(check_choice=="SIR"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].SIR.value; // value from variable ?c see sparql query
	
	}
	if(check_choice=="CI_lower_level"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_lower_level.value; // value from variable ?c see sparql query
	
	}
	if(check_choice=="CI_upper_level"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_upper_level.value; // value from variable ?c see sparql query
	
	}
	
	if(check_choice=="Carcinogen"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_upper_level.value; // value from variable ?c see sparql query
	
	}
		
}
}
};



// Adding info box, legend, hover functionality

function style_new(feature) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: getColor(feature.properties.SIR)
			};
		}
		
var geojson_new = L.geoJson(WLBoundaries_new, {
			style: style_new,
			onEachFeature: onEachFeature
		}).addTo(map);

		
var geotilelayer=L.tileLayer('http://{s}.tiles.mapbox.com/{id}/{z}/{x}/{y}.png', {
    id: 'WL_boundary_new',
    attribution: 'SIR',
	setOpacity:10,
})

if (map.hasLayer (geotilelayer)){
map.removeLayer(geotilelayer);
geotilelayer.clearLayers();
}
geotilelayer.addTo(map)
var geojsonlayer
if (map.hasLayer (geojsonlayer)){
geojsonlayer.clearLayers();
map.removeLayer(geojsonlayer);
}
geojsonlayer=L.geoJson(WLBoundaries_new, {style: style_new});

		if (map.hasLayer(geojson)){
		map.removeLayer(geojson);
		}


geojsonlayer.addTo(map);




function getColor(d) {
			return d > 2.00 ? '#993404' :
			       d > 1.00 ? '#d95f0e' :
			       d > 0.70 ? '#fe9929' :
			       d > 0.50 ? '#fec44f' :
			       d > 0.30 ? '#fee391' :
				   d > 0.00 ? '#ffffd4' :			     
			                  '#ffffff';
		}

		
//Adding map interaction


		var legend2 = L.control({position: 'bottomright'});

legend2.onAdd = function (map) {
var grades2
var labels2
			var div2 = L.DomUtil.create('div2', 'info legend'),
			grades2 = [0, 0.30, 0.50, 0.70, 1.00, 2.00],
			labels2 = [],
			
			from, to;
	for (var i2 = 0; i2 < grades2.length; i2++) {
				var from = grades2[i2];
				var to = grades2[i2 + 1];
				

				labels2.push(
					'<i style="background:' + getColor(from + 0 ) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div2.innerHTML = labels2.join('<br>');
			return div2;
};
// if already exists
if (querynumber==1){
		legend2.addTo(map);
}








sir_cancer="";
sir_year="";
sir_gender="";
sir_cancer_add="";

function style2(feature2) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: getColor(feature2.properties.SIR)
			};
		}




	
		function highlightFeature2(e2) {
			var layer2 = e2.target;

			layer2.setStyle({
				weight: 5,
				color: '#666',
				dashArray: '',
				fillOpacity: 0.7
			});

			if (!L.Browser.ie && !L.Browser.opera) {
				layer2.bringToFront();
			}

			info.update(layer2.feature.properties);
		}

		var geojson2;
if (map.hasLayer(geojson2)){
map.removeLayer(geojson2);



}
		function resetHighlight2(e2) {
			geojson2.resetStyle(e2.target);
			info.update();
		}

		function zoomToFeature(e2) {
			map.fitBounds(e2.target.getBounds());
		}

		function onEachFeature2(feature2, layer2) {
			layer2.on({
				mouseover: highlightFeature2,
				mouseout: resetHighlight2,
				click: zoomToFeature
			});
		}

		geojson2 = L.geoJson(WLBoundaries_new, {
			style: style2,
			onEachFeature: onEachFeature2
		}).addTo(map);

		map.attributionControl.addAttribution('Text?');



// Add Hover information box

//Adding map interaction

		// control that shows state info on hover



		//var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
			this._div.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
			
			
				'<b>Municipality: ' + props.Name + '</b><br />'+check_choice+': ' + props.SIR + ''
				: 'Hover over a state');
		};

		if (querynumber==1){
		info.addTo(map);
		}
		if (querynumber==2){
 
}


}

};

Sparql_panel();

};
