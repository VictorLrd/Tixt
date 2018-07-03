var express = require('express');
const mysql = require('mysql');
var path = require('path');
const bodyParser = require('body-parser');


//Connection BD
var config = require('./configs.json');

var connection = mysql.createConnection(config.mysql);
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
global.db = connection;


//API
var requete = require('./requete.js');
var app = express();
app.use(express.json());

app.route('/voiture') 
  .get(function (req, res) {
    res.json(requete.allVehicule());
  })
  .post(function(req, res){
    res.json(requete.addVoiture(req));
  });

app.get('/login/:login.:mdp' , function (req, res) {
  res.json(requete.login(req.login, req.mdp));
})

app.get('/inscription' , function (req, res) {
  res.json(requete.signup(req));
})


//Serveur en ecoute :
var http = require('http');
var server = http.createServer(app);
server.listen(4007);

module.exports = app;


