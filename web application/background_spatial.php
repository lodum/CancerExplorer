<?php
<!DOCTYPE html>
	 <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"> 
	<html>
		<head>
		
				<title>Explore cause effect relationships</title>

							 <!-- Le styles -->
							
				<link href="libraries/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
				<link href="libraries/bootstrap/css/docs.css" rel="stylesheet">
				<link href="libraries/bootstrap/js/prettify.css" rel="stylesheet">
				<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet">
						
							<!-- Jquery-->
				<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
				<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
				<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
				<script src="libraries/jQuery.js"></script>
				<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

							<!-- Map environment-->
				<link rel="stylesheet" href="libraries/leaflet-0.7/leaflet.css" />
				<link rel="stylesheet" href="libraries/Leaflet.draw/dist/leaflet.draw.css" />
				<link rel="stylesheet" href="libraries/MiniMap/fullscreen.css" />
				<link rel="stylesheet" href="libraries/MiniMap/src/Control.MiniMap.css" />
				<link rel="stylesheet" href="libraries/Measure/leaflet.measurecontrol.css" />
				<link rel="stylesheet" href="libraries/WL_overview/leaflet.overviewcontrol.css" />
				<link rel="stylesheet" href="libraries/L.Control.Sidebar.css" />
				<link rel="stylesheet" href="libraries/ExplorerModus/leaflet.explorermodus.css" />
				<script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
				<script src="libraries/Leaflet.draw/dist/leaflet.draw.js" type="text/javascript"></script>
				<script src="libraries/MiniMap/src/Control.MiniMap.js" type="text/javascript"></script>
				<script src="libraries/Measure/leaflet.measurecontrol.js" type="text/javascript"></script>
				<script src="libraries/WL_overview/leaflet.overviewcontrol.js" type="text/javascript"></script>
				<script src="libraries/ExplorerModus/leaflet.explorermodus.js" type="text/javascript"></script>
				<script type='text/javascript' src="libraries/GeometryUtil/dist/leaflet.geometryutil.js"></script>
				<script type='text/javascript' src="libraries/leaflet.almostover.js"></script>
				<script type="text/javascript" src="libraries/L.Control.Sidebar.js"></script>
				<script type="text/javascript" src="libraries/background.js"></script>				

						<!-- awesome markers-->
				<script src="dist/leaflet.awesome-markers.js"></script>
				<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" rel="stylesheet">
				<link rel="stylesheet" href="dist/leaflet.awesome-markers.css">
					
						<!-- Include the loading control -->
				<link rel="stylesheet" href="libraries/Leaflet.loading/Control.Loading.css" />
				<script src="libraries/Leaflet.loading/Control.Loading.js"></script>
						<!-- created style sheets and scripts-->
				<link href="libraries/bootstrap/css/bootstrap.css" rel="stylesheet">
				<link rel="stylesheet" href="libraries/custom_css.css"/>

						<!-- SPARQL library-->
				<script type="text/javascript" src="libraries/sparql.js"></script>
						<!--Add WL boundary Geojson as JS variable WLBoundaries"/>-->
				<script type="text/javascript" src="data/WL_boundaries_WGS84.js"></script>
						<!--Json merge for visualization"/>-->
				<script type="text/javascript" src="libraries/jsonmerge.js"></script>

						<!--Json merge for sir value"/>-->
				<script type="text/javascript" src="libraries/jsonmerge_sir.js"></script> 

						<!--functions for creating emitter visualization"/>-->
				<script type="text/javascript" src="libraries/visualize_emitter.js"></script> 

						<!--Add functions for the sparql panel/>-->
				<script type="text/javascript" src="ibraries/sparqlpanel.js"></script>
						<!--Validation"/>-->
				<script type="text/javascript" src="libraries/validation.js"></script>
						<!--MarkerCluster/>-->
				<link rel="stylesheet" href="libraries/Leaflet.markercluster/dist/MarkerCluster.css" />
				<link rel="stylesheet" href="Leaflet.markercluster/dist/MarkerCluster.Default.css" />
				<script src="Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
				
						<!--Explorer Modus Functions/>-->
				<script type="text/javascript" src="libraries/explorer.js"></script>
				<script src="libraries/L.Map.Sync.js"></script>
				
				<script src="libraries/explorer_airquality.js"></script>
				<script src="libraries/aqd_sparql.js"></script>
				
				
				
								<!--Explorer Modus Functions/>-->
							<script src="libraries/jquery-ui-1.11.2/jquery-ui.min.js"></script>
							<link rel="stylesheet" href="libraries/jquery-ui-1.11.2/jquery-ui.css"/>
				
				

				<style type="text/css">
				
				table { width:60%; }
				<style>
					.btnStyle {
						background-color: #4D90FE; 
						background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED); 
						border: 1px solid #3079ED; 
						color: #FFFFFF;
						padding: 4px;
						margin-top: 4px;
						margin-bottom: 4px;
						width:100%
					}
					
				a {font-size: 20px}
					
				</style>
								
			<script>
			/*
			 $(function() {
			$( document ).tooltip();
			});
			*/
			</script>
			<style>
			label {
			display: inline-block;
			width: 5em;
			}
			</style>
			
		</head>
		
		<body style="background-color:#000000">

				<div style="padding-top:10px;" align="center">
					<span style="font-weight:bold; color:white;font-size:15px" >
								Information about cause-effect relationships
					</span>			
				</div>

				<hr>	
				<div style="padding-top:10px;" align="left">
					<span style="font-weight:bold; color:white;font-size:15px" >
								<font color="#4D90F">STEP 1)</font> First select a cancer type that you want to know more about
					</span>			
				</div>
				<br>
					
										
				<div style="background-color:#2E2E2E;" align="center">
					<span style="font-weight:bold; color:white">
						<div style="padding-top:10px">
		
									<input type="radio" id="sirbladdercancer_bg" onclick="background_information2();" class="BGType3" name="BGType3" value="C67" checked="checked">&nbsp;Bladder cancer &nbsp;
									<input type="radio" id="sirlungcancer_bg" onclick="background_information2();" class="BGType3" name="BGType3" value="C34">&nbsp;Lung cancer &nbsp;
									<input type="radio" id="sirleukemiacancer_bg" onclick="background_information2();" class="BGType3" name="BGType3" value="C91-C95">&nbsp;Leukemia &nbsp;&nbsp;&nbsp;
									<input type="radio" id="sirnasalcancer_bg" onclick="background_information2();" class="BGType3" name="BGType3" value="C00-C14">&nbsp;Nasal cavity and paranasal sinus &nbsp;	
						
									<br>
									<br>	
						</div>
					</span>
				</div>
				<hr>	
				<hr>
				<span style="font-weight:bold; color:white">
					<div style="padding-top:10px;;font-size:15px;" align="left">
								<font color="#4D90F">STEP 2)</font> Now you can select one of the carcinogens to get detailed information
										
					</div>
				</span>
					<br>
					<br>
					
				<div id="behold" align="center">
					  <div id="main" style="float:middle" >
					 
						<table style="width:250px">
							<tr>
								<th colspan="1"><div style=""><b> <a  title="A carcinogen is any substance, radionuclide, or radiation that is an agent directly involved in causing cancer.
								This may be due to the ability to damage the genome or to the disruption of cellular metabolic processes. Several radioactive substances are considered carcinogens, but their carcinogenic activity is attributed to the radiation, for example gamma rays and alpha particles, which they emit.
								Common examples of non-radioactive carcinogens are inhaled asbestos, certain dioxins, and tobacco smoke. Although the public generally associates carcinogenicity with synthetic chemicals, it is equally likely to arise in both natural and synthetic substances. Carcinogens are not necessarily immediately toxic, thus their effect can be insidious.
								[http://en.wikipedia.org/wiki/Carcinogen]
								">Carcinogens:</a></b></div></th>
							</tr>
							<tr>
				  
							<td> <div style="font-size:16px;"><select  id="carcinogen" name="carcinogen"  onchange="carcinogen_info();emission_info();" class="dropdown-select"style="width:450px;height:40px;">
							<option>Carcinogens</option>
							</select>
					 
							</td>
						</div>
							</tr>
						</table>
					
					 </div>
				<br>
				<hr>
				<hr>
					<span style="font-weight:bold; color:white">
						<div style="padding-top:10px;;font-size:15px;" align="left">
								<font color="#4D90F">STEP 3)</font> Here you can see the different attributes of your selected carcinogen (Hover over the headlines to get background information)
						</div>
					</span>				
								
				<br>
					
				<table border="4" frame="void" style="width:960px;">
					  <tr>
						<td><b> <a title="The source the emission comes from.
