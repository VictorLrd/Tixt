import React, { Component } from 'react';
import cors from 'cors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeLayout } from './layouts.js'
import { Inscription } from './layouts.js'

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
<<<<<<< Updated upstream
            <Route path="/inscription">
                <Inscription />
=======
            <Route path="/ajout-vehicules">
                <AddProductsLayout/>
            </Route>
            <Route>
                <HomeLayout />
>>>>>>> Stashed changes
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
