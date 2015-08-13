function generate_graph (){
/*
var g = new Graph();

g.addEdge('strawberry', 'cherry');

var layouter = new Graph.Layout.Spring(g);
layouter.layout();

var renderer = new Graph.Renderer.Raphael('canvas', g, 400, 300);
renderer.draw(); */



//create necessary values for the graph

if ($("input:radio[name='BGType3']:checked").val() == "C34"){ // lung cancer
		
	var graph_cancer_type ="Lung Cancer";		
	}
	
if ($("input:radio[name='BGType3']:checked").val() == "C67"){ // lung cancer
		
	var graph_cancer_type ="Bladder Cancer";		
	}

if ($("input:radio[name='BGType3']:checked").val() == "C91-C95"){ // lung cancer
		
	var graph_cancer_type ="Leukemia";		
	}
	
if ($("input:radio[name='BGType3']:checked").val() == "C00-C14"){ // lung cancer
		
	var graph_cancer_type ="Nasal cavity and paranasal sinus";		
	}





var graph_carcinogen_name=document.getElementById("carcinogen").value








var redraw;

/* only do all this when document has finished loading (needed for RaphaelJS) */


  var width = 1200;
  var height =1000;

  var g = new Graph();
 
//Arrow Link 
//Dracula.Edge.style.directed = true;
  /* add a simple node */
  g.addNode('Cancer Type:'+graph_cancer_type);
  g.addNode('Carcinogen:'+graph_carcinogen_name);
  

  /* add a node with a customized label */
 // g.addNode("1", { label : "Tomato" });

	
 
	g.addEdge('Cancer Type:'+graph_cancer_type, 'Carcinogen:'+graph_carcinogen_name,{label:"has_Carcinogen"});
	
	g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Emission Source');
	
	$("#emission_source > option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Emission Source',  $(this).text(),{label:"has_Emission_Source"});
		
	});
	
		g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Emission Process');
	$("#emission_process > option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Emission Process',  $(this).text(),{label:"has_Emission_Process"});
		
	});
	
		g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Transport Way');
	$("#substance_transport> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Transport Way',  $(this).text(),{label:"has_Transport_Way"});
		
	});
	
			g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Exposed Group');
	$("#exposed_group> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Exposed Group',  $(this).text(),{label:"has_Exposed_Group"});
		
	});
	
			g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Exposed Area');
	$("#exposed_area> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Exposed Area',  $(this).text(),{label:"has_Exposed_Area"});
		
	});
	
				g.addEdge('Carcinogen:'+graph_carcinogen_name, 'Consumption');
	$("#consumption> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('Consumption',  $(this).text(),{label:"has_Consumption"});
		
	});
	
			g.addEdge('Carcinogen:'+graph_carcinogen_name, 'IARC Classification');
	$("#iarc_member> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('IARC Classification',  $(this).text(),{label:"has_IARC_classification"});
		
	});
  
  		g.addEdge('Carcinogen:'+graph_carcinogen_name, 'IARC_Monography_No');
	$("#monography_no> option").each(function () {
		g.addNode( $(this).text());
		g.addEdge('IARC_Monography_No',  $(this).text(),{label:"has_Monography_No"});
		
	});
	
			g.addEdge('Carcinogen:'+graph_carcinogen_name, 'CAS_No');
	$("#cas_no> option").each(function () {
		g.addNode( $(this).text());
		
		g.addEdge('CAS_No',  $(this).text(),{label:"has_CAS_No"});
		
	});
	
  /* layout the graph using the Spring layout implementation */
  var layouter = new Graph.Layout.Spring(g);
//var layouter = new Graph.Layout.TournamentTree(g, g.nodes)
  /* draw the graph using the RaphaelJS draw implementation */
  var renderer = new Graph.Renderer.Raphael('canvas', g, width, height);

  redraw = function() {
    layouter.layout();
    renderer.draw();
  };
  hide = function(id) {
    g.nodes[id].hide();
  };
  show = function(id) {
    g.nodes[id].show();
  };
  //    console.log(g.nodes["kiwi"]);
  //redraw();


// $('#canvas').dialog('open');


var w = window.open();

w.document.write( $("#canvas").html() );


w.document.close(); //finish "loading" the page


//No graphical objects :(
/*
    html2canvas(w.document.body, {
      onrendered: function(canvas) {
        $("#canvas").append(canvas);
      }
    });
	
	*/






};