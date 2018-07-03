const React = require('react');

class Vehicules extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "vehicules" },
      React.createElement(
        "h1",
        null,
        "S\xC9LECTIONNEZ PARMI UNE CENTAINE DE V\xC9HICULES"
      ),
      React.createElement(
        "div",
        { className: "wrapper-vignettes" },
        React.createElement(
          "div",
          { className: "vignettes" },
          React.createElement(
            "div",
            { className: "picto left" },
            "RENAULT Clio"
          ),
          React.createElement(
            "div",
            { className: "picto middle" },
            "QUANTINO"
          ),
          React.createElement(
            "div",
            { className: "picto right" },
            "RENAULT Twingo"
          )
        ),
        React.createElement(
          "div",
          { className: "s-vignettes" },
          React.createElement(
            "div",
            { className: "picto left" },
            "FIAT Tipo"
          ),
          React.createElement(
            "div",
            { className: "picto middle" },
            "PEUGEOT 208"
          ),
          React.createElement(
            "div",
            { className: "picto right" },
            "HYUNDAI i10"
          )
        )
      )
    );
  }
}

module.exports = Vehicules;