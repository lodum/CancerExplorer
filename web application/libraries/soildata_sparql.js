var substance_label
var aqd_branch
var substance_selection2

function aqd_sparql()
{

	if (branch_selection=="Traffic"){
	aqd_branch="<http://www.example.org/def/Traffic>";
	}

	if (branch_selection=="All emission branches"){
	aqd_branch="<http://www.example.org/def/Total>";
	}

	if (branch_selection=="Industry"){
	aqd_branch="<http://www.example.org/def/Industry>";
	}

	if (branch_selection=="Small Combustion Plant"){
	aqd_branch="<http://www.example.org/def/SmallCombustionPlant>";
	}

	if (branch_selection=="Agriculture"){
	aqd_branch="<http://www.example.org/def/Agriculture>";
	}
	
	
				if (substance_selection=="Zn"){
				substance_label="Zinc";
				substance_selection2="Zinc";
				
				}
				
				if (substance_selection=="N2O"){
				substance_label="nitrogen dioxide";
				substance_selection2="Nitrogen Dioxide";
				
				}
				
				if (substance_selection=="CO2"){
				substance_label="carbon dioxide";
				substance_selection2="Carbon Dioxide";
				
				}
				
				if (substance_selection=="CH4"){
				substance_label="methane";
				substance_selection2="Methane";
				
				}
				
				if (substance_selection=="NH3"){
				substance_label="ammonia";
				substance_selection2="Ammonia";
				
				}
				
				if (substance_selection=="HCL"){
				substance_label="hydrochloric acid";
				substance_selection2="Hydrochlorid Acid";
				
				}
				
				if (substance_selection=="HF"){
				substance_label="hydrofluoric acid";
				substance_selection2="Hydrofluoric Acid";
				
				}
				
				if (substance_selection=="CO"){
				substance_label="carbon monoxide";
				substance_selection2="Carbon Monoxide";
				
				}
				
				if (substance_selection=="NMVOC"){
				substance_label="non-methane volatile organic compound";
				substance_selection2="Non-Methane Volatile Organic Compound";
				
				}
				
				if (substance_selection=="SO2"){
				substance_label="sulphur dioxide";
				substance_selection2="Sulphur Dioxide";
				
				}
				
				if (substance_selection=="NO2"){
				substance_label="nitrogen dioxide";
				substance_selection2="Nitrogen Dioxide";
				
				}
				
				if (substance_selection=="As"){
				substance_label="arsenic";
				substance_selection2="Arsenic";
				
				}
				
				if (substance_selection=="Pb"){
				substance_label="lead";
				substance_selection2="Lead";
				
				}
				
				if (substance_selection=="Cd"){
				substance_label="cadmium";
				substance_selection2="Cadmium";
				
				}
				
				if (substance_selection=="Cr"){
				substance_label="chrome";
				substance_selection2="Chrome";
				
				}
				
				if (substance_selection=="Cu"){
				substance_label="copper";
				substance_selection2="Copper";
				
				}
				
				if (substance_selection=="V"){
				substance_label="vanadium";
				substance_selection2="Vanadium";
				
				}
				
				if (substance_selection=="DUF"){
				substance_label="dioxin/furan (ITE)";
				substance_selection2="Dioxin/Furan (ITE)";
				
				}
				
				if (substance_selection=="Zn"){
				substance_label="Zinc";
				substance_selection2="Zinc";
				
				}
				
				if (substance_selection=="BAP"){
				substance_label="benzo[a]pyrene";
				substance_selection2="Benzo[a]Pyrene";
				
				}
				
				if (substance_selection=="BENZ"){
				substance_label="benzol";
				substance_selection2="Benzol";
				
				}
				
				if (substance_selection=="PAK"){
				substance_label="polynuclear aromatic hydrocarbons";
				substance_selection2="Polynuclear Aromatic Hydrocarbons";
				
				}
				
				if (substance_selection=="PM10"){
				substance_label="particulate matter (PM10)";
				substance_selection2="Particulate Matter (PM10)";
				
				}
				
				if (substance_selection=="Staub"){
				substance_label="particulate matter (total particulate matter)";
				substance_selection2="Particulate Matter (Total Particulate Matter)";
				
				}
				
				if (substance_selection=="RUSS"){
				substance_label="diesel exhaust particulates";
				substance_selection2="Diesel Exhaust Particulates";
				
				}
	
	
}