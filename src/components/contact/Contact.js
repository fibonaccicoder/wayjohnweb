
import React, { Component } from 'react';


import './Contact.css';

class Contact extends Component {

    render() {
        return (
        
            <form className= "contactForm">
                <div>Your Name</div>
                    <input type="text" name="name"><br>
                    </input>
             <div>Your E-mail</div>
                    <input type="text" name="email"><br>
                    </input>
            Subject<br>
            </input>
            <input type = "text"><br>
            Message<br>
            </input>
            <input type="submit" value="Submit">
          </form> 
          )
    }
    };


        export default Contact;