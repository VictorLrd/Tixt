const React = require('react');

class Inscription extends React.Component {

    constructor() {
        super();
        this.writeUser = this.writeUser.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    //Méthode appelée dès que le composant est chargé 
    //dans le navigateur
    componentDidMount() {
        this.mdpInput.focus();
        this.emailInput.focus();
    }

    writeUser() {

        return fetch('/Inscription')
        .then((response) => {
          console.log("Hey c'est l'inscription");
        })
        .catch((error) => {
          console.error(error);
        });
    }

    keyDownHandler(event) {
        //On lance la recherche si l'utilisateur 
        //saisit la touche Enter
        if (event.keyCode == 13) {
            this.writeUser();
        }
    }

    render() {
        return (
            <div className="form-group">
                <div className="input-group col-md-6">
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.emailInput = ref}
                        placeholder="Email" />
                    <input type="password"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="Mot de passe" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="prenom" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="nom" />
                    <input type="date"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="date de naissance" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="adresse" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="code postal" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="ville" />
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="pays" />
                    
                    <span className="input-group-btn">
                        <button onClick={this.writeUser} className="btn btn-primary" type="button">
                            <span className="glyphicon glyphicon-search">Edit</span>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

module.exports = Inscription;