import React, { useState, Component, useRef, useEffect } from 'react';   
import {Fade, Flip} from 'react-reveal';
import { Route, NavLink, Switch, useLocation } from "react-router-dom";          

import '../styles/Landing.css';

import introManual from '../images/manual.png';
import silver from '../images/silver.png';
import gold from '../images/gold.png';
import video from '../images/nextgenvid.mp4';
import foundations from '../images/foundations.png';
import techniques from '../images/techniques.png';
import connect from '../images/connect2.jpg';
import logo from '../images/logodark.png';

import Nav from '../components/Nav';
import LandingSection from '../components/LandingSection';
import Workshops from '../components/Workshops';

const Landing = React.forwardRef((props, ref) => {

    const [play, setPlay] = useState(false);
    const workshopRef = useRef(null);

    const videoStyle = {
        filter: 'grayscale(100%)'
    }

    const playPreview = () => {
        setPlay(true);
        var vid = document.getElementById("video");
        vid.play();
    }

    const paused = () => {
        setPlay(false);
    }

    return (
        <React.Fragment>

            <Nav hide={true}/>

            <LandingSection
                logo={true}
                foundations={false}
                manual={introManual}
                />

            <div className="section desc-section">
                <Fade delay={500}>
                    <p className="intro-desc">A School seeking to lead the next generation of barbers towards success.
                    </p> 
                </Fade>
            </div>

            <div className="section preview-section">
                {play? null: 
                    <Fade delay={500}>                    
                        <div className="preview-btn" onClick={playPreview}/>
                    </Fade>
                }
                <Fade delay={500}>
                    <div>
                        <video 
                            id="video" 
                            src={video} 
                            type="video/mp4" 
                            controls
                            style={play? null: videoStyle}
                            controls={play? true : false} 
                            onPause={paused}
                            /> 
                    </div>
                </Fade>
            </div>

            <div className="section heading-section">
                <Fade delay={500}>
                    <h1>Our instructors</h1>
                    <p>are passionate barbers dedicated to sharing their knowledge acquired over 10+ years of experience</p>
                </Fade>
            </div>

            <div className="section instructor-section">
                <Fade delay={500}>
                    <div id="nav" className="barber-container">
                        <div className="black-gradient"></div>
                        <div className="name-container">
                            <h4>Navarone Paul</h4>
                            <p>@wownvrn</p>
                        </div>
                    </div>
                    <div id="chris" className="barber-container">
                        <div className="black-gradient"></div>
                        <div className="name-container">
                            <h4>Christopher Gonzales</h4>
                            <p>@chrisgthebarber</p>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="section heading-section">
                <Fade delay={500}>
                    <h1>Workshops</h1>
                </Fade>
            </div>

            <Workshops maxContent={true}/>

            <div className="section heading-section">
                <Fade delay={500}>
                    <h1>Connect with us</h1>
                </Fade>
            </div>

            <div className="section connect-section">
                <Fade bottom delay={500}>
                    <img id="connectImg" src={connect}></img>
                </Fade>
            </div>
        
        </React.Fragment>
    );
})


export default Landing;