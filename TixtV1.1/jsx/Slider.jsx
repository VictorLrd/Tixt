const React = require('react');

class Slider extends React.Component {
    render() {
      return (
        <div className="slider">
          <h1>Louer une voiture n'as jamais été aussi facile !</h1>
          <input className="recherche" type="text" placeholder="Search.."/>
        </div>
      );
    }
  }

module.exports = Slider;