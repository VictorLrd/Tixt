const React = require('react');

class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "research" },
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

module.exports = Content;