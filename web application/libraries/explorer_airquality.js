var AQDLayer = new L.LayerGroup();
var WLBoundaries_aqd
var branch_selection
var substance_selection
var legendair_check=false;
function explorer_airquality()
{



	//alert($('#list_branch option:selected').val());
	 
	branch_selection=$('#list_branch').val();
	substance_selection=$('#list_substance').val();




	map2.removeLayer(geojson2);
	map2.removeLayer(WL_boundary);
	map2.removeLayer(WL_boundary2);
	map2.removeLayer(geojsonadd2);
		
	// set variable for sparql queries according the user selection
	aqd_sparql();  
		
	// connect to endpoint and send sparql query

					var endpoint="http://data.uni-muenster.de/cancerdata/sparql";
					//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
					var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
					var request = { accept : 'application/sparql-results+json' };
					// gives all industry values
				//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
				//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
				request.query="SELECT ?Instance  ?Value ?Name ?GKZ WHERE { ?Instance <http://www.w3.org/2000/01/rdf-schema#label> \""+substance_label+"\".?Instance "+aqd_branch+" ?Value.?Instance <http://www.example.org/def/Name> ?Name. ?Instance <http://www.example.org/def/GKZ> ?GKZ}";
		// ToDo: check Agriculture issue: if agriculture not exists data isnt displayed!!!-solved?

				

				
					//?a qb:dataSet ?b. ?a <http://www.example.org/def/Industry> ?c
					
				

					
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
		//	$("#aqd_results_sidebar").empty();
					$("#resultdiv_map2").empty();
	
	
	var beforeSorting=new Array();
	
	
	function callbackFunc(results) {
				
				
				//Clear result HTML div
						   
					//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
					htmlString="<table class=\"table table-striped\">";

			// Special case carcinogen information		
				
					
					
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
							htmlString+="<td>"+decode_utf8(value1[value2].value)+"</td>";
							
							//console.log(value1[value2].value)
						 });
						htmlString+="</tr>";
						
					});

					htmlString+="</table>";
					$("#resultdiv_map2").html(htmlString);
					
				
					// show the SPARQL results in a new sidebar
				 AQDResultsPanel.show();
				
					
					WLBoundaries_aqd = WLBoundaries;
				// Merge information from the WLBoundaries geojson and the new queried result set.
					
					
				




	



			
	for(var i=0;i<WLBoundaries_aqd.features.length;i++){			

					for(var n=0;n<results.results.bindings.length;n++){
	
					
						if(WLBoundaries_aqd.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
						
							WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].Value.value;
						}
						
					
					}
	}

	
	for(var i=0;i<WLBoundaries_aqd.features.length;i++){	
	
	beforeSorting[i] = WLBoundaries_aqd.features[i].properties.Values.replace(".","");
	beforeSorting[i] = beforeSorting[i].replace(".","");
	
	 } 			
			

	//////////////////////////////	Visualization

	// Adding info box, legend, hover functionality

		function style_new(feature) {
					return {
						weight: 2,
						opacity: 1,
						color: 'white',
						dashArray: '3',
						fillOpacity: 0.7,
						fillColor: getColor(feature.properties.Values)
					};
		}

		

var afterSorting;

afterSorting = beforeSorting.sort(function(a,b){return a-b});
//alert(afterSorting);

var color_air1=afterSorting[Math.round(afterSorting.length*1/4)];
var color_air2=afterSorting[Math.round(afterSorting.length*1/2)];
var color_air3=afterSorting[Math.round(afterSorting.length*3/4)];	
var color_air4=afterSorting[Math.round(afterSorting.length-1)];	

//alert(afterSorting[Math.round(afterSorting.length)]);




		
	function getColor(d) {
					return d > color_air4 ? '#993404' :
						   d > color_air3 ? '#fec44f' :
						   d > color_air2 ? '#ffffff' :						
						   d > color_air1 ? '#ffffd4' :			     
										  '#ffffff';
		}
		
		
			//Legend

