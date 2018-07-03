# Back project TixT

Partie back du projet Tixt. Api permettant de récupérer des donnée d’une base de donnée MySQL.

## 1 - Installation

Mettre en place un base donnée Mysql avec :

**base.sql** --> Sql créant les tables nécessaire au projet.

> Paramètre

Renseigner les paramètres de connexion à la base de donnée dans un fichier configs.json dans le dossier Node du projet avec la structure suivante :

```json
{
	"mysql": {
		"host": "",
		"user": "",
		"password": "",
		"database": ""
	}
}
```

> Lancement

- Installer les modules : **-npm install**
- Lancer **main.js** (le serveur se lance sur le port 4007)
   
## 2 - Api

> Post /inscription
	
Ajoute un utilisateur a la base de donnée en envoyant :

```json
{
"body": {
	"mail": "",
	"mdp": "",
	"prenom": "",
	"nom": "",
	"date_naissance": "",
	"adresse": "",
	"code_postal": "",
	"ville": "",
	"pays": "",
	}
}
```
> Get /login/:login.:mdp

Retourne l'utilisateur correspondant a l'id et au mots de passe

> Get /updateUtilisateur

Modifie un utilisateur enregistrer dans la base de donnée en envoyant :

```json
{
"body": {
	"mail": "",
	"mdp": "",
	"prenom": "",
	"nom": "",
	"date_naissance": "",
	"adresse": "",
	"code_postal": "",
	"ville": "",
	"pays": "",
	},
	"utilisateurs_id" : ""
}
```
> Get /delUtilisateur/:id

Supprime l'utilisateur enregistrer dans la base de donnée

> Get /voiture

Retourne la liste de tous les véhicules 

> Post /voiture

Ajoute un véhicule associé a un utilisateur a la base de donnée en envoyant :

```json
"body": 
	{
		"marque": "",
		"modele": "",
		"annee": "",
		"km": "",
		"nb_place": "",
		"energie": "",
		"boite_vitesse": "",
		"adresse": "",
		"prix": "",
		"contact": "",
		"date_debut": "",
		"date_fin": "",
		"description": ""
	},
	"utilisateurs_id": ""
}
```
> Post /updateVehicule

Modifie un véhicule enregistrer dans la base de donnée en envoyant :

```Json
{
"body": {
	"marque": "",
	"modele": "",
	"annee": "",
	"km": "",
	"nb_place": "",
	"energie": "",
	"boite_vitesse": "",
	"adresse": "",
	"prix": "",
	"photos": "",
	"contact": "",
	"date_debut": "",
	"date_fin": "",
	"description": "",
	"voiture_id" : ""
	}
}
```

 > Get /delVoiture/:id

Supprime la voiture enregistrer dans la base de donnée

> Get /VehiculeUtilisateur/:id

Retourne la liste de tous les véhicules de l'utilsateur id

> Get /filtreVehicule/:marque.:energie.:nb_place.:boite_vitesse.:prix

Retourne une liste de vehicules avec different filtre :

    -marque
    -ennergie
    -nombre de place
    -boite de vitesse
    -prix
    
Pour ne pas utiliser un filtre passer " default " dans la requette