"use strict"

const React = require('react');
const ReactDOM = require('react-dom');
require('es6-promise').polyfill();
require('isomorphic-fetch');

class AddVehicule extends React.Component {

    constructor(props) {
        super(props);
        this.writeVehicule = this.writeVehicule.bind(this);
    }

    //Méthode appelée dès que le composant est chargé 
    //dans le navigateur
    componentDidMount() {
        this.mdpInput.focus();
        this.emailInput.focus();
    }

    writeVehicule() {
        console.log("AddVehicule");
        return fetch('/addVehicule')
        .then((response) => {
          console.log("dshjfnqdsjkfnsqdljkfnqdsjf");
        })
        .catch((error) => {
          console.error("Erreur");
        });
    }

    keyDownHandler(event) {
        //On lance la recherche si l'utilisateur 
        //saisit la touche Enter
        if (event.keyCode == 13) {
            this.writeVehicule();
        }
    }

    render() {
        return (
            <div className="form-group">
                <div className="input-group col-md-1">
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.emailInput = ref}
                        placeholder="Email" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="Mot de passe" />

                    <span className="input-group-btn">
                        <button onClick={this.writeVehicule} className="btn btn-primary" type="button">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

module.exports = AddVehicule;