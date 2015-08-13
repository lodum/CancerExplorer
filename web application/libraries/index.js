


var WLBoundaries2;
var causeeffectbutton;
var emitterdata_municipality;

// SIR/CI Selection: Only one checkbox is selected
$('input.chechbox_map1').on('change', function() {
$('input.chechbox_map1').not(this).prop('checked', false);
//$(this).prop("checked", true);  //check the clicked one  
});

$('input.chechbox_map2').on('change', function() {
$('input.chechbox_map2').not(this).prop('checked', false);
$(this).attr("checked", true);  //check the clicked one  
});







// Uncheck all radio and checkbox buttons
function UncheckAll(){ 
      var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
          w[i].checked = false; 
        }
		if(w[i].type=='radio'){ 
          w[i].checked = false; 
        }
      }
  } 
UncheckAll();  


// Control the data selection
$('#datachoice_sidebar_list').change(function(){ 
    if($(this).val() == "SIR"){
      Query();
    }
    if($(this).val() == "Population"){
      OverlayData_Panel.toggle();
    }
	if($(this).val() == "Causeeffect"){
      background_modus();
    }
	

});

$('#datachoice_sidebar_list_env').change(function(){ 
    if($(this).val() == "Emitter"){
       Emitter_municipalityPanel.show();
	  //ini_emitter();
    }
	if($(this).val() == "Accident"){
	Datachoice_Panel.hide();
      ini_accident();
    }
	if($(this).val() == "Airquality"){
      explorer_sidebar();
	  
    }
	if($(this).val() == "Soildata"){
	Datachoice_Panel.hide();
    SoildataPanel_entry.show();
	explorer_modus();
	 
    }
	

});


