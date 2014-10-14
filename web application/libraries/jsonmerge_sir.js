var SIRLayer = new L.LayerGroup();
var info_check

var legend_check
var sir_check
var div2 = L.DomUtil.create('div2', 'info legend');
info_div = L.DomUtil.create('div', 'info');


// function to visualize chloropleth SIR/CI map

function visualize_sir (sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice)
{

	map.removeLayer(geojson);
		//check multiple queries
		if (querynumber==1){
			if (secondquery==true){
				 info.removeFrom(map)
				 info_check=false;
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
				if (sir_cancer=="C00-C14"){
				sir_cancer="C00C14"
				}
				if (sir_cancer=="C91-C95"){
				sir_cancer="C91C95"
				}
				
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CI_lower_level ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_lowerlimit> ?CI_lower_level   } "; //Limit 20
		}

				if (check_choice=="CI_upper_level"){
				
				if (sir_cancer=="C00-C14"){
				sir_cancer="C00C14"
				}
				if (sir_cancer=="C91-C95"){
				sir_cancer="C91C95"
				}
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CI_upper_level ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_upperlimit> ?CI_upper_level   } "; //Limit 20
		}

				if (check_choice=="Carcinogen"){
					request.query="PREFIX  rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select ?a WHERE {?a a <http://www.example.org/Carcinogenes_"+sir_cancer+sir_cancer_add+"> } "; //Limit 20
		}

				if (check_choice=="Emitter"){

					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?a ?b ?c WHERE {?a qb:dataSet <http://www.example.org/dataset/Muenster_IndustryEmitterDataset>. ?a ?b ?c}"; //Limit 20
		}
	
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
			if (check_choice=="Emitter"){
			
			
		 visualize_emitter(results);
		 
		 info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();
		 }
			
		//Clear result HTML div
				$("#resultdiv").empty();	   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\">";

		// Special case carcinogen information		
			
			if (check_choice=="Emitter"){
			
				htmlString+="<button type='button' onclick='get_overview()' class='btnStyle span3'>Close detail view and go back to overview</button>";
			}
			
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
			if (check_choice!="Emitter"){
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
						sir_check=true;
						WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].SIR.value; // value from variable ?c see sparql query
			
					}
					
				if(check_choice=="CI_lower_level"){
					WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_lower_level.value; // value from variable ?c see sparql query
					sir_check=true;
				}
				
				if(check_choice=="CI_upper_level"){
					WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_upper_level.value; // value from variable ?c see sparql query
					sir_check=true;
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




	function getColor(d) {
				return d > 2.00 ? '#993404' :
					   d > 1.00 ? '#d95f0e' :
					   d > 0.70 ? '#fe9929' :
					   d > 0.50 ? '#fec44f' :
					   d > 0.30 ? '#fee391' :
					   d > 0.00 ? '#ffffd4' :			     
								  '#ffffff';
	}

			
	//Legend


	var legend2 = L.control({position: 'bottomright'});

	legend2.onAdd = function (map) {
	var grades2
	var labels2
				div2 = L.DomUtil.create('div2', 'info legend'),
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
				legend_check=true;
				div2.innerHTML = labels2.join('<br>');
				return div2;
	};
	
	// if already exists
	
	if (querynumber==1){
			legend2.addTo(map);
	}
	if (legend_check==false){
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


var geojson2;

		
			function highlightFeature2(e2) {
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
			});
		
			SIRLayer.addLayer(geojson2);
		SIRLayer.addTo(map);
			map.attributionControl.addAttribution('Text?');



	// Add Hover information box

	//Adding map interaction

			// control that shows state info on hover



			//var info = L.control();

			info.onAdd = function (map) {
			while(secondquery==true){
				this._div = L.DomUtil.create('div', 'info');
				this.update();
				return this._div;
		}
			};
		if(secondquery==true){
			info.update = function (props) {
				this._div.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
				
				
					'<b>Municipality: ' + props.Name + '</b><br />'+check_choice+': ' + props.SIR + ''
					: 'Hover over a state');
			};
	}
			//if (querynumber==1){
			if (querynumber==1){
				if(info_check==false){
					info.addTo(map);
					info.check=true;
				}
			}
			

	}

	}

	};

	Sparql_panel();

};
