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

        return fetch('/voiture').then(response => {
            console.log(response);
        }).catch(error => {
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
        return React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
                'div',
                { className: 'input-group col-md-6' },
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.emailInput = ref,
                    placeholder: 'Email' }),
                React.createElement('input', { type: 'password',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'Mot de passe' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'prenom' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'nom' }),
                React.createElement('input', { type: 'date',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'date de naissance' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'adresse' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'code postal' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'ville' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'pays' }),
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { onClick: this.writeUser, className: 'btn btn-primary', type: 'button' },
                        React.createElement(
                            'span',
                            { className: 'glyphicon glyphicon-search' },
                            'Edit'
                        )
                    )
                )
            )
        );
    }
}

module.exports = Inscription;