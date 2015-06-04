var AQDLayer = new L.LayerGroup();
var WLBoundaries_aqd
var branch_selection
var substance_selection
var legendair_check=false;
var check_choice;
var geojson_aqd;
var color_air1;
var color_air2;
var color_air3;
var color_air4;




 /* Wandelt das Dezimalkomma in einen Dezimalpunkt um */
    function InZahl (Wert)
    {   // Erstellt von Ralf Pfeifer, www.ArsTechnica.de
        var PosPunkt = Wert.indexOf(".",0);
        var PosKomma = Wert.indexOf(",",0);
        if (PosKomma < 0) PosKomma = Wert.length;

        // Dezimalpunkte zur Tausendergruppierung entfernen
        while ((0 <= PosPunkt) && (PosPunkt < PosKomma))
        {
            Wert = Wert.substring(0, PosPunkt) + Wert.substring(PosPunkt + 1, Wert.length);
            PosPunkt = Wert.indexOf(".",0);
            PosKomma--;
        }

        // Enthaelt die Variable 'Wert' ein Komma ?
        PosKomma = Wert.indexOf(",",0);
        if (PosKomma >= 0)
           { Wert = Wert.substring(0, PosKomma) + "." + Wert.substring(PosKomma + 1, Wert.length); }

        return parseFloat(Wert);
        } // -->










function explorer_airquality(mapname)
{


	 
	branch_selection=$('#list_branch').val();
	substance_selection=$('#list_substance').val();





	
		
	// set variable for sparql queries according the user selection
	aqd_sparql();  
		
	// connect to endpoint and send sparql query

					var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
					//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
					var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
					var request = { accept : 'application/sparql-results2+json' };
					// gives all industry values
				//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
				//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
				request.query="PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> SELECT ?Name ?Label ?Value ?GKZ WHERE { ?Instance <http://www.w3.org/2000/01/rdf-schema#label> \""+substance_label+"\".?Instance <http://www.example.org/def/Name> ?Name. ?Instance rdfs:label ?Label. ?Instance "+aqd_branch+" ?Value. ?Instance <http://www.example.org/def/GKZ> ?GKZ}";
				// ToDo: check Agriculture issue: if agriculture not exists data isnt displayed!!!-solved?
				check_choice="AQD";
				

				
					//?a qb:dataSet ?b. ?a <http://www.example.org/def/Industry> ?c
					
				

					
					//sent request
					$.ajax({
						dataType: "jsonp",
						//some sparql endpoints do only support "sparql-results2+json" instead of simply "json"
						beforeSend: function(xhrObj){xhrObj.setRequestHeader("Accept","application/sparql-results2+json");},
						data: request,
						url: queryUrl,
						success: callbackFunc
					});


			//handles the ajax response
			//	$("#aqd_results2_sidebar").empty();
			$("#resultdiv_map2").empty();
	
	

	
	
	function callbackFunc(results2) {
				
				
				//Clear result HTML div
						   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\" id=\"aqd_table\">";

				// Special case carcinogen information		
				
					
					
					//write table head
					htmlString+="<thead>";
					htmlString+="<tr>";
						$.each(results2.head.vars, function(index2, value2) { 
							htmlString+="<th>"+value2+"</th>";
						 });
					htmlString+="</tr>";
					htmlString+="</thead>";
					//write table body
					htmlString+="<tbody>";
					
					$.each(results2.results.bindings, function(index1, value1) { 
						htmlString+="<tr>";
						$.each(results2.head.vars, function(index2, value2) { 
							htmlString+="<td>"+decode_utf8(value1[value2].value)+"</td>";
							
							//console.log(value1[value2].value)
						 });
						htmlString+="</tr>";
						
					});
					htmlString+="</tbody>";

					htmlString+="</table>";
					$("#resultdiv_map2").html(htmlString);
					
			dyna_aqd ();
			
				// show the SPARQL results2 in a new sidebar
				 AQDResultsPanel.show();
				
					
				WLBoundaries_aqd = WLBoundaries;
				// Merge information from the WLBoundaries geojson and the new queried result set.
					
					
				
			
	for(var i=0;i<WLBoundaries_aqd.features.length;i++){			

					for(var n=0;n<results2.results.bindings.length;n++){
	
					
						if(WLBoundaries_aqd.features[i].properties.GKZ == results2.results.bindings[n].GKZ.value){
						
							WLBoundaries_aqd.features[i].properties.Values= results2.results.bindings[n].Value.value;
							var number=WLBoundaries_aqd.features[i].properties.Values;
							WLBoundaries_aqd.features[i].properties.Values=InZahl(number);
						}
						
					
					}
	}

	
			
			

	//////////////////////////////	Visualization
	
	  var remember = document.getElementById('AQD_check');
	  var remember_map2 = document.getElementById('AQD_check_map2');
	 
	if (mapname=='map'){
					if (remember.checked){
					//if (check_map_sir<2){
						dvf2(WLBoundaries_aqd,"properties","Values",map,"map",check_choice);
						
						//}
					}
	}
	if (mapname=='map2'){
					if (remember_map2.checked){
					//if (check_map2_sir<2){
						dvf4(WLBoundaries_aqd,"properties","Values",map2,"map2",check_choice);
						
						//}
					}	
	

	}	
	

function dyna_aqd (){

	$("#aqd_table").dynatable({
	  features: {
		paginate: false,
		recordCount: true,
		sorting: true
	   }});

	  }		
		
		
		
	}			
};