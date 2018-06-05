
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `utilisateur` (
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
  PRIMARY KEY (`utilisateurs_id`)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `voiture` (
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
  PRIMARY KEY (`voiture_id`),
  FOREIGN KEY (utilisateurs_id)
  REFERENCES utilisateur(utilisateurs_id)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int(5) NOT NULL AUTO_INCREMENT,
  `voiture_id` int(5) NOT NULL,
  `utilisateurs_id` int(5) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  PRIMARY KEY (`location_id`),
  FOREIGN KEY (utilisateurs_id)
  REFERENCES utilisateur(utilisateurs_id),
  FOREIGN KEY (voiture_id)
  REFERENCES voiture(voiture_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `jour_disponible` (
  `jour_disponible_id` int(5) NOT NULL AUTO_INCREMENT,
  `voiture_id` int(5) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`jour_disponible_id`),
  FOREIGN KEY (voiture_id)
  REFERENCES voiture(voiture_id)
) ENGINE=InnoDB;



