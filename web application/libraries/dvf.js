var check_map=0;
var check_map2=0;
var check_map_sir=0;
var check_map2_sir=0;

// define in order that removing works
var legendControl;
var legendControl2;
var electoralVotesLayer_sir;
var electoralVotesLayer_sir2;
var electoralVotesLayer_aqd;
var electoralVotesLayer_aqd2;
var electoralVotesLayer_popvalue;
var electoralVotesLayer_popvalue2;
var check_1;
var check_2;
var electoralVotesLayer;
var electoralVotesLayer2;






function dvf2(json,value1,value2,currentmap,mapnamestring,check_choice){

	if (map.hasLayer(electoralVotesLayer2)){
		map.removeLayer(electoralVotesLayer2);
	}



// Check max
	for (var i=0 ; i< json.features.length ; i++) {
		if (i==0){
			var max =json.features[0][value1][value2];
		}
		else{
			if (json.features[i][value1][value2] > max){
				max =json.features[i][value1][value2];
			
			}
			
		}
			
	}
			
	for (var i=0 ; i< json.features.length ; i++) {
		if (i==0){
			var min =json.features[0][value1][value2];
		}
		else{
			if (json.features[i][value1][value2] < min){
				min =json.features[i][value1][value2];
			
			}
			
		}
			
	}
   


//Setup mapping between number of electoral votes and color/fillColor.   In this case, we're going to vary color from green (hue of 120) to red (hue of 0) with a darker border (lightness of 25%) and lighter fill (lightness of 50%)

	dvf_display(json,value1,value2,max,min,check_choice);




	var jsonData = json;
	var options3 = {
		recordsLayer: 'features',
		//recordsField: 'GKZ',
		locationMode: L.LocationModes.GEOJSON,
		codeField: value2,
		locationTextField: value2,
		displayOptions,
		layerOptions: {
			fillOpacity: 0.5,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(80,55),
			iconAnchor: new L.Point(-5,55)
		}

	};


// Create a new choropleth layer from the available data using the specified options
	if (value2=="SIR"){

		electoralVotesLayer_sir = new L.ChoroplethDataLayer(jsonData, options3);


		electoralVotesLayer_sir.getLegend();
	}


if (value2=="Values"){

	electoralVotesLayer_aqd = new L.ChoroplethDataLayer(jsonData, options3);


	electoralVotesLayer_aqd.getLegend();
}

	if (value2=="GKZ"){

		electoralVotesLayer = new L.ChoroplethDataLayer(jsonData, options3);


		electoralVotesLayer.getLegend();
	}

	if (value2=="popvalue"){

		electoralVotesLayer_popvalue = new L.ChoroplethDataLayer(jsonData, options3);


		electoralVotesLayer_popvalue.getLegend();
	}




	if (map.hasLayer(electoralVotesLayer_sir)){

		map.removeLayer(electoralVotesLayer_sir);

	}


	if (map.hasLayer(electoralVotesLayer_popvalue)){

		map.removeLayer(electoralVotesLayer_popvalue);

	}

	if (map.hasLayer(electoralVotesLayer_aqd)){

		map.removeLayer(electoralVotesLayer_aqd);

	}




	if (map.hasLayer(electoralVotesLayer)){

		legendControl.getContainer().innerHTML="";
		$('#legendControl').empty();

	}



	if (value2=="GKZ"){

		legendControl = new L.Control.Legend();


		legendControl.addTo(map);

	}

	if (value2=="SIR"){
		legendControl_sir = new L.Control.Legend();
		legendControl_sir.addTo(map);
	}

	if (value2=="Values"){
		legendControl_aqd = new L.Control.Legend();
		legendControl_aqd.addTo(map);
	}

	if (value2=="popvalue"){
		legendControl_popvalue = new L.Control.Legend();
		legendControl_popvalue.addTo(map);
	}

	if (value2=="GKZ"){
		map.addLayer(electoralVotesLayer);
	}

	if (value2=="SIR"){
		if (map.hasLayer(electoralVotesLayer_sir)){

			map.removeLayer(electoralVotesLayer_sir);
		}

		if (map.hasLayer(electoralVotesLayer_popvalue)){

			map.removeLayer(electoralVotesLayer_popvalue);
		}

		if (map.hasLayer(electoralVotesLayer_sir2)){

			map.removeLayer(electoralVotesLayer_sir2);
		}
		map.addLayer(electoralVotesLayer_sir);
		check_2=1;
		if (map.hasLayer(electoralVotesLayer)){

			map.removeLayer(electoralVotesLayer);

		}
	}

	if (value2=="Values"){

		if (map.hasLayer(electoralVotesLayer_aqd)){

			map.removeLayer(electoralVotesLayer_aqd);
		}

		if (map.hasLayer(electoralVotesLayer_popvalue)){

			map.removeLayer(electoralVotesLayer_popvalue);
		}

		if (map.hasLayer(electoralVotesLayer_sir)){

			map.removeLayer(electoralVotesLayer_sir);
		}

		if (map.hasLayer(electoralVotesLayer_popvalue2)){

			map.removeLayer(electoralVotesLayer_popvalue2);
		}

		if (map.hasLayer(electoralVotesLayer)){

			map.removeLayer(electoralVotesLayer);

		}


	map.addLayer(electoralVotesLayer_aqd);
	}


	if (value2=="popvalue"){
		if (map.hasLayer(electoralVotesLayer_popvalue)){

			map.removeLayer(electoralVotesLayer_popvalue);
		}

		if (map.hasLayer(electoralVotesLayer_sir)){

			map.removeLayer(electoralVotesLayer_sir);
		}

		if (map.hasLayer(electoralVotesLayer_popvalue2)){

			map.removeLayer(electoralVotesLayer_popvalue2);
		}
		map.addLayer(electoralVotesLayer_popvalue);

		if (map.hasLayer(electoralVotesLayer)){

			map.removeLayer(electoralVotesLayer);


		}
	}


	currentmap="";

}





