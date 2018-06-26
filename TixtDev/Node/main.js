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




/*
REQUETE NodeJS

/utilisateur/:mail.:mdp

  `utilisateurs_id` int(5) NOT NULL AUTO_INCREMENT,
  `mail` varchar(250) NOT NULL,
  `mdp` varchar(15) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `date_naissance` date NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `code_postal` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `pays` varchar(100) NOT NULL,


/voiture

  `voiture_id` int(5) NOT NULL AUTO_INCREMENT,
  `utilisateurs_id` int(5) NOT NULL ,
  `marque` varchar(100) NOT NULL,
  `modele` varchar(100) NOT NULL,
  `annee` date NOT NULL,
  `km` int(8) NOT NULL,
  `nb_place` int(2) NOT NULL,
  `energie` varchar(100) NOT NULL,
  `boite_vitesse` varchar(100) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `prix` int(6) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `photos` BLOB NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `description` text NOT NULL,

/
*/