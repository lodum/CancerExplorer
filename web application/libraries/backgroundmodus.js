
function background_modus (){


	var ids = $('.sidebar').map(function(index) {
    // this callback function will be called once for each matching element
		return this.name; 
	});
	for( var i = 0, l = ids.length; i < l; i++ ) {
	
	  ids[i].hide();
	  

	}
	Datachoice_Panel.hide();
	causeeffect_sidebar.toggle();

	$("#causeeffect_sidebar").load("background_spatial.html");
 
}