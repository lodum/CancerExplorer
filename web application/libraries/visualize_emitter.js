// function to visualize locations of emitters
var markersLayer = new L.LayerGroup();

function visualize_emitter (results){

	var markers = [];

	var marker;

	// quick version-better style to do this with a loop
	for(var i=0;i<results.results.bindings.length;i++){

	if(results.results.bindings[i].b.value=="http://www.example.org/def/Lat"){
		var emitter_name=results.results.bindings[i].a.value;
	//actually not necessary, Name is an extra property
		var emitter_name2=emitter_name.substring(23);
		emitter_name2=emitter_name2.toUpperCase();

	//layergroup delete by closing;map zoom,additional information site
		var emitter_lat=results.results.bindings[i].c.value;
	}
	for(var i2=0;i2<results.results.bindings.length;i2++){
		if(results.results.bindings[i2].a.value==emitter_name){
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/EmissionProcess"){
			var emitter_emission=results.results.bindings[i2].c.value; }

		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Name"){
			var emitter_name3=results.results.bindings[i2].c.value; }

		if(results.results.bindings[i2].b.value=="http://www.example.org/def/N2O"){
			var emitter_N2O=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/CO2"){
			var emitter_CO2=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/CH4"){
			var emitter_CH4=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/NH3"){
			var emitter_NH3=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/HCL"){
			var emitter_HCL=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/HF"){
			var emitter_HF=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/CO"){
			var emitter_CO=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/NMVOC"){	
			var emitter_NMVOC=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/SO2"){
			var emitter_SO2=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/NO2"){
			var emitter_NO2=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/As"){
			var emitter_As=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Pb"){
			var emitter_Pb=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Cr"){
			var emitter_Cr=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Cu"){
			var emitter_Cu=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Cd"){
			var emitter_Cd=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Ni"){
			var emitter_Ni=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/V"){
			var emitter_V=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Zn"){
			var emitter_Zn=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/DUF"){
			var emitter_DUF=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/BAP"){
			var emitter_BAP=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/BENZ"){
			var emitter_BENZ=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/PAK"){
			var emitter_PAK=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/PM10"){
			var emitter_PM10=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Staub"){
			var emitter_Staub=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/RUSS"){
			var emitter_RUSS=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Street"){
			var emitter_Street=results.results.bindings[i2].c.value;}
		if(results.results.bindings[i2].b.value=="http://www.example.org/def/ZipCodeCity"){
			var emitter_ZipCodeCity=results.results.bindings[i2].c.value;
		}





		if(results.results.bindings[i2].b.value=="http://www.example.org/def/Long"){
			var emitter_long=results.results.bindings[i2].c.value;

			marker = L.marker([parseFloat(emitter_lat), parseFloat(emitter_long)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'blue'})});
			marker.bindPopup("<b>"+emitter_name3+"</b><br>Emission Process:</br>"+emitter_emission+'</br><a name='+emitter_name3+','+emitter_N2O+','+emitter_emission+','+emitter_CO2+','+emitter_CH4+','+emitter_NH3+','+emitter_HCL+','+emitter_HF+','+emitter_CO+','+emitter_NMVOC+','+emitter_SO2+','+emitter_NO2+','+emitter_As+','+emitter_Pb+','+emitter_Cr+','+emitter_Cu+','+emitter_Cd+','+emitter_Ni+','+emitter_V+','+emitter_Zn+','+emitter_DUF+','+emitter_BAP+','+emitter_BENZ+','+emitter_PAK+','+emitter_PM10+','+emitter_Staub+','+emitter_RUSS+','+emitter_Street+','+emitter_ZipCodeCity+' onclick="emitter_detail_show(name)">See details</a>');

			// add the markers to a layer 
			markersLayer.addLayer(marker);
	 
	}}}
	// visualize layer with the markers
			markersLayer.addTo(map);

	//remove Layers
	map.removeLayer(WL_boundary);
	map.removeLayer(geojsonadd);
	//info.removeFrom(map);
	//geojson.clearLayers();	
	map.removeLayer(geojson);		
	// set view to Münster
	map.setView([51.95442, 8.10009], 10);


	//remove layers


	/*
	Cause_Effect_Panel.on('hidden', function () {

	markersLayer.clearLayers();
	map.removeLayer(markersLayer);

	}); */

	}
	/*
	$.each(results, function(){
			console.log("ID: " + this.results.bindings.a.value);
			console.log("First Name: " + this.firstname);
			console.log("Last Name: " + this.lastname);
			console.log(" ");

	});
	*/
	/*
	alert(results.results.bindings[i].b.value);
	for(var i=0;i<results.results.bindings.length;i++){
		if (results.results.bindings[i].a.value!=undefined){
		var name_check= results.results.bindings[i].a.value
		if(results.results.bindings[i].b.value=="http://www.example.org/def/Lat"){
		
		var emitter_name=results.results.bindings[i].a.value;
		var emitter_lat=results.results.bindings[i].c.value;
		
		 emitter_name = L.marker([parseFloat(emitter_lat), parseFloat(emitter_long)]).addTo(map);
		alert(emitter_lat,emitter_long);
		
		var emitter_long=results.results.bindings[i].c.value;
		}
	}


	   

		
		}*/ 
		

	
}


function clear_emitter_locations (){
	if(markersLayer != undefined){
		markersLayer.clearLayers();
		map.removeLayer(markersLayer);
	}
	}

function get_overview (){
	if(markersLayer != undefined){
		markersLayer.clearLayers();
		map.removeLayer(markersLayer);
		geojson.addTo(map);
		map.setView([51.95442, 7.62709], 7);

}
}










