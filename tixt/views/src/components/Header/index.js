import React, { Component } from 'react';
import './style.css';
import logo from '../../logo.png';

class Header extends Component {
    render() {
      return (
        <div className="header">
        <img src={logo} className="headerlogo" alt="TIXT" />
          <div className="menu">
              <h1 className="inscription">M'inscrire</h1>
              <h1 className="connexion">Me connecter</h1>
              <h1 className="infos">Plus d'infos ?</h1>
              <h1 className="louer">Louer ma voiture</h1>
          </div>
        </div>
      );
    }
  }

export default Header;
