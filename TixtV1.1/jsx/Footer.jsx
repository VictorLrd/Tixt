const React = require('react');

class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <div className="menu">
              <h1 className="ctc">Contact</h1>
              <div className="footerlogo"/>
              <h1 className="mentions">Mentions</h1>
          </div>
        </div>
      );
    }
  }

module.exports = Footer;