function dvf4(json,value1,value2,currentmap,mapnamestring,check_choice)

// json is the array
// value1 and value2 describes the path of the array
{



// Check max
	for (var i=0 ; i< json.features.length ; i++) {
			if (i==0){
				var max =json.features[0][value1][value2];
			}
			else{
				if (json.features[i][value1][value2] > max){
				max =json.features[i][value1][value2];
			
				}
			
			}
			
	}
			
	for (var i=0 ; i< json.features.length ; i++) {
		if (i==0){
			var min =json.features[0][value1][value2];
		}
		else{
			if (json.features[i][value1][value2] < min){
				min =json.features[i][value1][value2];
			
			}
			
		}
			
	}
   


//Setup mapping between number of electoral votes and color/fillColor.   In this case, we're going to vary color from green (hue of 120) to red (hue of 0) with a darker border (lightness of 25%) and lighter fill (lightness of 50%)

	dvf_display(json,value1,value2,max,min,check_choice);




	var jsonData = json;
	var options4 = {
		recordsLayer: 'features',
		//recordsField: 'GKZ',
		locationMode: L.LocationModes.GEOJSON,
		codeField: value2,
		locationTextField: value2,
		displayOptions,
		layerOptions: {
			fillOpacity: 0.5,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(80,55),
			iconAnchor: new L.Point(-5,55)
		}
	};


// Create a new choropleth layer from the available data using the specified options
	if (value2=="SIR"){

		electoralVotesLayer_sir2 = new L.ChoroplethDataLayer(jsonData, options4);


		electoralVotesLayer_sir2.getLegend();
	}

	if (value2=="Values"){

		electoralVotesLayer_aqd2 = new L.ChoroplethDataLayer(jsonData, options4);


		electoralVotesLayer_aqd2.getLegend();
	}

	if (value2=="popvalue"){

		electoralVotesLayer_popvalue2 = new L.ChoroplethDataLayer(jsonData, options4);


		electoralVotesLayer_popvalue2.getLegend();
	}


	if (value2=="GKZ"){

		electoralVotesLayer2 = new L.ChoroplethDataLayer(jsonData, options4);


		electoralVotesLayer2.getLegend();
	}



	if (map2.hasLayer(electoralVotesLayer_sir2)){

		map2.removeLayer(electoralVotesLayer_sir2);

	}


	if (map2.hasLayer(electoralVotesLayer_popvalue2)){

		map2.removeLayer(electoralVotesLayer_popvalue2);
	}

	if (map2.hasLayer(electoralVotesLayer_aqd2)){

		map2.removeLayer(electoralVotesLayer_aqd2);
	}


	if (map2.hasLayer(electoralVotesLayer2)){

		legendControl2.getContainer().innerHTML="";
		$('#legendControl2').empty();

	}



	if (value2=="GKZ"){

		legendControl2 = new L.Control.Legend();


		legendControl2.addTo(map2);

	}

	if (value2=="SIR"){
		legendControl_sir2 = new L.Control.Legend();
		legendControl_sir2.addTo(map2);
	}

	if (value2=="AQD"){
		legendControl_aqd2 = new L.Control.Legend();
		legendControl_aqd2.addTo(map2);
	}


	if (value2=="popvalue"){
		legendControl_popvalue2 = new L.Control.Legend();
		legendControl_popvalue2.addTo(map2);
	}

	if (value2=="GKZ"){
		map2.addLayer(electoralVotesLayer2);
	}

	if (value2=="SIR"){
		map2.addLayer(electoralVotesLayer_sir2);
		if (map2.hasLayer(electoralVotesLayer_aqd2)){

			map2.removeLayer(electoralVotesLayer_aqd2);
		}
		if (map2.hasLayer(electoralVotesLayer2)){

			map2.removeLayer(electoralVotesLayer2);


		}
	}



	if (value2=="popvalue"){
		if (map2.hasLayer(electoralVotesLayer_popvalue2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer_popvalue2);
		}
		map2.addLayer(electoralVotesLayer_popvalue2);
		if (map2.hasLayer(electoralVotesLayer2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer2);
		}
		if (map2.hasLayer(electoralVotesLayer_aqd2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer_aqd2);
		}
	}





	if (value2=="Values"){
		if (map2.hasLayer(electoralVotesLayer_aqd2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer_aqd2);
		}

		if (map2.hasLayer(electoralVotesLayer_popvalue2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer_popvalue2);
		}
		map2.addLayer(electoralVotesLayer_aqd2);
		if (map2.hasLayer(electoralVotesLayer2)){
		//alert("test");
			map2.removeLayer(electoralVotesLayer2);
		}
	}


	currentmap="";

}



