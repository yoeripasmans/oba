/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var sparqlquery = '\n\n\nPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX dct: <http://purl.org/dc/terms/>\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\nPREFIX sem: <http://semanticweb.cs.vu.nl/2009/11/sem/>\nSELECT * WHERE {\n  ?gebouw dc:type <http://vocab.getty.edu/aat/300007780> .\n  ?cho dct:spatial ?gebouw .\n  ?gebouw rdfs:label ?gebouwnaam .\n  ?cho foaf:depiction ?img .\n  ?cho sem:hasBeginTimeStamp ?date .\n}\n\n\n\n ';
// more fun dc:types: 'affiche', 'japonstof', 'tegel', 'herenkostuum'
// more fun dc:subjects with Poster.: 'Privacy.', 'Pop music.', 'Music.', 'Squatters movement.'

var encodedquery = encodeURIComponent(sparqlquery);

var queryurl = 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/endpoint/sparql?default-graph-uri=&query=' + encodedquery + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on';

fetch(queryurl).then(function (resp) {
	return resp.json();
}) // transform the data into json
.then(function (data) {

	rows = data.results.bindings; // get the results
	console.log(rows);

	imgdiv = document.getElementById('images');

	for (i = 0; i < rows.length; ++i) {

		var img = document.createElement('img');
		img.src = rows[i].img.value;
		img.title = rows[i].img.value;
		imgdiv.appendChild(img);
	}
}).catch(function (error) {
	// if there is any error you will catch them here
	console.log(error);
});

var chart = d3.timeline();

