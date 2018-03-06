var wkt = require('terraformer-wkt-parser');
import sections from './sections.js';

const map = {
	init: function(data) {

		var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

		mapboxgl.accessToken = 'pk.eyJ1IjoieW9lcndlbGkiLCJhIjoiY2plZmViOHNlMWhhazMza3R5MmE5NG9jcyJ9.Bm8bYiLXnQ41Nv_Sio1xpA';
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v9',
			center: [4.899431, 52.369189], //Starting point (long, lat)
			zoom: 12.5, //Zoom level for Mapbox
			minZoom: 12.5,
			maxZoom: 15,
		});

		//Format the data
		this.formatData(data);

		// add markers to map
		data.forEach(d => {

			// create a HTML element for each feature
			var el = document.createElement('a');
			el.className = 'marker';
			el.href = "#buildings/" + d.buildingLabel.value;

			el.style.width = this.circleSize(d) + "px";
			el.style.height = this.circleSize(d) + "px";


			el.addEventListener("mouseover", function() {
				console.log(d.buildingLabel.value);
			});

			// make a marker for each feature and add to the map
			new mapboxgl.Marker(el)
				.setLngLat(d.projected)
				.addTo(map);
		});

	},

	circleSize: function(d) {
		if (d.count.value > 0 && d.count.value < 50) {
			return 10;
		} else if (d.count.value > 50 && d.count.value < 100) {
			return 12;
		} else if (d.count.value > 100 && d.count.value < 250) {
			return 15;
		} else if (d.count.value > 250 && d.count.value < 500) {
			return 17;
		} else if (d.count.value > 500 && d.count.value < 750) {
			return 20;
		} else if (d.count.value > 750 && d.count.value < 1000) {
			return 30;
		}
	},


	formatData: function(data) {
		//Format the data to get the right latitude and longitude
		data.forEach(d => {
			d.wkt = wkt.parse(d.wkt.value);
			if (d.wkt.type == "Point") {
				d.projected = [d.wkt.coordinates[0], d.wkt.coordinates[1]];
			} else {
				d.projected = [d.wkt.coordinates[0][0][0], d.wkt.coordinates[0][0][1]];
			}
		});
	}
};
export default map;
