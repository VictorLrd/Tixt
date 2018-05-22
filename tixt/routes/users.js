var express = require('express');
var router = express.Router();

var config = require('config.json')('configs.json');

exports.signup = function (req, res) {
    message = '';
    if (req.method == "POST") {
        var post = req.body;
        var mail = post.mail;
        var mdp = post.mdp;
        var prenom = post.prenom;
        var nom = post.nom;
        var date_naissance = post.date_naissance;
        var adresse = post.adresse;
        var code_postal = post.code_postal;
        var ville = post.ville;
        var pays = post.pays;

        var sql = "INSERT INTO `utilisateur` (`utilisateurs_id`, `mail`, `mdp`, `prenom`, `nom`, `date_naissance`, `adresse`, `code_postal`, `ville`, `pays`) VALUES " + mail + "','" + mdp + "','" + prenom + "','" + nom + "','" + date_naissance + "','" + adresse + "','" + code_postal + "','" + ville + "','" + pays + "')";
        var query = db.query(sql, function (err, result) {

            message = "Félicitation ! Vous avez votre compte !";
            res.render('signup.ejs', {
                message: message
            });
        });

    } else {
        res.render('signup');
    }
};

exports.login = function (req, res) {
    var message = '';
    var sess = req.session;

    if (req.method == "POST") {
        var post = req.body;
        var mail = post.mail;
        var pass = post.password;

        var sql = "SELECT utilisateurs_id, mail, prenom FROM `utilisateur` WHERE `mail`='" + mail + "' and password = '" + pass + "'";
        db.query(sql, function (err, results) {
            if (results.length) {
                req.session.userId = results[0].id;
                req.session.user = results[0];
                res.redirect('/home/dashboard');
            } else {
                message = 'Erreur de login';
                res.render('index.ejs', {
                    message: message
                });
            }

        });
    } else {
        res.render('index.ejs', {
            message: message
        });
    }

};


exports.dashboard = function (req, res, next) {

    var config = require('config.json')('./configs.json');
    var user = req.session.user,
        userId = req.session.userId;
    if (userId == null) {
        res.redirect("/login");
        return;
    }

    var sql = "SELECT * FROM `users` WHERE `id`='" + userId + "'";

    db.query(sql, function (err, results) {
        res.render('dashboard.ejs', {
            user: user
        });
    });
};

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect("/login");
    })
};

exports.addVoiture = function(req,res){
  var sess = req.session;
  


}