var svg = d3.select("#timeline1").append("svg").attr("width", 500).datum(testData).call(chart);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU3NWExNjEzZmI1ZjdhMTg3ZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzcGFycWxxdWVyeSIsImVuY29kZWRxdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInF1ZXJ5dXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwicm93cyIsInJlc3VsdHMiLCJiaW5kaW5ncyIsImNvbnNvbGUiLCJsb2ciLCJpbWdkaXYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImxlbmd0aCIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ2YWx1ZSIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJjYXRjaCIsImVycm9yIiwiY2hhcnQiLCJkMyIsInRpbWVsaW5lIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImRhdHVtIiwidGVzdERhdGEiLCJjYWxsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REEsbUJBQUFBLENBQVEsQ0FBUjs7QUFFQSxJQUFJQyxnaUJBQUo7QUFvQkE7QUFDQTs7QUFFQSxJQUFJQyxlQUFlQyxtQkFBbUJGLFdBQW5CLENBQW5COztBQUVBLElBQUlHLFdBQVcseUdBQXlHRixZQUF6RyxHQUF3SCxnRUFBdkk7O0FBRUFHLE1BQU1ELFFBQU4sRUFDRUUsSUFERixDQUNPLFVBQUNDLElBQUQ7QUFBQSxRQUFVQSxLQUFLQyxJQUFMLEVBQVY7QUFBQSxDQURQLEVBQzhCO0FBRDlCLENBRUVGLElBRkYsQ0FFTyxVQUFTRyxJQUFULEVBQWU7O0FBRXBCQyxRQUFPRCxLQUFLRSxPQUFMLENBQWFDLFFBQXBCLENBRm9CLENBRVU7QUFDOUJDLFNBQVFDLEdBQVIsQ0FBWUosSUFBWjs7QUFHQUssVUFBU0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixDQUFUOztBQUdBLE1BQUtDLElBQUksQ0FBVCxFQUFZQSxJQUFJUixLQUFLUyxNQUFyQixFQUE2QixFQUFFRCxDQUEvQixFQUFrQzs7QUFFakMsTUFBSUUsTUFBTUosU0FBU0ssYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FELE1BQUlFLEdBQUosR0FBVVosS0FBS1EsQ0FBTCxFQUFRRSxHQUFSLENBQVlHLEtBQXRCO0FBQ0FILE1BQUlJLEtBQUosR0FBWWQsS0FBS1EsQ0FBTCxFQUFRRSxHQUFSLENBQVlHLEtBQXhCO0FBQ0FSLFNBQU9VLFdBQVAsQ0FBbUJMLEdBQW5CO0FBRUE7QUFDRCxDQW5CRixFQW9CRU0sS0FwQkYsQ0FvQlEsVUFBU0MsS0FBVCxFQUFnQjtBQUN0QjtBQUNBZCxTQUFRQyxHQUFSLENBQVlhLEtBQVo7QUFDQSxDQXZCRjs7QUF5QkEsSUFBSUMsUUFBUUMsR0FBR0MsUUFBSCxFQUFaOztBQUVBLElBQUlDLE1BQU1GLEdBQUdHLE1BQUgsQ0FBVSxZQUFWLEVBQXdCQyxNQUF4QixDQUErQixLQUEvQixFQUFzQ0MsSUFBdEMsQ0FBMkMsT0FBM0MsRUFBb0QsR0FBcEQsRUFDUkMsS0FEUSxDQUNGQyxRQURFLEVBQ1FDLElBRFIsQ0FDYVQsS0FEYixDQUFWLEM7Ozs7OztBQ3hEQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTc1YTE2MTNmYjVmN2ExODdkYSIsInJlcXVpcmUoJy4uL2Nzcy9pbmRleC5zY3NzJyk7XG5cbnZhciBzcGFycWxxdWVyeSA9IGBcblxuXG5QUkVGSVggcmRmOiA8aHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIz5cblBSRUZJWCByZGZzOiA8aHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIz5cblBSRUZJWCBkYzogPGh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvPlxuUFJFRklYIGRjdDogPGh0dHA6Ly9wdXJsLm9yZy9kYy90ZXJtcy8+XG5QUkVGSVggZm9hZjogPGh0dHA6Ly94bWxucy5jb20vZm9hZi8wLjEvPlxuUFJFRklYIHNlbTogPGh0dHA6Ly9zZW1hbnRpY3dlYi5jcy52dS5ubC8yMDA5LzExL3NlbS8+XG5TRUxFQ1QgKiBXSEVSRSB7XG4gID9nZWJvdXcgZGM6dHlwZSA8aHR0cDovL3ZvY2FiLmdldHR5LmVkdS9hYXQvMzAwMDA3NzgwPiAuXG4gID9jaG8gZGN0OnNwYXRpYWwgP2dlYm91dyAuXG4gID9nZWJvdXcgcmRmczpsYWJlbCA/Z2Vib3V3bmFhbSAuXG4gID9jaG8gZm9hZjpkZXBpY3Rpb24gP2ltZyAuXG4gID9jaG8gc2VtOmhhc0JlZ2luVGltZVN0YW1wID9kYXRlIC5cbn1cblxuXG5cbiBgO1xuLy8gbW9yZSBmdW4gZGM6dHlwZXM6ICdhZmZpY2hlJywgJ2phcG9uc3RvZicsICd0ZWdlbCcsICdoZXJlbmtvc3R1dW0nXG4vLyBtb3JlIGZ1biBkYzpzdWJqZWN0cyB3aXRoIFBvc3Rlci46ICdQcml2YWN5LicsICdQb3AgbXVzaWMuJywgJ011c2ljLicsICdTcXVhdHRlcnMgbW92ZW1lbnQuJ1xuXG52YXIgZW5jb2RlZHF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KHNwYXJxbHF1ZXJ5KTtcblxudmFyIHF1ZXJ5dXJsID0gJ2h0dHBzOi8vYXBpLmRhdGEuYWRhbWxpbmsubmwvZGF0YXNldHMvQWRhbU5ldC9hbGwvc2VydmljZXMvZW5kcG9pbnQvc3BhcnFsP2RlZmF1bHQtZ3JhcGgtdXJpPSZxdWVyeT0nICsgZW5jb2RlZHF1ZXJ5ICsgJyZmb3JtYXQ9YXBwbGljYXRpb24lMkZzcGFycWwtcmVzdWx0cyUyQmpzb24mdGltZW91dD0wJmRlYnVnPW9uJztcblxuZmV0Y2gocXVlcnl1cmwpXG5cdC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSkgLy8gdHJhbnNmb3JtIHRoZSBkYXRhIGludG8ganNvblxuXHQudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cblx0XHRyb3dzID0gZGF0YS5yZXN1bHRzLmJpbmRpbmdzOyAvLyBnZXQgdGhlIHJlc3VsdHNcblx0XHRjb25zb2xlLmxvZyhyb3dzKTtcblxuXG5cdFx0aW1nZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlcycpO1xuXG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRpbWcuc3JjID0gcm93c1tpXS5pbWcudmFsdWU7XG5cdFx0XHRpbWcudGl0bGUgPSByb3dzW2ldLmltZy52YWx1ZTtcblx0XHRcdGltZ2Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG5cdFx0fVxuXHR9KVxuXHQuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcblx0XHQvLyBpZiB0aGVyZSBpcyBhbnkgZXJyb3IgeW91IHdpbGwgY2F0Y2ggdGhlbSBoZXJlXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9KTtcblxudmFyIGNoYXJ0ID0gZDMudGltZWxpbmUoKTtcblxudmFyIHN2ZyA9IGQzLnNlbGVjdChcIiN0aW1lbGluZTFcIikuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCA1MDApXG5cdC5kYXR1bSh0ZXN0RGF0YSkuY2FsbChjaGFydCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvY3NzL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==