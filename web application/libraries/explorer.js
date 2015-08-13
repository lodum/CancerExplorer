function explorer_modus (){


	document.getElementById("map2").style.width = "42% ";
	document.getElementById("map2").style.height = "80% ";
	document.getElementById("map").style.width = "42%";
	document.getElementById("map").style.float = "left";



	// However- invalidateSize()- it forces to load the tiles- why? has to be found out!

	map2.setView([51.95442, 7.62709],7);
	map2.invalidateSize();
	map.setView([51.95442, 7.62709],7);
	map.invalidateSize();

	if (map.hasLayer(SIRLayer)){
		map.removeLayer(SIRLayer);
		map.removeLayer(geojson22);
		geojson.addTo(map); 
	}

	if (map2.hasLayer(geojson_aqd)){
		map2.removeLayer(geojson_aqd);
		map2.removeLayer(AQDLayer);
		geojson2 = L.geoJson(WLBoundaries2, {
						style: style3,
						onEachFeature: onEachFeature
					}).addTo(map2);
					
				
		map.removeLayer(geojson);
		geojson = L.geoJson(WLBoundaries, {
						style: style,
						onEachFeature: onEachFeature
					}).addTo(map);
	}

	document.getElementById("control").hidden = false;
	map2.sync(map);
	map.sync(map2);
	div2.innerHTML ="";


	//show check buttons for map2 in the menues

	document.getElementById("population_map2").hidden = false;

	$("#SIR_check_map2_div2").hidden = false;
	$("#CIupper_check_map2_div").hidden = false;
	$("#CIlower_check_map2_div").hidden = false;
	$("#AQD_check_map2_div2").hidden = false;




	info2.update = function (props) {
					this._div2.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Hover over areas');
						
	};

	 if (sir_check=true){
		   
				info.update = function (props) {
						this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
							'<b>Municipality: ' + props.Name+ '</b><br />GKZ: ' + props.GKZ + ''
							: 'Click a marker for more information');
				};	
				//info.update();
	 }	

}