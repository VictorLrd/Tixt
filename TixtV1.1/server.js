"use strict"

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const path = require('path');
const _ = require('underscore');
const ProductListComponent = React.createFactory(require('./components/ProductListComponent'));
const data = require('./data/products.js');


const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');

var config = require('config.json')('configs.json');

const connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

connection.connect();

global.db = connection;

var sql = "SELECT * FROM `utilisateur`";

app.get('/barbero', function (req, res) {
  db.query(sql, function (err, results) {
    console.log(results);
    res.send("COUCOU");

  });
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-livereload')());

app.get('/', function (req, res) {
  const products = {
    'products': data
  };

  const htmlProductListComponent = ReactDOMServer.renderToString(
    ProductListComponent(products)
  );

  res.render("index", {
    component: htmlProductListComponent,
    context: JSON.stringify(products)
  });

});

app.get('/products', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  const productName = req.query.productName.toLowerCase();
  const productContainingNameParam =
    _.filter(data, (p) => p.name.toLowerCase().indexOf(productName) > -1);

  res.send(JSON.stringify(productContainingNameParam));
});

app.listen(3000);