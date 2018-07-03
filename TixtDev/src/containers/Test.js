import React, { Component } from 'react';

class Header extends Component {
  render() {
    return React.createElement(
      "div",
      { className: "header" },
      React.createElement("img", { src: logo, className: "headerlogo", alt: "TIXT" }),
      React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "h1",
          { className: "inscription" },
          "M'inscrire"
        ),
        React.createElement(
          "h1",
          { className: "connexion" },
          "Me connecter"
        ),
        React.createElement(
          "h1",
          { className: "infos" },
          "Plus d'infos ?"
        ),
        React.createElement(
          "h1",
          { className: "louer" },
          "Louer ma voiture"
        )
      )
    );
  }
}

export default Header;