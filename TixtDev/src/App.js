import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeLayout } from './layouts.js'
import './App.css'
import AddProductsLayout from '../client/layouts/AddProductsLayout/index.js';
 
export default class App extends Component {
 
 
  render() {
    return (
      <BrowserRouter>
        <div className="main">
        <Switch>
            <Route path="/home">
                <HomeLayout />
            </Route>
            <Route path="/ajout-vehicules">
                <AddProductsLayout/>
            </Route>
            <Route>
                <HomeLayout />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}