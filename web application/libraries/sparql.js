	
function sparql(){
	//author: Johannes Trame Code: https://github.com/lodum/BiographicalThesaurus/blob/master/examples/jquery_sparql_sesame.html
	
//	function submitQuery(){
		var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results+json' };
		//get sparql query from textarea
		//request.query=$("#sparqlQuery").val();
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?a ?c ?GKZ WHERE {?a <http://www.example.org/def/C00-C14_2007_m_SIR> ?c. ?a <http://www.example.org/def/GKZ> ?GKZ.   } Limit 3";


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
		htmlString="SIR values for all C00-C14 cancer cases of male population in year 2007\:";
		htmlString+="<table id=\"sparql_table2\" class=\"table table-striped\">";
		//write table head
		htmlString+="<tr>";
			$.each(results.head.vars, function(index2, value2) { 
			var table_text=value1[value2].value.replace("http://www.example.org/def/","");
						var table_text=table_text.replace("http://www.example.org/","");
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



// Handling of Json results set See: http://www.w3.org/TR/rdf-sparql-json-res/

newArr = results;
//alert(newArr.results.bindings);

//var fixedResponse = results.results.replace(/\\'/g, "'");
//var obj = JSON.parse(fixedResponse);
		
var bindings = newArr.results.bindings;

// JavaScript  for...in loop iterates
// through the properties of bindings array
// which are [0,1,length-1] as opposed to the
// array item.

for(i in bindings) {
  var binding = bindings[i];
  //alert(binding); // a for-loop to print all the bindings
}

// The only difference here (a subtle one) is
// that the iterator variable is n as opposed to r
// n=name, r=row index
for(i in bindings) {
  var binding = bindings[i];
  for(n in binding) { // n are the sparql variables without '?'
  if (i==1 && n=="c"){
 
    //alert(binding[n].value);
	} // a nested for-loop to print binding values
//	alert(JSON.stringify(results));
//	alert(results.results.bindings[1].a.value);
//	alert(results.results.bindings[1].GKZ.value);
  }
}
//alert(results.results.bindings[0].);
//alert(results.results.bindings[0].value);

return results ;
	
	}
	
	
}	



// Function for the sparql panel
	
function SPedit(){
	//author: Johannes Trame Code: https://github.com/lodum/BiographicalThesaurus/blob/master/examples/jquery_sparql_sesame.html
	
//	function submitQuery(){
		var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results_edit+json' };
		//get sparql query from textarea
		request.query=$("#sparqlQuery").val();
		//request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?a ?c ?GKZ WHERE {?a <http://www.example.org/def/C00-C14_2007_m_SIR> ?c. ?a <http://www.example.org/def/GKZ> ?GKZ.   } Limit 3";


//?a <http://www.example.org/def/GKZ> ?c
		//sent request
		$.ajax({
			dataType: "jsonp",
			//some sparql endpoints do only support "sparql-results_edit+json" instead of simply "json"
			beforeSend: function(xhrObj){xhrObj.setRequestHeader("Accept","application/sparql-results_edit+json");},
			data: request,
			url: queryUrl,
			success: callbackFunc_edit
		});
//	};

	//handles the ajax response
	function callbackFunc_edit(results_edit) {		
		//Clear result HTML div
		$("#resultdiv_edit").empty();	   
		//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
		htmlString="Results from your query:";
		htmlString+="<table id=\"sparql_table2\" class=\"table table-striped\">";
		htmlString+="<thead>";
		//write table head
		htmlString+="<tr>";
			$.each(results_edit.head.vars, function(index2, value2) { 
				htmlString+="<th>?"+value2+"</th>";
			 });
		htmlString+="</tr>";
		htmlString+="</thead>";
		//write table body
		htmlString+="<tbody>";
		$.each(results_edit.results.bindings, function(index1, value1) { 
			htmlString+="<tr>";
			$.each(results_edit.head.vars, function(index2, value2) { 
				htmlString+="<td>"+value1[value2].value+"</td>";
				
				//console.log(value1[value2].value)
			 });
			htmlString+="</tr>";
			
		});
		htmlString+="</tbody>";
		htmlString+="</table>";
		
		
				//htmlString+="<button type=\"submit\" class=\"btn btn-primary\" onclick=\"$(\'#sparql_table\').table2CSV();\">CSV Preview<\/button>";
				htmlString+="<div id=\"container_sparql\"></div>";
				htmlString+="<div id=\"container_sparql_all\"></div>";
		$("#resultdiv_edit").html(htmlString);

				
				
				
				//htmlString+="<div id=\"container\"></div>";
				//htmlString+="<form action=\"data:" + data +" download=\"data.json\"><input type=\"submit\" value=\"Go to Google\"></form>";
				
				//htmlString+="<button type=\"submit\" class=\"btn btn-primary\" onclick=\"do_chart_sparql()\">Show_Chart<\/button>";
		
		
		
		
		
		
		
		
		var obj_sparql = $('#sparql_table2').tableToJSON();
	var data_sparql = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj_sparql));

	$('<a href="data:' + data_sparql + '" download="data.json"><button type="submit" style="width:130px;" class="btn btn-primary">Download_JSON</button></a>').appendTo('#container_sparql_all');


	var obj_sparql2 = 
	$('#sparql_table2').table2CSV({
	delivery:'value'
	});
	var data_sparql2 = "text/csv;charset=utf-8," + encodeURIComponent(obj_sparql2);

	$('<a href="data:' + data_sparql2 + '" download="data.csv"><button type="submit" style="width:130px;" class="btn btn-primary">Download_CSV</button></a>').appendTo('#container_sparql');
	
function dyna_sparql (){

	$("#sparql_table2").dynatable({
	  features: {
		paginate: false,
		recordCount: true,
		sorting: true
	   }});

	  }		
	
	
dyna_sparql ();

// Handling of Json results_edit set See: http://www.w3.org/TR/rdf-sparql-json-res/


//alert(newArr.results_edit.bindings);

//var fixedResponse = results_edit.results_edit.replace(/\\'/g, "'");
//var obj = JSON.parse(fixedResponse);
		


// JavaScript  for...in loop iterates
// through the properties of bindings array
// which are [0,1,length-1] as opposed to the
// array item.


//alert(results_edit.results_edit.bindings[0].);
//alert(results_edit.results_edit.bindings[0].value);

return results_edit ;
	
	}
	
	
}	
	

		
		
		
				
			

	