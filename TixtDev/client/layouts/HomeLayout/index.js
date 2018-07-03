import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './style.css';
import Login from '../../components/Login';

export default class HomeLayout extends Component {
    render() {
        return (
            <div className="wrapper-home">
                    <Login />
            </div>
        );
    }
}