$('#datachoice_sidebar_list_linked').change(function(){ 
    if($(this).val() == "Linkedinformation"){
      ini_linkedinfo($(this).val());
	  ini_linkedinfo2($(this).val());
	  sort_list("rdfsseeAlso_list");
    }
	 
   
	

});





	// Example Dataset
	var GKZ=["5554004","5554008","5554012","5512000","5513000","5554016","5554020","5554024","5554032","5515000"];
	var municipalities = ["Ahaus","Bocholt","Borken","Bottrop","Gelsenkirchen","Gescher","Gronau","Heek","Isselburg","Münster"];
	var GKZ_all=["5111000","5112000","5113000","5114000","5116000","5117000","5119000","5120000","5122000","5124000","5154004","5154008","5154012","5154016","5154020","5154024","5154028","5154032","5154036","5154040","5154044","5154048","5154052","5154056","5154060","5154064","5158004","5158008","5158012","5158016","5158020","5158024","5158026","5158028","5158032","5158036","5162004","5162008","5162012","5162016","5162020","5162022","5162024","5162028","5166004","5166008","5166012","5166016","5166020","5166024","5166028","5166032","5166036","5170004","5170008","5170012","5170016","5170020","5170024","5170028","5170032","5170036","5170040","5170044","5170048","5170052","5314000","5315000","5316000","5334002","5334004","5334008","5334012","5334016","5334020","5334024","5334028","5334032","5334036","5358004","5358008","5358012","5358016","5358020","5358024","5358028","5358032","5358036","5358040","5358044","5358048","5358052","5358056","5358060","5362004","5362008","5362012","5362016","5362020","5362024","5362028","5362032","5362036","5362040","5366004","5366008","5366012","5366016","5366020","5366024","5366028","5366032","5366036","5366040","5366044","5370004","5370008","5370012","5370016","5370020","5370024","5370028","5370032","5370036","5370040","5374004","5374008","5374012","5374016","5374020","5374024","5374028","5374032","5374036","5374040","5374044","5374048","5374052","5378004","5378008","5378012","5378016","5378020","5378024","5378028","5378032","5382004","5382008","5382012","5382016","5382020","5382024","5382028","5382032","5382036","5382040","5382044","5382048","5382052","5382056","5382060","5382064","5382068","5382072","5382076","5512000","5513000","5515000","5554004","5554008","5554012","5554016","5554020","5554024","5554028","5554032","5554036","5554040","5554044","5554048","5554052","5554056","5554060","5554064","5554068","5558004","5558008","5558012","5558016","5558020","5558024","5558028","5558032","5558036","5558040","5558044","5562004","5562008","5562012","5562014","5562016","5562020","5562024","5562028","5562032","5562036","5566004","5566008","5566012","5566016","5566020","5566024","5566028","5566032","5566036","5566040","5566044","5566048","5566052","5566056","5566060","5566064","5566068","5566072","5566076","5566080","5566084","5566088","5566092","5566096","5570004","5570008","5570012","5570016","5570020","5570024","5570028","5570032","5570036","5570040","5570044","5570048","5570052","5711000","5754004","5754008","5754012","5754016","5754020","5754024","5754028","5754032","5754036","5754040","5754044","5754048","5754052","5758004","5758008","5758012","5758016","5758020","5758024","5758028","5758032","5758036","5762004","5762008","5762012","5762016","5762020","5762024","5762028","5762032","5762036","5762040","5766004","5766008","5766012","5766016","5766020","5766024","5766028","5766032","5766036","5766040","5766044","5766048","5766052","5766056","5766060","5766064","5770004","5770008","5770012","5770016","5770020","5770024","5770028","5770032","5770036","5770040","5770044","5774004","5774008","5774012","5774016","5774020","5774024","5774028","5774032","5774036","5774040","5911000","5913000","5914000","5915000","5916000","5954004","5954008","5954012","5954016","5954020","5954024","5954028","5954032","5954036","5958004","5958008","5958012","5958016","5958020","5958024","5958028","5958032","5958036","5958040","5958044","5958048","5962004","5962008","5962012","5962016","5962020","5962024","5962028","5962032","5962036","5962040","5962044","5962048","5962052","5962056","5962060","5966004","5966008","5966012","5966016","5966020","5966024","5966028","5970004","5970008","5970012","5970016","5970020","5970024","5970028","5970032","5970036","5970040","5970044","5974004","5974008","5974012","5974016","5974020","5974024","5974028","5974032","5974036","5974040","5974044","5974048","5974052","5974056","5978004","5978008","5978012","5978016","5978020","5978024","5978028","5978032","5978036","5978040"];
	var municipalities_all= ["Düsseldorf","Duisburg","Essen","Krefeld","Mönchengladbach","Mülheim","Oberhausen","Remscheid","Solingen","Wuppertal","Bedburg-Hau","Emmerich","Geldern","Goch","Issum","Kalkar","Kerken","Kevelaer","Kleve","Kranenburg","Rees","Rheurdt","Straelen","Uedem","Wachtendonk","Weeze","Erkrath","Haan","Heiligenhaus","Hilden","Langenfeld","Mettmann","Monheim","Ratingen","Velbert","Wülfrath","Dormagen","Grevenbroich","Jüchen","Kaarst","Korschenbroich","Meerbusch","Neuss","Rommerskirchen","Brüggen","Grefrath","Kempen","Nettetal","Niederkrüchten","Schwalmtal","Tönisvorst","Viersen","Willich","Alpen","Dinslaken","Hamminkeln","Hünxe","Kamp-Lintfort","Moers","Neukirchen-Vluyn","Rheinberg","Schermbeck","Sonsbeck","Voerde","Wesel","Xanten","Bonn","Köln","Leverkusen","Aachen","Alsdorf","Baesweiler","Eschweiler","Herzogenrath","Monschau","Roetgen","Simmerath","Stolberg","Würselen","Aldenhoven","Düren","Heimbach","Hürtgenwald","Inden","Jülich","Kreuzau","Langerwehe","Linnich","Merzenich","Nideggen","Niederzier","Nörvenich","Titz","Vettweiß","Bedburg","Bergheim","Brühl","Elsdorf","Erftstadt","Frechen","Hürth","Kerpen","Pulheim","Wesseling","Bad Münstereifel","Blankenheim","Dahlem","Euskirchen","Hellenthal","Kall","Mechernich","Nettersheim","Schleiden","Weilerswist","Zülpich","Erkelenz","Gangelt","Geilenkirchen","Heinsberg","Hückelhoven","Selfkant","Übach-Palenberg","Waldfeucht","Wassenberg","Wegberg","Bergneustadt","Engelskirchen","Gummersbach","Hückeswagen","Lindlar","Marienheide","Morsbach","Nümbrecht","Radevormwald","Reichshof","Waldbröl","Wiehl","Wipperfürth","Bergisch Gladbach","Burscheid","Kürten","Leichlingen","Odenthal","Overath","Rösrath","Wermelskirchen","Alfter","Bad Honnef","Bornheim","Eitorf","Hennef","Königswinter","Lohmar","Meckenheim","Much","Neunkirchen-Seelscheid","Niederkassel","Rheinbach","Ruppichteroth","Sankt Augustin","Siegburg","Swisttal","Troisdorf","Wachtberg","Windeck","Bottrop","Gelsenkirchen","Münster","Ahaus","Bocholt","Borken","Gescher","Gronau","Heek","Heiden","Isselburg","Legden","Raesfeld","Reken","Rhede","Schöppingen","Stadtlohn","Südlohn","Velen","Vreden","Ascheberg","Billerbeck","Coesfeld","Dülmen","Havixbeck","Lüdinghausen","Nordkirchen","Nottuln","Olfen","Rosendahl","Senden","Castrop-Rauxel","Datteln","Dorsten","Gladbeck","Haltern","Herten","Marl","Oer-Erkenschwick","Recklinghausen","Waltrop","Altenberge","Emsdetten","Greven","Hörstel","Hopsten","Horstmar","Ibbenbüren","Ladbergen","Laer","Lengerich","Lienen","Lotte","Metelen","Mettingen","Neuenkirchen","Nordwalde","Ochtrup","Recke","Rheine","Saerbeck","Steinfurt","Tecklenburg","Westerkappeln","Wettringen","Ahlen","Beckum","Beelen","Drensteinfurt","Ennigerloh","Everswinkel","Oelde","Ostbevern","Sassenberg","Sendenhorst","Telgte","Wadersloh","Warendorf","Bielefeld","Borgholzhausen","Gütersloh","Halle","Harsewinkel","Herzebrock-Clarholz","Langenberg","Rheda-Wiedenbrück","Rietberg","Schloß Holte-Stukenbrock","Steinhagen","Verl","Versmold","Werther","Bünde","Enger","Herford","Hiddenhausen","Kirchlengern","Löhne","Rödinghausen","Spenge","Vlotho","Bad Driburg","Beverungen","Borgentreich","Brakel","Höxter","Marienmünster","Nieheim","Steinheim","Warburg","Willebadessen","Augustdorf","Bad Salzuflen","Barntrup","Blomberg","Detmold","Dörentrup","Extertal","Horn-Bad Meinberg","Kalletal","Lage","Lemgo","Leopoldshöhe","Lügde","Oerlinghausen","Schieder-Schwalenberg","Schlangen","Bad Oeynhausen","Espelkamp","Hille","Hüllhorst","Lübbecke","Minden","Petershagen","Porta Westfalica","Preußisch Oldendorf","Rahden","Stemwede","Altenbeken","Bad Lippspringe","Borchen","Büren","Delbrück","Hövelhof","Lichtenau","Paderborn","Salzkotten","Wünnenberg","Bochum","Dortmund","Hagen","Hamm","Herne","Breckerfeld","Ennepetal","Gevelsberg","Hattingen","Herdecke","Schwelm","Sprockhövel","Wetter","Witten","Arnsberg","Bestwig","Brilon","Eslohe","Hallenberg","Marsberg","Medebach","Meschede","Olsberg","Schmallenberg","Sundern","Winterberg","Altena","Balve","Halver","Hemer","Herscheid","Iserlohn","Kierspe","Lüdenscheid","Meinerzhagen","Menden","Nachrodt-Wiblingwerde","Neuenrade","Plettenberg","Schalksmühle","Werdohl","Attendorn","Drolshagen","Finnentrop","Kirchhundem","Lennestadt","Olpe","Wenden","Bad Berleburg","Burbach","Erndtebrück","Freudenberg","Hilchenbach","Kreuztal","Bad Laasphe","Netphen","Neunkirchen","Siegen","Wilnsdorf","Anröchte","Bad Sassendorf","Ense","Erwitte","Geseke","Lippetal","Lippstadt","Möhnesee","Rüthen","Soest","Warstein","Welver","Werl","Wickede","Bergkamen","Bönen","Fröndenberg","Holzwickede","Kamen","Lünen","Schwerte","Selm","Unna","Werne"];     
	



	
	var soildata_municipality
	
	
	
	function visualize_soildatamarker2 () {
	
	
	explorer_modus ();
	
		soildata_municipality=document.getElementById('list_soildata2').value;
		
		for(var i = 0; i < municipalities.length; i++) {
			if(municipalities[i]==soildata_municipality){
				soildata_municipality=GKZ[i];
			
			}
		}
		ini_soildata();
		
	}
	
	
	
	function visualize_emitterdatamarker2 () {
	
	
	
	
		emitterdata_municipality=document.getElementById('list_emitterdata2').value;
		
		for(var i = 0; i < municipalities_all.length; i++) {
			if(municipalities_all[i]==emitterdata_municipality){
				emitterdata_municipality=GKZ_all[i];
			
			}
		}
		ini_emitter();
		
		Emitter_municipalityPanel.hide();
		
	}
	
	
	
	function visualize_soildatamarker () {
	
	Datachoice_Panel.hide();
	
	
		soildata_municipality=document.getElementById('list_soildata').value;
		
		for(var i = 0; i < municipalities.length; i++) {
			if(municipalities[i]==soildata_municipality){
				soildata_municipality=GKZ[i];
			
			}
		}
		ini_soildata();
	}
	

	var sel = document.getElementById('list_soildata');
	for(var i = 0; i < municipalities.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = municipalities[i];
		opt.value = municipalities[i];
		opt.name=GKZ[i];
		sel.appendChild(opt);
	}
	
	var sel2 = document.getElementById('list_soildata2');
	for(var i = 0; i < municipalities.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = municipalities[i];
		opt.value = municipalities[i];
		opt.name=GKZ[i];
		sel2.appendChild(opt);
	}
	
		var sel3 = document.getElementById('list_emitterdata2');
	for(var i = 0; i < municipalities_all.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = municipalities_all[i];
		opt.value = municipalities_all[i];
		opt.name=GKZ_all[i];
		sel3.appendChild(opt);
	}
	
	
	//document.getElementById("map2").hidden = true;
	var info = L.control();
	var info2 = L.control();
	//variables for multiple query control
	var secondquery=false;
	var querynumber=0;
	var clear_sir=false;
	var legend2
	var check_detail_view
	var layer
	
	//Check the selections, submit parameter to the SPARQL/AJAX function


	var cancer_type_name	
	
	
	
	
	
	
	function ini_sir (mapname,checkselection) {

		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add
		var check_choice=checkselection;
		//alert (check_choice+"ini_sir");
		

		$('#year_list').click(function(){
			//alert($("input[name='obstype1']:checked").val());
		});

		secondquery=true;
		querynumber=querynumber+1;
		$(document).ready(function(){

		
		sir_year=$('input[name="obsType1"]:checked').val();
		sir_gender=$('input[name="obsType2"]:checked').val();
		
		sir_cancer = $("input:radio[name ='obsType']:checked").val()
		if (sir_cancer=="C67"){
			
			cancer_type_name="Bladder Cancer";
			
		}
		if (sir_cancer=="C34"){
			
			cancer_type_name="Lung Cancer";
			
		}
		if (sir_cancer=="C00-C14"){
			
			cancer_type_name="Nasal_cavity_and_paranasal_sinus Cancer";
			
		}
		if (sir_cancer=="C91-C95"){
			
			cancer_type_name="Leukemia";
			
		}
		

		if (sir_input_check()==true){
			visualize_sir (sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name,mapname);
		}
		});

	}

	function ini_cilower () {

		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add
		var check_choice="CI_lower_level";


		$('#year_list').click(function(){
			//alert($("input[name='obstype1']:checked").val());
		});


		$(document).ready(function(){

		sir_cancer = $("input:radio[name ='obsType']:checked").val()
		sir_year=$('input[name="obsType1"]:checked').val();
		sir_gender=$('input[name="obsType2"]:checked').val();
		secondquery=true;
		querynumber=querynumber+1;
		
		if (sir_cancer=="C67"){
			
			cancer_type_name="Bladder Cancer";
			
		}
		if (sir_cancer=="C34"){
			
			cancer_type_name="Lung Cancer";
			
		}
		if (sir_cancer=="C00-C14"){
			
			cancer_type_name="Nasal_cavity_and_paranasal_sinus Cancer";
			
		}
		if (sir_cancer=="C91-C95"){
			
			cancer_type_name="Leukemia";
			
		}
		if (sir_input_check()==true){
			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name,mapname);
		}
		});

	}


	function ini_ciupper () {

		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add

		var check_choice="CI_upper_level";

		$('#year_list').click(function(){
			//alert($("input[name='obstype1']:checked").val());
		});

		$(document).ready(function(){
		secondquery=true;
		querynumber=querynumber+1;
		sir_cancer = $("input:radio[name ='obsType']:checked").val()
		sir_year=$('input[name="obsType1"]:checked').val();
		sir_gender=$('input[name="obsType2"]:checked').val();
		
		
		if (sir_cancer=="C67"){
			
			cancer_type_name="Bladder Cancer";
			
		}
		if (sir_cancer=="C34"){
			
			cancer_type_name="Lung Cancer";
			
		}
		if (sir_cancer=="C00-C14"){
			
			cancer_type_name="Nasal_cavity_and_paranasal_sinus Cancer";
			
		}
		if (sir_cancer=="C91-C95"){
			
			cancer_type_name="Leukemia";
			
		}
		
		
		if (sir_input_check()==true){
			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name);
		}
		});

	}

	function ini_carcinogen () {

		var sir_cancer
		var sir_year
		var sir_gender
		var check_choice="Carcinogen";

		$('#year_list').click(function(){
			//alert($("input[name='obstype1']:checked").val());
		});

		$(document).ready(function(){

		sir_cancer = $("input:radio[name ='obsType3']:checked").val()
		if (sir_cancer=="C67"){
			sir_cancer="Bladder";
			cancer_type_name="Bladder Cancer";
			sir_cancer_add="Cancer";
		}
		if (sir_cancer=="C34"){
			sir_cancer="Lung";
			cancer_type_name="Lung Cancer";
			sir_cancer_add="Cancer";
		}
		if (sir_cancer=="C00-C14"){
			sir_cancer="Nasal_cavity_and_paranasal_sinus";
			cancer_type_name="Nasal_cavity_and_paranasal_sinus Cancer";
			sir_cancer_add="";
		}
		if (sir_cancer=="C91-C95"){
			sir_cancer="Leukemia";
			cancer_type_name="Leukemia";
			sir_cancer_add="";
		}
		sir_year=$('input[name="obsType1"]:checked').val();
		sir_gender=$('input[name="obsType2"]:checked').val();

		if (inci_input_check()==true){
			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name);
		}
		});

	}


	//to represent emitter locations

	function ini_accident () {

		var order2=0;
		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add

		var check_choice="Accident";

		$(document).ready(function(){

			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name);
			order2++;
		});
       if (sir_check=true){
	   
			info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name+'</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();
	   }

	}
	
	
	function ini_emitter (search_substance) {

		var order=0;
		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add
		 
		var check_choice="Emitter";

		
		// remove legend from possible SIR Query
		
		//if (legend_check!=false){
			//map.removeControl(legend2);
			//map.removeLayer(SIRLayer);
			//map.removeLayer(geojson);
			
				
			
			//legend_check=false;
		//}
		
		//alert(sir_cancer+sir_cancer_add+sir_year+sir_gender+check_choice+cancer_type_name+search_substance);
		
		$(document).ready(function(){

			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name,"",search_substance);
			order++;
		});
   /*    if (sir_check=true){
	   
			info.update = function (props) {
					this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
						'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
						: 'Click a marker for more information');
			};	
			info.update();
	   }
	  
	   if(info_check==false){
			info.addTo(map);
			info_check=true;
		}   */
	}


	
	
	function ini_soildata () {

	
		

		
		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add
		var cancer_type_name
		var check_choice="Soildata";

		$(document).ready(function(){

			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name);
			
		});
      
	}



	//Functions for map display

	function getColor(d) {
		return d > 5550000 ? '#800026' :
			   d > 5555000 ? '#BD0026' :
			   d > 5560000 ? '#E31A1C' :
			   d > 5556500 ? '#FC4E2A' :
			   d > 5570000 ? '#FD8D3C' :
			   d > 5575000 ? '#FEB24C' :
			   d > 5580000 ? '#FED976' :
							 '#FFEDA0';
	}

	function style(feature) {
		return {
			fillColor: getColor(feature.properties.GKZ),
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};
	}
	
	
	function style3(feature) {
	

			return {
			fillColor: getColor(feature.properties.GKZ),
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
			
			
		};
		//}
	}



	//create map
	var map = new L.Map('map', {
				//crs: L.CRS.EPSG3857,
				center: [51.95442, 7.62709],
				zoom: 7,
				zoomcontrol:true
				});
	
	var map2 = new L.Map('map2', {
				//crs: L.CRS.EPSG3857,
				center: [51.95442, 7.62709],
				zoom: 7,
				zoomcontrol:true
				});
				
			
				
	// Loading status
	  var loadingControl = L.Control.loading({
		separate: true
		});
	map.addControl(loadingControl);
	map2.addControl(loadingControl);
				
	// Add our zoom control manually where we want to

	var zoomControl = L.control.zoom({
		position: 'topright'
		});
	map.addControl(zoomControl);
	map2.addControl(zoomControl);
	
	
				

	// sidebars
	
	var Links = L.control.sidebar('Links', {
		position: 'right'
	});

	var Linkedinformation_Panel = L.control.sidebar('linkedinformation_sidebar', {
		position: 'right'
	});
	
	var OverlayData_Panel = L.control.sidebar('overlaydata_sidebar', {
		position: 'right'
	});
	
	var Datachoice_Panel = L.control.sidebar('datachoice_sidebar', {
		position: 'right'
	});
	
	
	var SoildataPanel_entry = L.control.sidebar('SoildataPanel_entry', {
		position: 'right'
	});
	var SoildataPanel = L.control.sidebar('SoildataPanel', {
		position: 'right'
	});
	
	var Emitter_municipalityPanel = L.control.sidebar('Emitter_municipalityPanel', {
		position: 'right'
	});
	
	var sir_sidebar = L.control.sidebar('sir_sidebar', {
		position: 'right'
	});
	
	var causeeffect_sidebar = L.control.sidebar('causeeffect_sidebar', {
		position: 'right'
	});

	var emitter_detail = L.control.sidebar('Emitter_detail', {
		position: 'left'
	});
	
		var accident_detail = L.control.sidebar('Accident_detail', {
		position: 'left'
	});


	var SPARQLPanel = L.control.sidebar('SPARQLPanel', {
		position: 'right'
	});
	
	var AQDResultsPanel = L.control.sidebar('aqd_results_sidebar', {
		position: 'right'
	});


	var SPARQLPanel_edit = L.control.sidebar('SPARQLPanel_edit', {
		position: 'right'
	});


	var sidebarLinks = L.control.sidebar('sidebarLinks', {
		position: 'right'
	});
	
	
	
	var sidebarAskData = L.control.sidebar('sidebarAskData', {
		position: 'right'
	});
	

	var Cause_Effect_Panel = L.control.sidebar('Cause_Effect_Panel', {
		position: 'right'
	});
	
	var Explorer_Panel = L.control.sidebar('explorer_sidebar', {
		position: 'right'
	});
	
	

