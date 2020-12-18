import React, {useEffect} from 'react';
import {Fade} from 'react-reveal';

import '../styles/About.css';
import Nav from '../components/Nav';
import pin from '../images/pin.png';
import mail from '../images/icons/mail.png';
import phone from '../images/phone.png';

const About = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            
            <Nav hide={true}/>

            <div className="section about-section">
                <Fade top>
                    <h1>Next Gen</h1>
                </Fade>
                <Fade delay={300}>
                    <p id="about-desc">
                        is a school that seeks to lead the new generation of barbers down the right path and guide our students to becoming successful in this industry. 
                        <br/> <br/> Our instructors, Christopher Gonzales and Navarone Paul are passionate barbers who are dedicated to sharing their knowledge acquired over 10+ years of experience. 
                    </p>
                </Fade>
                <Fade delay={500}>
                    <div className="contact-container">
                        <img src={pin}></img>
                        <span>Oshawa, ON.</span>
                    </div>
                </Fade>
                <Fade delay={700}>
                    <div className="contact-container">
                        <img src={mail}></img>
                        <span>nextgenedu@gmail.com</span>
                    </div>
                </Fade>
                <Fade delay={900}>
                    <div className="contact-container">
                        <img id="phone" src={phone}></img>
                        <span>905 999 9999</span>
                    </div>
                </Fade>
                
                
            </div>
        </React.Fragment>
        
    )
}

export default About;