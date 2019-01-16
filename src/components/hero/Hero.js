import React, { Component } from 'react';
import './Hero.css';

import VectorLogo from '../../assets/images/vectorLogo.png';

import Bounce from 'react-reveal/Bounce';

class Hero extends Component {

  
       render() {
      
                   return (
                <header className="masthead d-flex">
                    <div className="overlay"></div>
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <Bounce top>
                                    <div className="site-heading">
                                        <span className="subheading">Serving the community with excellence and integrity.</span>
                                        <img src ={grey} className="grey"/>

                                    </div>
                                    
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Hero;

