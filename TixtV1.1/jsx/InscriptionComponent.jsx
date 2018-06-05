const React = require('react');
const Header = require('./Header');
const Inscription = require('./inscription');

class AddVehicule extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
        <div>
            <Header header={this.header}/>
            <Inscription inscription={this.inscription}/>
         </div>
        )
    }
}

module.exports = AddVehicule;