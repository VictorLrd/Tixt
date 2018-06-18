const React = require('react');

class Slider extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "slider" },
      React.createElement(
        "h1",
        null,
        "Louer une voiture n'as jamais \xE9t\xE9 aussi facile !"
      ),
      React.createElement("input", { className: "recherche", type: "text", placeholder: "Search.." }),
      React.createElement(
        "div",
        { className: "content" },
        React.createElement("input", { type: "select", placeholder: "D\xE9but" }),
        React.createElement("input", { type: "select", placeholder: "Fin" }),
        React.createElement(
          "button",
          { type: "button" },
          "GO"
        )
      )
    );
  }
}

module.exports = Slider;