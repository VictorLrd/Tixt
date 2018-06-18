"use strict";

const React = require('react');
const SearchBar = require('./SearchBar');
const ProductTable = require('./ProductTable');
const Header = require('./Header');
const Slider = require('./Slider');
const Vehicules = require('./Vehicules');
const Login = require('./Login');

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

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(Header, { header: this.header }),
			React.createElement(Slider, { Slider: this.slider }),
			React.createElement(Vehicules, { Vehicules: this.Vehicules })
		);
	}
}

module.exports = ProductListComponent;