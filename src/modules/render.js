import sections from './sections';
import transparency from './vendor/transparency.min.js';

const render = {

	detail: function(data) {
		const directives = {
			img: {
				src: function(params) {
					return this.img.value;
				}
			},
			name: {
				text: function(params)  {
					return this.value;
				}
			}

		};
		//Render detail section
		Transparency.render(document.querySelector('#detail header'), data.buildingLabel, directives);
		//Toggle detail screen
		sections.toggle('detail');
		//Render picture section
		Transparency.render(document.querySelector('#detail ul'), data.images, directives);
	},

};

export default render;
