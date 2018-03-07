const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const wkt = require('terraformer-wkt-parser');
import sections from './sections.js';

const map = {
	init: function(data) {
		console.log(data);

		mapboxgl.accessToken = 'pk.eyJ1IjoieW9lcndlbGkiLCJhIjoiY2plZmViOHNlMWhhazMza3R5MmE5NG9jcyJ9.Bm8bYiLXnQ41Nv_Sio1xpA';
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v9',
			center: [4.899431, 52.369189],
			zoom: 12.5,
			minZoom: 12.5,
			maxZoom: 15,
		});

		// Add geolocate control to the map.
		map.addControl(new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		}));

		//Format the data
		this.formatData(data);

		//Add markers to the map
		data.forEach(d => {

			// create a circle for each building
			const el = document.createElement('a');
			el.className = 'marker';
			el.href = "#buildings/" + d.buildingLabel.value;

			//Change the size of the cricles to the amount of collections
			el.style.width = this.circleSize(d) + "px";
			el.style.height = this.circleSize(d) + "px";
			el.style.backgroundColor = "hsl" + this.circleColor(d);


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

	circleColor: function(d) {
		if (d.count.value > 0 && d.count.value < 50) {
			return "(5, 74%, 38%)";
		} else if (d.count.value > 50 && d.count.value < 100) {
			return "(5, 74%, 40%)";
		} else if (d.count.value > 100 && d.count.value < 250) {
			return "(5, 74%, 42%)";
		} else if (d.count.value > 250 && d.count.value < 500) {
			return "(5, 74%, 45%)";
		} else if (d.count.value > 500 && d.count.value < 750) {
			return "(5, 74%, 47%)";
		} else if (d.count.value > 750 && d.count.value < 1000) {
			return "(5, 74%, 49%)";
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
