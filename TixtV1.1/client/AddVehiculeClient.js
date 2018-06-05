const React = require('react');
const ReactDOM = require('react-dom');
const AddVehiculeComponent = 
  React.createFactory(require('../components/addVehiculeComponent'));
 
function decodeHTML(strToDecode) {
	const elem = document.createElement("div");
	elem.innerHTML = document.getElementById('context').textContent;
	return elem.textContent;
}

const context = JSON.parse(decodeHTML(document.getElementById('context').textContent));

const mountNode = document.getElementById("addVehicule-parent");

ReactDOM.render(AddVehiculeComponent);