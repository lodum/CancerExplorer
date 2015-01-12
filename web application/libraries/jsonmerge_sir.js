var SIRLayer = new L.LayerGroup();
var info_check
info_check=false;
var legend_check
legend_check=false;
var sir_check
var div2 = L.DomUtil.create('div2', 'info legend');
info_div = L.DomUtil.create('div', 'info');
var minimum=0;
var maximum=230;
var check_choice2;
var legend2
var check_choice_label;

 function decode_utf8(utftext) {
            var plaintext = ""; var i=0; var c=c1=c2=0;
             // while-Schleife, weil einige Zeichen uebersprungen werden
             while(i<utftext.length)
                 {
                 c = utftext.charCodeAt(i);
                 if (c<128) {
                     plaintext += String.fromCharCode(c);
                     i++;}
                 else if((c>191) && (c<224)) {
                     c2 = utftext.charCodeAt(i+1);
                     plaintext += String.fromCharCode(((c&31)<<6) | (c2&63));
                     i+=2;}
                 else {
                     c2 = utftext.charCodeAt(i+1); c3 = utftext.charCodeAt(i+2);
                     plaintext += String.fromCharCode(((c&15)<<12) | ((c2&63)<<6) | (c3&63));
                     i+=3;}
                 }
             return plaintext;
         }
// function to visualize chloropleth SIR/CI map

