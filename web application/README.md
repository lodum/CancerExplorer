# `C`ancer`E`xplorer-Prototype

* * *
## Linked Data-Based Spatial Cause-Effect Relationships Explorer
* * *

### Introduction
The project deals with cancer related cause-effect relationships. Moreover, it aims to create a
web-based assistance system for the exploration of cause-effect relationships of selected cancer
types in a predefined geographic region.
The project is part of [LIFE](http://lodum.de/life/ "LIFE project").
The work is a result of an external semester contribution, which was mainly focused on the modelling part (domain ontology, information aggregation).

The current state is that cancer cause-effect information is available on the web as open data but in most instances nonaggregated
and partially cumbersome to access. So, data collection can be the most time-consuming and
expensive stage of epidemiological research. In this context, semantic technologies aid to the linkage of
shared resources in a way that makes meanings explicit and automatic associations possible.
* * *
### Purpose
The purpose of the system is to communicate spatial interdisciplinary information to the user like
the distribution of emission sources of carcinogens or what kind of prevailing substances are at the
same time carcinogens and cause primarily a certain cancer type, but not to make decisive analysis
possible.
The application presents possible causes for high cancer incidence rates in a spatial context. It does so, by
using the chain linking of different variables that is encoded as linked data.

* * *  
### Status

**Current status:**


Presented statistical epidemiological values (SIR and CI values):
For demonstration purpose only random example values are integrated.
Random values of the municipalities are uploaded. In addition, these values are distributed randomly among all municipalities for each new query.


Issue list:
(https://github.com/lodum/CancerExplorer/issues)



* * *
### Features

#### Selection of visualizations:
The application allows to discover epidemiological and environmental data by selected visualizations:

![CancerExplorer application][1]

#### Get detail view:
It is possible to receive detailed spatio-temporal information about emitter and their emissions.

![CancerExplorer application][2]

#### Exploration of environmental and epidemiological data in a parallel,visual way:
The view helps to explore epidemiological and environmental data in a parallel way.
This interactive visual representations allows the user to detect patterns and structures in the
data that would be difficult to realise in a non-visual way

![CancerExplorer application][3]


#### Get background information about cancer cause-effect relationships:
Information, derived from IARC monographs, gives you instances for emission sources, emission processes, transport ways, exposed groups,
exposed areas, ways of consumption, IARC classification numbers, monography number and CAS number.

![CancerExplorer application][4]


Moreover, included background information helps you to understand the context.

![CancerExplorer application][5]


#### Spatial queries of IARC related information:
Carcinogens of certain cancer types can be queried in context of spatial areas like municipalities.
E.g. available data sets that include information about the selected carcinogen and region can be shown.

![CancerExplorer application][6]


#### Access to further linked information:
It is possible to gain further knowledge about included data like about a specific carcinogen e.g. arsen or emission processes like air pollution.
This is realized through integration of descriptive information and further links by live queries from external sources like DBpedia.
Furthermore, links from ontology or RDF data sets are explorable.

![CancerExplorer application][7]


#### Supportive graph visualizations:
It is possible to display the cancer related cause-effect relationships of a chosen cancer type and carcinogen. The arrangement of the nodes can be edited.
This allows to explore the relations, besides a table view, in a  graphical way.
Moreover, query results of epidemiological and environmental information can be displayed in a chart for a better overview.

![CancerExplorer application][8]


#### Reusability of data:
The application allows to access the used RDF data.
Further, CSV and JSON file format are supported.

![CancerExplorer application][9]









* * *
By providing interactivity, meaningful visualisations to accompany the
maps, users are supported in making interpretations of maps while reflecting on the underlying
uncertainty.


Information about how to start and background of the app you can find in a small wiki:
https://github.com/lodum/CancerExplorer/wiki/
* * *
* * *
A running demo of the application you find here:
###<div align="center">   [DEMO](http://www.friedrichmueller-gi.de "Demo Site")</div>

* * *
* * *

### Further information
- Contact: http://lodum.de/contact/
- Website Project: http://lodum.de/about/
- Website Author: http://friedrichmueller.github.io

-----

[1]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/screenshot_overview.png 
[2]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/screenshot_overview2.png 
[3]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/explorer.gif
[4]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/background_details.png
[5]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/background_tooltips.png
[6]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/Animation_IARCSpatial.gif
[7]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/Animation_Linkedinfo.gif
[8]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/Graphics.png
[9]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/download.png