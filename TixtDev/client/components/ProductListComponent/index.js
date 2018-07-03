"use strict";

const React = require('react');
const Header = require('./Header');
const Slider = require('./Slider');
const Vehicules = require('./Vehicules');
const Split = require('./Split');
const Footer = require('./Footer');

class ProductListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { products: this.props.products };
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(productName) {
		const url = '/products?productName=' + productName;
		$.get(url, data => {
			this.setState({
				products: data
			});
		});
	}

	writeVehicule() {
		console.log("NIQUE TA MERE");
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Header, { header: this.header }),
			React.createElement(Slider, { Slider: this.slider }),
			React.createElement(Vehicules, { Vehicules: this.vehicules }),
			React.createElement(Split, { Split: this.split }),
			React.createElement(Footer, { Footer: this.footer })
		);
	}
}

module.exports = ProductListComponent;