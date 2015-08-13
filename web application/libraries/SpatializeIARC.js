function IARC_localize (id){
var carcinogen_name =$( "#carcinogen option:selected" ).text();
var carcinogen_place =$( "#iarc_spatialselection option:selected" ).text();
var IARCinfo_click=$( "#"+id+" option:selected" ).text();



if ($("#emission_source").val()=='Defoliant')
	 {
	 map.removeLayer(geojson);
		console.log("works");
	 }
	 
	 if ($("#emission_source").val()=='Industry')
	 {
	// showPopupIARC ();
	// map.removeLayer(geojson);
	ini_emitter();
		console.log("works");
	 }

















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

 }



}





function showPopupIARC (){

Popup.showModal('modal');return false;

// Example Dataset
	//var GKZ=["5554004","5554008","5554012","5512000","5513000","5554016","5554020","5554024","5554032","5515000"];
	//var municipalities = ["Ahaus","Bocholt","Borken","Bottrop","Gelsenkirchen","Gescher","Gronau","Heek","Isselburg","Münster"];
	var GKZ=["5111000","5112000","5113000","5114000","5116000","5117000","5119000","5120000","5122000","5124000","5154004","5154008","5154012","5154016","5154020","5154024","5154028","5154032","5154036","5154040","5154044","5154048","5154052","5154056","5154060","5154064","5158004","5158008","5158012","5158016","5158020","5158024","5158026","5158028","5158032","5158036","5162004","5162008","5162012","5162016","5162020","5162022","5162024","5162028","5166004","5166008","5166012","5166016","5166020","5166024","5166028","5166032","5166036","5170004","5170008","5170012","5170016","5170020","5170024","5170028","5170032","5170036","5170040","5170044","5170048","5170052","5314000","5315000","5316000","5334002","5334004","5334008","5334012","5334016","5334020","5334024","5334028","5334032","5334036","5358004","5358008","5358012","5358016","5358020","5358024","5358028","5358032","5358036","5358040","5358044","5358048","5358052","5358056","5358060","5362004","5362008","5362012","5362016","5362020","5362024","5362028","5362032","5362036","5362040","5366004","5366008","5366012","5366016","5366020","5366024","5366028","5366032","5366036","5366040","5366044","5370004","5370008","5370012","5370016","5370020","5370024","5370028","5370032","5370036","5370040","5374004","5374008","5374012","5374016","5374020","5374024","5374028","5374032","5374036","5374040","5374044","5374048","5374052","5378004","5378008","5378012","5378016","5378020","5378024","5378028","5378032","5382004","5382008","5382012","5382016","5382020","5382024","5382028","5382032","5382036","5382040","5382044","5382048","5382052","5382056","5382060","5382064","5382068","5382072","5382076","5512000","5513000","5515000","5554004","5554008","5554012","5554016","5554020","5554024","5554028","5554032","5554036","5554040","5554044","5554048","5554052","5554056","5554060","5554064","5554068","5558004","5558008","5558012","5558016","5558020","5558024","5558028","5558032","5558036","5558040","5558044","5562004","5562008","5562012","5562014","5562016","5562020","5562024","5562028","5562032","5562036","5566004","5566008","5566012","5566016","5566020","5566024","5566028","5566032","5566036","5566040","5566044","5566048","5566052","5566056","5566060","5566064","5566068","5566072","5566076","5566080","5566084","5566088","5566092","5566096","5570004","5570008","5570012","5570016","5570020","5570024","5570028","5570032","5570036","5570040","5570044","5570048","5570052","5711000","5754004","5754008","5754012","5754016","5754020","5754024","5754028","5754032","5754036","5754040","5754044","5754048","5754052","5758004","5758008","5758012","5758016","5758020","5758024","5758028","5758032","5758036","5762004","5762008","5762012","5762016","5762020","5762024","5762028","5762032","5762036","5762040","5766004","5766008","5766012","5766016","5766020","5766024","5766028","5766032","5766036","5766040","5766044","5766048","5766052","5766056","5766060","5766064","5770004","5770008","5770012","5770016","5770020","5770024","5770028","5770032","5770036","5770040","5770044","5774004","5774008","5774012","5774016","5774020","5774024","5774028","5774032","5774036","5774040","5911000","5913000","5914000","5915000","5916000","5954004","5954008","5954012","5954016","5954020","5954024","5954028","5954032","5954036","5958004","5958008","5958012","5958016","5958020","5958024","5958028","5958032","5958036","5958040","5958044","5958048","5962004","5962008","5962012","5962016","5962020","5962024","5962028","5962032","5962036","5962040","5962044","5962048","5962052","5962056","5962060","5966004","5966008","5966012","5966016","5966020","5966024","5966028","5970004","5970008","5970012","5970016","5970020","5970024","5970028","5970032","5970036","5970040","5970044","5974004","5974008","5974012","5974016","5974020","5974024","5974028","5974032","5974036","5974040","5974044","5974048","5974052","5974056","5978004","5978008","5978012","5978016","5978020","5978024","5978028","5978032","5978036","5978040"];
	var municipalities = ["Düsseldorf","Duisburg","Essen","Krefeld","Mönchengladbach","Mülheim","Oberhausen","Remscheid","Solingen","Wuppertal","Bedburg-Hau","Emmerich","Geldern","Goch","Issum","Kalkar","Kerken","Kevelaer","Kleve","Kranenburg","Rees","Rheurdt","Straelen","Uedem","Wachtendonk","Weeze","Erkrath","Haan","Heiligenhaus","Hilden","Langenfeld","Mettmann","Monheim","Ratingen","Velbert","Wülfrath","Dormagen","Grevenbroich","Jüchen","Kaarst","Korschenbroich","Meerbusch","Neuss","Rommerskirchen","Brüggen","Grefrath","Kempen","Nettetal","Niederkrüchten","Schwalmtal","Tönisvorst","Viersen","Willich","Alpen","Dinslaken","Hamminkeln","Hünxe","Kamp-Lintfort","Moers","Neukirchen-Vluyn","Rheinberg","Schermbeck","Sonsbeck","Voerde","Wesel","Xanten","Bonn","Köln","Leverkusen","Aachen","Alsdorf","Baesweiler","Eschweiler","Herzogenrath","Monschau","Roetgen","Simmerath","Stolberg","Würselen","Aldenhoven","Düren","Heimbach","Hürtgenwald","Inden","Jülich","Kreuzau","Langerwehe","Linnich","Merzenich","Nideggen","Niederzier","Nörvenich","Titz","Vettweiß","Bedburg","Bergheim","Brühl","Elsdorf","Erftstadt","Frechen","Hürth","Kerpen","Pulheim","Wesseling","Bad Münstereifel","Blankenheim","Dahlem","Euskirchen","Hellenthal","Kall","Mechernich","Nettersheim","Schleiden","Weilerswist","Zülpich","Erkelenz","Gangelt","Geilenkirchen","Heinsberg","Hückelhoven","Selfkant","Übach-Palenberg","Waldfeucht","Wassenberg","Wegberg","Bergneustadt","Engelskirchen","Gummersbach","Hückeswagen","Lindlar","Marienheide","Morsbach","Nümbrecht","Radevormwald","Reichshof","Waldbröl","Wiehl","Wipperfürth","Bergisch Gladbach","Burscheid","Kürten","Leichlingen","Odenthal","Overath","Rösrath","Wermelskirchen","Alfter","Bad Honnef","Bornheim","Eitorf","Hennef","Königswinter","Lohmar","Meckenheim","Much","Neunkirchen-Seelscheid","Niederkassel","Rheinbach","Ruppichteroth","Sankt Augustin","Siegburg","Swisttal","Troisdorf","Wachtberg","Windeck","Bottrop","Gelsenkirchen","Münster","Ahaus","Bocholt","Borken","Gescher","Gronau","Heek","Heiden","Isselburg","Legden","Raesfeld","Reken","Rhede","Schöppingen","Stadtlohn","Südlohn","Velen","Vreden","Ascheberg","Billerbeck","Coesfeld","Dülmen","Havixbeck","Lüdinghausen","Nordkirchen","Nottuln","Olfen","Rosendahl","Senden","Castrop-Rauxel","Datteln","Dorsten","Gladbeck","Haltern","Herten","Marl","Oer-Erkenschwick","Recklinghausen","Waltrop","Altenberge","Emsdetten","Greven","Hörstel","Hopsten","Horstmar","Ibbenbüren","Ladbergen","Laer","Lengerich","Lienen","Lotte","Metelen","Mettingen","Neuenkirchen","Nordwalde","Ochtrup","Recke","Rheine","Saerbeck","Steinfurt","Tecklenburg","Westerkappeln","Wettringen","Ahlen","Beckum","Beelen","Drensteinfurt","Ennigerloh","Everswinkel","Oelde","Ostbevern","Sassenberg","Sendenhorst","Telgte","Wadersloh","Warendorf","Bielefeld","Borgholzhausen","Gütersloh","Halle","Harsewinkel","Herzebrock-Clarholz","Langenberg","Rheda-Wiedenbrück","Rietberg","Schloß Holte-Stukenbrock","Steinhagen","Verl","Versmold","Werther","Bünde","Enger","Herford","Hiddenhausen","Kirchlengern","Löhne","Rödinghausen","Spenge","Vlotho","Bad Driburg","Beverungen","Borgentreich","Brakel","Höxter","Marienmünster","Nieheim","Steinheim","Warburg","Willebadessen","Augustdorf","Bad Salzuflen","Barntrup","Blomberg","Detmold","Dörentrup","Extertal","Horn-Bad Meinberg","Kalletal","Lage","Lemgo","Leopoldshöhe","Lügde","Oerlinghausen","Schieder-Schwalenberg","Schlangen","Bad Oeynhausen","Espelkamp","Hille","Hüllhorst","Lübbecke","Minden","Petershagen","Porta Westfalica","Preußisch Oldendorf","Rahden","Stemwede","Altenbeken","Bad Lippspringe","Borchen","Büren","Delbrück","Hövelhof","Lichtenau","Paderborn","Salzkotten","Wünnenberg","Bochum","Dortmund","Hagen","Hamm","Herne","Breckerfeld","Ennepetal","Gevelsberg","Hattingen","Herdecke","Schwelm","Sprockhövel","Wetter","Witten","Arnsberg","Bestwig","Brilon","Eslohe","Hallenberg","Marsberg","Medebach","Meschede","Olsberg","Schmallenberg","Sundern","Winterberg","Altena","Balve","Halver","Hemer","Herscheid","Iserlohn","Kierspe","Lüdenscheid","Meinerzhagen","Menden","Nachrodt-Wiblingwerde","Neuenrade","Plettenberg","Schalksmühle","Werdohl","Attendorn","Drolshagen","Finnentrop","Kirchhundem","Lennestadt","Olpe","Wenden","Bad Berleburg","Burbach","Erndtebrück","Freudenberg","Hilchenbach","Kreuztal","Bad Laasphe","Netphen","Neunkirchen","Siegen","Wilnsdorf","Anröchte","Bad Sassendorf","Ense","Erwitte","Geseke","Lippetal","Lippstadt","Möhnesee","Rüthen","Soest","Warstein","Welver","Werl","Wickede","Bergkamen","Bönen","Fröndenberg","Holzwickede","Kamen","Lünen","Schwerte","Selm","Unna","Werne"];     
	var sel = document.getElementById('list_municipalities4iarc');
	for(var i = 0; i < municipalities.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = municipalities[i];
		opt.value = municipalities[i];
		opt.name=GKZ[i];
		sel.appendChild(opt);
	}

}

