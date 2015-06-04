
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function replaceAll(find, replace, str) {



  return str.replace(find, replace);
  
}



var text2number=0;
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
function ini_linkedinfo(selection){

var list_text2={};


$('option', '#dbpedia_links').remove();


		// connect to endpoint and send sparql query
//var endpoint="http://www.friedrichmueller-gi.de:8181/parliament/sparql";
var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
				//var endpoint="http://giv-lodumdata.uni-muenster.de:8080/openrdf-workbench/repositories/cancerdata/";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };

				
				//get sparql query from textarea
				//request.query=$("#sparqlQuery").val();
				if(selection == "Linkedinformation"){
				
					//request.query=" PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select  ?Object    WHERE {?Object rdfs:seeAlso ?Link}";
					request.query="PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>  Select DISTINCT ?Object  ?Link   WHERE {?Object rdfs:seeAlso ?Link.FILTER regex(str(?Object), \"http://www.example.org/#\") .}";
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
			var list_text;
			var list_text3;
			var double_entry=false;
			
			
		//Clear result HTML div
				$("#resultdiv").empty();	   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\" id=\"jsonmerge_sir_table\">";

			for (var n = 0; n < results.results.bindings.length; n++) { 
					
					
					list_text3=results.results.bindings[n].Object.value;
					list_text=results.results.bindings[n].Object.value;
					
					
					
					list_text = list_text.toString();
list_text=list_text.replace("http://www.example.org/def/","");
list_text=list_text.replace("#","");
					 list_text=list_text.replace("http://www.example.org/","");
					 if ( list_text.indexOf('/') !== -1 ) {
					 var n = list_text.lastIndexOf('/');
						list_text = list_text.substring(n + 1);
						list_text=list_text.replace("+"," ");
						list_text=list_text.replace("_"," ");
						list_text=list_text.replace("%28","(");
						list_text=list_text.replace("%29",")");
						list_text=list_text.replace("%5B","[");
						list_text=list_text.replace("%5D","]");
						if (list_text.contains("_"))
						list_text=replaceAll("_"," ",list_text);
						list_text=list_text.toString();
						
					}
					list_text=decode_utf8(list_text);	

					list_text=list_text.replace("_"," ");
						list_text=list_text.replace("%28","(");
						list_text=list_text.replace("%29",")");
						list_text=list_text.replace("%5B","[");
						list_text=list_text.replace("%5D","]");	
	

				
		for (var i = 0; i < text2number+1; i++) { 
			//alert(list_text2[i]+list_text);		
		if(list_text2[i]==list_text){
		
		double_entry=true;
		
		}
		}	
		
		if(double_entry==false){
text2number++;		
list_text2[text2number]=list_text;

		
     $('#rdfsseeAlso_list')
         .append($("<option value="+list_text3+"></option>")
         .text(list_text)); 
		 double_entry=false;	
	}	
		 
}		

}			
	/*
				
				htmlString+="Here you see <b>carcinogens</b> that are likely to cause <b> "+sir_cancer+" Cancer</b>";
				
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
				
				if (check_choice!="Soildata"){
				$("#resultdiv").html(htmlString);
				
				}
				

				else{
				$("#resultdiv_map2").html(htmlString);
				}

test_dyna ();

*/














Linkedinformation_Panel.show();

}


