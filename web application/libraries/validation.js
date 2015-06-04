
//************************************************************************ regarding SIR/CI Visualization input
// function to check if there is an input at the SIR/CI Panel
function sir_input_check() {

	var sir_message_cancer="";
	var sir_message_year="";
	var sir_message_gender="";
	var test_variable=0;


	if ($('input[name="obsType"]:checked').length == 0){
		sir_message_cancer="A cancer type"
		test_variable=1;
	}

	if ($('input[name="obsType1"]:checked').length == 0) {
		sir_message_year="A year"
		test_variable=1;
	}

	if ($('input[name="obsType2"]:checked').length == 0) {
		sir_message_gender="A gender"
		test_variable=1;
	}
	//Feedbackmassage
	if (test_variable==1){
		alert(" Please choose:\n"+sir_message_cancer+"\n"+sir_message_year+"\n"+sir_message_gender);
		return false
	}else{
		return true}
	
	test_variable=0;
}

// function to empty the radio buttons

function sir_clear() {

	$('input[name=obsType]').removeAttr('checked');
	$('input[name=obsType1]').removeAttr('checked');
	$('input[name=obsType2]').removeAttr('checked');
}

// Carcinogen information input check
function inci_input_check() {
	if ($('input[name="obsType3"]:checked').length == 0){
		alert(" Please choose a cancer type");
		return false
	}else{
	return true
	}
}

// GKZ municipality view
function get_overview_WL() {

	if (map.hasLayer(electoralVotesLayer)){
		map.removeLayer(electoralVotesLayer);
	}

	if (map.hasLayer(electoralVotesLayer2)){
		map.removeLayer(electoralVotesLayer2);
	}
	
	if (map2.hasLayer(soildata_marker)){
		map2.removeLayer(soildata_marker);
	}
	
	if (map.hasLayer(soildata_marker)){
		map.removeLayer(soildata_marker);
	}
	
	
	
	
	
	 clear_accident_locations();
	 clear_emitter_locations();
	
	dvf2(WLBoundaries,"properties","GKZ",map,"map");

}


// Exit the explorer view
function explorer_exit(){

	if (document.getElementById("control").hidden == false){
		document.getElementById("control").hidden = true;
		document.getElementById("map2").hidden = true;
		div2.innerHTML ="";

		document.getElementById("map").style.height = "80% ";
		document.getElementById("map").style.width = "97%";
		//show check buttons for map2 in the menues

		document.getElementById("population_map2").hidden = true;

		document.getElementById("SIR_check_map2_div2").hidden = true;
		document.getElementById("CIupper_check_map2_div").hidden = true;
		document.getElementById("CIlower_check_map2_div").hidden = true;
		document.getElementById("AQD_check_map2_div2").hidden = true;

		map.setView([51.95442, 7.62709],7);
		map.invalidateSize();
	}
}