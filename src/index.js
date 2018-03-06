require('./assets/scss/index.scss');
import api from './modules/api.js';
import router from './modules/router.js';
import map from './modules/map.js';

(function() {

	const app = {
		//Starts app with initialize the router and gets the data
		init: function() {
			router.init();
			api.getBuildings();
		}
	};
	//Start app
	app.init();

})();