function visualize_sir (sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name)
{


if (check_choice!="Soildata"){
	map.removeLayer(geojson);
		//check multiple queries
		if (querynumber==1){
			if (secondquery==true){
			if (info_check==true){
				 info.removeFrom(map)
				 info_check=false;
			}
			}
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
				check_choice_label="SIR";
					request.query=" Select ?Label ?SIR ?GKZ   WHERE {?Municipality  <http://www.example.org/def/"+sir_cancer+"_"+sir_year+"_"+sir_gender+"_SIR> ?SIR.?Municipality <http://www.example.org/def/MunicipalityName> ?Label. ?Municipality <http://www.example.org/def/GKZ> ?GKZ.}";
		}

				if (check_choice=="CI_lower_level"){
				check_choice_label="CI_lower_level";
				if (sir_cancer=="C00-C14"){
				sir_cancer="C00C14"
				}
				if (sir_cancer=="C91-C95"){
				sir_cancer="C91C95"
				}
				
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select  ?GKZ ?Label ?CI_lower_level  WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" . ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality <http://www.example.org/def/Municipality> ?Label. ?Municipality  <http://www.example.org/def/CI_lowerlimit> ?CI_lower_level   } "; //Limit 20
		}

				if (check_choice=="CI_upper_level"){
				check_choice_label="CI_upper_level";
				if (sir_cancer=="C00-C14"){
				sir_cancer="C00C14"
				}
				if (sir_cancer=="C91-C95"){
				sir_cancer="C91C95"
				}
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Municipality ?CI_upper_level ?GKZ WHERE {?Municipality <http://www.example.org/def/Cancer> \""+sir_cancer+sir_year+sir_gender+"\" .?GKZURL 	qb:structure ?Municipality. ?Municipality <http://www.example.org/def/GKZ> ?GKZ. ?Municipality  <http://www.example.org/def/CI_upperlimit> ?CI_upper_level   } "; //Limit 20
		alert(sir_cancer+sir_year+sir_gender);
		}

				if (check_choice=="Carcinogen"){
					request.query="PREFIX  rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select ?a WHERE {?a a <http://www.example.org/Carcinogenes_"+sir_cancer+sir_cancer_add+"> } "; //Limit 20
		}

				if (check_choice=="Emitter"){
// info.removeFrom(map);
					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?Emitter ?Attribute ?Value WHERE {?Emitter qb:dataSet <http://www.example.org/dataset/Muenster_IndustryEmitterDataset>. ?Emitter ?Attribute ?Value}"; //Limit 20
		}
		
		if (check_choice=="Accident"){

					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select  ?incident ?type ?zipcode ?street ?GKZ ?municipality ?faultypart ?operationprocess ?cause ?causestatus ?eps ?sdd ?year ?lat ?long WHERE {?a <http://www.example.org/def/Incident> ?incident.?a <http://www.example.org/def/Type> ?type.?a <http://www.example.org/def/ZipCode> ?zipcode.?a <http://www.example.org/def/Street> ?street.?a <http://www.example.org/def/GKZ> ?GKZ.?a <http://www.example.org/def/Municipality> ?municipality.?a <http://www.example.org/def/FaultyPart> ?faultypart.?a <http://www.example.org/def/OperationProcess> ?operationprocess.?a <http://www.example.org/def/Cause> ?cause.?a <http://www.example.org/def/CauseStatus> ?causestatus.?a <http://www.example.org/def/EnvironmentalPollutionStatus> ?eps.?a <http://www.example.org/def/StatusDiverseDisturbences> ?sdd.?a <http://www.example.org/def/Year> ?year.?a <http://www.example.org/def/Y> ?lat.?a <http://www.example.org/def/X> ?long.}"; //Limit 20
		}
		
		if (check_choice=="Accident_detail"){

					request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?a ?substance ?incident ?value_kg ?value_text ?value_description WHERE {?a <http://www.example.org/def/X> ?c. ?a <http://www.example.org/def/Substance> ?substance. ?a <http://www.example.org/def/Incident> ?incident. ?a <http://www.example.org/def/Value_kg> ?value_kg. ?a <http://www.example.org/def/Value_text> ?value_text.OPTIONAL{?a <http://www.example.org/def/Value_description> ?value_description}}";
		}
		
		
		if(check_choice=="Soildata"){
		//GKZ selection doesn't work without error!
		//alert(soildata_municipality); 
					//request.query="SELECT ?Instance ?typeofuse ?substance  ?value ?municipality ?GKZ ?paramnr ?probenr ?seqnr ?probemethod ?etrskm32E ?etrskm32N ?X ?Y ?typeofsoil ?soiltype ?locationid ?unit ?municipality WHERE { ?Instance <http://www.example.org/def/UseType> ?typeofuse. ?Instance <http://www.example.org/def/Substance> ?substance.?Instance <http://www.example.org/def/Value> ?value.?Instance <http://www.example.org/def/Municipality> ?municipality.?Instance <http://www.example.org/def/GKZ> ?GKZ.?Instance <http://www.example.org/def/ParamNR> ?paramnr.?Instance <http://www.example.org/def/ProbeNR> ?probenr.?Instance <http://www.example.org/def/SeqNr> ?seqnr.?Instance <http://www.example.org/def/ProbeMethod> ?probemethod.?Instance <http://www.example.org/def/EtrsKm32E> ?etrskm32E.?Instance <http://www.example.org/def/EtrsKm32N> ?etrskm32N.?Instance <http://www.example.org/def/X> ?X.?Instance <http://www.example.org/def/Y> ?Y.?Instance <http://www.example.org/def/TypeOfSoil> ?typeofsoil.?Instance <http://www.example.org/def/SoilType> ?soiltype.?Instance <http://www.example.org/def/LocationID> ?locationid.?Instance <http://www.example.org/def/Unit> ?unit.?Instance <http://www.example.org/def/Municipality> ?municipality}LIMIT 2000";
		request.query="SELECT ?Instance ?GKZ   ?X ?Y   ?unit ?Coordinates ?Substance ?ID ?Value ?municipality WHERE {?Instance <http://www.example.org/def/GKZ> ?GKZ.FILTER(?GKZ= \""+soildata_municipality+"\"). ?Instance <http://www.example.org/def/X> ?X.?Instance <http://www.example.org/def/Y> ?Y.?Instance <http://www.example.org/def/Unit> ?unit.?Instance <http://www.example.org/def/Coordinates> ?Coordinates.?Instance <http://www.example.org/def/Substance> ?Substance.?Instance <http://www.example.org/def/LocationID> ?ID.?Instance <http://www.example.org/def/Value> ?Value.?Instance <http://www.example.org/def/Municipality> ?municipality.}LIMIT 1000";
		//request.query="SELECT DISTINCT ?Instance   ?X ?Y   ?unit ?Coordinates ?Substance ?ID ?Value ?municipality WHERE {?Instance <http://www.example.org/def/GKZ> \""+soildata_municipality+"\";<http://www.example.org/def/X> ?X;<http://www.example.org/def/Y> ?Y;<http://www.example.org/def/Unit> ?unit;<http://www.example.org/def/Coordinates> ?Coordinates;<http://www.example.org/def/Substance> ?Substance;<http://www.example.org/def/LocationID> ?ID;<http://www.example.org/def/Value> ?Value;<http://www.example.org/def/Municipality> ?municipality.}LIMIT 1000";
		check_choice2=check_choice;
		
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
		/* 
		 info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();*/
		 }
		 
		 
		 	if (check_choice=="Accident"){
			
			
		 visualize_accident(results);
		 
		 info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();
		 }
		 
		 
	 
		 if (check_choice=="Soildata"){
			
			
		 visualize_soildata(results);
		 /*
		 info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();
 	*/
		}
		
		 
		 
			
		//Clear result HTML div
				$("#resultdiv").empty();	   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\">";

		// Special case carcinogen information		
			
			if (check_choice=="Emitter"){
			
				htmlString+="<button type='button' id='exitemitter' onclick='get_overview()' data-color='#00aff0' data-hover='#0cbbfc' class='btnStyle span3'>Close detail view and go back to overview</button>";
			}
			
			if (check_choice=="Accident"){
			
				htmlString+="<button type='button' id='exitaccident' onclick='get_overview()' data-color='#00aff0' data-hover='#0cbbfc' class='btnStyle span3'>Close detail view and go back to overview</button>";
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
						htmlString+="<td>"+decode_utf8(value1[value2].value)+"</td>";
						
						//console.log(value1[value2].value)
					 });
					htmlString+="</tr>";
					
				});

				htmlString+="</table>";
				if (check_choice!="Soildata"){
				$("#resultdiv").html(htmlString);}
				
				else{
				$("#resultdiv_map2").html(htmlString);
				}

if(check_choice!="Accident_detail"){
		// functionalities which are not necessary for carcinogen information
		if (check_choice!="Carcinogen"){
			if (check_choice!="Emitter"){
			if (check_choice!="Soildata"){
				var WLBoundaries_new
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
					if(check_choice=="SIR"){
						sir_check=true;
						// Math random to generate 
						WLBoundaries_new.features[i].properties.SIR= results.results.bindings[randomnumber].SIR.value; // value from variable ?c see sparql query
			
					}
					
				if(check_choice=="CI_lower_level"){
					WLBoundaries_new.features[i].properties.SIR= results.results.bindings[randomnumber].CI_lower_level.value; // value from variable ?c see sparql query
					sir_check=true;
				}
				
				if(check_choice=="CI_upper_level"){
					WLBoundaries_new.features[i].properties.SIR= results.results.bindings[randomnumber].CI_upper_level.value; // value from variable ?c see sparql query
					sir_check=true;
				}
			
				if(check_choice=="Carcinogen"){
					WLBoundaries_new.features[i].properties.SIR= results.results.bindings[n].CI_upper_level.value; // value from variable ?c see sparql query
		
				}
				}
			}
		}
	};


}
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




	function getColor3(d) {
				return d > 30 ? '#fe9929' :
					   d > 20 ? '#fec44f' :
					   d > 10 ? '#fee391' :
					   d > 5 ? '#ffffd4' :
					   d > 0 ? '#ffffff' :
								  '#ffffff';
	}

			
	//Legend


	legend2 = L.control({position: 'bottomright'});

	legend2.onAdd = function (map) {
	var grades2
	var labels2
	
	
				div2 = L.DomUtil.create('div2', 'info legend'),
				grades2 = [0,5,10,20,30],
				labels2 = [],
				
				from, to;
		for (var i2 = 0; i2 < grades2.length; i2++) {
					var from = grades2[i2];
					var to = grades2[i2 + 1];
					var from2=grades2[i2]/10;
					var to2=grades2[i2+1]/10;
					

					labels2.push(
						'<i style="background:' + getColor3(from + 1 ) + '"></i> ' +
						from2 + (to2 ? '&ndash;' + to2 : '+'));
				}
				legend_check=true;
				div2.innerHTML = labels2.join('<br>');
				return div2;
	};
	
	// if already exists
	
	if (querynumber>=1){
	if (legend_check==false){
	if (check_choice!="Emitter"){
			legend2.addTo(map);
			legend_check==true;
	}
	}
	}
	if (legend_check==false){
	if (check_choice2!="Soildata"){
	if (check_choice!="Emitter"){
	if (check_choice!="Accident"){
	legend2.addTo(map);
	legend_check=true;
	}
	}
	}
	}


	

	function style2(feature2) {
				return {
					weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 1,
					fillColor: getColor3(feature2.properties.SIR*10)
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
				info2.update(layer2.feature.properties);
			}


			
			function resetHighlight2(e2) {
				geojson2.resetStyle(e2.target);
				info.update();
				info2.update();
			}

			function zoomToFeature(e2) {
				map.fitBounds(e2.target.getBounds());
				map2.fitBounds(e.target.getBounds());
			}

			function onEachFeature2(feature2, layer2) {
				layer2.on({
					mouseover: highlightFeature2,
					mouseout: resetHighlight2,
					click: zoomToFeature
				});
			}
       if (check_choice2!="Soildata"){
			geojson2 = L.geoJson(WLBoundaries_new, {
				style: style2,
				onEachFeature: onEachFeature2
			});
		
			SIRLayer.addLayer(geojson2);
			SIRLayer.addTo(map);
			map.attributionControl.addAttribution('Text?');
			map2.attributionControl.addAttribution('Text?');
			}


	// Add Hover information box

	//Adding map interaction

			// control that shows state info on hover



			//var info = L.control();
			
		
			
if(check_choice2!="Soildata"){
			info.onAdd = function (map) {
			while(secondquery==true){
				this._div = L.DomUtil.create('div', 'info');
				this.update();
				return this._div;
		}
			};
		if(secondquery==true){
		//if (check_choice!="Emitter"){
			info.update = function (props) {
				this._div.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
				
				
					'<b>Municipality: ' + props.Name + '</b><br /> Cancer Type:'+cancer_type_name+'<br>'+check_choice_label+': ' + props.SIR + ''
					: 'Hover over a state');
			};
			//}
	}
			//if (querynumber==1){
			if (querynumber==1){
				if(info_check==false){
				if (check_choice!="Emitter"){
					info.addTo(map);
					info.check=true;
				}
				
				// Would update the info box for emitter task
				/*
				if (check_choice=="Emitter"){
				info.update = function (props) {
				this._div.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
				
				
					'<b>Municipality: ' + props.Name + '</b><br />'
					: 'Click a marker for more information');
			};
			info.update();
				}*/
				}
			}
			

	}
}
	}
	
	
	

	};
     if (check_choice2!="Soildata"){
	Sparql_panel();
	}
	sir_cancer="";
	sir_year="";
	sir_gender="";
	sir_cancer_add="";	
	
	if (check_choice2=="Soildata"){
	
//	document.getElementById("soildata_delete").hidden = false;
	check_choice2=="";
	}
	
};
