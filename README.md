# `C`ancer`E`xplorer

* * *
## Linked Data-Based Spatial Cause-Effect Relationships Explorer
* * *

### Introduction
The project deals with cancer related cause-effect relationships. Moreover, it aims to create a
web-based assistance system for the exploration of cause-effect relationships of selected cancer
types in a predefined geographic region.
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

**Status quo:**

This is an early development step version.

Presented statistical epidemiological values (SIR and CI values):
For demonstration purpose only random example values are integrated.
Random values of the municipalities are uploaded. In addition, these values are distributed randomly among all municipalities for each new query.


This brings along:

- First insights of possibilities of the CancerExplorer
- Limited information retrieval (for development purposes only a test RDF repository can be queried) 
- Long list of issues (refresh your browser view after broken queries)

Issue list:
(https://github.com/lodum/CancerExplorer/issues)

**Future:**

It is planned that the project is going to be further developed during Friedrich Müller's master thesis.



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



Moreover, included tooltips help you to understand the context.



![CancerExplorer application][5]







By providing interactivity, meaningful visualisations to accompany the
maps, users are supported in making interpretations of maps while reflecting on the underlying
uncertainty.

* * *
### Further information
- Contact: http://lodum.de/contact/
- Website: http://lodum.de/about/

-----

[1]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/screenshot_overview.png 
[2]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/screenshot_overview2.png 
[3]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/explorer.gif
[4]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/background_details.png
[5]: https://github.com/lodum/CancerExplorer/blob/master/web%20application/libraries/Images/background_tooltips.png