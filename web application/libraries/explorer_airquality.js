var AQDLayer = new L.LayerGroup();
var WLBoundaries_aqd
function explorer_airquality()
{

var branch_selection=$('#list_branch').val();
var substance_selection=$('#list_substance').val();

//alert($('#list_branch option:selected').val());
 





map2.removeLayer(geojson2);
map2.removeLayer(WL_boundary);
map2.removeLayer(WL_boundary2);
	map2.removeLayer(geojsonadd2);
// connect to endpoint and send sparql query

				var endpoint="http://10.10.6.8:8080/openrdf-sesame/repositories/cancerdata";
				//sent request over jsonp proxy (some endpoints are not cors enabled http://en.wikipedia.org/wiki/Same_origin_policy)
				var queryUrl = "http://jsonp.lodum.de/?endpoint=" + endpoint;
				var request = { accept : 'application/sparql-results+json' };
				
				// gives all industry values
			//	request.query="PREFIX qb:<http://purl.org/linked-data/cube#> Select ?substance ?municipality ?values WHERE {?substance qb:dataSet ?municipality. ?substance <http://www.example.org/def/Industry> ?values.} LIMIT 1000";
			request.query="SELECT ?a  ?b  ?d ?e ?f ?g ?h ?i  WHERE { ?a <http://www.example.org/def/Total> ?b. ?a <http://www.example.org/def/GKZ> ?d. ?a <http://www.w3.org/2000/01/rdf-schema#label> ?e.?a <http://www.example.org/def/Industry> ?f.?a <http://www.example.org/def/SmallCombustionPlant> ?g.?a <http://www.example.org/def/Traffic> ?h. OPTIONAL {?a <http://www.example.org/def/Traffic> ?i . }}";
	// ToDo: check Agriculture issue: if agriculture not exists data isnt displayed!!!-solved?

			

			
				//?a qb:dataSet ?b. ?a <http://www.example.org/def/Industry> ?c
				
			

				
				//sent request
				$.ajax({
					dataType: "jsonp",
					//some sparql endpoints do only support "sparql-results+json" instead of simply "json"
					beforeSend: function(xhrObj){xhrObj.setRequestHeader("Accept","application/sparql-results+json");},
					data: request,
					url: queryUrl,
					success: callbackFunc
				});


		//handles the ajax response
function callbackFunc(results) {
			
			
			//Clear result HTML div
				$("#resultdiv_map2").empty();	   
				//result is a json object http://de.wikipedia.org/wiki/JavaScript_Object_Notation
				htmlString="<table class=\"table table-striped\">";

		// Special case carcinogen information		
			
				
				
				//write table head
				htmlString+="<tr>";
					$.each(results.head.vars, function(index2, value2) { 
						htmlString+="<th>?"+value2+"</th>";
					 });
				htmlString+="</tr>";
				//write table body
				$.each(results.results.bindings, function(index1, value1) { 
					htmlString+="<tr>";
					$.each(results.head.vars, function(index2, value2) { 
						htmlString+="<td>"+value1[value2].value+"</td>";
						
						//console.log(value1[value2].value)
					 });
					htmlString+="</tr>";
					
				});

				htmlString+="</table>";
				$("#resultdiv_map2").html(htmlString);
				
			
				
			
			
				
				WLBoundaries_aqd = WLBoundaries;
			// Merge information from the WLBoundaries geojson and the new queried result set.
				
				
			

/*	
for(var n=0;n<results.results.bindings.length;n++){

if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Duisburg_AirQualityData"){results.results.bindings[n].municipality.value="Duisburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Essen_AirQualityData"){results.results.bindings[n].municipality.value="Essen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Krefeld_AirQualityData"){results.results.bindings[n].municipality.value="Krefeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/MÃ¶nchengladbach_AirQualityData"){results.results.bindings[n].municipality.value="Mönchengladbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/MÃ¼lheim_AirQualityData"){results.results.bindings[n].municipality.value="Mühlheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Oberhausen_AirQualityData"){results.results.bindings[n].municipality.value="Oberhausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Remscheid_AirQualityData"){results.results.bindings[n].municipality.value="Remscheid";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Solingen_AirQualityData"){results.results.bindings[n].municipality.value="Solingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wuppertal_AirQualityData"){results.results.bindings[n].municipality.value="Wuppertal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bedburg-Hau_AirQualityData"){results.results.bindings[n].municipality.value="Bedburg-Hau";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Emmerich_AirQualityData"){results.results.bindings[n].municipality.value="Emmerich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Geldern_AirQualityData"){results.results.bindings[n].municipality.value="Geldern";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Goch_AirQualityData"){results.results.bindings[n].municipality.value="Goch";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Issum_AirQualityData"){results.results.bindings[n].municipality.value="Issum";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kalkar_AirQualityData"){results.results.bindings[n].municipality.value="Kalkar";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kerken_AirQualityData"){results.results.bindings[n].municipality.value="Kerken";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kevelaer_AirQualityData"){results.results.bindings[n].municipality.value="Kevelaer";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kleve_AirQualityData"){results.results.bindings[n].municipality.value="Kleve";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kranenburg_AirQualityData"){results.results.bindings[n].municipality.value="Kranenburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rees_AirQualityData"){results.results.bindings[n].municipality.value="Rees";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rheurdt_AirQualityData"){results.results.bindings[n].municipality.value="Rheurdt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Straelen_AirQualityData"){results.results.bindings[n].municipality.value="Straelen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Uedem_AirQualityData"){results.results.bindings[n].municipality.value="Uedem";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wachtendonk_AirQualityData"){results.results.bindings[n].municipality.value="Wachtendonk";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Weeze_AirQualityData"){results.results.bindings[n].municipality.value="Weeze";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Erkrath_AirQualityData"){results.results.bindings[n].municipality.value="Erkrath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Haan_AirQualityData"){results.results.bindings[n].municipality.value="Haan";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Heiligenhaus_AirQualityData"){results.results.bindings[n].municipality.value="Heiligenhaus";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hilden_AirQualityData"){results.results.bindings[n].municipality.value="Hilden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Langenfeld_AirQualityData"){results.results.bindings[n].municipality.value="Langenfeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Mettmann_AirQualityData"){results.results.bindings[n].municipality.value="Mettmann";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Monheim_AirQualityData"){results.results.bindings[n].municipality.value="Monheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ratingen_AirQualityData"){results.results.bindings[n].municipality.value="Rattingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Velbert_AirQualityData"){results.results.bindings[n].municipality.value="Velbert";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/WÃ¼lfrath_AirQualityData"){results.results.bindings[n].municipality.value="Wülfrath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Dormagen_AirQualityData"){results.results.bindings[n].municipality.value="Dormagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Grevenbroich_AirQualityData"){results.results.bindings[n].municipality.value="Grevenbroich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/JÃ¼chen_AirQualityData"){results.results.bindings[n].municipality.value="Jülchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kaarst_AirQualityData"){results.results.bindings[n].municipality.value="Kaarst";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Korschenbroich_AirQualityData"){results.results.bindings[n].municipality.value="Korschenbroich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Meerbusch_AirQualityData"){results.results.bindings[n].municipality.value="Meerbusch";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neuss_AirQualityData"){results.results.bindings[n].municipality.value="Neuss";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rommerskirchen_AirQualityData"){results.results.bindings[n].municipality.value="Rommerskirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/BrÃ¼ggen_AirQualityData"){results.results.bindings[n].municipality.value="Brüggen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Grefrath_AirQualityData"){results.results.bindings[n].municipality.value="Grefrath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kempen_AirQualityData"){results.results.bindings[n].municipality.value="Kempen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nettetal_AirQualityData"){results.results.bindings[n].municipality.value="Nettetal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/NiederkrÃ¼chten_AirQualityData"){results.results.bindings[n].municipality.value="Niederkrüchten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schwalmtal_AirQualityData"){results.results.bindings[n].municipality.value="Schwalmtal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/TÃ¶nisvorst_AirQualityData"){results.results.bindings[n].municipality.value="Tönisvorst";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Viersen_AirQualityData"){results.results.bindings[n].municipality.value="Viersen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Willich_AirQualityData"){results.results.bindings[n].municipality.value="Willich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Alpen_AirQualityData"){results.results.bindings[n].municipality.value="Alpen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Dinslaken_AirQualityData"){results.results.bindings[n].municipality.value="Dinslaken";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hamminkeln_AirQualityData"){results.results.bindings[n].municipality.value="Hamminkeln";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼nxe_AirQualityData"){results.results.bindings[n].municipality.value="Hünxe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kamp-Lintfort_AirQualityData"){results.results.bindings[n].municipality.value="Kamp-Lintfort";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Moers_AirQualityData"){results.results.bindings[n].municipality.value="Moers";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neukirchen-Vluyn_AirQualityData"){results.results.bindings[n].municipality.value="Neukirchen-Vluyn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rheinberg_AirQualityData"){results.results.bindings[n].municipality.value="Rheinberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schermbeck_AirQualityData"){results.results.bindings[n].municipality.value="Schermbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Sonsbeck_AirQualityData"){results.results.bindings[n].municipality.value="Sonsbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Voerde_AirQualityData"){results.results.bindings[n].municipality.value="Voerde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wesel_AirQualityData"){results.results.bindings[n].municipality.value="Wesel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Xanten_AirQualityData"){results.results.bindings[n].municipality.value="Xanten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bonn_AirQualityData"){results.results.bindings[n].municipality.value="Bonn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/KÃ¶ln_AirQualityData"){results.results.bindings[n].municipality.value="Köln";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Leverkusen_AirQualityData"){results.results.bindings[n].municipality.value="Leverkusen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Aachen_AirQualityData"){results.results.bindings[n].municipality.value="Aachen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Alsdorf_AirQualityData"){results.results.bindings[n].municipality.value="Alsdorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Baesweiler_AirQualityData"){results.results.bindings[n].municipality.value="Baesweiler";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Eschweiler_AirQualityData"){results.results.bindings[n].municipality.value="Eschweiler";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herzogenrath_AirQualityData"){results.results.bindings[n].municipality.value="Herzogenrath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Monschau_AirQualityData"){results.results.bindings[n].municipality.value="Monschau";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Roetgen_AirQualityData"){results.results.bindings[n].municipality.value="Roetgen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Simmerath_AirQualityData"){results.results.bindings[n].municipality.value="Simmerath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Stolberg_AirQualityData"){results.results.bindings[n].municipality.value="Stolberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/WÃ¼rselen_AirQualityData"){results.results.bindings[n].municipality.value="Würselen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Aldenhoven_AirQualityData"){results.results.bindings[n].municipality.value="Aldenhoven";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/DÃ¼ren_AirQualityData"){results.results.bindings[n].municipality.value="Düren";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Heimbach_AirQualityData"){results.results.bindings[n].municipality.value="Heimbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼rtgenwald_AirQualityData"){results.results.bindings[n].municipality.value="Hürtgenwald";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Inden_AirQualityData"){results.results.bindings[n].municipality.value="Inden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/JÃ¼lich_AirQualityData"){results.results.bindings[n].municipality.value="Jülich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kreuzau_AirQualityData"){results.results.bindings[n].municipality.value="Kreuzau";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Langerwehe_AirQualityData"){results.results.bindings[n].municipality.value="Langerwehe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Linnich_AirQualityData"){results.results.bindings[n].municipality.value="Linnich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Merzenich_AirQualityData"){results.results.bindings[n].municipality.value="Merzenich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nideggen_AirQualityData"){results.results.bindings[n].municipality.value="Nideggen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Niederzier_AirQualityData"){results.results.bindings[n].municipality.value="Niederzier";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/NÃ¶rvenich_AirQualityData"){results.results.bindings[n].municipality.value="Nörvenich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Titz_AirQualityData"){results.results.bindings[n].municipality.value="Titz";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/VettweiÃŸ_AirQualityData"){results.results.bindings[n].municipality.value="Vettweiß";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bedburg_AirQualityData"){results.results.bindings[n].municipality.value="Bedburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bergheim_AirQualityData"){results.results.bindings[n].municipality.value="Bergheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/BrÃ¼hl_AirQualityData"){results.results.bindings[n].municipality.value="Brühl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Elsdorf_AirQualityData"){results.results.bindings[n].municipality.value="Elsdorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Erftstadt_AirQualityData"){results.results.bindings[n].municipality.value="Erfstadt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Frechen_AirQualityData"){results.results.bindings[n].municipality.value="Frechen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼rth_AirQualityData"){results.results.bindings[n].municipality.value="Hürth";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kerpen_AirQualityData"){results.results.bindings[n].municipality.value="Kerpen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Pulheim_AirQualityData"){results.results.bindings[n].municipality.value="Pulheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wesseling_AirQualityData"){results.results.bindings[n].municipality.value="Wesseling";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad MÃ¼nstereifel_AirQualityData"){results.results.bindings[n].municipality.value="Bad Münstereifel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Blankenheim_AirQualityData"){results.results.bindings[n].municipality.value="Blankenheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Dahlem_AirQualityData"){results.results.bindings[n].municipality.value="Dahlem";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Euskirchen_AirQualityData"){results.results.bindings[n].municipality.value="Euskirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hellenthal_AirQualityData"){results.results.bindings[n].municipality.value="Hellenthal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kall_AirQualityData"){results.results.bindings[n].municipality.value="Kall";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Mechernich_AirQualityData"){results.results.bindings[n].municipality.value="Mechernich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nettersheim_AirQualityData"){results.results.bindings[n].municipality.value="Nettersheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schleiden_AirQualityData"){results.results.bindings[n].municipality.value="Schleiden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Weilerswist_AirQualityData"){results.results.bindings[n].municipality.value="Weilerswist";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/ZÃ¼lpich_AirQualityData"){results.results.bindings[n].municipality.value="Zülpich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Erkelenz_AirQualityData"){results.results.bindings[n].municipality.value="Erkelenz";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gangelt_AirQualityData"){results.results.bindings[n].municipality.value="Gangelt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Geilenkirchen_AirQualityData"){results.results.bindings[n].municipality.value="Geilenkirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Heinsberg_AirQualityData"){results.results.bindings[n].municipality.value="Heinsberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼ckelhoven_AirQualityData"){results.results.bindings[n].municipality.value="Hückelhoven";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Selfkant_AirQualityData"){results.results.bindings[n].municipality.value="Selfkant";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ãœbach-Palenberg_AirQualityData"){results.results.bindings[n].municipality.value="Übach-Palenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Waldfeucht_AirQualityData"){results.results.bindings[n].municipality.value="Waldfeucht";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wassenberg_AirQualityData"){results.results.bindings[n].municipality.value="Wassenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wegberg_AirQualityData"){results.results.bindings[n].municipality.value="Wegberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bergneustadt_AirQualityData"){results.results.bindings[n].municipality.value="Bergneustadt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Engelskirchen_AirQualityData"){results.results.bindings[n].municipality.value="Engelskirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gummersbach_AirQualityData"){results.results.bindings[n].municipality.value="Gummersbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼ckeswagen_AirQualityData"){results.results.bindings[n].municipality.value="Hückeswagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lindlar_AirQualityData"){results.results.bindings[n].municipality.value="Lindlar";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Marienheide_AirQualityData"){results.results.bindings[n].municipality.value="Marienheide";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Morsbach_AirQualityData"){results.results.bindings[n].municipality.value="Morsbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/NÃ¼mbrecht_AirQualityData"){results.results.bindings[n].municipality.value="Nümbrecht";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Radevormwald_AirQualityData"){results.results.bindings[n].municipality.value="Radevormwald";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Reichshof_AirQualityData"){results.results.bindings[n].municipality.value="Reichshof";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/WaldbrÃ¶l_AirQualityData"){results.results.bindings[n].municipality.value="Waldbröl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wiehl_AirQualityData"){results.results.bindings[n].municipality.value="Wiehl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/WipperfÃ¼rth_AirQualityData"){results.results.bindings[n].municipality.value="Wipperfürth";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bergisch Gladbach_AirQualityData"){results.results.bindings[n].municipality.value="Bergisch Gladbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Burscheid_AirQualityData"){results.results.bindings[n].municipality.value="Burscheid";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/KÃ¼rten_AirQualityData"){results.results.bindings[n].municipality.value="Kürten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Leichlingen_AirQualityData"){results.results.bindings[n].municipality.value="Leichlingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Odenthal_AirQualityData"){results.results.bindings[n].municipality.value="Odenthal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Overath_AirQualityData"){results.results.bindings[n].municipality.value="Overath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/RÃ¶srath_AirQualityData"){results.results.bindings[n].municipality.value="Rösrath";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wermelskirchen_AirQualityData"){results.results.bindings[n].municipality.value="Wermelskirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Alfter_AirQualityData"){results.results.bindings[n].municipality.value="Alfter";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Honnef_AirQualityData"){results.results.bindings[n].municipality.value="Bad Honnef";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bornheim_AirQualityData"){results.results.bindings[n].municipality.value="Bornheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Eitorf_AirQualityData"){results.results.bindings[n].municipality.value="Eitorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hennef_AirQualityData"){results.results.bindings[n].municipality.value="Hennef";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/KÃ¶nigswinter_AirQualityData"){results.results.bindings[n].municipality.value="Königswinter";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lohmar_AirQualityData"){results.results.bindings[n].municipality.value="Lohmar";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Meckenheim_AirQualityData"){results.results.bindings[n].municipality.value="Meckenheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Much_AirQualityData"){results.results.bindings[n].municipality.value="Much";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neunkirchen-Seelscheid_AirQualityData"){results.results.bindings[n].municipality.value="Neunkirchen-Seelscheid";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Niederkassel_AirQualityData"){results.results.bindings[n].municipality.value="Niederkassel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rheinbach_AirQualityData"){results.results.bindings[n].municipality.value="Rheinbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ruppichteroth_AirQualityData"){results.results.bindings[n].municipality.value="Ruppichteroth";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Sankt Augustin_AirQualityData"){results.results.bindings[n].municipality.value="Sankt Augustin";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Siegburg_AirQualityData"){results.results.bindings[n].municipality.value="Siegburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Swisttal_AirQualityData"){results.results.bindings[n].municipality.value="Swisttal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Troisdorf_AirQualityData"){results.results.bindings[n].municipality.value="Troisdorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wachtberg_AirQualityData"){results.results.bindings[n].municipality.value="Wachtberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Windeck_AirQualityData"){results.results.bindings[n].municipality.value="Windeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bottrop_AirQualityData"){results.results.bindings[n].municipality.value="Bottrop";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gelsenkirchen_AirQualityData"){results.results.bindings[n].municipality.value="Helsenkirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/MÃ¼nster_AirQualityData"){results.results.bindings[n].municipality.value="Münster";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ahaus_AirQualityData"){results.results.bindings[n].municipality.value="Ahaus";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bocholt_AirQualityData"){results.results.bindings[n].municipality.value="Bocholt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Borken_AirQualityData"){results.results.bindings[n].municipality.value="Borken";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gescher_AirQualityData"){results.results.bindings[n].municipality.value="Gescher";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gronau_AirQualityData"){results.results.bindings[n].municipality.value="Gronau";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Heek_AirQualityData"){results.results.bindings[n].municipality.value="Heek";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Heiden_AirQualityData"){results.results.bindings[n].municipality.value="Heiden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Isselburg_AirQualityData"){results.results.bindings[n].municipality.value="Isselburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Legden_AirQualityData"){results.results.bindings[n].municipality.value="Legden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Raesfeld_AirQualityData"){results.results.bindings[n].municipality.value="Raesfeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Reken_AirQualityData"){results.results.bindings[n].municipality.value="Reken";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rhede_AirQualityData"){results.results.bindings[n].municipality.value="Rhede";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/SchÃ¶ppingen_AirQualityData"){results.results.bindings[n].municipality.value="Schöppingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Stadtlohn_AirQualityData"){results.results.bindings[n].municipality.value="Stadtlohn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/SÃ¼dlohn_AirQualityData"){results.results.bindings[n].municipality.value="Südlohn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Velen_AirQualityData"){results.results.bindings[n].municipality.value="Velen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Vreden_AirQualityData"){results.results.bindings[n].municipality.value="Vreden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ascheberg_AirQualityData"){results.results.bindings[n].municipality.value="Ascheberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Billerbeck_AirQualityData"){results.results.bindings[n].municipality.value="Billerbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Coesfeld_AirQualityData"){results.results.bindings[n].municipality.value="Coesfeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/DÃ¼lmen_AirQualityData"){results.results.bindings[n].municipality.value="Dülmen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Havixbeck_AirQualityData"){results.results.bindings[n].municipality.value="Havixbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¼dinghausen_AirQualityData"){results.results.bindings[n].municipality.value="Lüdinghausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nordkirchen_AirQualityData"){results.results.bindings[n].municipality.value="Nordkirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nottuln_AirQualityData"){results.results.bindings[n].municipality.value="Nottuln";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Olfen_AirQualityData"){results.results.bindings[n].municipality.value="Olfen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rosendahl_AirQualityData"){results.results.bindings[n].municipality.value="Rosendahl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Senden_AirQualityData"){results.results.bindings[n].municipality.value="Senden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Castrop-Rauxel_AirQualityData"){results.results.bindings[n].municipality.value="Castrop-Rauxel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Datteln_AirQualityData"){results.results.bindings[n].municipality.value="Datteln";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Dorsten_AirQualityData"){results.results.bindings[n].municipality.value="Dorsten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gladbeck_AirQualityData"){results.results.bindings[n].municipality.value="Gladbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Haltern_AirQualityData"){results.results.bindings[n].municipality.value="Haltern";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herten_AirQualityData"){results.results.bindings[n].municipality.value="Herten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Marl_AirQualityData"){results.results.bindings[n].municipality.value="Marl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Oer-Erkenschwick_AirQualityData"){results.results.bindings[n].municipality.value="Oer-Erkenschwick";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Recklinghausen_AirQualityData"){results.results.bindings[n].municipality.value="Recklinghausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Waltrop_AirQualityData"){results.results.bindings[n].municipality.value="Waltrop";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Altenberge_AirQualityData"){results.results.bindings[n].municipality.value="Altenberge";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Emsdetten_AirQualityData"){results.results.bindings[n].municipality.value="Emsdetten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Greven_AirQualityData"){results.results.bindings[n].municipality.value="Greven";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¶rstel_AirQualityData"){results.results.bindings[n].municipality.value="Hörstel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hopsten_AirQualityData"){results.results.bindings[n].municipality.value="Hopsten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Horstmar_AirQualityData"){results.results.bindings[n].municipality.value="Horstmar";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/IbbenbÃ¼ren_AirQualityData"){results.results.bindings[n].municipality.value="Ibbenbüren";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ladbergen_AirQualityData"){results.results.bindings[n].municipality.value="Ladbergen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Laer_AirQualityData"){results.results.bindings[n].municipality.value="Laer";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lengerich_AirQualityData"){results.results.bindings[n].municipality.value="Lengerich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lienen_AirQualityData"){results.results.bindings[n].municipality.value="Lienen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lotte_AirQualityData"){results.results.bindings[n].municipality.value="Lotte";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Metelen_AirQualityData"){results.results.bindings[n].municipality.value="Metelen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Mettingen_AirQualityData"){results.results.bindings[n].municipality.value="Mettingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neuenkirchen_AirQualityData"){results.results.bindings[n].municipality.value="Neuenkirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nordwalde_AirQualityData"){results.results.bindings[n].municipality.value="Nordwalde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ochtrup_AirQualityData"){results.results.bindings[n].municipality.value="Ochtrup";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Recke_AirQualityData"){results.results.bindings[n].municipality.value="Recke";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rheine_AirQualityData"){results.results.bindings[n].municipality.value="Rheine";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Saerbeck_AirQualityData"){results.results.bindings[n].municipality.value="Saerbeck";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Steinfurt_AirQualityData"){results.results.bindings[n].municipality.value="Steinfurt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Tecklenburg_AirQualityData"){results.results.bindings[n].municipality.value="Tecklenburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Westerkappeln_AirQualityData"){results.results.bindings[n].municipality.value="Westerkappeln";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wettringen_AirQualityData"){results.results.bindings[n].municipality.value="Wettringen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ahlen_AirQualityData"){results.results.bindings[n].municipality.value="Ahlen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Beckum_AirQualityData"){results.results.bindings[n].municipality.value="Beckum";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Beelen_AirQualityData"){results.results.bindings[n].municipality.value="Beelen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Drensteinfurt_AirQualityData"){results.results.bindings[n].municipality.value="Drensteinfurt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ennigerloh_AirQualityData"){results.results.bindings[n].municipality.value="Ennigerloh";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Everswinkel_AirQualityData"){results.results.bindings[n].municipality.value="Everswinkel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Oelde_AirQualityData"){results.results.bindings[n].municipality.value="Oelde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ostbevern_AirQualityData"){results.results.bindings[n].municipality.value="Ostbevern";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Sassenberg_AirQualityData"){results.results.bindings[n].municipality.value="Sassenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Sendenhorst_AirQualityData"){results.results.bindings[n].municipality.value="Sendenhorst";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Telgte_AirQualityData"){results.results.bindings[n].municipality.value="Telgte";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wadersloh_AirQualityData"){results.results.bindings[n].municipality.value="Wadersloh";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Warendorf_AirQualityData"){results.results.bindings[n].municipality.value="Warendorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bielefeld_AirQualityData"){results.results.bindings[n].municipality.value="Bielefeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Borgholzhausen_AirQualityData"){results.results.bindings[n].municipality.value="Borgholzhausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/GÃ¼tersloh_AirQualityData"){results.results.bindings[n].municipality.value="Gütersloh";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Halle_AirQualityData"){results.results.bindings[n].municipality.value="Halle";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Harsewinkel_AirQualityData"){results.results.bindings[n].municipality.value="Harsewinkel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herzebrock-Clarholz_AirQualityData"){results.results.bindings[n].municipality.value="Herzebrock-Clarholz";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Langenberg_AirQualityData"){results.results.bindings[n].municipality.value="Langenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rheda-WiedenbrÃ¼ck_AirQualityData"){results.results.bindings[n].municipality.value="Rheda-Wiedenbrück";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rietberg_AirQualityData"){results.results.bindings[n].municipality.value="Rietberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/SchloÃŸ Holte-Stukenbrock_AirQualityData"){results.results.bindings[n].municipality.value="Schloß";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Steinhagen_AirQualityData"){results.results.bindings[n].municipality.value="Steinhagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Verl_AirQualityData"){results.results.bindings[n].municipality.value="Verl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Versmold_AirQualityData"){results.results.bindings[n].municipality.value="Versmold";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Werther_AirQualityData"){results.results.bindings[n].municipality.value="Werther";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/BÃ¼nde_AirQualityData"){results.results.bindings[n].municipality.value="Bünde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Enger_AirQualityData"){results.results.bindings[n].municipality.value="Enger";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herford_AirQualityData"){results.results.bindings[n].municipality.value="Herford";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hiddenhausen_AirQualityData"){results.results.bindings[n].municipality.value="Hiddenhausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kirchlengern_AirQualityData"){results.results.bindings[n].municipality.value="Kirchlengern";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¶hne_AirQualityData"){results.results.bindings[n].municipality.value="Löhne";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/RÃ¶dinghausen_AirQualityData"){results.results.bindings[n].municipality.value="Rödinghausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Spenge_AirQualityData"){results.results.bindings[n].municipality.value="Spenge";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Vlotho_AirQualityData"){results.results.bindings[n].municipality.value="Vlotho";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Driburg_AirQualityData"){results.results.bindings[n].municipality.value="Bad Driburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Beverungen_AirQualityData"){results.results.bindings[n].municipality.value="Beverungen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Borgentreich_AirQualityData"){results.results.bindings[n].municipality.value="Borgentreich";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Brakel_AirQualityData"){results.results.bindings[n].municipality.value="Brakel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¶xter_AirQualityData"){results.results.bindings[n].municipality.value="Höxter";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/MarienmÃ¼nster_AirQualityData"){results.results.bindings[n].municipality.value="Marienmünster";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nieheim_AirQualityData"){results.results.bindings[n].municipality.value="Nieheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Steinheim_AirQualityData"){results.results.bindings[n].municipality.value="Steinheim";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Warburg_AirQualityData"){results.results.bindings[n].municipality.value="Warburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Willebadessen_AirQualityData"){results.results.bindings[n].municipality.value="Willebadessen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Augustdorf_AirQualityData"){results.results.bindings[n].municipality.value="Augustdorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Salzuflen_AirQualityData"){results.results.bindings[n].municipality.value="Bad Salzuflen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Barntrup_AirQualityData"){results.results.bindings[n].municipality.value="Barntrup";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Blomberg_AirQualityData"){results.results.bindings[n].municipality.value="Blomberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Detmold_AirQualityData"){results.results.bindings[n].municipality.value="Detmold";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/DÃ¶rentrup_AirQualityData"){results.results.bindings[n].municipality.value="Dörentrup";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Extertal_AirQualityData"){results.results.bindings[n].municipality.value="Extertal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Horn-Bad Meinberg_AirQualityData"){results.results.bindings[n].municipality.value="Horn-Bad Meinberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kalletal_AirQualityData"){results.results.bindings[n].municipality.value="Kalletal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lage_AirQualityData"){results.results.bindings[n].municipality.value="Lage";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lemgo_AirQualityData"){results.results.bindings[n].municipality.value="Lemgo";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LeopoldshÃ¶he_AirQualityData"){results.results.bindings[n].municipality.value="Leopoldshöhe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¼gde_AirQualityData"){results.results.bindings[n].municipality.value="Lügde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Oerlinghausen_AirQualityData"){results.results.bindings[n].municipality.value="Oerlinghausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schieder-Schwalenberg_AirQualityData"){results.results.bindings[n].municipality.value="Schieder-Schwalenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schlangen_AirQualityData"){results.results.bindings[n].municipality.value="Schlangen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Oeynhausen_AirQualityData"){results.results.bindings[n].municipality.value="Bad Oeynhausen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Espelkamp_AirQualityData"){results.results.bindings[n].municipality.value="Espelkamp";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hille_AirQualityData"){results.results.bindings[n].municipality.value="Hille";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¼llhorst_AirQualityData"){results.results.bindings[n].municipality.value="Hüllhorst";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¼bbecke_AirQualityData"){results.results.bindings[n].municipality.value="Lübbecke";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Minden_AirQualityData"){results.results.bindings[n].municipality.value="Minden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Petershagen_AirQualityData"){results.results.bindings[n].municipality.value="Petershagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Porta Westfalica_AirQualityData"){results.results.bindings[n].municipality.value="Porta Westfalica";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/PreuÃŸisch Oldendorf_AirQualityData"){results.results.bindings[n].municipality.value="Preußisch Oldendorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Rahden_AirQualityData"){results.results.bindings[n].municipality.value="Rahden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Stemwede_AirQualityData"){results.results.bindings[n].municipality.value="Stemwede";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Altenbeken_AirQualityData"){results.results.bindings[n].municipality.value="Altenbeken";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Lippspringe_AirQualityData"){results.results.bindings[n].municipality.value="Bad Lippspringe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Borchen_AirQualityData"){results.results.bindings[n].municipality.value="Borchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/BÃ¼ren_AirQualityData"){results.results.bindings[n].municipality.value="Büren";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/DelbrÃ¼ck_AirQualityData"){results.results.bindings[n].municipality.value="Delbrück";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/HÃ¶velhof_AirQualityData"){results.results.bindings[n].municipality.value="Hövelhof";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lichtenau_AirQualityData"){results.results.bindings[n].municipality.value="Lichtenau";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Paderborn_AirQualityData"){results.results.bindings[n].municipality.value="Paderborn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Salzkotten_AirQualityData"){results.results.bindings[n].municipality.value="Salzkotten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/WÃ¼nnenberg_AirQualityData"){results.results.bindings[n].municipality.value="Wünnenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bochum_AirQualityData"){results.results.bindings[n].municipality.value="Bochum";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Dortmund_AirQualityData"){results.results.bindings[n].municipality.value="Dortmund";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hagen_AirQualityData"){results.results.bindings[n].municipality.value="Hagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hamm_AirQualityData"){results.results.bindings[n].municipality.value="Hamm";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herne_AirQualityData"){results.results.bindings[n].municipality.value="Herne";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Breckerfeld_AirQualityData"){results.results.bindings[n].municipality.value="Breckerfeld";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ennepetal_AirQualityData"){results.results.bindings[n].municipality.value="Ennepetal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Gevelsberg_AirQualityData"){results.results.bindings[n].municipality.value="Gevelsberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hattingen_AirQualityData"){results.results.bindings[n].municipality.value="Hattingen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herdecke_AirQualityData"){results.results.bindings[n].municipality.value="Herdecke";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schwelm_AirQualityData"){results.results.bindings[n].municipality.value="Schwelm";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/SprockhÃ¶vel_AirQualityData"){results.results.bindings[n].municipality.value="Sprockhövel";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wetter_AirQualityData"){results.results.bindings[n].municipality.value="Wetter";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Witten_AirQualityData"){results.results.bindings[n].municipality.value="Witten";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Arnsberg_AirQualityData"){results.results.bindings[n].municipality.value="Arnsberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bestwig_AirQualityData"){results.results.bindings[n].municipality.value="Bestwig";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Brilon_AirQualityData"){results.results.bindings[n].municipality.value="Brilon";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Eslohe_AirQualityData"){results.results.bindings[n].municipality.value="Eslohe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hallenberg_AirQualityData"){results.results.bindings[n].municipality.value="Hallenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Marsberg_AirQualityData"){results.results.bindings[n].municipality.value="Marsberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Medebach_AirQualityData"){results.results.bindings[n].municipality.value="Medebach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Meschede_AirQualityData"){results.results.bindings[n].municipality.value="Meschede";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Olsberg_AirQualityData"){results.results.bindings[n].municipality.value="Olsberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schmallenberg_AirQualityData"){results.results.bindings[n].municipality.value="Schmallenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Sundern_AirQualityData"){results.results.bindings[n].municipality.value="Sundern";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Winterberg_AirQualityData"){results.results.bindings[n].municipality.value="Winterberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Altena_AirQualityData"){results.results.bindings[n].municipality.value="Altena";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Balve_AirQualityData"){results.results.bindings[n].municipality.value="Balve";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Halver_AirQualityData"){results.results.bindings[n].municipality.value="Halver";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hemer_AirQualityData"){results.results.bindings[n].municipality.value="Hemer";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Herscheid_AirQualityData"){results.results.bindings[n].municipality.value="Herscheid";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Iserlohn_AirQualityData"){results.results.bindings[n].municipality.value="Iserlohn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kierspe_AirQualityData"){results.results.bindings[n].municipality.value="Kierspe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¼denscheid_AirQualityData"){results.results.bindings[n].municipality.value="Lüdenscheid";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Meinerzhagen_AirQualityData"){results.results.bindings[n].municipality.value="Meinerzhagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Menden_AirQualityData"){results.results.bindings[n].municipality.value="Menden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Nachrodt-Wiblingwerde_AirQualityData"){results.results.bindings[n].municipality.value="Nachrodt-Wiblingwerde";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neuenrade_AirQualityData"){results.results.bindings[n].municipality.value="Neuenrade";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Plettenberg_AirQualityData"){results.results.bindings[n].municipality.value="Plettenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/SchalksmÃ¼hle_AirQualityData"){results.results.bindings[n].municipality.value="Schalksmühle";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Werdohl_AirQualityData"){results.results.bindings[n].municipality.value="Werdohl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Attendorn_AirQualityData"){results.results.bindings[n].municipality.value="Attendorn";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Drolshagen_AirQualityData"){results.results.bindings[n].municipality.value="Drolshagen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Finnentrop_AirQualityData"){results.results.bindings[n].municipality.value="Finnentrop";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kirchhundem_AirQualityData"){results.results.bindings[n].municipality.value="Kirchhundem";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lennestadt_AirQualityData"){results.results.bindings[n].municipality.value="Lennestadt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Olpe_AirQualityData"){results.results.bindings[n].municipality.value="Olpe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wenden_AirQualityData"){results.results.bindings[n].municipality.value="Wenden";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Berleburg_AirQualityData"){results.results.bindings[n].municipality.value="Bad Berleburg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Burbach_AirQualityData"){results.results.bindings[n].municipality.value="Burbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/ErndtebrÃ¼ck_AirQualityData"){results.results.bindings[n].municipality.value="Erndtebrück";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Freudenberg_AirQualityData"){results.results.bindings[n].municipality.value="Freudenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Hilchenbach_AirQualityData"){results.results.bindings[n].municipality.value="Hilchenbach";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kreuztal_AirQualityData"){results.results.bindings[n].municipality.value="Kreuztal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Laasphe_AirQualityData"){results.results.bindings[n].municipality.value="Bad Laasphe";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Netphen_AirQualityData"){results.results.bindings[n].municipality.value="Netphen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Neunkirchen_AirQualityData"){results.results.bindings[n].municipality.value="Neunkirchen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Siegen_AirQualityData"){results.results.bindings[n].municipality.value="Siegen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wilnsdorf_AirQualityData"){results.results.bindings[n].municipality.value="Wilnsdorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/AnrÃ¶chte_AirQualityData"){results.results.bindings[n].municipality.value="Anröchte";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bad Sassendorf_AirQualityData"){results.results.bindings[n].municipality.value="Bad Sassendorf";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Ense_AirQualityData"){results.results.bindings[n].municipality.value="Ense";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Erwitte_AirQualityData"){results.results.bindings[n].municipality.value="Erwitte";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Geseke_AirQualityData"){results.results.bindings[n].municipality.value="Geseke";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lippetal_AirQualityData"){results.results.bindings[n].municipality.value="Lippetal";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Lippstadt_AirQualityData"){results.results.bindings[n].municipality.value="Lippstadt";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/MÃ¶hnesee_AirQualityData"){results.results.bindings[n].municipality.value="Möhnesee";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/RÃ¼then_AirQualityData"){results.results.bindings[n].municipality.value="Rüthen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Soest_AirQualityData"){results.results.bindings[n].municipality.value="Soest";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Warstein_AirQualityData"){results.results.bindings[n].municipality.value="Warstein";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Welver_AirQualityData"){results.results.bindings[n].municipality.value="Welver";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Werl_AirQualityData"){results.results.bindings[n].municipality.value="Werl";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Wickede_AirQualityData"){results.results.bindings[n].municipality.value="Wickede";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Bergkamen_AirQualityData"){results.results.bindings[n].municipality.value="Bergkamen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/BÃ¶nen_AirQualityData"){results.results.bindings[n].municipality.value="Bönen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/FrÃ¶ndenberg_AirQualityData"){results.results.bindings[n].municipality.value="Fröndenberg";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Holzwickede_AirQualityData"){results.results.bindings[n].municipality.value="Holzwickede";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Kamen_AirQualityData"){results.results.bindings[n].municipality.value="Kamen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/LÃ¼nen_AirQualityData"){results.results.bindings[n].municipality.value="Lünen";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Schwerte_AirQualityData"){results.results.bindings[n].municipality.value="Schwerte";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Selm_AirQualityData"){results.results.bindings[n].municipality.value="Selm";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Unna_AirQualityData"){results.results.bindings[n].municipality.value="Unna";}
if(results.results.bindings[n].municipality.value=="http://www.example.org/dataset/Werne_AirQualityData"){results.results.bindings[n].municipality.value="Werne";}



}
*/


// check which kind of value is selected



		
for(var i=0;i<WLBoundaries_aqd.features.length;i++){			

				for(var n=0;n<results.results.bindings.length;n++){
	//alert(WLBoundaries_aqd.features[i].properties.Name);
	//alert(results.results.bindings[n].municipality.value);
				
				if(WLBoundaries_aqd.features[i].properties.GKZ == results.results.bindings[n].d.value){
				if (branch_selection=="Total"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].b.value;
				}
				}
				
//				alert(results.results.bindings[n].values.value);
				//alert ("si");
				//alert(WLBoundaries_aqd.features[i].properties.Value);
				
				
	
				}//end Total
				
				
				
				
				
				
				if (branch_selection=="Industry"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				}// End Industry
				
				
				
				
				if (branch_selection=="Traffic"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].h.value;
				}
				}
				}// End Traffic
				
				
				
				
				
					
				if (branch_selection=="Industry"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].f.value;
				}
				}
				}// End Industry
				
				
				
				
				if (branch_selection=="Small Combustion Plant"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].g.value;
				}
				}
				}// End Small Combustion Plant
				
				
				
			if (branch_selection=="Agriculture"){
				
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="N2O"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="CO2"){
				if(results.results.bindings[n].e.value=="carbon dioxide"){
				var substance_selection2="Carbon Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="CH4"){
				if(results.results.bindings[n].e.value=="methane"){
				var substance_selection2="Methane";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="NH3"){
				if(results.results.bindings[n].e.value=="ammonia"){
				var substance_selection2="Ammonia";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="HCL"){
				if(results.results.bindings[n].e.value=="hydrochloric acid"){
				var substance_selection2="Hydrochlorid Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="HF"){
				if(results.results.bindings[n].e.value=="hydrofluoric acid"){
				var substance_selection2="Hydrofluoric Acid";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="CO"){
				if(results.results.bindings[n].e.value=="carbon monoxide"){
				var substance_selection2="Carbon Monoxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="NMVOC"){
				if(results.results.bindings[n].e.value=="non-methane volatile organic compound"){
				var substance_selection2="Non-Methane Volatile Organic Compound";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="SO2"){
				if(results.results.bindings[n].e.value=="sulphur dioxide"){
				var substance_selection2="Sulphur Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="NO2"){
				if(results.results.bindings[n].e.value=="nitrogen dioxide"){
				var substance_selection2="Nitrogen Dioxide";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="As"){
				if(results.results.bindings[n].e.value=="arsenic"){
				var substance_selection2="Arsenic";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Pb"){
				if(results.results.bindings[n].e.value=="lead"){
				var substance_selection2="Lead";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Cd"){
				if(results.results.bindings[n].e.value=="cadmium"){
				var substance_selection2="Cadmium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Cr"){
				if(results.results.bindings[n].e.value=="chrome"){
				var substance_selection2="Chrome";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Cu"){
				if(results.results.bindings[n].e.value=="copper"){
				var substance_selection2="Copper";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="V"){
				if(results.results.bindings[n].e.value=="vanadium"){
				var substance_selection2="Vanadium";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="DUF"){
				if(results.results.bindings[n].e.value=="dioxin/furan (ITE)"){
				var substance_selection2="Dioxin/Furan (ITE)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Zn"){
				if(results.results.bindings[n].e.value=="Zinc"){
				var substance_selection2="Zinc";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="BAP"){
				if(results.results.bindings[n].e.value=="benzo[a]pyrene"){
				var substance_selection2="Benzo[a]Pyrene";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="BENZ"){
				if(results.results.bindings[n].e.value=="benzol"){
				var substance_selection2="Benzol";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="PAK"){
				if(results.results.bindings[n].e.value=="polynuclear aromatic hydrocarbons"){
				var substance_selection2="Polynuclear Aromatic Hydrocarbons";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="PM10"){
				if(results.results.bindings[n].e.value=="particulate matter (PM10)"){
				var substance_selection2="Particulate Matter (PM10)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="Staub"){
				if(results.results.bindings[n].e.value=="particulate matter (total particulate matter)"){
				var substance_selection2="Particulate Matter (Total Particulate Matter)";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				
				if (substance_selection=="RUSS"){
				if(results.results.bindings[n].e.value=="diesel exhaust particulates"){
				var substance_selection2="Diesel Exhaust Particulates";
				WLBoundaries_aqd.features[i].properties.Values= results.results.bindings[n].i.value;
				}
				}
				}// Agriculture
				
				
				
				
				
				
				
				
				} //end GKZ	
				
				
				
				
				
				
				
				}
				}
		
	
	
	

	//alert(WLBoundaries_aqd.features[10].properties.Values);
//////////////////////////////	Visualization

// Adding info box, legend, hover functionality

	function style_new(feature) {
				return {
					weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(feature.properties.Values)
				};
	}

function getColor(d) {
				return d > 2.00 ? '#993404' :
					   d > 1.00 ? '#d95f0e' :
					   d > 0.70 ? '#fe9929' :
					   d > 0.50 ? '#fec44f' :
					   d > 0.30 ? '#fee391' :
					   d > 0.00 ? '#ffffd4' :			     
								  '#ffffff';
	}
	
	
function style2(feature2) {
				return {
					weight: 2,
					opacity: 1,
					color: 'white',
					dashArray: '3',
					fillOpacity: 0.7,
					fillColor: getColor(feature2.properties.Values)
				};
			}
			



			
			
			
			
var geojson_aqd;


	
			function highlightFeature3(e2) {
				var layer2 = e2.target;

				layer2.setStyle({
					weight: 3,
					color: '#2E64FE',
					dashArray: '',
					fillOpacity: 0.7
				});

				if (!L.Browser.ie && !L.Browser.opera) {
					layer2.bringToFront();
				}
				info.update(layer2.feature.properties);
				info2.update(layer2.feature.properties);
			}


			
			function resetHighlight3(e2) {
				geojson_aqd.resetStyle(e2.target);
				info2.update();
				info.update();
			}

			function zoomToFeature3(e2) {
				map2.fitBounds(e2.target.getBounds());
				map.fitBounds(e.target.getBounds());
			}

			function onEachFeature3(feature2, layer2) {
				layer2.on({
					mouseover: highlightFeature3,
					mouseout: resetHighlight3,
					click: zoomToFeature3
				});
			}




	geojson_aqd = L.geoJson(WLBoundaries_aqd, {
				style: style_new,
				onEachFeature: onEachFeature3
			});
	
			AQDLayer.addLayer(geojson_aqd);
			AQDLayer.addTo(map2);
			geojson_aqd.addTo(map2);
			map2.attributionControl.addAttribution('Text?');
	
//info.update(layer.feature.properties);
//info2.update(layer2.feature.properties);
//alert(secondquery);
info2.onAdd = function (map2) {
			//while(secondquery==false){
				this._div = L.DomUtil.create('div', 'info');
				this.update();
				return this._div;
		//}
			};
		//if(secondquery==false){
			info2.update = function (props) {
				this._div2.innerHTML = '<h4> Region Westphalen Lippe</h4>' +  (props ?
				
				
					'<b>Municipality: ' + props.Name + '</b><br />'+substance_selection2+' '+branch_selection+' Value: ' + props.Values + ''
					: 'Hover over a state');
			};
	//}




	
	
	
	
}	
	
	
	
};