It can be differentiated between point sources like power plants, area sources like gasoline station (tank truck unloading and refueling) or mobile sources like cars.">Emission Source:</a></b></td>
						<td><b> <a  title="Emission producing processes and procedures">Emission Process:</a></b></td>
						<td><b> <a  title="The way substances are spread in environment">Transport Way:</a></b></td>
					  </tr>
					  <tr>
						<td>
						<div id="behold2">	  
						<div id="side" style="float:left;margin-right:20px;">
						<select id="emission_source"name="sometext" size="5" onchange=""  style="width:300px; text-align:center;"  >
						<option label="Emission Source">Emission Source</option> 
						</select>
						</div>
						 </div> 
						</td>
						<td>	   
						<div id="side" style="float:left;margin-right:20px;">
						<select id="emission_process"name="sometext" size="5" style="width:300px; text-align:center;">
						<option>Emission Process</option> 
						</select> 
						</div>
						</td>	 
						<td> 
							 <div id="behold5">	  
							 <div id="side" style="float:left;margin-right:20px;">
							 <select id="substance_transport"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
						  <option>Substance Transport</option>
						  
						</select>
							 
							 </div>
							 </div> 
						</td>
						</tr>
					</table>

					<br>
					<br>
					<br>
					<table border="4" frame="void" style="width:960px;">
					  <tr>
						<td><b> <a  title="Groups that have a high contact rate with certain carcinogens (e.g. certain professions)">Exposed Group:</a></b></td>
						<td><b> <a  title="Areas where carcinogens are likely to occur (e.g. specific industry areas)">Exposed Area:</a></b></td>
						<td><b> <a  title="The ways a human being can have contact/can consume carcinogens">Ways of Consumption:</a></b></td>
					  </tr>
					  <tr>
						<td>	 
						 <div id="behold3">	  
						 <div id="side" style="float:left;margin-right:20px;">
						 <select id="exposed_group"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
						<option>Exposed Group</option>
						</select>
						 </div>
						 </div> 
						</td>	 
						<td> 	  
						 <div id="behold4">	  
							 <div id="side" style="float:left;margin-right:20px;">
							 <select id="exposed_area"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
						  <option>Exposed Areas</option>
						  
						</select>
							 
							 </div>
						</div> 
						</td>	 
					<td> 	  
					<div id="behold6">	  
						 <div id="side" style="float:left;margin-right:20px;">
						 <select id="consumption"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
					  <option>Consumption</option>
					  
					</select> 
						 </div>
					</div> 
					 </td>
					</tr>
				</table>
				 
				<br>
				<br>
				<br>

				<table border="4" frame="void" style="width:960px;">
				  <tr>
					<td><b><a  title=" Classification by the IARC Monographs:
			Group  1 	Carcinogenic to humans 	
			Group  2A 	Probably carcinogenic to humans 	  
			Group  2B 	Possibly carcinogenic to humans 	
			Group  3 	Not classifiable as to its carcinogenicity to humans             	
			Group  4 	Probably not carcinogenic to humans	
					">IARC Classification Number:</a></b></td>
					<td><b><a  title="The number of the referring IARC monograph
					
				The IARC Monographs identify environmental factors that can increase the risk of human cancer. These include chemicals, complex mixtures, occupational exposures, physical agents, biological agents, and lifestyle factors. National health agencies can use this information as scientific support for their actions to prevent exposure to potential carcinogens.

				Interdisciplinary working groups of expert scientists review the published studies and evaluate the weight of the evidence that an agent can increase the risk of cancer. The principles, procedures, and scientific criteria that guide the evaluations are described in the Preamble to the IARC Monographs.

				Since 1971, more than 900 agents have been evaluated, of which more than 400 have been identified as carcinogenic, probably carcinogenic, or possibly carcinogenic to humans.

				[http://monographs.iarc.fr/]	
					">Monography Number:</a></b></td>
					<td><b><a  title=" CAS Registry Number
A CAS Registry Number, also referred to as CASRN or CAS Number, is an unique numerical identifier assigned by Chemical Abstracts Service (CAS) to every chemical substance described in the open scientific literature (currently including those described from at least 1957 through the present),
including organic and inorganic compounds, minerals, isotopes, alloys and nonstructurable materials (UVCBs, of unknown, variable composition, or biological origin).

				[http://en.wikipedia.org/wiki/CAS_Registry_Number]	
				">CAS Number:</a></b></td>
				  </tr>
				  <tr>
					<td>	
					<div id="behold7">	  
					 <div id="side" style="float:left;margin-right:20px;">
					 <select id="iarc_member"name="sometext" size="5" onchange="" style="width:300px; text-align:center;">
					<option>IARC Classification Number</option>
				  
					</select>
					 
					 </div>
					 </div> 
					</td>	 
					<td>	  
					<div id="behold8">	  
						 <div id="side" style="float:left;margin-right:20px;">
						 <select id="monography_no"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
					  <option>Monography Number</option>
					  
					</select>
						 
						 </div>
					</div> 
					</td>	 
				<td>	  
				<div id="behold9">	  
					 <div id="side" style="float:left;margin-right:20px;">
					 <select id="cas_no"name="sometext" size="5" onchange="emission_info();" style="width:300px; text-align:center;">
					<option>CAS Number</option> 
					</select>
					 
					 </div>
				</div> 
				</td>
				</tr>
				</table>	 
					 
					 
				<br>
				<hr>     
				<div  align="left">
					<span style="font-weight:bold; color:white;font-size:15px" >
				Presented information is derived from the monographs of International Agency for Research on Cancer (IARC).
				To get more information visit    <a href="http://www.iarc.fr/">IARC</a>
					</span>			
				</div>
					
					
				<div id="SPARQLPanel">
						

						<!-- empty html div-element ... placeholder for results (text/canvas/map etc)-->
						<div id="resultdiv" style="display:none;"></div>
						<br/>
				</div>
				<form action="index.html">	
					<input id="Exit" type="submit" class="btnStyle span3" data-color="#00aff0" data-hover="#0cbbfc" value="Go to map view [X]" style="background-color: #4D90FE; 
								background-image: -moz-linear-gradient(center top , #4D90FE, #4787ED); 
								border: 1px solid #3079ED; 
								color: #FFFFFF;
								padding: 4px;
								margin-top: 4px;
								margin-bottom: 4px;
								width:30%">	
				  
				</form>	
		
		</body >
		
		
	<script>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

 

	
$(function() {
    $("#Exit").mouseenter(function() {
        var bg = $(this).attr('data-hover');
        $(this).css( "background", bg );
    });

    $("#Exit").mouseleave(function() {
        var bg = $(this).attr('data-color');
        $(this).css( "background", bg );
    });
});


	
	
	
	
	function emission_info(){
		emission_info2();
	}

	function background_information(){
		background_information2();
	}
	function carcinogen_info(){
		carcinogen_info2()
	}

			
	</script>
	
</html>
?>
	