import React, { Component } from 'react';
import UserList from '../containers/user_list';
import UserDetail from '../containers/user_detail';
import Voiture_detail from '../containers/voiture_detail';
import Voiture_list from '../containers/voiture_list';

export default class App extends Component {
  render() {
    return (

      <div>
        <Voiture_list/>
        <Voiture_detail/>
      </div>
    );
  }
}