// show the user which kind of data is available considering the selection.
// dynamic concept : + easy to update /- slow
var carcinogen_id;
function ask_data (id){
var carcinogen_name =$( "#carcinogen option:selected" ).text();
var carcinogen_place =$( "#iarc_spatialselection option:selected" ).text();
var IARCinfo_click=$( "#"+id+" option:selected" ).text();
//Check to make it independent from small text changes

var query_necessary=false;

var check_carcinogen_name_As=carcinogen_name.indexOf("Arsenic") > -1;
var check_carcinogen_name_Ni=carcinogen_name.indexOf("Nickel") > -1;


var carcinogen_place_id =$( "#iarc_spatialselection option:selected" ).val();


// Direct the carcinogen selection with the LD definition.


if (check_carcinogen_name_As==true){
carcinogen_id="As";
query_necessary=true;
}

if (carcinogen_name=="Air pollution"){
sir_sidebar.toggle();
explorer_sidebar();
}

if (check_carcinogen_name_Ni==true){
carcinogen_id="Ni";
query_necessary=true;
}


if (query_necessary==true){


	//author: Johannes Trame Code: https://github.com/lodum/BiographicalThesaurus/blob/master/examples/jquery_sparql_sesame.html
	
//	function submitQuery(){
		var endpoint="http://friedrichmueller-gi.de:8080/openrdf-sesame/repositories/CancerData2";
		//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
		var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
		var request = { accept : 'application/sparql-results_edit+json' };
		//get sparql query from textarea
		//request.query=$("#sparqlQuery").val();
		//request.query="PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> PREFIX qb: <http://purl.org/linked-data/cube#> SELECT DISTINCT ?s ?l ?x ?set    WHERE { ?s ?p \"5515000\" .?s ?x ?l. OPTIONAL{?s qb:dataSet ?set.}.FILTER regex(str(?x), \"As\") .}  LIMIT 1";
request.query="PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> PREFIX qb: <http://purl.org/linked-data/cube#> SELECT DISTINCT ?s ?l ?x ?set    WHERE { ?s ?p \""+carcinogen_place_id+"\".?s ?x ?l. OPTIONAL{?s qb:dataSet ?set.}.FILTER regex(str(?x), \""+carcinogen_id+"\") .}  LIMIT 1";

//alert(request.query);
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
}// end query necessary
	//handles the ajax response
	function callbackFunc_edit(results_edit) {	
	

	/*
	for(var n=0;n<results_edit.results.bindings.length;n++){
	
	//alert(results_edit.results.bindings[n].x.value);
					if (typeof(results_edit.results.bindings[n].x)=='undefined'){	;
						}
						} */
	
	//$('#available_datasets_list').innerHTML="";
	$('#available_datasets_list').find('option:not(:first)').remove();
	var sel = document.getElementById('available_datasets_list');
	for(var i = 0; i < results_edit.results.bindings.length; i++) {
	var text=results_edit.results.bindings[i].set.value;
	var text=text.replace("http://www.example.org/dataset/","");
		var opt = document.createElement('option');
		opt.innerHTML = text;
		opt.value = text;
		opt.name=results_edit.results.bindings[i].set.value;
		sel.appendChild(opt);
	}
	
	
	document.getElementById("available_datasets").hidden = false;
 }






}


/////////////////////// Control the dataset selection:

function check_selection(){
if ($("#available_datasets_list").val()=="Muenster_IndustryEmitterDataset"){
var search_substance="emitter_"+carcinogen_id;
ini_emitter(search_substance);


}
}









