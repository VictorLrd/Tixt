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
        return React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
                'div',
                { className: 'input-group col-md-1' },
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.emailInput = ref,
                    placeholder: '' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'Mot de passe' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.emailInput = ref,
                    placeholder: 'Email' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'Mot de passe' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.emailInput = ref,
                    placeholder: 'Email' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.mdpInput = ref,
                    placeholder: 'Mot de passe' }),
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { onClick: this.writeVehicule, className: 'btn btn-primary', type: 'button' },
                        React.createElement('span', { className: 'glyphicon glyphicon-search' })
                    )
                )
            )
        );
    }
}

module.exports = AddVehiculeComponent;