/*		
sir_sidebar.on('hide', function () {
console.log('Sidebar is now hidden.');
map.removeControl(legend2);
//legend.removeFrom(map)
   
});
*/
	// Add sidebar controls to the map

	map.addControl(Linkedinformation_Panel);
	map.addControl(OverlayData_Panel);
	map.addControl(Datachoice_Panel);
	map.addControl(SPARQLPanel);
	map.addControl(SPARQLPanel_edit);
	map.addControl(Cause_Effect_Panel);
	map.addControl(sir_sidebar);
	map.addControl(causeeffect_sidebar);
	map.addControl(sidebarLinks);
	map.addControl(emitter_detail);
	map.addControl(accident_detail);
	map.addControl(Emitter_municipalityPanel);
	map.addControl(Explorer_Panel);
	map.addControl(sidebarAskData);
	
	
	map.addControl(AQDResultsPanel);
	
	map2.addControl(SoildataPanel);
	map.addControl(SoildataPanel_entry);
	map.addControl(Links);

	
	
	
	
	function sortParks(a, b) {
  var _a = a.feature.properties.park;
  var _b = b.feature.properties.park;
  if (_a < _b) {
    return -1;
  }
  if (_a > _b) {
    return 1;
  }
  return 0;
}




new L.Control.GeoSearch({
    provider: new L.GeoSearch.Provider.OpenStreetMap(),
    position: 'topcenter',
    showMarker: true,
    retainZoomLevel: false,
}).addTo(map);
	
	
	
	
	
	
	
	
	
	
	
	// Sidebar control functions
	function Explore_cause_effect()
	{
		Cause_Effect_Panel.show();
		SPARQLPanel.hide();
		sir_sidebar.hide();
		SPARQLPanel_edit.hide();
		clear_emitter_locations();
		clear_accident_locations();
	}
	
	
	function ask_data_panel()
	{
	var ids = $('.sidebar').map(function(index) {
    // this callback function will be called once for each matching element
    return this.name; 
	});
	for( var i = 0, l = ids.length; i < l; i++ ) {

	 
	 //alert (ids[0]);
	
	  ids[i].hide();
	  

	}
	$( document ).ready(function() {
	//$('#sidebarAskData').show();
	//	sidebarAskData.show();
	});
	}


	function Sparql_panel()
	{
		SPARQLPanel.show();
		Cause_Effect_Panel.hide();
		clear_emitter_locations();
		clear_accident_locations();
	}


	function Query()
	{
	Datachoice_Panel.hide();
	     clear_accident_locations();
		clear_emitter_locations();
		var ids = $('.sidebar').map(function(index) {
    // this callback function will be called once for each matching element
    return this.name; 
	});
	for( var i = 0, l = ids.length; i < l; i++ ) {

	 
	
	
	  ids[i].hide();
	  }
		sir_sidebar.show();
		Cause_Effect_Panel.hide();
		SPARQLPanel.hide();
		SPARQLPanel_edit.hide();
	}

	function Sparql_panel_edit()
	{
		sir_sidebar.hide();
		Cause_Effect_Panel.hide();
		SPARQLPanel.hide();
		SPARQLPanel_edit.show();
		clear_emitter_locations();
		clear_accident_locations();
	}
	
	
	function explorer_sidebar()
	{
		
		Explorer_Panel.show();
		Datachoice_Panel.hide();
		if (typeof(soildata_marker)=="undefined"){
	}else{
	map.removeLayer(soildata_marker);
	}
	}
	
	
