import React, {useEffect} from 'react';
import {Fade} from 'react-reveal';

import '../styles/Foundations.css';

import Nav from '../components/Nav';
import LandingSection from '../components/LandingSection';
import RegisterBtn from '../components/RegisterBtn';

import foundations from '../images/foundationsManual.png';
import tools from '../images/tools.png';
import handson from '../images/handson.png';
import mentor from '../images/mentor.jpg';


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
                <Fade left>
                    <div className="feature-txt-container left-txtm web-feature">
                        <h1>Workshop + <br/> Mentorship</h1>
                        <p>The course will consist of a two-day workshop followed by a three month mentorship period consisting of private sessions with the mentors.
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="feature-txt-container left-txt mobile-feature">
                        <h1>Workshop + <br/> Mentorship</h1>
                        <p>The course will consist of a two-day workshop followed by a three month mentorship period consisting of private sessions with the mentors.
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="feature-img-container stack-container">
                        <img src={mentor} alt=""></img>
                    </div>
                </Fade>
            </div>

            <div className="section feature-section">
                <Fade right>
                    <div className="feature-txt-container right-txt web-feature">
                        <h1>Hands-on Practice</h1>
                        <p>Students will have the opportunity to practice the fundamentals during and after the workshop through private sessions with the mentors. 
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="feature-txt-container right-txt mobile-feature">
                        <h1>Hands-on Practice</h1>
                        <p>Students will have the opportunity to practice the fundamentals during and after the workshop through private sessions with the mentors. 
                        </p>
                    </div>
                </Fade>
                <Fade>
                    <div className="feature-img-container stack-container">                    
                        <img src={handson} alt=""/>
                    </div>
                </Fade>
            </div>
            
            <div className="section feature-section">
                    <Fade left>
                        <div className="feature-txt-container left-txt web-feature">
                            <h1>Toolkit Included</h1>
                            <p>Students will be provided a toolkit consisting of 
                                <br/><br/> - Wahl Magic clip 
                                <br/> - Andis Slimline Pro | Andis Profoil
                                <br/> - Styling comb | Flat top comb
                                <br/> - Scissors | Straight razor 
                                <br/> - Barber cape
                                <br/> - Spray bottle
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="feature-txt-container left-txt mobile-feature">
                            <h1>Toolkit Included</h1>
                            <p>Students will be provided a toolkit consisting of 
                                <br/><br/> - Wahl Magic clip 
                                <br/> - Andis Slimline Pro | Andis Profoil
                                <br/> - Styling comb | Flat top comb
                                <br/> - Scissors | Straight razor 
                                <br/> - Barber cape
                                <br/> - Spray bottle
                            </p>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="feature-img-container">
                            <img id="tools" src={tools} alt=""></img>
                        </div>
                    </Fade>
            </div>
            
            <div className="section day-section day1-sect">
                <Fade top>
                    <h1>Day One</h1>
                    <span>(10:00am - 4:00pm)</span>
                </Fade>
                <Fade>
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
                <Fade top>
                    <h1>Day Two</h1>
                    <span>(10:00am - 4:00pm)</span>
                </Fade>
                <Fade>
                    <ul>
                        <li>Review of day one</li>
                        <li>Demonstration - Skin fade</li>
                        <li>Demonstration - Scissor Work</li>
                        <li>Demonstration - Beard Work</li>
                        <li>Lunch (provided) </li>
                        <li>Hands-on practice </li>
                    </ul>
                </Fade>
                <div className="registration-container">
                    <Fade>
                        <RegisterBtn bg="white" color="#2C2C2C"/>
                    </Fade>
                </div>


            </div>
        
        </React.Fragment>

    )
}

export default Foundations;