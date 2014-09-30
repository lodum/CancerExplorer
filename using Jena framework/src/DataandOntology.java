// *Combine Ontology with RDF datasets and query them* pattern using the Jena framework

import org.omg.CORBA.portable.InputStream;

import com.hp.hpl.jena.ontology.*;
import com.hp.hpl.jena.query.ARQ;
import com.hp.hpl.jena.query.Query;
import com.hp.hpl.jena.query.QueryFactory;
import com.hp.hpl.jena.rdf.model.*;
import com.hp.hpl.jena.util.*;
import com.hp.hpl.jena.vocabulary.OWL;
import com.hp.hpl.jena.vocabulary.RDF;
import com.hp.hpl.jena.vocabulary.RDFS;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

import com.hp.hpl.jena.query.QueryExecution;
import com.hp.hpl.jena.query.QueryExecutionFactory;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.query.ResultSet;
import com.hp.hpl.jena.rdf.model.Model;
import com.hp.hpl.jena.rdf.model.ModelFactory;
import com.hp.hpl.jena.reasoner.Reasoner;
import com.hp.hpl.jena.reasoner.ReasonerRegistry;
import com.hp.hpl.jena.reasoner.rulesys.RDFSRuleReasonerFactory;

import org.apache.jena.atlas.io.IndentedWriter;
import org.apache.log4j.Logger;

public class DataandOntology{

public static void main(String [] args) {
	
Model m2 = ModelFactory.createDefaultModel();
m2.read( "file:<INSERT LINK OF RDF DATA HERE>" );
m2.read( "file:<INSERT LINK OF RDF DATA HERE>" );
//etc...



//create empty ontologyModel
OntModel fOntology=ModelFactory.createOntologyModel(OntModelSpec.OWL_DL_MEM);
//read local ontology file (has to be saved in RDF/XML version)
fOntology.read("file:<INSERT LINK OF ONTOLOGY HERE>");


//Combine ontology and rdf data in one model
Model m_all = ModelFactory.createOntologyModel();
m_all.add(m2);
//m_all.add(m3);
//m_all.add(m4);
//m_all.add(m5);
m_all.add(fOntology);


/*   This is an example how to create statements with e.g. sameAs or subClassof
// Add statements
String exampleUri = "http://www.example.org/";
Resource airQualityData = m_all.createResource(exampleUri+"dataset/Bocholt_AirQualityData");
Resource airQualityDataSC = m_all.createResource(exampleUri+"#Air_quality_data");
Statement s = ResourceFactory.createStatement(airQualityData, RDFS.subClassOf,airQualityDataSC);
m_all.add(s); // add the statement (triple) to the model

Resource arsenic_onto = m_all.createResource("http://www.example.org/#Arsenic_and_inorganic_arsenic_compounds");
Resource arsenic_rdf = m_all.createResource("http://www.example.org/arsenic");
Resource qb = m_all.createResource("qb:observation");
Statement s2 = ResourceFactory.createStatement(arsenic_onto,OWL.sameAs,arsenic_rdf);
Statement s3 = ResourceFactory.createStatement(arsenic_rdf,RDF.type,qb);
m_all.add(s2); // add the statement (triple) to the model
m_all.add(s3);

*/

//Reasoner settings

//Reasoner reasoner = RDFSRuleReasonerFactory.theInstance().create(null);
//InfModel inf = ModelFactory.createInfModel(reasoner, m_all);

/*
Reasoner reasoner = ReasonerRegistry.getOWLReasoner();
reasoner = reasoner.bindSchema(fOntology);
InfModel infmodel = ModelFactory.createInfModel(reasoner, m_all);
*/

//Prebuilt standard configuration for the default OWL reasoner.
//Use this if you're creating an OWL Reasoner

Reasoner reasoner = ReasonerRegistry.getOWLReasoner();
//bind the reasoner to the ontology model
reasoner = reasoner.bindSchema(fOntology);
//Bind the reasoner to the data model into a new Inferred model
Model infModel = ModelFactory.createInfModel(reasoner,m_all);











// Sparql query
// Sparql query to retrieve info combination of ontology data set and rdf data.
// Combine the facts.
String sparqlQueryString = "PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>" +   
		"PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+   
		 "PREFIX qb:<http://purl.org/linked-data/cube#>"+
		"PREFIX owl:<http://www.w3.org/2002/07/owl#>"+
        "SELECT  ?a ?b ?c ?d ?SIR ?gkz ?inci ?e ?description  WHERE { " +
  
"?a rdf:type <http://www.example.org/Carcinogenes_BladderCancer> ."+
"?d <http://www.example.org/def/Municipality> ?b ."+
"?b <http://www.example.org/def/GKZ> ?gkz ."+
"?e qb:dataSet <http://www.example.org/dataset/ZEMA_dataset> ."+
"?e <http://www.example.org/def/GKZ> ?gkz ."+
"?e <http://www.example.org/def/Incident> ?inci ."+
"FILTER EXISTS {?b  <http://www.example.org/def/C34_2007_m_SIR> ?SIR . FILTER(?SIR>1)}"+

        "}"; 







Query query = QueryFactory.create(sparqlQueryString);
ARQ.getContext().setTrue(ARQ.useSAX);

//Executing the created query and stores its results in a ResultSet
QueryExecution qexec = QueryExecutionFactory.create(query, m_all);
ResultSet results = qexec.execSelect();

//Iterating the ResultSet to get all its elements 
while (results.hasNext()) {

    QuerySolution soln = results.nextSolution();   
    //Displaying on the screen the value of the variable
    //used in the SPARQL Query.
 
/*
 System.out.println(soln.get("?b"));
 System.out.println(soln.get("?gkz"));
 System.out.println(soln.get("?inci"));*/
 System.out.println(soln.get("?a"));
}
qexec.close();
}
}











/*

//list the statements in the Model
StmtIterator iter = m_all.listStatements();
//print out the predicate, subject and object of each statement
while (iter.hasNext()) {
Statement stmt = iter.nextStatement(); // get next statement
Resource subject = stmt.getSubject(); // get the subject
Property predicate = stmt.getPredicate(); // get the predicate
RDFNode object = stmt.getObject(); // get the object
System.out.print(subject.toString());
System.out.print(" " + predicate.toString() + " ");
if (object instanceof Resource) {
System.out.print(object.toString());
} else {
//object is a literal
System.out.print(" \"" + object.toString() + "\"");
}

 */

