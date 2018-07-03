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
      React.createElement("input", { className: "recherche", type: "text", placeholder: "Search.." })
    );
  }
}

module.exports = Slider;