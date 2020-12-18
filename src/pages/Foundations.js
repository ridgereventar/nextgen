import React, {useEffect} from 'react';
import {Fade} from 'react-reveal';

import '../styles/Foundations.css';

import Nav from '../components/Nav';
import LandingSection from '../components/LandingSection';

import foundations from '../images/foundations.png';
import tools from '../images/tools.png';
import handson from '../images/handson.png';
import mentor from '../images/wk.jpg';


const Foundations = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            
            <Nav hide={true}/>

            <LandingSection
                logo={false}
                foundations={true}
                manual={foundations}
                />

            <div className="section feature-section">
                <Fade left delay={300}>
                    <div className="feature-txt-container left-txt">
                        <h1>Workshop + <br/> Mentorship</h1>
                        <p>The course will consist of a two-day workshop followed by a three month mentorship period consisting of private sessions with the mentors.
                        </p>
                    </div>
                </Fade>
                <Fade delay={300}>
                    <div className="feature-img-container stack-container">
                        <img src={mentor}></img>
                    </div>
                </Fade>
            </div>

            <div className="section feature-section">
                <Fade right delay={300}>
                    <div className="feature-txt-container right-txt">
                        <h1>Hands-on Practice</h1>
                        <p>Students will have the opportunity to practice the fundamentals during and after the workshop through private sessions with the mentors. 
                        </p>
                    </div>
                </Fade>
                <Fade delay={300}>
                    <div className="feature-img-container stack-container">                    
                        <img src={handson}/>
                    </div>
                </Fade>
            </div>
            
            <div className="section feature-section">
                    <Fade left delay={300}>
                        <div className="feature-txt-container left-txt">
                            <h1>Toolkit Included</h1>
                            <p>Students will be provided a toolkit consisting of 
                                <br/><br/> Wahl Magic clip 
                                <br/> Andis Slimline Pro | Andis Profoil
                                <br/> Styling comb | Flat top comb
                                <br/> Scissors | Straight razor 
                                <br/> Barber cape
                                <br/> Spray bottle
                            </p>
                        </div>
                    </Fade>
                    <Fade delay={300}>
                        <div className="feature-img-container">
                            <img id="tools" src={tools}></img>
                        </div>
                    </Fade>
            </div>
            
            <div className="section day-section day1-sect">
                <Fade top>
                    <h1>Day One</h1>
                    <span>(10:00am - 4:00pm)</span>
                </Fade>
                <Fade delay={500}>
                    <ul>
                        <li>Introduction</li>
                        <li>Health & Safety</li>
                        <li>Understanding Tools</li>
                        <li>Consultation</li>
                        <li>Demonstration - Lvl 1 Fade & Taper</li>
                        <li>Lunch (provided) </li>
                        <li>Hands-on practice </li>
                    </ul>
                </Fade>
            </div>
            
            <div className="section day-section day2-sect">
                <Fade top delay={500}>
                    <h1>Day Two</h1>
                    <span>(10:00am - 4:00pm)</span>
                </Fade>
                <Fade delay={500}>
                    <ul>
                        <li>Review of day one</li>
                        <li>Demonstration - Skin fade</li>
                        <li>Demonstration - Scissor Work</li>
                        <li>Demonstration - Beard Work</li>
                        <li>Lunch (provided) </li>
                        <li>Hands-on practice </li>
                    </ul>
                </Fade>

            </div>
        
        </React.Fragment>

    )
}

export default Foundations;