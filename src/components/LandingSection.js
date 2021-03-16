import React from 'react';   

import '../styles/LandingSection.css';

import logo from '../images/logodark.png';


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
                {/* <Fade delay={500}>
                    <div className="manual-wrapper">
                        <img id="manual" src={props.manual} alt=""></img>
                        <img id="gold" src={gold} alt=""></img>
                    </div>
                </Fade> */}
            </div>
            
            <div className="outer-row">
                {/* <Fade delay={1500}>
                    <img id="arrow" src={arrow} alt=""></img>
                </Fade>                     */}
            </div>

        </div> 
            
    )
}

export default LandingSection;