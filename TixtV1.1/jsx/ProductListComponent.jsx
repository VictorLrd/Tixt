"use strict"

const React = require('react');
const SearchBar = require('./SearchBar');
const ProductTable = require('./ProductTable');
const Index = require('./index');

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
 				<SearchBar onSearch={this.handleSearch} />
 				<ProductTable products={this.state.products}/>
				<Index index={this.index}/>
 			</div>
 		)
  	}
}

module.exports = ProductListComponent;