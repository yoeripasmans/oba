import map from './map.js';
import render from './render.js';

const api = {

	getBuildings: function() {

		const sparqlQuery = `

		PREFIX hg: <http://rdf.histograph.io/>
		PREFIX dct: <http://purl.org/dc/terms/>
		PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		PREFIX geo: <http://www.opengis.net/ont/geosparql#>

		SELECT ?building ?buildingLabel ?wkt (COUNT(DISTINCT ?cho) AS ?count)  WHERE {
		    ?building a hg:Building .
		    ?building rdfs:label ?buildingLabel .
		    ?cho dct:spatial ?building .
		    ?building geo:hasGeometry/geo:asWKT ?wkt .
		}
		GROUP BY ?building ?buildingLabel ?wkt
		ORDER BY DESC (?count)
		LIMIT 50

 		`;
		//Encode the query
		const encodedQuery = encodeURIComponent(sparqlQuery);

		//Save the data url
		const queryUrl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/endpoint/sparql?default-graph-uri=&query=' + encodedQuery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';

		fetch(queryUrl)
			.then(response => response.json()) // transform the data into json
			.then(data => {

				let results = data.results.bindings; // get the results
				console.log(results);

				map.init(results);

			})
			.catch(error => {
				// if there is any error you will catch them here
				console.log(error);
			});
	},
	getBuildingDetail: function(name) {
		const sparqlQuery = `

		PREFIX hg: <http://rdf.histograph.io/>
		PREFIX dct: <http://purl.org/dc/terms/>
		PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		PREFIX foaf: <http://xmlns.com/foaf/0.1/>
		PREFIX void: <http://rdfs.org/ns/void#>

		SELECT ?cho ?building ?img ?col  WHERE {

		 ?cho dct:spatial ?b .
		 ?b a hg:Building .
		 ?b rdfs:label ?building .

		 ?cho foaf:depiction ?img .
		 ?cho void:inDataset ?col .

		 FILTER REGEX(?building,"${name}")
		}

		LIMIT 150

		`;
		//Encode the query
		const encodedQuery = encodeURIComponent(sparqlQuery);

		//Save the data url
		const queryUrl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/endpoint/sparql?default-graph-uri=&query=' + encodedQuery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';

		fetch(queryUrl)
			.then(response => response.json()) // transform the data into json
			.then(data => {

				let results = data.results.bindings; // get the results
			
				console.log(results);
				render.detail(results);

			})
			.catch(error => {
				// if there is any error you will catch them here
				console.log(error);
			});

	}
};

export default api;