if(legend2==true){
			//legend2.removeFrom(map2);
			div3.innerHTML ="";
			div3.getContainer().innerHTML ="";
			legendair_check=false;
			}
			
	var legend2 = L.control({position: 'bottomleft'});

	legend2.onAdd = function (map) {
	var grades2
	var labels2
	//alert(color_air2);
	//alert(color_air3);
	//alert(color_air1_1);
				var div3 = L.DomUtil.create('div3', 'info legend'),
				grades2 = [0,color_air1,color_air2,color_air3,color_air4];
				labels2 = [];
				
				from, to;
		for (var i2 = 0; i2 < grades2.length; i2++) {
					var from = grades2[i2];
					var to = grades2[i2 + 1];
					

					labels2.push(
						'<i style="background:' + getColor(from + 1 ) + '"></i> ' +
						from + (to ? '&ndash;' + to : '+'));
				}
				
				div3.innerHTML = labels2.join('<br>');
				return div3;
	}; 
	
	// if already exists
	
	/*
	  // loop through our density intervals and generate a label with a colored square for each interval
    for (var i3 = 0; i3 < grades2.length; i3++) {
        labels2.push(
            '<i style="background:' + getColor(grades2[i3]+1) + '"></i> ' +
            grades2[i3] + (grades2[i3+ 1] ? '&ndash;' + grades2[i3 + 1] + '<br>' : '+'));
    }
	div3.innerHTML = labels2.join('<br>');
    return div3;
}; 
*/ 
	
	
	
	
			if(legendair_check==false){
			legend2.addTo(map2);
			legendair_check=true;
			}
		
		
		
		
		
		
		
		
		
		
	function style2(feature2) {
					return {
						weight: 2,
						opacity: 1,
						color: 'white',
						dashArray: '3',
						fillOpacity: 0.7,
						fillColor: getColor(feature2.properties.Values)
					};
				}
				



				
				
				
				
	var geojson_aqd;


		
				function highlightFeature3(e2) {
					var layer2 = e2.target;

					layer2.setStyle({
						weight: 3,
						color: '#2E64FE',
						dashArray: '',
						fillOpacity: 0.7
					});

					if (!L.Browser.ie && !L.Browser.opera) {
						layer2.bringToFront();
					}
					info.update(layer2.feature.properties);
					info2.update(layer2.feature.properties);
				}


				
				function resetHighlight3(e2) {
					geojson_aqd.resetStyle(e2.target);
					info2.update();
					info.update();
				}

				function zoomToFeature3(e2) {
					map2.fitBounds(e2.target.getBounds());
					map.fitBounds(e.target.getBounds());
				}

				function onEachFeature3(feature2, layer2) {
					layer2.on({
						mouseover: highlightFeature3,
						mouseout: resetHighlight3,
						click: zoomToFeature3
					});
				}




		geojson_aqd = L.geoJson(WLBoundaries_aqd, {
					style: style_new,
					onEachFeature: onEachFeature3
				});
		
				AQDLayer.addLayer(geojson_aqd);
				AQDLayer.addTo(map2);
				geojson_aqd.addTo(map2);
				map2.attributionControl.addAttribution('Text?');
		
	
	info2.onAdd = function (map2) {
				//while(secondquery==false){
					this._div = L.DomUtil.create('div', 'info');
					this.update();
					return this._div;
			//}
				};
			//if(secondquery==false){
				info2.update = function (props) {
					this._div2.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
					
					
						'<b>Municipality: ' + props.Name + '</b></br><b>Substance:</b></br>'+substance_selection2+'</br><b>Emission branch:</b></br> '+branch_selection+'</br><b> Value:</b></br> ' + props.Values + ''
						: 'Hover over a state');
				};
		//}


info2.update();

		
		
		
		
	}	
	

	
	
	
};