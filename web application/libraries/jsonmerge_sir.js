


function visualize_sir (sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice){


	var endpoint="http://10.10.6.8:8080/openrdf-sesame/repositories/cancerdata";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results+json' };

		
		//get sparql query from textarea
		//request.query=$("#sparqlQuery").val();
		if (check_choice=="SIR"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?SIR ?GKZ WHERE {?Municipality  <http://www.example.org/def/"+sir_cancer+"_"+sir_year+"_"+sir_gender+"_SIR> ?SIR. ?Municipality <http://www.example.org/def/GKZ> ?GKZ.   } "; //Limit 20
}

	if (check_choice=="CIlower"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CIlower ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_lowerlimit> ?CIlower   } "; //Limit 20
}

	if (check_choice=="CIupper"){
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CIupper ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_upperlimit> ?CIupper   } "; //Limit 20
}

if (check_choice=="Carcinogen"){

		request.query="PREFIX  rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select ?a WHERE {?a a <http://www.example.org/Carcinogenes_"+sir_cancer+sir_cancer_add+"> } "; //Limit 20
}
alert(request.query);

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
//	};

	//handles the ajax response
	function callbackFunc(results) {

		//Clear result HTML div
		$("#resultdiv").empty();	   
		//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
		htmlString="<table class=\"table table-striped\">";
		
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







var WLBoundaries_new = WLBoundaries;
//sparql();
//alert(WLBoundaries_new.features[1].properties.GKZ); 
//alert(results.results.bindings[1].c.value)
//global variable from sparql.js with the result set of the defined query

//alert(WLBoundaries_new.features.length);
for(var i=0;i<WLBoundaries_new.features.length;i++){

//WLBoundaries_new.features[i].properties.SIR=5;
for(var n=0;n<results.results.bindings.length;n++){

	if(WLBoundaries_new.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
	if(check_choice=="SIR"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].SIR.value; // value from variable ?c see sparql query
	//alert(WLBoundaries_new.features[i].properties.SIR);
	}
	if(check_choice=="CIlower"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CIlower.value; // value from variable ?c see sparql query
	//alert(WLBoundaries_new.features[i].properties.SIR);
	}
	if(check_choice=="CIupper"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CIupper.value; // value from variable ?c see sparql query
	//alert(WLBoundaries_new.features[i].properties.SIR);
	}
	
	if(check_choice=="Carcinogen"){
	WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CIupper.value; // value from variable ?c see sparql query
	//alert(WLBoundaries_new.features[i].properties.SIR);
	}
	
	
	
}
}
};

//alert(WLBoundaries_new.features[1].properties.Name);
//alert(WLBoundaries_new.features[1].properties.SIR);
//alert(WLBoundaries_new.features[1].geometry.coordinates);


map.removeLayer(geojson);
map.removeControl(info);
map.removeControl(legend);
map.removeLayer(WLBoundaries);





//map.removeLayer(WL_boundary);

var geojson_new = L.geoJson(WLBoundaries_new, {
			style: style_new,
			onEachFeature: onEachFeature
		}).addTo(map);

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
L.tileLayer('http://{s}.tiles.mapbox.com/{id}/{z}/{x}/{y}.png', {
    id: 'WL_boundary_new',
    attribution: 'SIR',
	setOpacity:10,
}).addTo(map);
geojsonlayer=L.geoJson(WLBoundaries_new, {style: style_new});
geojsonlayer.addTo(map);




function getColor(d) {
			return d > 2.00 ? '#993404' :
			       d > 1.00 ? '#d95f0e' :
			       d > 0.70 ? '#fe9929' :
			       d > 0.30  ? '#fec44f' :
			       d > 0.15   ? '#fee391' :
				   d > 0   ? '#ffffd4' :			     
			                   '#ffffff';
		}

		
//Adding map interaction
/*
		// control that shows state info on hover
		var info2 = L.control();

		info2.onAdd = function (map) {
			this._div2 = L.DomUtil.create('div', 'info2');
			this.update();
			return this._div2;
		};

		info2.update = function (props2) {
			this._div2.innerHTML = '<h4>Westphalen Lippe</h4>' +  (props2 ?
				'<b>' + props2.Name + '</b><br />' + props2.SIR + ''
				: 'Hover over a state');
		};

		info2.addTo(map);		
		

		function highlightFeature2(e) {
			var layer2 = e.target;

			layer2.setStyle({
				weight: 5,
				color: '#666',
				dashArray: '',
				fillOpacity: 0.7
			});

			if (!L.Browser.ie && !L.Browser.opera) {
				layer2.bringToFront();
			}

			info2.update(layer2.feature2.properties);
		}
		


function resetHighlight2(e) {
			geojson_new.resetStyle(e.target);
			info2.update();
		}

		function zoomToFeature2(e) {
			map.fitBounds(e.target.getBounds());
		}

		function onEachFeature2(feature2, layer2) {
			layer2.on({
				mouseover: highlightFeature2,
				mouseout: resetHighlight2,
				click: zoomToFeature2
			});
		}

		

		map.attributionControl.addAttribution('Text?');
*/

		var legend2 = L.control({position: 'bottomright'});

legend2.onAdd = function (map) {
var grades2
var labels2
			var div2 = L.DomUtil.create('div2', 'info legend'),
			grades2 = [0, 0.15, 0.3, 0.7, 1, 2],
			labels2 = [],
			
			from, to;
	for (var i2 = 1; i2 < grades2.length; i2++) {
				var from = grades2[i2];
				var to = grades2[i2 + 1];
				

				labels2.push(
					'<i style="background:' + getColor(from + 0) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div2.innerHTML = labels2.join('<br>');
			return div2;
};

		legend2.addTo(map);









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

			info2.update(layer2.feature.properties);
		}

		var geojson2;

		function resetHighlight2(e2) {
			geojson2.resetStyle(e2.target);
			info2.update();
		}

		function zoomToFeature(e2) {
			map.fitBounds(e.target.getBounds());
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
		var info2 = L.control();

		info2.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info2');
			this.update();
			return this._div;
		};

		info2.update = function (props2) {
			this._div.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props2 ?
				'<b>Municipality: ' + props2.Name + '</b><br />SIR: ' + props2.SIR + ''
				: 'Hover over a state');
		};

		info2.addTo(map);




		
		
		

}

Sparql_panel();


};
