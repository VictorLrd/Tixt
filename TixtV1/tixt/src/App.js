import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
const Header = require('./Header');
const Slider = require('./Slider');

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Slider />
      </Fragment>
    );
  }
}

export default App;
