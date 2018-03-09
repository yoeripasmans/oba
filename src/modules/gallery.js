var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');
import loader from './loader.js';

const gallery = {
	init: function() {
		// vanilla JS
		// init with element
		var grid = document.querySelector('.grid');

		var msnry = new Masonry(grid, {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			gutter: 5,
			percentPosition: true,
			horizontalOrder: true
		});

		imagesLoaded(grid).on('progress', function() {
			// layout Masonry after each image loads
			msnry.layout();

		});
		imagesLoaded(grid).on('done', function() {
			// layout Masonry after each image loads


		});

	}
};

export default gallery;
