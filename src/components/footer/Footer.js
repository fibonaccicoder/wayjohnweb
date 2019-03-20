import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                           
                            <p className="copyright text-white mt-3 bhs">Copyright &copy; WayJohn Surveying, Inc. 2019</p>
                            
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;