function visualize_emitter (results,search_substance){

	//map.removeLayer(SIRLayer);
	var markers = [];
	var marker;
	
	
	// quick version-better style to do this with a loop
	for(var i=0;i<results.results.bindings.length;i++){
emitter_N2O=results.results.bindings[i].N2O.value;
emitter_Lat=results.results.bindings[i].LAT.value;


	emitter_name=results.results.bindings[i].Emitter.value;
	//actually not necessary, Name is an extra property
		var emitter_name2=emitter_name.substring(23);
		emitter_name2=emitter_name2.toUpperCase();


			
			emitter_emission=results.results.bindings[i].EmissionProcess.value; 

			emitter_name3=results.results.bindings[i].Name.value; 

		
		
			
		
		
			emitter_CO2=results.results.bindings[i].CO2.value;
			
	
			emitter_CH4=results.results.bindings[i].CH4.value;	
			emitter_NH3=results.results.bindings[i].NH3.value;
			emitter_HCL=results.results.bindings[i].HCL.value;
			emitter_HF=results.results.bindings[i].HF.value;
			emitter_CO=results.results.bindings[i].CO.value;
			emitter_NMVOC=results.results.bindings[i].NMVOC.value;
			emitter_SO2=results.results.bindings[i].SO2.value;
			emitter_NO2=results.results.bindings[i].NO2.value;
			emitter_As=results.results.bindings[i].As.value;
			emitter_Pb=results.results.bindings[i].Pb.value;
			emitter_Cr=results.results.bindings[i].Cr.value;
			emitter_Cu=results.results.bindings[i].Cu.value;
			emitter_Cd=results.results.bindings[i].Cd.value;
			emitter_Ni=results.results.bindings[i].Ni.value;
			emitter_V=results.results.bindings[i].V.value;
			emitter_Zn=results.results.bindings[i].Zn.value;
			emitter_DUF=results.results.bindings[i].DUF.value;
			emitter_BAP=results.results.bindings[i].BAP.value;
			emitter_BENZ=results.results.bindings[i].BENZ.value;
			emitter_PAK=results.results.bindings[i].PAK.value;
			emitter_PM10=results.results.bindings[i].PM10.value;
			emitter_Staub=results.results.bindings[i].Staub.value;
			emitter_RUSS=results.results.bindings[i].RUSS.value;	
			emitter_Street=results.results.bindings[i].Street.value;		
			emitter_ZipCodeCity=results.results.bindings[i].Zip.value;

		var search_value="search";
		if (search_substance=="emitter_As"){
		search_value=emitter_As;
		}
		if (search_substance=="emitter_Ni"){
		search_value=emitter_Ni;
		}

		if (search_value!= 0){
		if (search_value!= "-"){
		if (search_value!= ""){



/*
	if(results.results.bindings[i].Attribute.value=="http://www.example.org/def/Lat"){
		emitter_name=results.results.bindings[i].Emitter.value;
	//actually not necessary, Name is an extra property
		var emitter_name2=emitter_name.substring(23);
		emitter_name2=emitter_name2.toUpperCase();

	//layergroup delete by closing;map zoom,additional information site
		var emitter_lat=results.results.bindings[i].Value.value;}
	
	//check the propertys to the belonging emitter_name
	for(i2=0;i2<results.results.bindings.length;i2++){
	
		if(results.results.bindings[i2].Emitter.value==emitter_name){
	//console.log(results.results.bindings[i2].Attribute.value);
	
	console.log(typeof results.results.bindings[i2].Attribute.value);
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/EmissionProcess"){
			
			emitter_emission=results.results.bindings[i2].Value.value; }
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Name"){
			emitter_name3=results.results.bindings[i2].Value.value; }
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/N2O"){
		//console.log('yes');
			emitter_N2O=results.results.bindings[i2].Value.value;
			
			
			}
			
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CO2"){
		
			emitter_CO2=results.results.bindings[i2].Value.value;}
			
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CH4"){
			emitter_CH4=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NH3"){
			emitter_NH3=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/HCL"){
			emitter_HCL=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/HF"){
			emitter_HF=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CO"){
			emitter_CO=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NMVOC"){	
			emitter_NMVOC=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/SO2"){
			emitter_SO2=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NO2"){
			emitter_NO2=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/As"){
			emitter_As=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Pb"){
			emitter_Pb=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cr"){
			emitter_Cr=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cu"){
			emitter_Cu=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cd"){
			emitter_Cd=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Ni"){
			emitter_Ni=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/V"){
			emitter_V=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Zn"){
			emitter_Zn=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/DUF"){
			emitter_DUF=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/BAP"){
			emitter_BAP=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/BENZ"){
			emitter_BENZ=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/PAK"){
			emitter_PAK=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/PM10"){
			emitter_PM10=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Staub"){
			emitter_Staub=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/RUSS"){
			emitter_RUSS=results.results.bindings[i2].Value.value;}	
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Street"){
			emitter_Street=results.results.bindings[i2].Value.value;}		
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/ZipCodeCity"){
			emitter_ZipCodeCity=results.results.bindings[i2].Value.value;}
*/



		// Dynamic detail view of the emitters
		//if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Long"){
			var emitter_long=results.results.bindings[i].Long.value;
			var emitter_content;
             emitter_content=emitter_name3+"xxxxx"+emitter_N2O+"xxxxx"+emitter_emission+"xxxxx"+emitter_CO2+"xxxxx"+emitter_CH4+"xxxxx"+emitter_NH3+"xxxxx"+emitter_HCL+"xxxxx"+emitter_HF+"xxxxx"+emitter_CO+"xxxxx"+emitter_NMVOC+"xxxxx"+emitter_SO2+"xxxxx"+emitter_NO2+"xxxxx"+emitter_As+"xxxxx"+emitter_Pb+"xxxxx"+emitter_Cr+"xxxxx"+emitter_Cu+"xxxxx"+emitter_Cd+"xxxxx"+emitter_Ni+"xxxxx"+emitter_V+"xxxxx"+emitter_Zn+"xxxxx"+emitter_DUF+"xxxxx"+emitter_BAP+"xxxxx"+emitter_BENZ+"xxxxx"+emitter_PAK+"xxxxx"+emitter_PM10+"xxxxx"+emitter_Staub+"xxxxx"+emitter_RUSS+"xxxxx"+emitter_Street+"xxxxx"+emitter_ZipCodeCity;
		   // emitter_content=emitter_Lat+"xxxxx"+emitter_N2O;
			console.log(emitter_content);
			emitter_content=emitter_content.replace(/ /g,'_');
			emitter_content=decode_utf8(emitter_content);
			emitter_content=emitter_content.replace(/ø/g,'ß');
			
			emitter_name3=decode_utf8(emitter_name3);
			emitter_emission=decode_utf8(emitter_emission);
			emitter_emission=emitter_emission.replace(/ø/g,'ß');
		    emitter_name = L.marker([parseFloat(emitter_Lat), parseFloat(emitter_long)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'blue'})});
		    emitter_name.bindPopup("<b>"+emitter_name3+"</b><br>Emission Process:</br>"+emitter_emission+'</br><a name='+emitter_content+'   onclick="Emitter_detail_sidebar(name)">See details</a>');
			markersLayer.addLayer(emitter_name);
	}
	}
	}//end of limit value
	}	
	
	////////////////////////////////////////////////////
