var AQDLayer = new L.LayerGroup();
var WLBoundaries_aqd
var branch_selection_sd
var substance_selection_sd

function explorer_soildata()
{



	
	 
	branch_selection_sd=$('#list_typeofuse').val();
	substance_selection_sd=$('#list_substance_sd').val();




	map2.removeLayer(geojson2);
	map2.removeLayer(WL_boundary);
	map2.removeLayer(WL_boundary2);
	map2.removeLayer(geojsonadd2);
		
	// set variable for sparql queries according the user selection
	//aqd_sparql();  
		
	// connect to endpoint and send sparql query

					var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
					//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
					var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
					var request = { accept : 'application/sparql-results+json' };
					// gives all industry values
				//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
				//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
				request.query="SELECT ?Instance ?typeofuse ?substance  ?value ?municipality ?GKZ ? WHERE { ?Instance <http://www.w3.org/2000/01/rdf-schema#label> \""+substance_label+"\".?Instance "+aqd_branch+" ?Value.?Instance <http://www.example.org/def/Name> ?Name. ?Instance <http://www.example.org/def/GKZ> ?GKZ}";
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
							htmlString+="<td>"+value1[value2].value+"</td>";
							
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

	function getColor(d) {
					return d > 2.00 ? '#993404' :
						   d > 1.00 ? '#d95f0e' :
						   d > 0.70 ? '#fe9929' :
						   d > 0.50 ? '#fec44f' :
						   d > 0.30 ? '#fee391' :
						   d > 0.00 ? '#ffffd4' :			     
									  '#ffffff';
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
				
					this._div = L.DomUtil.create('div', 'info');
					this.update();
					return this._div;
			
				};
			
				info2.update = function (props) {
					this._div2.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
					
					
						'<b>Municipality: ' + props.Name + '</b></br><b>Substance:</b></br>'+substance_selection_sd2+'</br><b>Emission branch:</b></br> '+branch_selection_sd+'</br><b> Value:</b></br> ' + props.Values + ''
						: 'Hover over areas');
		};
		




		
		
		
		
	}	
	
	
	
};