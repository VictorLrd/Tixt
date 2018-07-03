const React = require('react');

class Footer extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "menu" },
        React.createElement(
          "h1",
          { className: "ctc" },
          "Contact"
        ),
        React.createElement("div", { className: "footerlogo" }),
        React.createElement(
          "h1",
          { className: "mentions" },
          "Mentions"
        )
      )
    );
  }
}

module.exports = Footer;