/*
var emitter_GKZ;
	function visualize_emitter (results,search_substance){

	//map.removeLayer(SIRLayer);
	var markers = [];
	var marker;
	
	
	// quick version-better style to do this with a loop
	for(var i=0;i<results.results.bindings.length;i++){
emitter_N2O=results.results.bindings[i].N2O.value;
emitter_Lat=results.results.bindings[i].LAT.value;


	emitter_name=results.results.bindings[i].Emitter.value;
	//actually not necessary, Name is an extra property
		var emitter_name2=emitter_name.substring(23);
		emitter_name2=emitter_name2.toUpperCase();


			
			emitter_emission=results.results.bindings[i].EmissionProcess.value; 

			emitter_name3=results.results.bindings[i].Name.value; 
			emitter_GKZ=results.results.bindings[i].GKZ.value; 

		
		
			
		
		
			emitter_CO2=results.results.bindings[i].CO2.value;
			
	
			emitter_CH4=results.results.bindings[i].CH4.value;	
			emitter_NH3=results.results.bindings[i].NH3.value;
			emitter_HCL=results.results.bindings[i].HCL.value;
			emitter_HF=results.results.bindings[i].HF.value;
			emitter_CO=results.results.bindings[i].CO.value;
			emitter_NMVOC=results.results.bindings[i].NMVOC.value;
			emitter_SO2=results.results.bindings[i].SO2.value;
			emitter_NO2=results.results.bindings[i].NO2.value;
			emitter_As=results.results.bindings[i].As.value;
			emitter_Pb=results.results.bindings[i].Pb.value;
			emitter_Cr=results.results.bindings[i].Cr.value;
			emitter_Cu=results.results.bindings[i].Cu.value;
			emitter_Cd=results.results.bindings[i].Cd.value;
			emitter_Ni=results.results.bindings[i].Ni.value;
			emitter_V=results.results.bindings[i].V.value;
			emitter_Zn=results.results.bindings[i].Zn.value;
			emitter_DUF=results.results.bindings[i].DUF.value;
			emitter_BAP=results.results.bindings[i].BAP.value;
			emitter_BENZ=results.results.bindings[i].BENZ.value;
			emitter_PAK=results.results.bindings[i].PAK.value;
			emitter_PM10=results.results.bindings[i].PM10.value;
			emitter_Staub=results.results.bindings[i].Staub.value;
			emitter_RUSS=results.results.bindings[i].RUSS.value;	
			emitter_Street=results.results.bindings[i].Street.value;		
			emitter_ZipCodeCity=results.results.bindings[i].Zip.value;

		var search_value="search";
		if (search_substance=="emitter_As"){
		search_value=emitter_As;
		}
		if (search_substance=="emitter_Ni"){
		search_value=emitter_Ni;
		}

		if (search_value!= 0){
		if (search_value!= "-"){
		if (search_value!= ""){



/*
	if(results.results.bindings[i].Attribute.value=="http://www.example.org/def/Lat"){
		emitter_name=results.results.bindings[i].Emitter.value;
	//actually not necessary, Name is an extra property
		var emitter_name2=emitter_name.substring(23);
		emitter_name2=emitter_name2.toUpperCase();

	//layergroup delete by closing;map zoom,additional information site
		var emitter_lat=results.results.bindings[i].Value.value;}
	
	//check the propertys to the belonging emitter_name
	for(i2=0;i2<results.results.bindings.length;i2++){
	
		if(results.results.bindings[i2].Emitter.value==emitter_name){
	//console.log(results.results.bindings[i2].Attribute.value);
	
	console.log(typeof results.results.bindings[i2].Attribute.value);
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/EmissionProcess"){
			
			emitter_emission=results.results.bindings[i2].Value.value; }
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Name"){
			emitter_name3=results.results.bindings[i2].Value.value; }
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/N2O"){
		//console.log('yes');
			emitter_N2O=results.results.bindings[i2].Value.value;
			
			
			}
			
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CO2"){
		
			emitter_CO2=results.results.bindings[i2].Value.value;}
			
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CH4"){
			emitter_CH4=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NH3"){
			emitter_NH3=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/HCL"){
			emitter_HCL=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/HF"){
			emitter_HF=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/CO"){
			emitter_CO=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NMVOC"){	
			emitter_NMVOC=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/SO2"){
			emitter_SO2=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/NO2"){
			emitter_NO2=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/As"){
			emitter_As=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Pb"){
			emitter_Pb=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cr"){
			emitter_Cr=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cu"){
			emitter_Cu=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Cd"){
			emitter_Cd=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Ni"){
			emitter_Ni=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/V"){
			emitter_V=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Zn"){
			emitter_Zn=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/DUF"){
			emitter_DUF=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/BAP"){
			emitter_BAP=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/BENZ"){
			emitter_BENZ=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/PAK"){
			emitter_PAK=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/PM10"){
			emitter_PM10=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Staub"){
			emitter_Staub=results.results.bindings[i2].Value.value;}
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/RUSS"){
			emitter_RUSS=results.results.bindings[i2].Value.value;}	
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Street"){
			emitter_Street=results.results.bindings[i2].Value.value;}		
		if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/ZipCodeCity"){
			emitter_ZipCodeCity=results.results.bindings[i2].Value.value;}


if (emitter_GKZ==emitterdata_municipality){
//alert(emitterdata_municipality);

		// Dynamic detail view of the emitters
		//if(results.results.bindings[i2].Attribute.value=="http://www.example.org/def/Long"){
			var emitter_long=results.results.bindings[i].Long.value;
			var emitter_content;
             emitter_content=emitter_name3+"xxxxx"+emitter_N2O+"xxxxx"+emitter_emission+"xxxxx"+emitter_CO2+"xxxxx"+emitter_CH4+"xxxxx"+emitter_NH3+"xxxxx"+emitter_HCL+"xxxxx"+emitter_HF+"xxxxx"+emitter_CO+"xxxxx"+emitter_NMVOC+"xxxxx"+emitter_SO2+"xxxxx"+emitter_NO2+"xxxxx"+emitter_As+"xxxxx"+emitter_Pb+"xxxxx"+emitter_Cr+"xxxxx"+emitter_Cu+"xxxxx"+emitter_Cd+"xxxxx"+emitter_Ni+"xxxxx"+emitter_V+"xxxxx"+emitter_Zn+"xxxxx"+emitter_DUF+"xxxxx"+emitter_BAP+"xxxxx"+emitter_BENZ+"xxxxx"+emitter_PAK+"xxxxx"+emitter_PM10+"xxxxx"+emitter_Staub+"xxxxx"+emitter_RUSS+"xxxxx"+emitter_Street+"xxxxx"+emitter_ZipCodeCity;
		   // emitter_content=emitter_Lat+"xxxxx"+emitter_N2O;
			console.log(emitter_content);
			emitter_content=emitter_content.replace(/ /g,'_');
			emitter_content=emitter_content;
			emitter_content=emitter_content.replace(/ø/g,'ß');
			
			emitter_name3=emitter_name3;
			emitter_emission=emitter_emission;
			emitter_emission=emitter_emission.replace(/ø/g,'ß');
		    emitter_name = L.marker([parseFloat(emitter_Lat), parseFloat(emitter_long)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'blue'})});
		    emitter_name.bindPopup("<b>"+decode_utf8(emitter_name3)+"</b><br>Emission Process:</br>"+decode_utf8(emitter_emission)+'</br><a name='+decode_utf8(emitter_content)+'   onclick="Emitter_detail_sidebar(name)">See details</a>');
			markersLayer.addLayer(emitter_name);
	
	
	}
	
	}
	}
	}//end of limit value
	}
	
*/	
	// visualize layer containing marker
			
	markersLayer.addTo(map);
/*
	//remove Layers
	map.removeLayer(WL_boundary);
	//map.removeLayer(geojsonadd);
	map.removeLayer(SIRLayer);
		
	map.removeLayer(WL_boundary);
	map.removeLayer(WL_boundary2);
	//map.removeLayer(geojsonadd);
	map.removeLayer(geojson2);
	
		
	//map.removeLayer(geojson);
	// clear Legend
		div2.innerHTML ="";
*/		
		
	// set view to Münster
	map.setView([51.95442, 8.10009], 10);
	
	// to add an info box.
	//	check_detail_view=true;
		
	
	

		
	
}



////////////////////////////////////////////////////////////
	

//emitter_name3,emitter_N2O,emitter_emission,emitter_CO2,emitter_CH4,emitter_NH3,emitter_HCL,emitter_HF,emitter_CO,emitter_NMVOC,emitter_SO2,emitter_NO2,emitter_As,emitter_Pb,emitter_Cr,emitter_Cu,emitter_Cd,emitter_Ni,emitter_V,emitter_Zn,emitter_DUF,emitter_BAP,emitter_BENZ,emitter_PAK,emitter_PM10,emitter_Staub,emitter_RUSS,emitter_Street,emitter_ZipCodeCity
	
	function Emitter_detail_sidebar(name)
	{
	
	 name=name.replace(/_/g, ' ');
	 //name=decode_utf8(name);
	 var array = name.split('xxxxx')
	
		
		document.getElementById("street_emit").innerHTML=array[27];
		document.getElementById("name_emit").innerHTML=array[0];
		document.getElementById("zip_emit").innerHTML=array[28];
		document.getElementById("emissionprocess").innerHTML=array[2];
		document.getElementById("N2O").innerHTML=array[1];
		document.getElementById("CO2").innerHTML=array[3];
		document.getElementById("CH4").innerHTML=array[4];
		document.getElementById("NH3").innerHTML=array[5];
		document.getElementById("HCL").innerHTML=array[6];
		document.getElementById("HF").innerHTML=array[7];
		document.getElementById("CO").innerHTML=array[8];
		document.getElementById("NMVOC").innerHTML=array[9];
		document.getElementById("SO2").innerHTML=array[10];
		document.getElementById("NO2").innerHTML=array[11];
		document.getElementById("As").innerHTML=array[12];
		document.getElementById("Pb").innerHTML=array[13];
		document.getElementById("Cr").innerHTML=array[14];
		document.getElementById("Cu").innerHTML=array[15];
		document.getElementById("Cd").innerHTML=array[16];
		document.getElementById("Ni").innerHTML=array[17];
		document.getElementById("V").innerHTML=array[18];
		document.getElementById("Zn").innerHTML=array[19];
		document.getElementById("DUF").innerHTML=array[20];
		document.getElementById("BAP").innerHTML=array[21];
		document.getElementById("BENZ").innerHTML=array[22];
		document.getElementById("PAK").innerHTML=array[23];
		document.getElementById("PM10").innerHTML=array[24];
		document.getElementById("Staub").innerHTML=array[25];
		document.getElementById("RUSS").innerHTML=array[26];






		emitter_detail.show();
	}
	
	
	
	function Accident_detail_sidebar (name)
	{
	
	 name=name.replace(/_/g, ' ');
	// name=decode_utf8(name);
	 var array = name.split('xxxxx')
	


		
		document.getElementById("street_acc").innerHTML=array[2];
		document.getElementById("name_acc").innerHTML=array[0];
		document.getElementById("zip_acc").innerHTML=array[3];
		document.getElementById("type").innerHTML=array[1];
		document.getElementById("municipality").innerHTML=array[5];
		document.getElementById("faultypart").innerHTML=array[6];
		document.getElementById("operationprocess").innerHTML=array[7];
		document.getElementById("cause").innerHTML=array[8];
		document.getElementById("causestatus").innerHTML=array[9];
		document.getElementById("eps").innerHTML=array[10];
		document.getElementById("sdd").innerHTML=array[11];
		document.getElementById("year").innerHTML=array[12];
		/*
		document.getElementById("accident_substance").innerHTML=array[13];
		document.getElementById("accident_value_kg").innerHTML=array[15];
		document.getElementById("accident_value_text").innerHTML=array[16];
		document.getElementById("accident_value_description").innerHTML=array[17];
		*/

		accident_detail.show();
	}


	//Adding municipality borders

	var WL_boundary= L.tileLayer('http://{s}.tiles.mapbox.com/{id}/{z}/{x}/{y}.png', {
		id: 'WL_boundary',
		attribution: 'GKZ',
		setOpacity:10,	
	})
	
	var WL_boundary2= L.tileLayer('http://{s}.tiles.mapbox.com/{id}/{z}/{x}/{y}.png', {
		id: 'WL_boundary2',
		attribution: 'GKZ',
		setOpacity:10,	
	})
	
	
	WLBoundaries2=WLBoundaries;

	//WL_boundary.addTo(map);
	//WL_boundary2.addTo(map2);

	//var geojsonadd=L.geoJson(WLBoundaries, {style: style}).addTo(map);
	//var geojsonadd2=L.geoJson(WLBoundaries2, {style: style}).addTo(map2);
