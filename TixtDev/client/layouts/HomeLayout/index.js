import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../components/Header';
import Vehicules from '../../components/Vehicules';
import Footer from '../../components/Footer';
import Split from '../../components/Split';

export default class HomeLayout extends Component {
    render() {
        return (
            <div className="wrapper-home">
                    <Header />
                    <Vehicules />
                    <Split />
                    <Footer />
            </div>
        );
    }
}
