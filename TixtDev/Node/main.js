var express = require('express');
const mysql = require('mysql');
var path = require('path');
const bodyParser = require('body-parser');


//COnnection BD
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

var req = {
          "body": {
            "marque": "citro",
            "modele": "c3",
            "annee": "2000-10-23",
            "km": "100000",
            "nb_place": "5",
            "energie": "essence",
            "boite_vitesse": "manuel",
            "adresse": "dqsdqda",
            "prix": "25",
            "contact": "321332",
            "date_debut": "2018-10-01",
            "date_fin": "2020-01-01",
            "description": "voiture de location",
            "voiture_id": "4"
          }
        }

requete.updateVehicule(req);
