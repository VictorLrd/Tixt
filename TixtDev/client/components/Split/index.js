const React = require('react');
import './style.css';

class Split extends React.Component {
    render() {
      return (
        <div className="split">
          <h1>Louer une voiture dans la France entière ? C'est possible !</h1>
          <h2>TIXT vous propose des centaines de point de retrait à travers l'Héxagone.</h2>
        </div>
      );
    }
  }

module.exports = Split;