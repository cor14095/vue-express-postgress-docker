# nrs-fullstack

## Deployment

This project is build with docker, once you have it installed run:
```
docker compose up --build
```

This will run 3 services:
1) *database*: Running on `port: 5055`
2) *backend*: Running on `port: 8000`
3) *frontend*: Running on `port: 3000`

The db will self populate and this might take a while, so you might see some errors on the backend while tables populate, just give it a second.

## NRS Fullstack assignment:

Please develop a web app with VueJS 2 - that uses a JSON APIs to retrieve and present data 
about states and details about their population.

The application should contain:
1) a scrollable list of state names.
     a. When a state in the list is single clicked, a second screen area should show:
         i. the state name
         ii. the overall population of the state
         iii. the number of counties in that stat
         iv. the list of counties in that state along with their population
         v. the sum of the county populations
         vi. an indication of whether the sum of the county populations equals that in the state
            “record”.
     b. When a state in the list is double-clicked, that state should be highlighted (or
        un-highlighted) in the list

2) A second scrollable list of the state names that is basically a duplicate of the first list 
and also shows the highlighted status of states, and can also be used to single or double click.

3) A “filter” box that is used to filter items in the second list (only) based on the letters 
entered in the filter box. So, if I enter “ne”, I will only see states in the second list that 
have “ne” anywhere in the state name (e.g. Maine, Nevada, etc.). The filter should be case-insensitive. 
When the filter box is empty, all states should be shown. The filter should be applied in “real-time” 
as the user is typing.

All in all, there are 4 areas on the screen:

- 2 scrolling lists for the states [keep the physical length of the areas small so that it does scroll]
- 1 search box (second list only)
- 1 scrollable state detail area

The data for populating the state list should be dynamically loaded and come from:

	http://localhost:nnn/states


The details of the state should come from the “detail” link in the state object.

The layout should look something like this:

```
			| search box |
|_______State name________|  |____State name_____|   |____Detail____|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
|_________________________|  |___________________|   |______________|
```

## Specs

In order to run the web application build the backend server with the following framework at your choice : 

- PHP 8  + Slim
- Node JS + Express

1) Provide a database schema representing the tables you would need to support the states and 
counties (POSTGRES) and import them from the JSON files provided in the attached zip files.

2) Provide the API calls needed to support the states and counties calls

Your solution should be developed as shippable and runnable code, preferably running in containers with docker.

Your homework should be provided as a GIT repository at your choice (gitHub, BitBucket , etc .).

## NB:

Attached file states.txt is a zip file containing data to support you POSTGRES data tables.
Rename the states.txt to states.zip and uncompress it.

USA-states.json contains the data for fetching all the states and their details.
{state}.JSON contains all the details relative to a state (county, population)
