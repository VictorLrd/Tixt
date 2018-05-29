"use strict"

const React = require('react');
const SearchBar = require('./SearchBar');
const ProductTable = require('./ProductTable');
const Header = require('./Header');
const Slider = require('./Slider');
const Login = require('./Login');

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

 	render() {
 		return (
 			<div>
				<Header header={this.header}/>
				<Login login={this.login}/>
				<Slider Slider={this.index}/>
 			</div>
 		)
  	}
}

module.exports = ProductListComponent;