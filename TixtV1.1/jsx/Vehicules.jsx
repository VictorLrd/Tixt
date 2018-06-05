const React = require('react');

class Vehicules extends React.Component {
    render() {
      return (
        <div className="vehicules">
          <h1>SÉLECTIONNEZ PARMI UNE CENTAINE DE VÉHICULES</h1>
          <div className="vignettes">
              <div className="picto"></div>
              <div className="picto"></div>
              <div className="picto"></div>
          </div>
          <div className="vignettes">
              <div className="picto"></div>
              <div className="picto"></div>
              <div className="picto"></div>
          </div>
          <div className="vignettes">
              <div className="picto"></div>
              <div className="picto"></div>
              <div className="picto"></div>
          </div>
        </div>
      );
    }
  }

module.exports = Vehicules;