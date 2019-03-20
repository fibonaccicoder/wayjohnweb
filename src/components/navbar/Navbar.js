import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            // Navigation
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand bhs on-hover" href="/"><i className=""></i></a>
                    <button className="navbar-toggler  navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Home
            <i className="fa fa-bars">I don't know why I put this here</i>
                    </button>
                                       <div className="navbar-collapse collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto text-center">
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/services">Services</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/team">Team</a>
                            </li>
                            <li className="nav-item on-hover">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;

// wayjohn insignia for navbar and footer