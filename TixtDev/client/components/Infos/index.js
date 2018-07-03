const React = require('react');

class Infos extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "informations" },
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

module.exports = Infos;