function ini_linkedinfo2(selection){

var list_text2={};


		// connect to endpoint and send sparql query
//var endpoint="http://www.friedrichmueller-gi.de:8181/parliament/sparql";
var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
				//var endpoint="http://giv-lodumdata.uni-muenster.de:8080/openrdf-workbench/repositories/cancerdata/";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };

				
				//get sparql query from textarea
				//request.query=$("#sparqlQuery").val();
				if(selection == "Linkedinformation"){
				
					//request.query=" PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select  ?Object    WHERE {?Object rdfs:seeAlso ?Link}";
					request.query="PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>  Select DISTINCT ?Object  ?Link   WHERE {?Object rdfs:seeAlso ?Link.FILTER regex(str(?Object), \"http://www.example.org/5\") .?Object <http://www.example.org/def/GKZ> \"5512000\"}";
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
			var list_text;
			var list_text3;
			
			var double_entry=false;
			
			
		//Clear result HTML div
				$("#resultdiv").empty();	   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\" id=\"jsonmerge_sir_table\">";

			for (var n = 0; n < results.results.bindings.length; n++) { 
					
					
					
					list_text=results.results.bindings[n].Object.value;
					list_text3=results.results.bindings[n].Object.value;
					//alert(results.results.bindings[n].Object.value);
list_text=list_text.replace("http://www.example.org/def/","");
					 list_text=list_text.replace("http://www.example.org/5512000/","");
					 list_text=list_text.replace("+"," ");
					 list_text=list_text.capitalizeFirstLetter();
					 if(list_text.contains("_"))
						list_text=replaceAll("_"," ",list_text);
						if(list_text.contains("+"))
						list_text=replaceAll("+"," ",list_text);
					list_text=decode_utf8(list_text);	
					list_text=list_text.toString();
					
					list_text=list_text.replace("%28","(");
						list_text=list_text.replace("%29",")");
						list_text=list_text.replace("%5B","[");
						list_text=list_text.replace("%5D","]");
						if(list_text.contains("_"))
						list_text=replaceAll("_"," ",list_text);
						if(list_text.contains("+"))
						list_text=replaceAll("+"," ",list_text);
						
	

				
		for (var i = 0; i < text2number+1; i++) { 
			//alert(list_text2[i]+list_text);		
		if(list_text2[i]==list_text){
		
		double_entry=true;
		
		}
		}	
		
		if(double_entry==false){
text2number++;		
list_text2[text2number]=list_text;

		
     $('#rdfsseeAlso_list')
         .append($("<option value="+list_text3+"></option>")
         .text(list_text));
		 double_entry=false;	
	}	
		 
}		

}			
	/*
				
				htmlString+="Here you see <b>carcinogens</b> that are likely to cause <b> "+sir_cancer+" Cancer</b>";
				
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
				
				if (check_choice!="Soildata"){
				$("#resultdiv").html(htmlString);
				
				}
				

				else{
				$("#resultdiv_map2").html(htmlString);
				}

test_dyna ();

*/


   

}


function sort_list(select_id) {
// based on: http://www.christatedavies.co.uk/2010/10/04/sorting-a-select-with-jquery/
var selectOptions = $("#"+select_id+" option");

selectOptions.sort(function(a, b) {
if (a.text > b.text) {
return 1;
}
else if (a.text < b.text) {
return -1;
}
else {
return 0
}
});

$("#"+select_id).empty().append(selectOptions);
}


function ClearOptionsFast(id)
{
	var selectObj = document.getElementById(id);
	var selectParentNode = selectObj.parentNode;
	var newSelectObj = selectObj.cloneNode(false); // Make a shallow copy
	selectParentNode.replaceChild(newSelectObj, selectObj);
	return newSelectObj;
}


var seeAlso_subject;
var seeAlso_URL;
var link={};

