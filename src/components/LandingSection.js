import React from 'react';   
import {Fade} from 'react-reveal';

import '../styles/LandingSection.css';

import gold from '../images/gold.png';
import logo from '../images/logodark.png';
import arrow from '../images/icons/arrow.png';


const LandingSection = (props) => {

    return (
        <div className="section landing-section">
            
            <div className="outer-row">
                {props.logo?
                    <img id="mobile-logo" src={logo} alt=""></img> 
                    :null
                }
                {props.foundations?
                    <div className="foundations-header-container">
                        <span>Workshop 1:</span>
                        <h1>Foundations</h1>
                    </div>  
                    :null  
                }
            </div>
            
            <div className="manual-container">
                <Fade delay={500}>
                    <img id="manual" src={props.manual} alt=""></img>
                    <img id="gold" src={gold} alt=""></img> 
                </Fade>
            </div>
            
            <div className="outer-row">
                <Fade delay={1500}>
                    <img id="arrow" src={arrow} alt=""></img>
                </Fade>                    
            </div>

        </div> 
            
    )
}

export default LandingSection;