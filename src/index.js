
import ReactDOM from 'react-dom';
import Route from 'react-router';
import { Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import React, { Component } from 'react';


class Landing extends Component {

        render() {

        return (
            <Router>
                <div>
                    <Navbar />
                    <div id='content'>
                            <Route exact path="/home" render={() => <Home />} />
                    </div>
                    <Footer />
                </div>
            </Router >
        )
    }
}


ReactDOM.render(<Landing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
