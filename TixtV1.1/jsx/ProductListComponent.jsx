"use strict"

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
		$.get(url,  (data) => {
			this.setState({
				products: data
			})
		});
	}

	writeVehicule() {
		console.log("NIQUE TA MERE");
	}

 	render() {
 		return (
 			<div>
				<Header header={this.header}/>
				<Slider Slider={this.slider}/>
				<Vehicules Vehicules={this.vehicules}/>
				<Split Split={this.split}/>
				<Footer Footer={this.footer}/>
 			</div>
 		)
  	}
}

module.exports = ProductListComponent;