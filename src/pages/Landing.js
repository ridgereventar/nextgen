import React, { useState } from 'react';   
import {Fade} from 'react-reveal';

import '../styles/Landing.css';

import Nav from '../components/Nav';
import LandingSection from '../components/LandingSection';
import Workshops from '../components/Workshops';

import introManual from '../images/landingManual.png';
import video from '../images/nextgenvid.mp4';
import connect from '../images/bg/connect2.jpg';
import thumbnail from '../images/poster.png';

const Landing = (props) => {

    // const videoStyle = {
    //     filter: 'grayscale(100%)'
    // }

    const [play, setPlay] = useState(false);

    const playBtn = () => {
        setPlay(true);
        var vid = document.getElementById("video");
        vid.play();
    }

    const played = () => {
        setPlay(true);
        var vid = document.getElementById("video");
        vid.style.filter = "grayscale(0%)";
    }

    const paused = () => {
        setPlay(false);
        var vid = document.getElementById("video");
        vid.style.filter = "grayscale(100%)";
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
                        <div className="preview-btn" onClick={playBtn}/>
                    </Fade>
                }
                <Fade delay={500}>
                    <div>
                        <video 
                            id="video" 
                            src={video} 
                            type="video/mp4" 
                            preload="auto"
                            controls
                            onPlay={played}
                            onPause={paused}
                            poster={thumbnail}
                            /> 
                    </div>
                </Fade>
            </div>

            <div className="section heading-section">
                <Fade delay={500}>
                    <h1>Our instructors</h1>
                    <p className="instructors-text">are passionate barbers dedicated to sharing their knowledge acquired over 10+ years of experience</p>
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
                    <a href="mailto:nextgenedu@gmail.com">
                        <button className="connect-btn">Connect with us</button>
                    </a>
                    {/* <div className="connect-icon-container">
                        <img src={ig}></img>
                        <img id="connectMail" src={mail}></img>
                    </div> */}
                </Fade>
            </div>

            <div className="section connect-section">
                <Fade bottom>
                    <img id="connectImg" src={connect} alt=""></img>
                </Fade>
            </div>
        
        </React.Fragment>
    );
}


export default Landing;