	function soildata_detail_sidebar (name)
	{
	
	 name=name.replace(/_/g, ' ');
	 name=name.replace("LatLng(","");
	 name=name.replace(")","");
	 var array2 = name.split(',')
	 var X=array2[0];
	 var Y=array2[1];
	 var LocationID=array2[2];
	 
	 var coords=X+","+Y;
	 //alert(X+Y);
	 //alert(coords);
	 /*
	 var Coords=X+","+Y;
	 Coords=Coords.toString();
	*/
	


			// connect to endpoint and send sparql query

				var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };

				
				//get sparql query from textarea
				//request.query=$("#sparqlQuery").val();
			
					//request.query="Select  ?Coords ?LocationID ?Municipality ?Substance ?Value ?Unit ?Probemethod ?UseType  ?ProbeNR ?SeqNr  WHERE {?Coords <http://www.example.org/defdetail/Coordinates> \""+coords+"\".?Coords <http://www.example.org/defdetail/LocationID> ?LocationID.?ID <http://www.example.org/defdetail/LocationID> ?LocationID. ?ID <http://www.example.org/defid/Substance> ?Substance. ?Coords <http://www.example.org/defdetail/Value> ?Value.?ID <http://www.example.org/defid/Unit> ?Unit.?ID <http://www.example.org/defid/ProbeMethod> ?Probemethod. ?ID <http://www.example.org/defid/Value> ?Value.?ID <http://www.example.org/defid/UseType> ?UseType.?ID <http://www.example.org/defid/ProbeNR> ?ProbeNR.?ID <http://www.example.org/defid/SeqNr> ?SeqNr} "; //Limit 20
					request.query="Select ?substance ?value ?unit ?usetype ?typeofsoil ?probemethod   WHERE {?Coords <http://www.example.org/def/Coordinates> \""+coords+"\".?Coords <http://www.example.org/def/Substance> ?substance. ?Coords <http://www.example.org/def/Value> ?value. ?Coords <http://www.example.org/def/Unit> ?unit. ?Coords <http://www.example.org/def/UseType> ?usetype.?Coords <http://www.example.org/def/TypeOfSoil> ?typeofsoil. ?Coords <http://www.example.org/def/ProbeMethod> ?probemethod.?Coords <http://www.example.org/def/LocationID> \""+LocationID+"\" .}"; 

					//request.query="Select ?LocationID ?Substance ?Value ?Unit ?Probemethod ?UseType ?ProbeNR ?SeqNr ?Municipality   WHERE {?Coords <http://www.example.org/defid/Coordinates> \""+coords+"\".?Coords <http://www.example.org/defid/LocationID> ?LocationID.?Coords <http://www.example.org/defid/Substance> ?Substance.?Substance <http://www.example.org/defsub/Value> ?Value.?Substance <http://www.example.org/defsub/Unit> ?Unit.?Coords <http://www.example.org/defid/ProbeMethod> ?Probemethod. ?Substance <http://www.example.org/defsub/UseType> ?UseType.?Substance <http://www.example.org/defsub/ProbeNR> ?ProbeNR.?Substance <http://www.example.org/defsub/SeqNr> ?SeqNr.?Substance <http://www.example.org/defsub/Municipality> ?Municipality} ";
	
//?Municipality <http://www.example.org/def/X> \""+X+"\". ?Municipality <http://www.example.org/def/Y> \""+Y+"\".

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
			
			//alert(results.results.bindings.s);
			
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

			


			
				
		

	
	}
	SPARQLPanel.show();
	}