// Quick and Dirty solution--> better put dvf3 in dvf2 and control a new layer2 with if cause!

function dvf3(json,value1,value2,currentmap)
// json is the array
// value1 and value2 describes the path of the array
{


	if (map2.hasLayer(electoralVotesLayer2)){
		map2.removeLayer(electoralVotesLayer2);
	}
// Check max
	for (var i=0 ; i< json.features.length ; i++) {
			if (i==0){
				var max =json.features[0][value1][value2];
			}
			else{
				if (json.features[i][value1][value2] > max){
					max =json.features[i][value1][value2];
				
				}
			
			}
			
	}
			
	for (var i=0 ; i< json.features.length ; i++) {
			if (i==0){
				var min =json.features[0][value1][value2];
			}
			else{
				if (json.features[i][value1][value2] < min){
					min =json.features[i][value1][value2];
				
				}
			
			}
			
	}
   


//Setup mapping between number of electoral votes and color/fillColor.   In this case, we're going to vary color from green (hue of 120) to red (hue of 0) with a darker border (lightness of 25%) and lighter fill (lightness of 50%)

	dvf_display(json,value1,value2,max,min);




	var jsonData = json;
	var options2 = {
		recordsLayer: 'features',
		//recordsField: 'GKZ',
		locationMode: L.LocationModes.GEOJSON,
		codeField: value2,
		locationTextField: value2,
		displayOptions,
		layerOptions: {
			fillOpacity: 0.5,
			opacity: 1,
			weight: 1
		},
		tooltipOptions: {
			iconSize: new L.Point(80,55),
			iconAnchor: new L.Point(-5,55)
		},
		legendOptions: {
					numSegments: 11, 
					gradient: false // Use this option to specify whether or not a gradient will be used when displaying the legend
		}
	};

// Create a new choropleth layer from the available data using the specified options
	electoralVotesLayer2 = new L.ChoroplethDataLayer(jsonData, options2);



	legendControl2 = new L.Control.Legend();
	
	legendControl2.addTo(map2);

	map2.addLayer(electoralVotesLayer2);



	$('#legend2').empty();
	$('#legend2').append(electoralVotesLayer2.getLegend({
				numSegments: 20,
				width: 80,
				className: 'well'
			}));






	currentmap="";

}

