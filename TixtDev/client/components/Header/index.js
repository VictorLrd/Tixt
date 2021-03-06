const React = require('react');
import './style.css';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="wrapperhead">
          <div className="headerlogo"/>
          <div className="menu">
              <h1 className="inscription">M'inscrire</h1>
              <h1 className="connexion">Me connecter</h1>
              <h1 className="infos">Plus d'infos ?</h1>
              <h1 className="louer">Louer ma voiture</h1>
          </div>
        </div>
        <div className="slider">
          <h1>Louer une voiture n'as jamais été aussi facile !</h1>
          <input className="recherche" type="text" placeholder="Search.."/>
          <div className="content">
            <input type="select" placeholder="Début"/>
            <input type="select" placeholder="Fin"/>
            <button type="button">GO</button>
          </div>
        </div>
        </div>
      );
    }
  }

module.exports = Header;