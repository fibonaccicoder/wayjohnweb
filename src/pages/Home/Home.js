import React, { Component } from 'react';

import './Home.css';

import Jumbotron from '../../components/jumbotron/Jumbotron';
import Services from '../../components/services/Services';
import About from '../../components/about/About';

class Home extends Component {
    

    render() {
        return (
            <div>
                <Jumbotron />
                <About />                
                <Services />
            </div>
        )
    }
}

export default Home;