/*	var geojson;
	geojson = L.geoJson(WLBoundaries, {
				style: style,
				onEachFeature: onEachFeature
			}).addTo(map);*/
			
			dvf2(WLBoundaries,"properties","GKZ",map,"map","","Name");
			
			
/*			var geojson2 = L.geoJson(WLBoundaries2, {
				style: style3,
				onEachFeature: onEachFeature
			}).addTo(map2);*/
			
			dvf3(WLBoundaries2,"properties","GKZ",map2,"map2","Name"); 
			
		
	//Adding map interaction
	// control that shows state info on hover
	//var info = L.control();

		info.onAdd = function (map) {
			while(secondquery==false){
		// while: otherwise producing node error after removing L.control
			
				this._div = L.DomUtil.create('div', 'info');
				this.update();
				return this._div;
			}
			};
		
		info2.onAdd = function (map2) {
			while(secondquery==false){
		//while: otherwise producing node error after removing L.control
			
				this._div2 = L.DomUtil.create('div2', 'info2');
				this.update();
				return this._div2;
			}
			};
	
			if(secondquery==false){
			info.update = function (props) {
				this._div.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
					'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
					: 'Hover over areas');
			};
			
			
			info2.update = function (props) {
				this._div2.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
					'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
					: 'Hover over areas');
					
			};
			
			
}
			//info_check=false;
			if(info_check==false){
			info.addTo(map);
			info2.addTo(map2);
			info_check=true;}

			// get color depending on population density value
			function getColor(d) {
				return d > 5515000 ? '#3B0B0B' :
					   d > 5515000 ? '#3B0B0B' :
					   d > 5515000 ? '#3B0B0B' :
					   d > 5515000 ? '#3B0B0B' :
					   d > 5515000 ? '#3B0B0B' :
					   d > 5514999 ? '#2E64FE' :
					   d > 5564048 ? '#3B0B0B' :
								    '#3B0B0B';
			}
function getColor_air(d) {
					return d > color_air4 ? '#993404' :
						   d > color_air3 ? '#fec44f' :
						   d > color_air2 ? '#ffffff' :						
						   d > color_air1 ? '#ffffd4' :			     
										  '#ffffff';
		}		

			function style(feature) {
				return {
					weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(feature.properties.GKZ)
				};
			}
			/*
var hover_selection
var hover_selection_geometry
			function highlightFeature(e) {
			
				layer = e.target;
			

				layer.setStyle({
					weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7
				});

				if (!L.Browser.ie && !L.Browser.opera) {
					layer.bringToFront();
					
				}
				//*******************************************************************************************************
				hover_selection=layer.feature.properties.Name
				//alert (hover_selection);
				// Check name-->  display selection in parallel window
			
if (map2.hasLayer(geojson_aqd)==false){
if (map2.hasLayer(geojsonadd2)==false){
			geojson2.eachLayer(function (layer) {  
  if(layer.feature.properties.Name == hover_selection) { 
  var old_hover_selection=hover_selection
    layer.setStyle({weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7}) 
					layer.bringToFront();
  }
});
}}
//if (secondquery==false){
geojson.eachLayer(function (layer) {  
  if(layer.feature.properties.Name == hover_selection) { 
  var old_hover_selection=hover_selection
    layer.setStyle({weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7}) 
					layer.bringToFront();
  }
});

if (map2.hasLayer(geojsonadd2)){	
geojsonadd2.eachLayer(function (layer) {  
  if(layer.feature.properties.Name == hover_selection) { 
  var old_hover_selection=hover_selection
    layer.setStyle({weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7}) 
					layer.bringToFront();
				
  }
});				
}



if (map2.hasLayer(AQDLayer)){	
geojson_aqd.eachLayer(function (layer) {  
  if(layer.feature.properties.Name == hover_selection) { 
  var old_hover_selection=hover_selection
    layer.setStyle({weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7}) 
					layer.bringToFront();
				
  }
});				
}

//}


			
				hover_selection_geometry=layer.feature.properties.geometry
				info.update(layer.feature.properties);
				info2.update(layer.feature.properties);
				
			
				
			}

		

			function resetHighlight(e) {
				geojson.resetStyle(e.target);
				geojson2.resetStyle(e.target);
				info.update();
				info2.update();
				
				
				
				
if (map2.hasLayer(geojson2)){
if (map2.hasLayer(geojsonadd2)==false){				
						geojson2.eachLayer(function (layer) {  
  layer.setStyle({weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(layer.feature.properties.GKZ)})
});
}}

if (map2.hasLayer(geojsonadd2)){				
					geojsonadd2.eachLayer(function (layer) {  
   layer.setStyle({weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(layer.feature.properties.GKZ)})
});
}

if (map2.hasLayer(AQDLayer)){				
	geojson_aqd.eachLayer(function (layer) {  
   layer.setStyle({weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor_air(layer.feature.properties.Values)})
});
}



geojson.eachLayer(function (layer) {  
  layer.setStyle({weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(layer.feature.properties.GKZ)})
});
				
				
				
				
				
				
				
			}

			function zoomToFeature(e) {
				map.fitBounds(e.target.getBounds());
				map2.fitBounds(e.target.getBounds());
			}

			function onEachFeature(feature, layer) {
				layer.on({
					mouseover: highlightFeature,
					mouseout: resetHighlight,
					click: zoomToFeature
				});
			}

		
			
			

			map.attributionControl.addAttribution('Text?');
			map2.attributionControl.addAttribution('Text?');


			var legend = L.control({position: 'bottomright'});

			legend.onAdd = function (map) {

				var div = L.DomUtil.create('div', 'info legend'),
					grades = [],  //0, 10, 20, 50, 100, 200, 500, 1000
					labels = [],
					from, to;

				for (var i = 0; i < grades.length; i++) {
					from = grades[i];
					to = grades[i + 1];

					labels.push(
						'<i style="background:' + getColor(from + 1) + '"></i> ' +
						from + (to ? '&ndash;' + to : '+'));
				}

				div.innerHTML = labels.join('<br>');
				return div;
			};

			//legend.addTo(map);                                                                                         */
