import React, { Component } from 'react';

import './About.css';

class About extends Component {
    render() {
        return (
            <section className="about py-5 d-flex" id='about'>
                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="about-heading text-center">
                                <h1 className='bhs'>About</h1>
                                <span className="subheading text-justify about-text">
                                  
                                </span>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;