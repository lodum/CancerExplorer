var WLBoundaries_new;

function population (currentmap,mapname)
{



	// connect to endpoint and send sparql query
	//var endpoint="http://www.friedrichmueller-gi.de:8181/parliament/sparql";
	var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
	//var endpoint="http://giv-lodumdata.uni-muenster.de:8080/openrdf-workbench/repositories/cancerdata/";
	//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
	var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
	var request = { accept : 'application/sparql-results+json' };

	//request.query=" Select ?Label ?SIR ?GKZ   WHERE {?Municipality  <http://www.example.org/def/"+sir_cancer+"_"+sir_year+"_"+sir_gender+"_SIR> ?SIR.?Municipality <http://www.example.org/def/MunicipalityName> ?Label. ?Municipality <http://www.example.org/def/GKZ> ?GKZ.}";
	request.query="Select ?a ?number ?GKZ WHERE {?a <http://www.example.org/def/pop/ageclass> \""+$('#list_popageclass').val()+"\"\^\^<http://www.w3.org/2001/XMLSchema#double>.?a <http://www.example.org/def/pop/year> \""+$('#list_popyear').val()+"\"\^\^<http://www.w3.org/2001/XMLSchema#double>.?a <http://www.example.org/def/pop/value"+$('input[name="obsType3"]:checked').val()+">?number.?a <http://www.example.org/def/pop/GKZ> ?GKZ}";
			
			
			
			
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
			//$("#resultdiv").empty();
			$("#resultdiv").html("") //Jquery
			//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
			htmlString="<table class=\"table table-striped\" id=\"jsonmerge_sir_table\">";

			// Special case carcinogen information		
	
			//write table head
				htmlString+="<thead>";
				htmlString+="<tr>";
				htmlString+="<br>";
					$.each(results.head.vars, function(index2, value2) { 
					//value2=value2.replace('?','');
						htmlString+="<th>"+value2+"</th>";
					 });
				htmlString+="</tr>";
				htmlString+="</thead>";
				//write table body
				htmlString+="<tbody>";
				$.each(results.results.bindings, function(index1, value1) { 
					htmlString+="<tr>";
					
					$.each(results.head.vars, function(index2, value2) { 
					var table_text=value1[value2].value.replace("http://www.example.org/def/","");
					var table_text=table_text.replace("http://www.example.org/","");
					htmlString+="<td>"+decode_utf8(table_text)+"</td>";
						
						//console.log(value1[value2].value)
					 });
					htmlString+="</tr>";
					
				});
				htmlString+="</tbody>";

				htmlString+="</table>";
				
			
				$("#resultdiv").html(htmlString);
			

			test_dyna ();
							

			WLBoundaries_new = WLBoundaries;
	

			// Merge information from the WLBoundaries geojson and the new queried result set.
			for(var i=0;i<WLBoundaries_new.features.length;i++){

				var randomnumber= (Math.floor(Math.random()*maximum+1)+minimum);
				for(var n=0;n<results.results.bindings.length;n++){

					if(WLBoundaries_new.features[i].properties.GKZ == results.results.bindings[n].GKZ.value){
					
						// Math random to generate 
						WLBoundaries_new.features[i].properties.popvalue= results.results.bindings[n].number.value; // value from variable ?c see sparql query
			
					
	
					}
				}
		
			};
		var check_choice= "Population";
		var remember = document.getElementById('Population_check');
		var remember_map2 = document.getElementById('Population_check_map2');
				if (mapname=="map"){
						if (remember.checked){
						
							dvf2(WLBoundaries_new,"properties","popvalue",map,"map",check_choice);	
						}
				}
				if (mapname=="map2"){
					if (remember_map2.checked){
						
						dvf4(WLBoundaries_new,"properties","popvalue",map2,"map2",check_choice);
							
					}	
				}

		}
	Sparql_panel();

}