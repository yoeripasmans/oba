import render from './render';

const sort = {
	getInput: function(data) {
		const sortButton = document.querySelector('.sort-button');
		sortButton.addEventListener('click', e => this.onYear(data));
	},

	onYear: function(data) {
		const sortedData = data.sort(function(b, a) {
			var keyA = new Date(a.date.value),
				keyB = new Date(b.date.value);
			// Compare the 2 dates
			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		});

		render.images(sortedData);
	},
	reset: function(data) {
		const sortedData = data.sort(function(a, b) {
			var keyA = new Date(a.date.value),
				keyB = new Date(b.date.value);
			// Compare the 2 dates
			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		});

		render.images(sortedData);
	}
};

export default sort;
