const React = require('react');

class Split extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "split" },
      React.createElement(
        "h1",
        null,
        "Louer une voiture dans la France enti\xE8re ? C'est possible !"
      ),
      React.createElement(
        "h2",
        null,
        "TIXT vous propose des centaines de point de retrait \xE0 travers l'H\xE9xagone."
      )
    );
  }
}

module.exports = Split;