const React = require('react');

class Vehicules extends React.Component {
    render() {
      return (
        <div className="vehicules">
          <h1>SÉLECTIONNEZ PARMI PLUSIEURS VÉHICULES</h1>
          <div className="vignettes">
              <div className="picto left">RENAULT Clio</div>
              <div className="picto middle">QUANTINO</div>
              <div className="picto right">RENAULT Twingo</div>
          </div>
        </div>
      );
    }
  }

module.exports = Vehicules;