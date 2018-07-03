const React = require('react');

class Login extends React.Component {

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

        return fetch('/barbero')
        .then((response) => {
          console.log("dshjfnqdsjkfnsqdljkfnqdsjf");
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
                    <input type="text"
                        className="form-control"
                        ref={(ref) => this.mdpInput = ref}
                        placeholder="Mot de passe" />

                    <span className="input-group-btn">
                        <button onClick={this.writeUser} className="btn btn-primary" type="button">
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

module.exports = Login;