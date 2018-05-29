import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Header/>
      <Slider/>
      </div>
    );
  }
}

export default App;
