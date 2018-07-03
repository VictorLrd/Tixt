const React = require('react');
const Header = require('./Header');
const Inscription = require('./inscription');

class AddVehicule extends React.Component {

    constructor() {
        super();
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Header, { header: this.header }),
            React.createElement(Inscription, { inscription: this.inscription })
        );
    }
}

module.exports = AddVehicule;