////////////////////////////////////////////////////////////////////////////////////////////////////////


function validate_pop(currentmap,mapname){
	var remember = document.getElementById('Population_check');
	var remember_map2 = document.getElementById('Population_check_map2');


	    if (typeof $("input[name='obsType3']:checked").val() != 'undefined'){
			
			if ($('#list_popageclass').val() != "") {
					
				if ($('#list_popyear').val() != "") {
					
					if (mapname=='map'){
						if (remember.checked){
					
							if (map.hasLayer(electoralVotesLayer_popvalue)){
							    
								map.removeLayer(electoralVotesLayer_popvalue);
								
							}
					
					
						population(map,mapname);
						
							if (map.hasLayer(electoralVotesLayer_sir)){
							    
								map.removeLayer(electoralVotesLayer_sir);
								
							}
					
								
								
							if (map.hasLayer(electoralVotesLayer)){
							  
								map.removeLayer(electoralVotesLayer);
								
							}
						
						
						
						
						
					
					}else{
							if (map.hasLayer(electoralVotesLayer_sir)){
							  
								map.removeLayer(electoralVotesLayer_sir);
								
							}
								
							if (map.hasLayer(electoralVotesLayer_popvalue)){
							  
								map.removeLayer(electoralVotesLayer_popvalue);
								
							}
					
							map.addLayer(electoralVotesLayer);	
					
						}
					}
					
					if (mapname=='map2'){
						if (remember_map2.checked){
					
							if (map2.hasLayer(electoralVotesLayer_popvalue2)){
							   
								map2.removeLayer(electoralVotesLayer_popvalue2);
								
							}
					
					
							population(map2,mapname);
						
							if (map2.hasLayer(electoralVotesLayer_sir2)){
							    
								map2.removeLayer(electoralVotesLayer_sir2);
								
							}
					
								
								
							if (map2.hasLayer(electoralVotesLayer2)){
							 
								map2.removeLayer(electoralVotesLayer2);
								
							}
						
						}else{
							if (map2.hasLayer(electoralVotesLayer_sir2)){
							   
								map2.removeLayer(electoralVotesLayer_sir2);
								
							}
					
							if (map2.hasLayer(electoralVotesLayer_popvalue2)){
							
								map2.removeLayer(electoralVotesLayer_popvalue2);
								
							}		
								
							if (map2.hasLayer(electoralVotesLayer2)){
							  
								map2.removeLayer(electoralVotesLayer2);
								
							}
							
							
							map2.addLayer(electoralVotesLayer2);
							
						}	
					}
				
				}
			}
		}else{
			alert ("Please select gender, age-class and a year");
								
		} 
}