//////////////////////////////////////////////////////////////////////////////////////////////////////// Test
		function visualize_accident (results){

	map.removeLayer(SIRLayer);
	map.removeLayer(WL_boundary);
	map.removeLayer(WL_boundary2);
/*	
	var legendControl = new L.Control.Legend();
		
		legendControl.addTo(map);*/
	//if (map.hasLayer(geojsonadd))
	//{
	//map.removeLayer(geojsonadd);
	//}
//	map.removeLayer(geojson2);
		
	//map.removeLayer(geojson);
	// clear Legend
		div2.innerHTML ="";
	var markers_accident = [];
	var marker_accident;
	
	
	// quick version-better style to do this with a loop
	for(var i=0;i<results.results.bindings.length;i++){

	
		var accident_name3
		var accident_name2=results.results.bindings[i].incident.value;
		accident_name2=accident_name2.replace("http://www.example.org/","");
		accident_name2=accident_name2.toUpperCase();

	//layergroup delete by closing;map zoom,additional information site
		var accident_lat=results.results.bindings[i].lat.value;
		var accident_long=results.results.bindings[i].long.value;
		var accident_type=results.results.bindings[i].type.value;
		var accident_street=results.results.bindings[i].street.value;
		var accident_zipcode=results.results.bindings[i].zipcode.value;
		var accident_GKZ=results.results.bindings[i].GKZ.value;
		var accident_municipality=results.results.bindings[i].municipality.value;
		var accident_faultypart=results.results.bindings[i].faultypart.value;
		var accident_operationprocess=results.results.bindings[i].operationprocess.value;
		var accident_cause=results.results.bindings[i].cause.value;
		var accident_causestatus=results.results.bindings[i].causestatus.value;
		var accident_eps=results.results.bindings[i].eps.value;
		var accident_sdd=results.results.bindings[i].sdd.value;
		var accident_year=results.results.bindings[i].year.value;

		// Dynamic detail view of the emitters
	
			
			var accident_content;
            accident_content=accident_name2+"xxxxx"+accident_type+"xxxxx"+accident_street+"xxxxx"+accident_zipcode+"xxxxx"+accident_GKZ+"xxxxx"+accident_municipality+"xxxxx"+accident_faultypart+"xxxxx"+accident_operationprocess+"xxxxx"+accident_cause+"xxxxx"+accident_causestatus+"xxxxx"+accident_eps+"xxxxx"+accident_sdd+"xxxxx"+accident_year+"xxxxx"+accident_year;
			//+"xxxxx"+accident_substance+"xxxxx"+accident_incident+"xxxxx"+accident_value_kg+"xxxxx"+accident_value_text+"xxxxx"+accident_value_description
			accident_content=accident_content.replace(/ /g,'_');
			accident_content=accident_content;
			accident_name3 = L.marker([parseFloat(accident_lat), parseFloat(accident_long)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'red'})});
			
			accident_name3.bindPopup("<b>"+accident_name2+"</b><hr><b>Type:</b></br>"+accident_type+"</b><br><b>Cause:</b></br>"+accident_cause+"</b><br><b>Environmental Pollution Status:</b></br>"+accident_eps+'</br><a name='+decode_utf8(accident_content)+'   onclick="Accident_detail_sidebar(name)">See details</a>');
            
			
			markersLayer_accident.addLayer(accident_name3);
	

	 
	}
	
	// visualize layer containing marker
			
			markersLayer_accident.addTo(map);

	//remove Layers
	//map.removeLayer(WL_boundary);
	//map.removeLayer(geojsonadd);
		
	//map.removeLayer(geojson);
	// clear Legend
		div2.innerHTML ="";
		
		
	// set view to Münster
	map.setView([51.95442, 8.10009], 10);

	// to add an info box.
		check_detail_view=true;
		
	}
	
var soildata_X2
var soildata_Y2	
var soildata_marker
var soil_secondquery="false";	
//////////////////////////////////////////////////////////////////////////////////////////////////////// Test
		function visualize_soildata (results){
/*	
	map2.removeLayer(geojson2);
	map2.removeLayer(WL_boundary);
	map2.removeLayer(WL_boundary2);
	map2.removeLayer(geojsonadd2);*/
	
	
	
	
	// clear Legend
		div2.innerHTML ="";
	var markers_soildata =new L.MarkerClusterGroup();
	
	var soildata_substance=new Array();
	
	// quick version-better style to do this with a loop
	for(var i=0;i<results.results.bindings.length;i++){

	
		
		var soildata_X=results.results.bindings[i].X.value;
		
		var soildata_Y=results.results.bindings[i].Y.value;
		var soildata_unit=results.results.bindings[i].unit.value;
		var soildata_id=results.results.bindings[i].ID.value;
		var soildata_coordinates=results.results.bindings[i].Coordinates.value;
		//alert (soildata_coordinates);
		var soildata_sub=results.results.bindings[i].Substance.value;
		var soildata_val=results.results.bindings[i].Value.value;
		//var soildata_municipality=results.results.bindings[i].Value.value;
		
		var soildata_GKZ=results.results.bindings[i].GKZ.value;
		
		
		
		soildata_substance[i]=results.results.bindings[i].Substance.value;
		
		
		


		// Dynamic detail view of the emitters
	if(soildata_municipality==soildata_GKZ){
			//if(i==0){
			var soildata_content
			var soildata_name
			var marker_soildata
           // soildata_content=soildata_unit+"xxxxx"+soildata_typeofuse+"xxxxx"+soildata_substance+"xxxxx"+soildata_value+"xxxxx"+soildata_paramnr+"xxxxx"+soildata_GKZ+"xxxxx"+soildata_municipality+"xxxxx"+soildata_probenr+"xxxxx"+soildata_seqnr+"xxxxx"+soildata_probemethod+"xxxxx"+soildata_typeofsoil+"xxxxx"+soildata_soiltype+"xxxxx"+soildata_locationid;
			//+"xxxxx"+accident_substance+"xxxxx"+accident_incident+"xxxxx"+accident_value_kg+"xxxxx"+accident_value_text+"xxxxx"+accident_value_description
		//	soildata_content=soildata_content.replace(/ /g,'_');
		
			soildata_content=soildata_unit+"xxxxx"+soildata_X+"xxxxx"+soildata_Y+"xxxxx"+soildata_coordinates+"xxxxx"+soildata_id+"xxxxx";
			soildata_content=soildata_content.replace(/ /g,'_');
			
			//alert(soildata_Y);
//alert(soildata_substance);
			marker_soildata=L.marker([parseFloat(soildata_Y), parseFloat(soildata_X)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'red'})});
			
			//var ff= soildata_name.getLatLng();
			var ff=soildata_X+","+soildata_Y+","+soildata_id;
			//here call new function to work
			marker_soildata.bindPopup("Location_ID:<br>"+soildata_id+'<br><a name="'+ff+'"  onclick="soildata_detail_sidebar(name)">See details</a>');
			
			if (soildata_X != soildata_X2){
			 if (soildata_Y != soildata_Y2){
			markers_soildata.addLayer(marker_soildata);
			}}
			//accident_name3.bindPopup("<b>"+accident_name2+"</b><hr><b>Type:<ent_cause+"</b><br><b>Environmental Pollution Status:</b></br>"+accident_eps+'</br><a name='+accident_content+'   onclick="Accident_detail_sidebar(name)">See details</a>');
            //accident_name3.bindPopup("<b>"+accident_name2+"</b><hr><b>Type:</b></br>"+accident_type+"</b><br><b>Cause:</b></br>"+accident_cause+"</b><br><b>Environmental Pollution Status:</b></br>"+accident_eps+'</br><a name='+accident_content+'   onclick="Accident_detail_sidebar(name)">See details</a>');
            
			}
			
			//soildata_name.bindPopup("<b>"+soildata_substance+"</b><hr><b>Type:</b></br>xx</b><br><b>Cause:</b></br>xx</b><br><b>Environmental Pollution Status:</b></br>xx</br>");
            
			map2.addLayer(markers_soildata);
			
			
			var soildata_X2=soildata_X;
			var soildata_Y2=soildata_Y;
			
			//markersLayer.addLayer(soildata_name);
			var soildata_X_old=soildata_X
			var soildata_Y_old=soildata_Y
			
			//}
			/*
			if(i>=0){
			//alert(soildata_Y);
			if(soildata_Y_old!=soildata_Y){
			if(soildata_X_old!=soildata_X){
			
			
            //soildata_content=soildata_unit+"xxxxx"+soildata_typeofuse+"xxxxx"+soildata_substance+"xxxxx"+soildata_value+"xxxxx"+soildata_paramnr+"xxxxx"+soildata_GKZ+"xxxxx"+soildata_municipality+"xxxxx"+soildata_probenr+"xxxxx"+soildata_seqnr+"xxxxx"+soildata_probemethod+"xxxxx"+soildata_typeofsoil+"xxxxx"+soildata_soiltype+"xxxxx"+soildata_locationid;
			soildata_content=soildata_unit+"xxxxx"+soildata_X+"xxxxx"+soildata_Y+"xxxxx"+soildata_coordinates 	;
			//+"xxxxx"+accident_substance+"xxxxx"+accident_incident+"xxxxx"+accident_value_kg+"xxxxx"+accident_value_text+"xxxxx"+accident_value_description
			soildata_content=soildata_content.replace(/ /g,'_');
			var ff=soildata_X+","+soildata_Y;
			soildata_name = L.marker([parseFloat(soildata_Y), parseFloat(soildata_X)],{icon: L.AwesomeMarkers.icon({icon: 'building', prefix: 'fa', markerColor: 'red'})});
			soildata_name.bindPopup('<a name="'+ff+'"   onclick="soildata_detail_sidebar(name)">See details</a>');
			//soildata_name.bindPopup("<b>"+soildata_substance+"</b><hr><b>Type:</b></br>xx</b><br><b>Cause:</b></br>xx</b><br><b>Environmental Pollution Status:</b></br>xx</br>");
            
			
			markersLayer.addLayer(soildata_name);
			
			soildata_X_old=soildata_X
			soildata_Y_old=soildata_Y
			}
			}
			}
	 */
	 
	}
	if (soil_secondquery=="false"){
	
	soildata_marker =markersLayer.addTo(map2);
	soil_secondquery="true";
	}
	
	if (soil_secondquery=="false"){
	}else{
	map2.removeLayer(soildata_marker);
	soildata_marker =markersLayer.addTo(map2);
	}
	
	
	
	
	
	//alert(soil_secondquery);
	// visualize layer containing marker
	//if (typeof(soildata_marker)=="undefined"){
	
			
			
