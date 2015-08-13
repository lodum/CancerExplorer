var cancer_type_bg
var cancer_carcinogen
var carcinogen_subject=[];
var carcinogen_list_value=[];
var emission_source=[];
var emission_source_label=[];
var amount=0;
var amount2=0;


function background_information2()
{

	
	if ($("input:radio[name='BGType3']:checked").val() == "C34"){ // lung cancer
		
			
	}

	if ($("#carcinogen").val()=='Air pollution'){
	}


	if ($("#emission_source").val()=='Industry')
	 {
	 showPopupIARC ();
	 map.removeLayer(geojson);
		console.log("works");
	}
	
	
		cancer_type_bg = $("input:radio[name ='BGType3']:checked").val()
					if (cancer_type_bg=="C67"){
						
						cancer_carcinogen="<http://www.example.org/Carcinogenes_BladderCancer>";
						
					}
					if (cancer_type_bg=="C34"){
						
						cancer_carcinogen="<http://www.example.org/Carcinogenes_LungCancer>";
						
					}
					if (cancer_type_bg=="C00-C14"){
						
						cancer_carcinogen="<http://www.example.org/Carcinogenes_Nasal_cavity_and_paranasal_sinus>";
						
					}
					if (cancer_type_bg=="C91-C95"){
						
						cancer_carcinogen="<http://www.example.org/Carcinogenes_Leukemia>";
						
					}





			
				// set variable for sparql queries according the user selection
				  
					
				// connect to endpoint and send sparql query

								var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
								//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
								var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
								var request = { accept : 'application/sparql-results+json' };
								// gives all industry values
							//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
							//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
							request.query="SELECT ?a  WHERE { ?a a "+cancer_carcinogen+" }";
				
								
								
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
									   
								//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
								htmlString="<table id=\"test\">";

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
									//htmlString+="</tr>";
									
								});

								htmlString+="</table>";
								$("#resultdiv").html(htmlString);






					var myTableArray = [];
					
					$( document ).ready(function() {
						$("table#test tr").each(function() {
							var arrayOfThisRow = [];
							var tableData = $(this).find('td');
							if (tableData.length > 0) {
								var text=$(this).text();
								carcinogen_subject[amount]=text;
								text=text.replace("http://www.example.org/", "");
								text=text.replace("_", " ");
								text=text.replace("__", " ");	
								text=text.replace("#", "");
								carcinogen_list_value[amount]=text;
								amount++;
								tableData.each(function() { arrayOfThisRow.push(text); });
								//tableData.each(function() { alert($(this).text().replace("http://www.example.org/", "")); });
								myTableArray.push(arrayOfThisRow);
							}
					});

				$("#carcinogen").empty()
			

			var sel = document.getElementById('carcinogen');
			for(var i = 0; i < myTableArray.length; i++) {
				var opt = document.createElement('option');
				opt.innerHTML = myTableArray[i][0];
				opt.value = myTableArray[i][0];
				sel.appendChild(opt);

			}
				
				
				
			});					

											
				}			
								
								
						
	}	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var carcinogen_subject_element
	function carcinogen_info2()
	{
				var doubleentry=false;

				for (var i=0; i < carcinogen_list_value.length; i++){

					if ($('#carcinogen').val()== carcinogen_list_value[i]){

						carcinogen_subject_element=carcinogen_subject[i];


						var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
								//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
								var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
								var request = { accept : 'application/sparql-results+json' };
								// gives all industry values
								//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
								//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
								request.query="SELECT ?a WHERE { <"+carcinogen_subject_element+">  <http://www.example.org/#hasEmissionSource> ?a}";
					

								
					}
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
							//	$("#aqd_results_sidebar").empty();
								
					function callbackFunc(results) {
								
									//alert(results);
									//Clear result HTML div
										   
									//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
									htmlString="<table id=\"test2\">";

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
											//htmlString+="</tr>";
										
									});

									htmlString+="</table>";
									$("#resultdiv2").html(htmlString);	

									$("#emission_source").empty()



								var sel2 = document.getElementById('emission_source');
								for(var n=0;n<results.results.bindings.length;n++){
									if (typeof(results.results.bindings[n].a)=='undefined'){	
									}else{
										var text_label=results.results.bindings[n].a.value.replace("http://www.example.org/#", "");
										text_label=text_label.replace("http://www.example.org/", "");
										text_label=text_label.replace("_", " ");
										text_label=text_label.replace("_", " ");
										text_label=text_label.replace("_", " ");
										var opt4 = document.createElement('option');
							
										$("#emission_source > option").each(function() {	
											if (this.value==text_label){
												doubleentry=true;
											}
										});
										if(doubleentry==false){
							
									
										opt4.innerHTML = text_label;
										opt4.value = text_label;
										sel2.appendChild(opt4);
										}
										doubleentry=false;
									}
								}

								if( $('#emission_source').has('option').length == 0 )  { 
									var opt4 = document.createElement('option');
									opt4.value ="No info yet";
									opt4.innerHTML ="No info yet";
									sel2.appendChild(opt4);
								}





									
							
								}					
					} // End function	




	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	function emission_info2()

	{
		var doubleentry=false;
		var emission_subject_element
		

			var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
			//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
			var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
			var request = { accept : 'application/sparql-results+json' };
			// gives all industry values
			//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
			//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
			request.query="SELECT ?process ?group ?area  ?transport ?consumption ?member ?no ?cas  WHERE { <"+carcinogen_subject_element+">  <http://www.example.org/hasEmissionProcess> ?process.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/#hasExposedGroup> ?group}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/#hasExposedArea> ?area}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/#hasSubstanceTransport> ?transport}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/hasConsumption> ?consumption}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/IARC_Group_Member> ?member}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/#IARC_monography_no> ?no}.OPTIONAL{<"+carcinogen_subject_element+">  <http://www.example.org/#CAS> ?cas} }";
	
							
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
						
			function callbackFunc(results) {

								   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table id=\"test3\">";

					

				$("#emission_process").empty()

				var myTableArray3 = [];
				$( document ).ready(function() {
					$("table#test3 tr").each(function() {
						var arrayOfThisRow = [];
						var tableData = $(this).find('td');
							if (tableData.length > 0) {
								var text3=$(this).text();
								//carcinogen_subject=text2;
								text3=text3.replace("http://www.example.org/", "");
								text3=text3.replace("_", " ");
								text3=text3.replace("__", " ");	
								text3=text3.replace("#", "");
								tableData.each(function() { arrayOfThisRow.push(text3); });
								//tableData.each(function() { alert($(this).text2().replace("http://www.example.org/", "")); });
								myTableArray3.push(arrayOfThisRow);
								//alert (myTableArray3);
							}
				});
			
		
		$("#exposed_group").empty();
		$("#exposed_area").empty();
		$("#substance_transport").empty();
		$("#consumption").empty();
		$("#iarc_member").empty();
		$("#monography_no").empty();
		$("#cas_no").empty();

		

		var sel3 = document.getElementById('emission_process');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].process)=='undefined'){	
				}else{
					var text_label=results.results.bindings[n].process.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#emission_process > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
				if(doubleentry==false){
			
				opt4.innerHTML = text_label;
				opt4.value = text_label;
				sel3.appendChild(opt4);
				}
				doubleentry=false;
			}
		}

		if( $('#emission_process').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel3.appendChild(opt4);
		}


		var sel4 = document.getElementById('exposed_group');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].group)=='undefined'){	
			}else{
					var text_label=results.results.bindings[n].group.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
			
					$("#exposed_group > option").each(function() {	
						if (this.value==text_label){
						doubleentry=true;
						}
					});
					if(doubleentry==false){
				
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel4.appendChild(opt4);
					}
					doubleentry=false;
			}
		}

		if( $('#exposed_group').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel4.appendChild(opt4);
		}


		var sel5 = document.getElementById('exposed_area');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].area)=='undefined'){	
			}else{
					var text_label=results.results.bindings[n].area.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#exposed_area > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
					if(doubleentry==false){
						
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel5.appendChild(opt4);
					}
					doubleentry=false;
			}
		}

		if( $('#exposed_area').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel5.appendChild(opt4);
		}



		var sel6 = document.getElementById('substance_transport');
		for(var n=0;n<results.results.bindings.length;n++){
			var opt4 = document.createElement('option');
			if (typeof(results.results.bindings[n].transport)=='undefined'){	
			}else{
				var text_label=results.results.bindings[n].transport.value.replace("http://www.example.org/#", "");
				text_label=text_label.replace("http://www.example.org/", "");
				text_label=text_label.replace("_", " ");
				text_label=text_label.replace("_", " ");
				text_label=text_label.replace("_", " ");
				$("#substance_transport > option").each(function() {	
					if (this.value==text_label){
						doubleentry=true;
					}
				});
				if(doubleentry==false){
				
					opt4.innerHTML = text_label;
					opt4.value = text_label;
					sel6.appendChild(opt4);
				}
				doubleentry=false;
			}
		}

		if( $('#substance_transport').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel6.appendChild(opt4);
		}


		var sel7 = document.getElementById('consumption');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].consumption)=='undefined'){	
				}else{
					var text_label=results.results.bindings[n].consumption.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#consumption > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
					if(doubleentry==false){
					
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel7.appendChild(opt4);
					}
					doubleentry=false;
				}
		}

		if( $('#consumption').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel7.appendChild(opt4);
		}




		var sel8 = document.getElementById('iarc_member');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].member)=='undefined'){	
				}else{
					var text_label=results.results.bindings[n].member.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#iarc_member > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
					if(doubleentry==false){
					
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel8.appendChild(opt4);
					}
					doubleentry=false;
				}
		}

		if( $('#iarc_member').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel8.appendChild(opt4);
		}


		var sel9 = document.getElementById('monography_no');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].no)=='undefined'){	
				}else{
					var text_label=results.results.bindings[n].no.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#monography_no > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
					if(doubleentry==false){
					
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel9.appendChild(opt4);
					}
					doubleentry=false;
				}
		}

		if( $('#monography_no').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel9.appendChild(opt4);
		}



		var sel10 = document.getElementById('cas_no');
		for(var n=0;n<results.results.bindings.length;n++){
			if (typeof(results.results.bindings[n].cas)=='undefined'){	
				}else{
					var text_label=results.results.bindings[n].cas.value.replace("http://www.example.org/#", "");
					text_label=text_label.replace("http://www.example.org/", "");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					text_label=text_label.replace("_", " ");
					var opt4 = document.createElement('option');
					
					$("#cas_no > option").each(function() {	
						if (this.value==text_label){
							doubleentry=true;
						}
					});
					if(doubleentry==false){
					
						opt4.innerHTML = text_label;
						opt4.value = text_label;
						sel10.appendChild(opt4);
					}
					doubleentry=false;
				}
		}

		if( $('#cas_no').has('option').length == 0 )  { 
			var opt4 = document.createElement('option');
			opt4.value ="No info yet";
			opt4.innerHTML ="No info yet";
			sel10.appendChild(opt4);
		}

	});	
				
	}					
} // End function


		
	