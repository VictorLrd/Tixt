"use strict";

const React = require('react');

class ProductTable extends React.Component {

	render() {
		const rows = [];
		this.props.products.forEach(p => rows.push(React.createElement(ProductItem, { key: p.id, product: p })));

		return rows.length > 0 ? this.createProductTable(rows) : this.createProductNotFoundAlert();
	}

	createProductTable(rows) {
		return React.createElement(
			"table",
			{ className: "table table-hover" },
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Nom"
					),
					React.createElement(
						"th",
						null,
						"Quantit\xE9"
					),
					React.createElement(
						"th",
						null,
						"Lieu de frabrication"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				rows
			)
		);
	}

	createProductNotFoundAlert() {
		return React.createElement(
			"div",
			{ className: "alert alert-info" },
			React.createElement(
				"strong",
				null,
				"Aucun produit trouv\xE9 !"
			)
		);
	}
}

class ProductItem extends React.Component {
	render() {
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				this.props.product.name
			),
			React.createElement(
				"td",
				null,
				this.props.product.quantity
			),
			React.createElement(
				"td",
				null,
				React.createElement("img", { src: "img/blank.gif", className: "flag flag-" + this.props.product.from.suffix,
					alt: this.props.product.from.title,
					title: this.props.product.from.title })
			)
		);
	}
}

module.exports = ProductTable;