/*
	//remove Layers
	map2.removeLayer(WL_boundary);
	map2.removeLayer(geojsonadd);
		
	map2.removeLayer(geojson);*/
	// clear Legend
		div2.innerHTML ="";
		
		
	// set view to Münster
	//map.setView([51.95442, 8.10009], 10);

	// to add an info box.
		check_detail_view=true;
		
		info2.update = function (props) {
				this._div2.innerHTML = '<h4>Region Westphalen Lippe</h4>' +  (props ?
					'<b>Municipality: ' + props.Name + '</b><br />GKZ: ' + props.GKZ + ''
					: 'Click a marker to get soildata details');
					
			};
		info2.update();
		
	}
	
	
function delete_soildata()
	{
//markersLayer.removeFrom(map2);	
if (typeof(markers_soildata)=="undefined"){
alert("No data chosen");
}

if (map2.hasLayer(markers_soildata)){
map2.removeLayer(markers_soildata);
}

}



	




	

	
	
	function accident_detail_func()
	{
	
		var sir_cancer
		var sir_year
		var sir_gender
		var sir_cancer_add
		var cancer_type_name
		var check_choice="Accident_detail";

		$(document).ready(function(){
//alert(check_choice);
			visualize_sir(sir_cancer,sir_cancer_add,sir_year,sir_gender,check_choice,cancer_type_name);
			
		});
}	
	
	
	
	
	
	
	
	
	


	////////////////////////////////////////////////////	Base&Overlay Layers ///////////////////////////////////////////////////////
			
	//OSM maps one as overlay and one base layer 
	var osmUrl='http://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmUrl2='http://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data &copy; OpenStreetMap contributors';
	var osmAttrib2='Map data &copy; OpenStreetMap contributors';
	var layerOSM=L.tileLayer(osmUrl, {minZoom: 0, maxZoom: 18, attribution: osmAttrib});
	var layerOSM2=L.tileLayer(osmUrl2, {minZoom: 0, maxZoom: 18, attribution: osmAttrib2});
	var layerOSMtransparent=L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy<a href="www.openstretmap.org/copyright ">OpenStreetMap</a> contributors',
		opacity:0.5,
		format: 'image/png',
		
	});
	//Layers of Geobasis NRW: http://www.bezreg-koeln.nrw.de/brk_internet/organisation/abteilung07/produkte/nrwatlas/index.html 
	//                          (website which provides different Web Map Service (WMS)-URLs)
	var layerDTK10_pan=L.tileLayer.wms('http://www.wms.nrw.de/geobasis/wms_nw_dtk10', {
	   attribution: '| &copy Geobasis NRW 2013',
		layers: 'NW_DTK10_pan',
		format: 'image/png',
		transparent: true,
		opacity:0.4	
	});
	var layerDTK10=L.tileLayer.wms('http://www.wms.nrw.de/geobasis/wms_nw_dtk10', {
		 attribution: '| &copy Geobasis NRW 2013',
		layers: 'nw_dtk10_pan,nw_dtk10_res,NW_DTK10_col,WMS_NW_DTK10',
		format: 'image/png',
		transparent: true
	});
	//layer of the different districts
	var layerDVG=L.tileLayer.wms('http://www.wms.nrw.de/geobasis/wms_nw_dvg', {
		 attribution: '| &copy Geobasis NRW 2013',
		layers: 'WMS_NW_DVG',
		format: 'image/png',
		transparent: true,
		opacity:0.5
	});
	var layerDGK5=L.tileLayer.wms('http://www.wms.nrw.de/geobasis/wms_nw_dgk5', {
	 attribution: '| &copy Geobasis NRW 2013',
		layers: 'WMS_NW_DGK5',
		format: 'image/png',
		transparent: true,
		opacity:0.5
	});
	//Orthophoto layer
	var layerOrtho = L.tileLayer.wms('http://www.wms.nrw.de/geobasis/wms_nw_dop40', {
		layers: 'WMS_NW_DOP40',
		format: 'image/png',
		version:'1.3.0',
		attribution: '| &copy Geobasis NRW 2013'
	});
	
	// Municipality Layer
	
	


			
	//The map which is visualized when you get on the website.
	//electoralVotesLayer.addTo(map);
	//electoralVotesLayer2.addTo(map2);
	layerOSM.addTo(map);
	layerOSM2.addTo(map2);
	
	var legendControl = new L.Control.Legend();
		
		legendControl.addTo(map);


	//Map control: Layer switcher
	var baseMaps={ "OSM": layerOSM,
				   "arial view": layerOrtho,
				   "DTK10":layerDTK10
				   
				   };
	var overlapMaps={"OSM":layerOSMtransparent,
					  "DVG":layerDVG,
					  "DTK10_pan":layerDTK10_pan,
					  "DGK5":layerDGK5,
					  "Municipalities": electoralVotesLayer
					  
					  };
					  
	//Map control: Layer switcher
	var baseMaps2={ "OSM": layerOSM,
				   "arial view": layerOrtho,
				   "DTK10":layerDTK10
				   
				   };
	var overlapMaps2={"OSM":layerOSMtransparent,
					  "DVG":layerDVG,
					  "DTK10_pan":layerDTK10_pan,
					  "DGK5":layerDGK5,
					  "Municipalities": electoralVotesLayer2
					  
					  };
	//dvf2(WLBoundaries,'properties','GKZ');				  
	var overlapMaps_data={
					  "Population":""
					  };
$( document ).ready(function() {
	var control=L.control.layers(baseMaps,overlapMaps,{position:'bottomleft'}).addTo(map);
	//var control_overlay=L.control.layers(null,overlapMaps_data,{position:'bottomleft'}).addTo(map);
	
	var control2=L.control.layers(baseMaps2,overlapMaps2,{position:'bottomleft'}).addTo(map2);
});
	// Controls

	//miniMap
		var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
	//	var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map);

	//measure Control 
		L.Control.measureControl().addTo(map);
	
	//overview Control- to get to the municipality view of Westfalen-Lippe 
		L.Control.overviewControl().addTo(map);
		L.Control.overviewControl().addTo(map2);
		
	// add explorer control
	L.Control.explorerModus().addTo(map);
	
	// add background control
	L.Control.backgroundModus().addTo(map);
	
	L.Control.dataModus().addTo(map);
		
	//getlocation-- intialise a marker of your current position


	$('#GetLocation').on('click', function(){
	  map.locate({setView: true, maxZoom: 15});
	});
	
	function trigger(){
	  map.removeLayer(marker_location);
	}
	
	function lookfordata(){
	
	 Datachoice_Panel.show();
	}

	map.on('locationfound', onLocationFound);
	
	var marker_location
	function onLocationFound(e) {
	var link = $('<a href="#" class="speciallink">TestLink</a>').click(function() {
   // alert("test");
});
	var radius = e.accuracy / 2;
		marker_location=L.marker(e.latlng,{icon: L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true}) }).addTo(map)
			.bindPopup("You are within " + radius+ " meters from this point. Do you want to start a query with this location?<button class='btnStyle span3' id='lookfordata' onclick='lookfordata();'>Look for data</button> </br> </br><button class='btnStyle span3' id='trigger' onclick='trigger();'>Delete this marker</button>").openPopup();
	}

	function onLocationError(e) {
		alert(e.message);
	}


	
	
/*	
	function mylocation()
	{
	map.locate({setView: true, maxZoom: 16});
		navigator.geolocation.getCurrentPosition(GetLocation);
	}

	function GetLocation(location)
	{
		lat_location=location.coords.latitude;
		lon_location=location.coords.longitude;

	}

	function onLocationFound(e) 
	{
		var radius = e.accuracy / 2;

		L.marker(e.latlng,{icon: L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true}) }).addTo(map)
			.bindPopup("You are within " + radius + " meters from this point. Do you want to start a query with this location?").openPopup();

		L.circle(e.latlng, radius).addTo(map);
		
		//lat=e.coords.latitude;
		//lon=e.coords.longitude;
		
	}

	map.on('locationfound', onLocationFound);

	function onLocationError(e) {
		alert(e.message);
	}
*/
/////////////////////////////////////sidebar_control

	
  L.DomEvent.on(causeeffect_sidebar.getCloseButton(), 'click', function () {
			if (causeeffectbutton!=1){
            Datachoice_Panel.show();
			}
			causeeffectbutton=0;
			
        });	
		
	 L.DomEvent.on(Emitter_municipalityPanel.getCloseButton(), 'click', function () {
			
            Datachoice_Panel.show();
			
			
        });	

	L.DomEvent.on(Emitter_municipalityPanel, 'show', function () {
			
            Datachoice_Panel.hide();
			
			
        });	
		
		L.DomEvent.on(SPARQLPanel, 'show', function () {
			
            Datachoice_Panel.hide();
			OverlayData_Panel.hide();
			
			
        });	
		
		L.DomEvent.on(AQDResultsPanel, 'show', function () {
			
           Explorer_Panel.hide();
			
			
			
        });	
		
		
		$('.chechbox_map2').click(function(){
    if (this.checked) {
		document.getElementById("map2").hidden = false;
        explorer_modus();
    }
}) 
		


	



		
		
