// Extracts emitter data regarding air quality data for whole NRW from different websites and turns it into a predefined RDF structure and saves it in  one file -- Example.
import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.URL;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class emitter { 
	
public static void main(String[] args) throws IOException {
	   String[] GEMArray = {"5111000","5112000","5113000","5114000","5116000","5117000","5119000","5120000","5122000","5124000","5154004","5154008","5154012","5154016","5154020","5154024","5154028","5154032","5154036","5154040","5154044","5154048","5154052","5154056","5154060","5154064","5158004","5158008","5158012","5158016","5158020","5158024","5158026","5158028","5158032","5158036","5162004","5162008","5162012","5162016","5162020","5162022","5162024","5162028","5166004","5166008","5166012","5166016","5166020","5166024","5166028","5166032","5166036","5170004","5170008","5170012","5170016","5170020","5170024","5170028","5170032","5170036","5170040","5170044","5170048","5170052","5314000","5315000","5316000","5334002","5334004","5334008","5334012","5334016","5334020","5334024","5334028","5334032","5334036","5358004","5358008","5358012","5358016","5358020","5358024","5358028","5358032","5358036","5358040","5358044","5358048","5358052","5358056","5358060","5362004","5362008","5362012","5362016","5362020","5362024","5362028","5362032","5362036","5362040","5366004","5366008","5366012","5366016","5366020","5366024","5366028","5366032","5366036","5366040","5366044","5370004","5370008","5370012","5370016","5370020","5370024","5370028","5370032","5370036","5370040","5374004","5374008","5374012","5374016","5374020","5374024","5374028","5374032","5374036","5374040","5374044","5374048","5374052","5378004","5378008","5378012","5378016","5378020","5378024","5378028","5378032","5382004","5382008","5382012","5382016","5382020","5382024","5382028","5382032","5382036","5382040","5382044","5382048","5382052","5382056","5382060","5382064","5382068","5382072","5382076","5512000","5513000","5515000","5554004","5554008","5554012","5554016","5554020","5554024","5554028","5554032","5554036","5554040","5554044","5554048","5554052","5554056","5554060","5554064","5554068","5558004","5558008","5558012","5558016","5558020","5558024","5558028","5558032","5558036","5558040","5558044","5562004","5562008","5562012","5562014","5562016","5562020","5562024","5562028","5562032","5562036","5566004","5566008","5566012","5566016","5566020","5566024","5566028","5566032","5566036","5566040","5566044","5566048","5566052","5566056","5566060","5566064","5566068","5566072","5566076","5566080","5566084","5566088","5566092","5566096","5570004","5570008","5570012","5570016","5570020","5570024","5570028","5570032","5570036","5570040","5570044","5570048","5570052","5711000","5754004","5754008","5754012","5754016","5754020","5754024","5754028","5754032","5754036","5754040","5754044","5754048","5754052","5758004","5758008","5758012","5758016","5758020","5758024","5758028","5758032","5758036","5762004","5762008","5762012","5762016","5762020","5762024","5762028","5762032","5762036","5762040","5766004","5766008","5766012","5766016","5766020","5766024","5766028","5766032","5766036","5766040","5766044","5766048","5766052","5766056","5766060","5766064","5770004","5770008","5770012","5770016","5770020","5770024","5770028","5770032","5770036","5770040","5770044","5774004","5774008","5774012","5774016","5774020","5774024","5774028","5774032","5774036","5774040","5911000","5913000","5914000","5915000","5916000","5954004","5954008","5954012","5954016","5954020","5954024","5954028","5954032","5954036","5958004","5958008","5958012","5958016","5958020","5958024","5958028","5958032","5958036","5958040","5958044","5958048","5962004","5962008","5962012","5962016","5962020","5962024","5962028","5962032","5962036","5962040","5962044","5962048","5962052","5962056","5962060","5966004","5966008","5966012","5966016","5966020","5966024","5966028","5970004","5970008","5970012","5970016","5970020","5970024","5970028","5970032","5970036","5970040","5970044","5974004","5974008","5974012","5974016","5974020","5974024","5974028","5974032","5974036","5974040","5974044","5974048","5974052","5974056","5978004","5978008","5978012","5978016","5978020","5978024","5978028","5978032","5978036","5978040"};
	   String[] GEMNameArray = {"Düsseldorf","Duisburg","Essen","Krefeld","Mönchengladbach","Mülheim","Oberhausen","Remscheid","Solingen","Wuppertal","Bedburg-Hau","Emmerich","Geldern","Goch","Issum","Kalkar","Kerken","Kevelaer","Kleve","Kranenburg","Rees","Rheurdt","Straelen","Uedem","Wachtendonk","Weeze","Erkrath","Haan","Heiligenhaus","Hilden","Langenfeld","Mettmann","Monheim","Ratingen","Velbert","Wülfrath","Dormagen","Grevenbroich","Jüchen","Kaarst","Korschenbroich","Meerbusch","Neuss","Rommerskirchen","Brüggen","Grefrath","Kempen","Nettetal","Niederkrüchten","Schwalmtal","Tönisvorst","Viersen","Willich","Alpen","Dinslaken","Hamminkeln","Hünxe","Kamp-Lintfort","Moers","Neukirchen-Vluyn","Rheinberg","Schermbeck","Sonsbeck","Voerde","Wesel","Xanten","Bonn","Köln","Leverkusen","Aachen","Alsdorf","Baesweiler","Eschweiler","Herzogenrath","Monschau","Roetgen","Simmerath","Stolberg","Würselen","Aldenhoven","Düren","Heimbach","Hürtgenwald","Inden","Jülich","Kreuzau","Langerwehe","Linnich","Merzenich","Nideggen","Niederzier","Nörvenich","Titz","Vettweiß","Bedburg","Bergheim","Brühl","Elsdorf","Erftstadt","Frechen","Hürth","Kerpen","Pulheim","Wesseling","Bad Münstereifel","Blankenheim","Dahlem","Euskirchen","Hellenthal","Kall","Mechernich","Nettersheim","Schleiden","Weilerswist","Zülpich","Erkelenz","Gangelt","Geilenkirchen","Heinsberg","Hückelhoven","Selfkant","Übach-Palenberg","Waldfeucht","Wassenberg","Wegberg","Bergneustadt","Engelskirchen","Gummersbach","Hückeswagen","Lindlar","Marienheide","Morsbach","Nümbrecht","Radevormwald","Reichshof","Waldbröl","Wiehl","Wipperfürth","Bergisch Gladbach","Burscheid","Kürten","Leichlingen","Odenthal","Overath","Rösrath","Wermelskirchen","Alfter","Bad Honnef","Bornheim","Eitorf","Hennef","Königswinter","Lohmar","Meckenheim","Much","Neunkirchen-Seelscheid","Niederkassel","Rheinbach","Ruppichteroth","Sankt Augustin","Siegburg","Swisttal","Troisdorf","Wachtberg","Windeck","Bottrop","Gelsenkirchen","Münster","Ahaus","Bocholt","Borken","Gescher","Gronau","Heek","Heiden","Isselburg","Legden","Raesfeld","Reken","Rhede","Schöppingen","Stadtlohn","Südlohn","Velen","Vreden","Ascheberg","Billerbeck","Coesfeld","Dülmen","Havixbeck","Lüdinghausen","Nordkirchen","Nottuln","Olfen","Rosendahl","Senden","Castrop-Rauxel","Datteln","Dorsten","Gladbeck","Haltern","Herten","Marl","Oer-Erkenschwick","Recklinghausen","Waltrop","Altenberge","Emsdetten","Greven","Hörstel","Hopsten","Horstmar","Ibbenbüren","Ladbergen","Laer","Lengerich","Lienen","Lotte","Metelen","Mettingen","Neuenkirchen","Nordwalde","Ochtrup","Recke","Rheine","Saerbeck","Steinfurt","Tecklenburg","Westerkappeln","Wettringen","Ahlen","Beckum","Beelen","Drensteinfurt","Ennigerloh","Everswinkel","Oelde","Ostbevern","Sassenberg","Sendenhorst","Telgte","Wadersloh","Warendorf","Bielefeld","Borgholzhausen","Gütersloh","Halle","Harsewinkel","Herzebrock-Clarholz","Langenberg","Rheda-Wiedenbrück","Rietberg","Schloß Holte-Stukenbrock","Steinhagen","Verl","Versmold","Werther","Bünde","Enger","Herford","Hiddenhausen","Kirchlengern","Löhne","Rödinghausen","Spenge","Vlotho","Bad Driburg","Beverungen","Borgentreich","Brakel","Höxter","Marienmünster","Nieheim","Steinheim","Warburg","Willebadessen","Augustdorf","Bad Salzuflen","Barntrup","Blomberg","Detmold","Dörentrup","Extertal","Horn-Bad Meinberg","Kalletal","Lage","Lemgo","Leopoldshöhe","Lügde","Oerlinghausen","Schieder-Schwalenberg","Schlangen","Bad Oeynhausen","Espelkamp","Hille","Hüllhorst","Lübbecke","Minden","Petershagen","Porta Westfalica","Preußisch Oldendorf","Rahden","Stemwede","Altenbeken","Bad Lippspringe","Borchen","Büren","Delbrück","Hövelhof","Lichtenau","Paderborn","Salzkotten","Wünnenberg","Bochum","Dortmund","Hagen","Hamm","Herne","Breckerfeld","Ennepetal","Gevelsberg","Hattingen","Herdecke","Schwelm","Sprockhövel","Wetter","Witten","Arnsberg","Bestwig","Brilon","Eslohe","Hallenberg","Marsberg","Medebach","Meschede","Olsberg","Schmallenberg","Sundern","Winterberg","Altena","Balve","Halver","Hemer","Herscheid","Iserlohn","Kierspe","Lüdenscheid","Meinerzhagen","Menden","Nachrodt-Wiblingwerde","Neuenrade","Plettenberg","Schalksmühle","Werdohl","Attendorn","Drolshagen","Finnentrop","Kirchhundem","Lennestadt","Olpe","Wenden","Bad Berleburg","Burbach","Erndtebrück","Freudenberg","Hilchenbach","Kreuztal","Bad Laasphe","Netphen","Neunkirchen","Siegen","Wilnsdorf","Anröchte","Bad Sassendorf","Ense","Erwitte","Geseke","Lippetal","Lippstadt","Möhnesee","Rüthen","Soest","Warstein","Welver","Werl","Wickede","Bergkamen","Bönen","Fröndenberg","Holzwickede","Kamen","Lünen","Schwerte","Selm","Unna","Werne"};
	   String[] branchArray = {"Verkehr","//PossibleUsecase","//PossibleUsecase","//PossibleUsecase"};
	   
String branch2="";	   
String branch2_2="";
String branch2_2_ws="";
int count=9;


//write namespace

try {
//create a new file, true for appending text -- Place here the destination
      FileOutputStream fileStream = new FileOutputStream(new File("C:/Emitter.txt"),true);
      OutputStreamWriter writer = new OutputStreamWriter(fileStream, "UTF-8");
      
      //Outputstream with UTF-8 Charset   
      
      
      // Create namespaces in the rdf file
      writer.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+System.getProperty("line.separator")+
   		   "<rdf:RDF"+System.getProperty("line.separator")+
   		   "	xmlns:rdfs=\"http://www.w3.org/2000/01/rdf-schema#\""+System.getProperty("line.separator")+
   		   "	xmlns:foaf=\"http://xmlns.com/foaf/0.1/\""+System.getProperty("line.separator")+
   		   "	xmlns:xsd=\"http://www.w3.org/2001/XMLSchema#\""+System.getProperty("line.separator")+
   		   "	xmlns:owl=\"http://www.w3.org/2002/07/owl#\""+System.getProperty("line.separator")+
   		   "	xmlns:void=\"http://rdfs.org/ns/void#\""+System.getProperty("line.separator")+
   		   "	xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\""+System.getProperty("line.separator")+
   		   "	xmlns:qb=\"http://purl.org/linked-data/cube#\">"+System.getProperty("line.separator")+
   		   System.getProperty("line.separator"));	   
writer.flush();
      
      // Close Stream
      writer.close();
    } catch (IOException e) {
	      e.printStackTrace();
	    }	     







//RDF structure

	  
	     for(int i=0; i<=GEMArray.length-1; i++) {  //start array loop of each municipality	
	    	 
	    	 try {
	    		//create a new file, true for appending text
	    		      FileOutputStream fileStream = new FileOutputStream(new File("C:/Emitter.txt"),true);
	    		      OutputStreamWriter writer = new OutputStreamWriter(fileStream, "UTF-8");
	    		      	    	 
	    	 writer.write("<rdf:Description rdf:about=\"http://www.example.org/dataset/"+GEMNameArray[i]+"_ \">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#DataSet\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Industry Emitter Dataset</rdfs:label>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#DataStructureDefinition\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x2\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/Emitter\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#MeasureProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Emitter</rdfs:label>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x2\">"+System.getProperty("line.separator")+
	    			 "	<qb:measure rdf:resource=\"http://www.example.org/def/Emitter\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x2\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x3\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/Name\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#AttributeProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Name</rdfs:label>"+System.getProperty("line.separator")+
	    			 "	<rdfs:comment>Emitter Name</rdfs:comment>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x3\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Name\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x3\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x4\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/ZipCodeCity\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#AttributeProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Zip Code and City Name</rdfs:label>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x4\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/ZipCodeCity\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x4\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x5\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/Street\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#AttributeProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Street</rdfs:label>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x5\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Street\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x5\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x6\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/EmissionProcess\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#Property\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#AttributeProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Small combustion plant</rdfs:label>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x6\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/EmissionProcess\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x6\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x7\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/GKZ\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#type\"/>"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#AttributeProperty\"/>"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>GKZ</rdfs:label>"+System.getProperty("line.separator")+
	    			 "	<rdfs:comment>Municipality number</rdfs:comment>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x7\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/GKZ\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x7\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x8\">"+System.getProperty("line.separator")+
	    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:about=\"http://www.example.org/def/Municipality\">"+System.getProperty("line.separator")+
	    			 "	<rdfs:label>Municipality</rdfs:label>"+System.getProperty("line.separator")+
	    			 "	<rdfs:comment>Municipality Name</rdfs:comment>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x8\">"+System.getProperty("line.separator")+
	    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Municipality\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator")+
	    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x1\">"+System.getProperty("line.separator")+
	    			 "	<qb:component rdf:nodeID=\"node18uthukr4x8\"/>"+System.getProperty("line.separator")+
	    			 "</rdf:Description>"+System.getProperty("line.separator")+
	    			 System.getProperty("line.separator"));	   
	    	writer.flush();
	    	      
	    	      // Close Stream
	    	      writer.close();
	    	    } catch (IOException e) {
	    		      e.printStackTrace();
	    		    }	     
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 

	    	 System.out.println(GEMArray[i]);
	    		
	    		// stream in webseite	
	    	    URL url = new URL("/*Here should be the URL*/"+GEMArray[i]+"/*Here should be the URL*/"+GEMArray[i]+"/*Here should be the URL*/");  

	    	    BufferedReader r = new BufferedReader(new InputStreamReader( url.openStream()));      
	    	    String line = null;
	    	    String lineFull= "";
	    	   while((line=r.readLine())!=null)
	    	  	
	    	    lineFull=lineFull+"\n"+line;
	    	//replace charts that would occur errors  
	     
	    	   lineFull=   lineFull.replaceAll("\\(","");
	    	   lineFull=   lineFull.replaceAll("\\)","");
	    	   lineFull=   lineFull.replaceAll("<0.001","0.001");
	    	   lineFull=   lineFull.replaceAll("&nbsp;", "0");
	    	   lineFull=   lineFull.replaceAll("(\\r|\\n)", "");
	    	   lineFull=   lineFull.replaceAll("php\\?", "php_");
	    	   lineFull=   lineFull.replaceAll("'odd'", "'same'");
	    	   lineFull=   lineFull.replaceAll("'even'", "'same'");
	    	   lineFull=   lineFull.replaceAll("&gt;", ">");
	    	   lineFull=   lineFull.replaceAll("&lt;", "<");
	    	   
	    	   
	    	   Pattern pg;
				  Pattern pl;
				  Pattern p0;
				  Pattern p3;
				  Pattern p1;
				  
				  Pattern p0_2;
				  Pattern p3_2;
				  Pattern p1_2;
				  Pattern p3_3;
				  

	// following emitter   	   
				  p3_2=Pattern.compile("</tr><tr><td align=left class='same' valign=top>(.*?)</td>");
					
				  
	// read out the name
				  Matcher m3_2 = p3_2.matcher(lineFull);
				  while ( m3_2.find()) {
		    	
		    		  branch2_2=m3_2.group(1);
		    		  branch2_2_ws=   branch2_2.replaceAll(" ","");
				  
	// read out the id			  
				  p0_2=Pattern.compile("valign=top>"+branch2_2+"</td><td align=left class='same' valign=top><a href=tabelle_anl.php_uvo=nein&ANLAGEN_ID=(.*?)>");
				  Matcher m0_2 = p0_2.matcher(lineFull);
				  if( m0_2.find()) {
		    	
				    
		    	//m0.group(1) is ID of emitter
				    String ID=m0_2.group(1);
		    		    		  
	// read out the emission process
					  
				  p1_2=Pattern.compile("/*Here should be the URL*/"+m0_2.group(1)+">(.*?)</a>");
				  Matcher m1_2 = p1_2.matcher(lineFull);
				  if( m1_2.find()) {
				  
				  String emitter_process=m1_2.group(1);
				 //emission process of the following emitter
				  
				  
				  
		    		// stream in webseite	
		   	    URL url2 = new URL("/*Here should be the URL*/"+ID+"");  

		    	    BufferedReader r2 = new BufferedReader(new InputStreamReader( url2.openStream()));      
		    	    String line2 = null;
		    	    String emitter_detail= "";
		    	   while((line2=r2.readLine())!=null)
		    	  	
		    	    emitter_detail=emitter_detail+"\n"+line2;
		    	//replace charts that would occur errors  
		     
		    	   emitter_detail=   emitter_detail.replaceAll("\\(","");
		    	   emitter_detail=   emitter_detail.replaceAll("\\)","");
		    	   emitter_detail=   emitter_detail.replaceAll("<0.001","0.001");
		    	   emitter_detail=   emitter_detail.replaceAll("&nbsp;", "0");
		    	   emitter_detail=   emitter_detail.replaceAll("(\\r|\\n)", "");
		    	   emitter_detail=   emitter_detail.replaceAll("php\\?", "php_");
		    	   emitter_detail=   emitter_detail.replaceAll("'odd'", "'same'");
		    	   emitter_detail=   emitter_detail.replaceAll("'even'", "'same'");
		    	   emitter_detail=   emitter_detail.replaceAll("&gt;", ">");
		    	   emitter_detail=   emitter_detail.replaceAll("&lt;", "<");			  
				  
				  
				  
		    	   Pattern d1;
				   Pattern d2;		  
				   Pattern pmgr2;
				   Pattern pmgr3;
		    	   
				   d1=Pattern.compile("<td class='kopf'>Plz / Ort:</td><td class='kopf'>(.*?)</td>");
					  Matcher md1 = d1.matcher(emitter_detail);
					  if( md1.find()) {
					  String emitter_city=md1.group(1);
					  System.out.println(emitter_city);
					  System.out.println(emitter_detail);
					 
					  
					  
					  
					  d2=Pattern.compile("<tr><td class='kopf'>Straße:</td><td class='kopf'>(.*?)</td></tr>");
					  Matcher md2 = d2.matcher(emitter_detail);
					  if( md2.find()) {
						  String emitter_street=md2.group(1);
						  System.out.println(emitter_street);
					  
		    	   
			    	   		    	   
						  pmgr2=Pattern.compile("listart=//PossibleUsecase', 'bim', 'width=600,height=300,scrollbars,resizable=yes'\">(.*?) </a>");
						  Matcher mgr2 = pmgr2.matcher(emitter_detail);
						  if( mgr2.find()) {
							  String emitter_substance=mgr2.group(1);
							  System.out.println(emitter_substance);
						  
		    	   
						  pmgr3=Pattern.compile(">"+emitter_substance+" </a></td><td align=right class='same' valign=top>(.*?)</td>");
						  Matcher mgr3 = pmgr3.matcher(emitter_detail);
						  if( mgr3.find()) {
							  String emitter_substancevalue=mgr3.group(1);
							  System.out.println(emitter_substancevalue);
							  
							   	 try {
							    		//create a new file, true for appending text
							    		      FileOutputStream fileStream = new FileOutputStream(new File("C:/Emitter.txt"),true);
							    		      OutputStreamWriter writer = new OutputStreamWriter(fileStream, "UTF-8");
							    		      	    	 
							    	 writer.write( "<rdf:Description rdf:about=\"http://www.example.org/dataset/"+GEMNameArray[i]+"_IndustryEmitterDataset\">"+System.getProperty("line.separator")+
							    			 "	<qb:structure rdf:nodeID=\"node18uthukr4x"+count+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:about=\"http://www.example.org/dataset/"+GEMNameArray[i]+"_IndustryEmitterDataset\">"+System.getProperty("line.separator")+
							    			 "	<qb:structure rdf:nodeID=\"node18uthukr4x1\"/>"+System.getProperty("line.separator")+
							    			 "	<void:vocabulary rdf:resource=\"http://www.purl.org/linked-data/cube#\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:about=\"http://www.example.org/"+branch2_2_ws+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#Observation\"/>"+System.getProperty("line.separator")+
							    			 "	<rdfs:label>Emitter</rdfs:label>"+System.getProperty("line.separator")+
							    			 "	<Emitter xmlns=\"http://www.example.org/def/\" rdf:resource=\"http://www.example.org/"+branch2_2_ws+"\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:dataSet rdf:resource=\"http://www.example.org/dataset/"+GEMNameArray[i]+"_IndustryEmitterDataset\"/>"+System.getProperty("line.separator")+
							    			 "	<Name xmlns=\"http://www.example.org/def/\">"+branch2_2+"</Name>"+System.getProperty("line.separator")+
							    			 "	<ZipCodeCity xmlns=\"http://www.example.org/def/\">"+emitter_city+"</ZipCodeCity>"+System.getProperty("line.separator")+
							    			 "	<Street xmlns=\"http://www.example.org/def/\">"+emitter_street+"</Street>"+System.getProperty("line.separator")+
							    			 "	<EmissionProcess xmlns=\"http://www.example.org/def/\"><![CDATA["+emitter_process+"]]></EmissionProcess>"+System.getProperty("line.separator")+
							    			 "	<GKZ xmlns=\"http://www.example.org/def/\">"+GEMArray[i]+"</GKZ>"+System.getProperty("line.separator")+
							    			 "	<Municipality xmlns=\"http://www.example.org/def/\">"+GEMNameArray[i]+"</Municipality>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#DataStructureDefinition\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+1)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:measure rdf:resource=\"http://www.example.org/def/Emitter\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+1)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+2)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Name\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+2)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+3)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/ZipCodeCity\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+3)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+4)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Street\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+4)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+5)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/EmissionProcess\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+5)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+6)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/GKZ\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+6)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+(count+7)+"\">"+System.getProperty("line.separator")+
							    			 "	<rdf:type rdf:resource=\"http://purl.org/linked-data/cube#ComponentSpecification\"/>"+System.getProperty("line.separator")+
							    			 "	<qb:attribute rdf:resource=\"http://www.example.org/def/Municipality\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator")+
							    			 "<rdf:Description rdf:nodeID=\"node18uthukr4x"+count+"\">"+System.getProperty("line.separator")+
							    			 "	<qb:component rdf:nodeID=\"node18uthukr4x"+(count+7)+"\"/>"+System.getProperty("line.separator")+
							    			 "</rdf:Description>"+System.getProperty("line.separator")+
							    			 System.getProperty("line.separator"));	   
							    	writer.flush();
							    	      count=count+8;
							    	      // Close Stream
							    	      writer.close();
							    	    } catch (IOException e) {
							    		      e.printStackTrace();
							    		    }	     
						  }
						  }
							  
						  }	  
						  }
						  
						  
						  
						  
				  }
				  }
				  } 	   
	    	   
	    	    
	    	   
	    	 
	    	   
	    	   try {
	    			//create a new file, true for appending text
	    			       FileOutputStream fileStream = new FileOutputStream(new File("C:/Emitter.txt"),true);
	    			       OutputStreamWriter writer = new OutputStreamWriter(fileStream, "UTF-8");
	    			       System.out.println(GEMArray[i]);  
	    			       //Outputstream with UTF-8 Charset   	   
	    			writer.write("</rdf:RDF>"); 
	    			
	    			
	    			writer.flush();

	    			// Schließt den Stream
	    			writer.close();
	    			
	    			     } catch (IOException e) {
	    				      e.printStackTrace();
	    				    }	 	   
	    			   
    
	     
	     }	     
	     
}
}