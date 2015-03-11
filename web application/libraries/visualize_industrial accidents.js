// initialize variables for function to visualize locations of emitters
var markersLayer_accident = new L.LayerGroup();
var i3
var accident_name
var accident_name2
var marker_check


var accident_lat
var accident_long
var accident_type
var accident_street
var accident_zipcode
var accident_GKZ
var accident_municipality
var accident_faultypart
var accident_operationprocess
var accident_cause
var accident_causestatus
var accident_eps
var accident_sdd
var accident_year










//clear the accident markers
function clear_accident_locations (){
	
	if(markersLayer_accident != undefined){
		markersLayer_accident.clearLayers();
		map.removeLayer(markersLayer_accident);
	}
}

// function to realize the municipality overview from page start
function get_overview (){

	info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Hover over a state');
			};

	info.update();

	if(markersLayer_accident != undefined){
			markersLayer_accident.clearLayers();
			map.removeLayer(markersLayer_accident);
			}
			if (map.hasLayer(SIRLayer)){
			//map.removeLayer(geojson22);
				map.removeLayer(SIRLayer);
				
				
				div2.innerHTML ="";
				legend_check=false;
				
				
				
				if (check_detail_view==true){
					if(info_check==false){
						//info.addTo(map);
					}
				}
			
	
		
			//close all open sidebars
			
			Cause_Effect_Panel.hide();
			SPARQLPanel.hide();
			sir_sidebar.hide();
			SPARQLPanel_edit.hide();
			emitter_detail.hide();
			
			

	}
	map.removeLayer(geojson);
// Add municipality geometry layer and set map view
	geojson = L.geoJson(WLBoundaries, {
				style: style,
				onEachFeature: onEachFeature
			}).addTo(map);
			
	map.setView([51.95442, 7.62709], 7);


}


var accident_lat
var accident_long
var accident_type
var accident_street
var accident_zipcode
var accident_GKZ
var accident_municipality
var accident_faultypart
var accident_operationprocess
var accident_cause
var accident_causestatus
var accident_eps
var accident_sdd
var accident_year


var doubleentry_accident=false;

function accident_details_display (results){
alert("test");
$("#resultdiv").empty();
var name_sidebar=document.getElementById("name_acc").innerHTML.replace("http://www.example.org/","")
for(var n=0;n<results.results.bindings.length;n++){
var name_result=results.results.bindings[n].incident.value.replace("http://www.example.org/","")
alert(name_sidebar);
alert(name_result);
for(var n2=0;n2<results.results.bindings.length;n2++){
if (accident_substance==results.results.bindings[n].substance.value){
doubleentry_accident=true;
}

if (doubleentry_accident==false){
if (name_sidebar==name.result){
var accident_substance= results.results.bindings[n].substance.value;
var accident_incidence_detail= results.results.bindings[n].incident.value;
var value_kg= results.results.bindings[n].value_kg.value;
var value_text= results.results.bindings[n].value_text.value;
var value_description= results.results.bindings[n].value_description.value;
doubleentry_accident=false;



htmlString="<table class=\"table table-striped\">";

htmlString+=accident_substance;
htmlString+="</table>"
$("#resultdiv").html(htmlString);



}
}
}

//next muster + sidebar+zuweisen
}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
