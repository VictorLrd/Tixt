"use strict"

const React = require('react');
const SearchBar = require('./SearchBar');
const ProductTable = require('./ProductTable');
const Header = require('./Header');
const Slider = require('./Slider');
const Login = require('./Login');
const AddVehicule = require('./AddVehicule');

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
				<Login login={this.login}/>
				<Slider Slider={this.index}/>
				<AddVehicule AddVehicule={this.AddVehicule}/>
 			</div>
 		)
  	}
}

module.exports = ProductListComponent;