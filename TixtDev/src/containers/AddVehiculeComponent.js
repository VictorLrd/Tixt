const React = require('react');

class AddVehicule extends React.Component {

    constructor() {
        super();
        this.writeVehicule = this.writeVehicule.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    //Méthode appelée dès que le composant est chargé 
    //dans le navigateur
    componentDidMount() {
        this.mdpInput.focus();
        this.emailInput.focus();
    }

    writeVehicule() {

        return fetch('/barberoSansChangerDePage').then(response => {
            console.log("dshjfnqdsjkfnsqdljkfnqdsjf");
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
                { className: 'input-group col-md-1' },
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.marqueInput = ref,
                    placeholder: 'Marque' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.modeleInput = ref,
                    placeholder: 'Modele' }),
                React.createElement('input', { type: 'Date',
                    className: 'form-control',
                    ref: ref => this.anneeInput = ref,
                    placeholder: 'Ann\xE9e' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.kmInput = ref,
                    placeholder: 'Kms' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.nbPlaceInput = ref,
                    placeholder: 'Nombre de places' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.energieInput = ref,
                    placeholder: 'Energie' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.boiteVitesseInput = ref,
                    placeholder: 'Boite de vitesse' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.adresseInput = ref,
                    placeholder: 'Adresse' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.prixParJourInput = ref,
                    placeholder: 'Prix par jour' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.contactInput = ref,
                    placeholder: 'Contact' }),
                React.createElement('input', { type: 'Date',
                    className: 'form-control',
                    ref: ref => this.dateDebInput = ref,
                    placeholder: 'Date de d\xE9but' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.dateDeFinInput = ref,
                    placeholder: 'Date de fin' }),
                React.createElement('input', { type: 'text',
                    className: 'form-control',
                    ref: ref => this.desciptionInput = ref,
                    placeholder: 'Description' }),
                React.createElement(
                    'span',
                    { className: 'input-group-btn' },
                    React.createElement(
                        'button',
                        { onClick: this.writeVehicule, className: 'btn btn-primary', type: 'button' },
                        React.createElement(
                            'span',
                            { className: 'glyphicon glyphicon-search' },
                            'Ajouter'
                        )
                    )
                )
            )
        );
    }
}

module.exports = AddVehicule;