function seeAlso_info(){
var doubleentry=false;
	
				var e = document.getElementById("rdfsseeAlso_list");
                 seeAlso_subject = e.options[e.selectedIndex].value;

					//alert (seeAlso_subject);


					var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
									//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
									var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
									var request = { accept : 'application/sparql-results+json' };
									// gives all industry values
								//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
								//request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Agriculture> ?i . }}";
								request.query="PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> SELECT ?a WHERE { <"+seeAlso_subject+"> rdfs:seeAlso ?a}";
					

								
					
				
						
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
								$("#dbpedia_abstract").empty();
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
									var l=0;
									
									
									$.each(results.results.bindings, function(index1, value1) { 
										htmlString+="<tr>";
										htmlString+="<font color=\"blue\">";
										$.each(results.head.vars, function(index2, value2) { 
										
											htmlString+="<td>"+value1[value2].value+"</td>";
											//alert(value1[value2].value.indexOf("http://dbpedia.org"));
											if (value1[value2].value.indexOf("http://dbpedia.org") >= 0){
											link[l]=value1[value2].value;
											get_dbpedia(link[l]);
											//alert(link[l]);
											l++;
											}else{
											$("#dbpedia_abstract").val("No info yet");
											$("#dbpedia_links").val("No info yet");
											
											}
											//console.log(value1[value2].value)
										 });
										//htmlString+="</tr>";
										
									});
									htmlString+="</font>";
									htmlString+="</table>";
									$("#resultdiv2").html(htmlString);	

				$("#seeAlso_source").empty()



				var sel2 = document.getElementById('seeAlso_source');
				for(var n=0;n<results.results.bindings.length;n++){
					if (typeof(results.results.bindings[n].a)=='undefined'){	
						}else{
							var text_label=results.results.bindings[n].a.value.replace("http://www.example.org/#", "");
							text_label=text_label.replace("http://www.example.org/", "");
							text_label=text_label.replace("_", " ");
							text_label=text_label.replace("_", " ");
							text_label=text_label.replace("_", " ");
							var opt4 = document.createElement('option');
							
							$("#seeAlso_source > option").each(function() {	
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

				if( $('#seeAlso_source').has('option').length == 0 )  { 
					var opt4 = document.createElement('option');
					opt4.value ="No info yet";
					opt4.innerHTML ="No info yet";
					sel2.appendChild(opt4);
				}





									
							
				}

/*for(var i=0, len=link.length; i < len; i++){
link[i]=link[i].toString();
if (link[i].indexOf("dbpedia") >= 0){
var url=link[i];
get_dbpedia(url);
 
//}
//}
*/

if ($("#dbpedia_abstract").val()==""){
$("#dbpedia_abstract").val("No info yet");
}

if ($("#dbpedia_links").val()==""){
$("#dbpedia_links").val("No info yet");
}
if ($("#dbpedia_links").val()==" "){
$("#dbpedia_links").val("No info yet");
}

				
	} // End function	


function seeAlso_source_click(){
var url=$( "#seeAlso_source option:selected" ).text();
url=url.replace(" ", "_");
var win = window.open(url, '_blank');
  win.focus();

}

// Make Linking of selected selectbox element general
function link_click(id){
var url=$( "#"+id+" option:selected" ).text();
url=url.replace(" ", "_");
var win = window.open(url, '_blank');
  win.focus();

}





	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function get_dbpedia(dbpediaurl){
var list_text;
$("#dbpedia_abstract").empty();
$('#dbpedia_abstract').val('');
$("#dbpedia_links").empty();
			var list_text3;
			var doubleentry=false;
			dbpediaurl=dbpediaurl.replace("page", "resource");
			dbpediaurl=dbpediaurl.replace("Particulate_matter", "Particulates");
			if(dbpediaurl.contains(" "))
			dbpediaurl=replaceAll(" ","_",dbpediaurl);
			
			
var url = "http://dbpedia.org/sparql";
		var query = [
		 " Select ?a ?b WHERE {<"+dbpediaurl+">  <http://dbpedia.org/ontology/abstract> ?a.OPTIONAL{<"+dbpediaurl+">  <http://dbpedia.org/ontology/wikiPageExternalLink> ?b}.FILTER (lang(?a) = 'en')}"
		 
		].join(" ");
		//alert(query);
		var queryUrl = url+"?query="+ encodeURIComponent(query) +"&format=json&callback=?";
		
		$.getJSON( queryUrl,
				function (data) {
				
			
				$("#dbpedia_abstract").val(" ");
				$("#dbpedia_links").val("");



				var sel2 = document.getElementById('dbpedia_abstract');
				//for(var n=0;n<data.results.bindings.length;n++){
				var n=0;
					if (typeof(data.results.bindings[n].a)=='undefined'){	
						}else{
							var text_label=data.results.bindings[n].a.value;
							//$('#dbpedia_abstract').val(text_label);
							$('#dbpedia_abstract').val($('#dbpedia_abstract').val()+text_label); 
							/*
							var opt4 = document.createElement('option');
							
							$("#dbpedia_abstract > option").each(function() {	
								if (this.value==text_label){
									doubleentry=true;
								}
							});
							if(doubleentry==false){
							
							
								opt4.innerHTML = text_label;
								opt4.value = text_label;
								sel2.appendChild(opt4);
							}
							doubleentry=false; */
						}
				//}
				/*
				if( $('#dbpedia_abstract').has('option').length == 0 )  { 
					var opt4 = document.createElement('option');
					opt4.value ="No info yet";
					opt4.innerHTML ="No info yet";
					sel2.appendChild(opt4);
				}
				*/
				
				$("#dbpedia_links").empty();
				$("#dbpedia_links").val("");
				
				





				var sel2 = document.getElementById('dbpedia_links');
				for(var n=0;n<data.results.bindings.length;n++){
					if (typeof(data.results.bindings[n].b)=='undefined'){	
						}else{
							var text_label=data.results.bindings[n].b.value;
							
							var opt4 = document.createElement('option');
							
							$("#dbpedia_links > option").each(function() {	
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

	/*			if( $('#dbpedia_links').has('option').length == 0 )  { 
					var opt4 = document.createElement('option');
					opt4.value ="No info yet";
					opt4.innerHTML ="No info yet";
					sel2.appendChild(opt4);
				} */
						
				
				////////////////////////////////////////////////////////////////////////////////////////////////////////////
					/*if (data.results.bindings.length > 0){
						var influenced = '<h3>Influenced</h3>'; 
						influenced += '<ul id="influenced">';
						$.each(data.results.bindings, function(i,result){
							influenced += '<li>' + result.givenName.value + ' ' + result.surname.value + '</li>';
						});
						influenced += '</ul>';
						$('div#more-info').append(influenced);
					}*/	
				});
	
/*
var endpoint="http://dbpedia.org/sparql";
				//var endpoint="http://giv-lodumdata.uni-muenster.de:8080/openrdf-workbench/repositories/cancerdata/";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };

				
				//get sparql query from textarea
				//request.query=$("#sparqlQuery").val();
				
				
					//request.query=" PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#> Select  ?Object    WHERE {?Object rdfs:seeAlso ?Link}";
					request.query="Select ?a WHERE {<"+dbpediaurl+">  <http://dbpedia.org/ontology/abstract> ?a}";
					
					
					alert(request.query);

		
		
		
	
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
		alert(results);
			var list_text;
			var list_text3;
			var double_entry=false;
			
			
		//Clear result HTML div
				

	$("#dbpedia_abstract").empty()



				var sel2 = document.getElementById('dbpedia_abstract');
			/*	for(var n=0;n<results.results.bindings.length;n++){
					if (typeof(results.results.bindings[n].a)=='undefined'){	
						}else{
							var text_label=results.results.bindings[n].a.value;
							
							var opt4 = document.createElement('option');
							
							$("#dbpedia_abstract > option").each(function() {	
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

				if( $('#dbpedia_abstract').has('option').length == 0 )  { 
					var opt4 = document.createElement('option');
					opt4.value ="No info yet";
					opt4.innerHTML ="No info yet";
					sel2.appendChild(opt4);
				}*/

//}	

if ($("#dbpedia_links").val()==""){
$("#dbpedia_links").val("No info yet");
}
if ($("#dbpedia_links").val()==" "){
$("#dbpedia_links").val("No info yet");
}	

}			

































