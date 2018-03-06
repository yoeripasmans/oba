import sections from './sections';
import transparency from './vendor/transparency.min.js';

const render = {

	detail: function(data) {
		var directives = {
			img: {
				src: function(params) {
					return this.img.value;
				}
			}

		};

		Transparency.render(document.querySelector('#detail ul'), data, directives);
	},

};

export default render;
