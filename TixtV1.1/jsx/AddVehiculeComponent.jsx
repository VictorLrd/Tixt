const React = require('react');
require('es6-promise').polyfill();
require('isomorphic-fetch');

class AddVehiculeComponent extends React.Component {

    constructor() {
        super();
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
                        placeholder="" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="Mot de passe" />
                        <input type="text"
                        className="form-control"
                        ref={(ref) => this.emailInput = ref}
                        placeholder="Email" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="Mot de passe" />
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

module.exports = AddVehiculeComponent;