function validate_aqd(mapname){
	var remember = document.getElementById('AQD_check');
	var remember_map2 = document.getElementById('AQD_check_map2');


	   
			
			if ($('#list_branch').val() != "") {
				
				if ($('#list_substance').val() != "") {
					
					if (mapname=='map'){
						if (remember.checked){
					
							if (map.hasLayer(electoralVotesLayer_aqd)){
							   
								map.removeLayer(electoralVotesLayer_aqd);
								
							}
					
					
							explorer_airquality(mapname);
						
							if (map.hasLayer(electoralVotesLayer_sir)){
							   
								map.removeLayer(electoralVotesLayer_sir);
								
							}
					
								
								
							if (map.hasLayer(electoralVotesLayer)){
							   
								map.removeLayer(electoralVotesLayer);
								
							}
							
							if (map.hasLayer(electoralVotesLayer_popvalue)){
							
								map.removeLayer(electoralVotesLayer_popvalue);
								
							}
						
						
						
						
						
						
						
						}else{
								if (map.hasLayer(electoralVotesLayer_sir)){
								   
									map.removeLayer(electoralVotesLayer_sir);
									
								}
									
								if (map.hasLayer(electoralVotesLayer_popvalue)){
								  
									map.removeLayer(electoralVotesLayer_popvalue);
									
								}
									
								if (map.hasLayer(electoralVotesLayer_aqd)){
								   
									map.removeLayer(electoralVotesLayer_aqd);
									
								}
						
									map.addLayer(electoralVotesLayer);	
					
						}
					}
					if (mapname=='map2'){
						if (remember_map2.checked){
					
							if (map2.hasLayer(electoralVotesLayer_aqd2)){
							   
								map2.removeLayer(electoralVotesLayer_aqd2);
								
							}
					
					
						explorer_airquality(mapname);;
							
						if (map2.hasLayer(electoralVotesLayer_sir2)){
							   
							map2.removeLayer(electoralVotesLayer_sir2);
								
						}
								
						if (map2.hasLayer(electoralVotesLayer_popvalue2)){
							   
							map2.removeLayer(electoralVotesLayer_popvalue2);
								
						}
					
								
								
						if (map2.hasLayer(electoralVotesLayer2)){
							 
							map2.removeLayer(electoralVotesLayer2);
								
						}
						
					}else{
						if (map2.hasLayer(electoralVotesLayer_sir2)){
							  
							map2.removeLayer(electoralVotesLayer_sir2);
								
						}
					
						if (map2.hasLayer(electoralVotesLayer_popvalue2)){
							  
							map2.removeLayer(electoralVotesLayer_popvalue2);
								
						}		
								
						if (map2.hasLayer(electoralVotesLayer2)){
							  
							map2.removeLayer(electoralVotesLayer2);
								
						}
							
						if (map2.hasLayer(electoralVotesLayer_aqd2)){

							map2.removeLayer(electoralVotesLayer_aqd2);
						}
							
							
						map2.addLayer(electoralVotesLayer2);
							
							
						}
				
					}
				}
			}else{
				alert ("Please select an emission branch and substance");
			
							
			} 
}





function validate_sir(currentmap,mapname,checkselection){
	if (checkselection=='SIR'){
		var remember = document.getElementById('SIR_check');
		var remember_map2 = document.getElementById('SIR_check_map2');
	}
	if (checkselection=='CI_lower_level'){
		var remember = document.getElementById('CIlower_check');
		var remember_map2 = document.getElementById('CIlower_check_map2');
	}
	if (checkselection=='CI_upper_level'){
		var remember = document.getElementById('CIupper_check');
		var remember_map2 = document.getElementById('CIupper_check_map2');
	}

						if (mapname=='map'){
				
							if (remember.checked){
						
								ini_sir(mapname,checkselection);
								
								check_map_sir++;
						
							
								
								if (map.hasLayer(electoralVotesLayer_sir)){
									  
										map.removeLayer(electoralVotesLayer_sir);
										check_1=0;
								}
							
										
										
								if (map.hasLayer(electoralVotesLayer)){
									  
										map.removeLayer(electoralVotesLayer);
										check_map_sir=0;
								}
									
								
								
								
								
								}else{
								
									
									map.addLayer(electoralVotesLayer);
									
									
									if (map.hasLayer(electoralVotesLayer_sir)){
									   
										map.removeLayer(electoralVotesLayer_sir);
									}
									
								}
							}	
							
							if (mapname=='map2'){
						
								if (remember_map2.checked){
							
									ini_sir(mapname,checkselection);
							
								
								
								if (map2.hasLayer(electoralVotesLayer_sir)){
									  
										map2.removeLayer(electoralVotesLayer_sir);
								}
										
								
										
								if (map2.hasLayer(electoralVotesLayer_sir2)){
									
									map2.removeLayer(electoralVotesLayer_sir2);
								}
										
										
								
									
								if (map2.hasLayer(electoralVotesLayer2)){
									  
									map2.removeLayer(electoralVotesLayer2);
									check_map_sir=0;
								}		
						
								
								
								
							}else{
								
									map2.addLayer(electoralVotesLayer2);
									if (map2.hasLayer(electoralVotesLayer_sir2)){
									
										map2.removeLayer(electoralVotesLayer_sir2);
								
									}
								
													
									
								}
						
						
						}
						
						

}








