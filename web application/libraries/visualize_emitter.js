// initialize variables for function to visualize locations of emitters
var markersLayer = new L.LayerGroup();
var i2
var emitter_name
var emitter_name3
var emitter_N2O
var emitter_emission
var emitter_CO2
var emitter_CH4
var emitter_NH3
var emitter_HCL
var emitter_HF
var emitter_CO
var emitter_NMVOC
var emitter_SO2
var emitter_NO2
var emitter_As
var emitter_Pb
var emitter_Cr
var emitter_Cu
var emitter_Cd
var emitter_Ni
var emitter_V
var emitter_Zn
var emitter_DUF
var emitter_BAP
var emitter_BENZ
var emitter_PAK
var emitter_PM10
var emitter_Staub
var emitter_RUSS
var emitter_Street=new Array();
var emitter_name_check=new Array();
var emitter_ZipCodeCity 




//clear the emitter markers
function clear_emitter_locations (){
	
	if(markersLayer != undefined){
		markersLayer.clearLayers();
		map.removeLayer(markersLayer);
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

	if(markersLayer != undefined){
			markersLayer.clearLayers();
			map.removeLayer(markersLayer);
			}
			if (map.hasLayer(SIRLayer)){
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
	// Add municipality geometry layer and set map view
	geojson.addTo(map);			
	map.setView([51.95442, 7.62709], 7);


}










