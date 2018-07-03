const React = require('react');

class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "div",
        { className: "wrapperhead" },
        React.createElement("div", { className: "headerlogo" }),
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
      )
    );
  }
}

module.exports = Header;