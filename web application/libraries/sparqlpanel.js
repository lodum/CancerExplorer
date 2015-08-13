var chart_values_sparql=[];
var chart_elements_sparql=[];	

function SPedit(){
	//author: Johannes Trame Code: https://github.com/lodum/BiographicalThesaurus/blob/master/examples/jquery_sparql_sesame.html
	
//	function submitQuery(){
		var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results_edit+json' };
		//get sparql query from textarea
		//request.query=$("#sparqlQuery").val();
		request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?a ?c ?GKZ WHERE {?a <http://www.example.org/def/C00-C14_2007_m_SIR> ?c. ?a <http://www.example.org/def/GKZ> ?GKZ.   } Limit 3";


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
		chart_elements=[];
			chart_values=[];
		//Clear result HTML div
		$("#resultdiv_edit").empty();	   
		//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
		htmlString="<table id=\"sparql_table\" class=\"table table-striped\">";
		//write table head
		htmlString+="<tr>";
			$.each(results_edit.head.vars, function(index2, value2) { 
				htmlString+="<th>?"+value2+"</th>";
				
			 }); 
		htmlString+="</tr>";
		//write table body
		$.each(results_edit.results.bindings, function(index1, value1) { 
			htmlString+="<tr>";
			$.each(results_edit.head.vars, function(index2, value2) { 
				htmlString+="<td>"+value1[value2].value+"</td>";
				
				//console.log(value1[value2].value)
			 });
			htmlString+="</tr>";
			
		});

		htmlString+="</table>";
		$("#resultdiv_edit").html(htmlString);
		
		htmlString+="<div id=\"chart3\" name=\"chart3\" style=\"height:400px;width:5300px; \">";
				htmlString+="</div>";
				
				
				
				htmlString+="<button type=\"submit\" class=\"btn btn-primary\" onclick=\"$(\'#sparql_table\').table2CSV();\">CSV Preview<\/button>";
				htmlString+="<div id=\"container_sparql\"></div>";
				htmlString+="<div id=\"container\"></div>";
				//htmlString+="<div id=\"container\"></div>";
				//htmlString+="<form action=\"data:" + data +" download=\"data.json\"><input type=\"submit\" value=\"Go to Google\"></form>";
				
				//htmlString+="<button type=\"submit\" class=\"btn btn-primary\" onclick=\"do_chart_sparql()\">Show_Chart<\/button>";
		
		
		
		
		
		
		
		
		var obj = $('#sparql_table').tableToJSON();
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

	$('<a href="data:' + data + '" download="data.json"><button type="submit" class="btn btn-primary">Download_JSON</button></a>').appendTo('#container');


	var obj_sparql = 
	$('#sparql_table').table2CSV({
	delivery:'value'
	});
	var data_sparql = "text/csv;charset=utf-8," + encodeURIComponent(obj_sparql);

	$('<a href="data:' + data_csv + '" download="data.csv"><button type="submit" class="btn btn-primary">Download_CSV</button></a>').appendTo('#container_sparql');
	

	
	
dyna_sparql ();
		
		
		
		
		



// Handling of Json results_edit set See: http://www.w3.org/TR/rdf-sparql-json-res/

newArr = results_edit;
//alert(newArr.results_edit.bindings);

//var fixedResponse = results_edit.results_edit.replace(/\\'/g, "'");
//var obj = JSON.parse(fixedResponse);
		
var bindings = newArr.results_edit.bindings;

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
//	alert(JSON.stringify(results_edit));
//	alert(results_edit.results_edit.bindings[1].a.value);
//	alert(results_edit.results_edit.bindings[1].GKZ.value);
  }
}
//alert(results_edit.results_edit.bindings[0].);
//alert(results_edit.results_edit.bindings[0].value);

return results_edit ;
	
	}
	
	
}	
	
function dyna_sparql (){

	$("#sparql_table").dynatable({
	  features: {
		paginate: false,
		recordCount: true,
		sorting: true
	   }});

	  }		
		
		
		
	}			
};	

function do_chart_sparql (){
var axis_names=[];
var arrayLength = chart_elements.length;
for (var i = 0; i < arrayLength; i++) {
axis_names[i]=[i,chart_elements[i]];
    
    //Do something
}




        $.jqplot.config.enablePlugins = true;
        var s1 = chart_values;
        var ticks = axis_names;
         
        plot1 = $.jqplot('chart1', [s1], {
            // Only animate if we're not using excanvas (not in IE 7 or IE 8)..
          /*  animate: !$.jqplot.use_excanvas,
            seriesDefaults:{
                renderer:$.jqplot.BarRenderer,
                pointLabels: { show: true }
            },*/
			axesDefaults: {
        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
       
    },
            axes: {
                xaxis: {
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: ticks,
					 tickOptions: {
          angle: -90,
          fontSize: '10pt'
        }
                },
				 yaxis: {
          label: 'Values',
          labelRenderer: $.jqplot.CanvasAxisLabelRenderer
            },
            highlighter: { show: false }
			}
        });
     /*
        $('#chart1').bind('jqplotDataClick', 
            function (ev, seriesIndex, pointIndex, data) {
                $('#info1').html('series: '+seriesIndex+', point: '+pointIndex+', data: '+data);
            }
        ); */
		
		
    }

	