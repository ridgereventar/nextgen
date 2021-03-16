import React, {useEffect} from 'react'; 
import {Fade} from 'react-reveal';
import {NavLink} from "react-router-dom";          
import Nav from '../components/Nav';

import '../styles/Workshops.css'; 

import foundations from '../images/foundations.png';
import techniques from '../images/techniques.png';
import silver from '../images/silver.png';
import gold from '../images/gold.png';

const Workshops = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>

            <Nav hide={true}/>

            {props.maxContent? 
                null : 
                <div id="workshopsHeading" className="section heading-section">
                    <Fade>
                        <h1>Workshops</h1>
                    </Fade>
                </div>
            }
            

            <div id="workshopSection" className={props.maxContent? "section workshop-section-landing" : "section workshop-section"}>
                    <Fade left delay={500}>
                        <div className="booklet-wrapper">
                            <NavLink to="/foundations">
                                <img src={foundations} className="book-img" alt=""></img>
                                <img src={gold} className="scissors" alt=""></img>
                            </NavLink>
                        
                            <p className="booklet-desc">
                                This course seeks to teach students the basics of fading, scissor work, and beard work.
                            </p>
                        </div>
                    </Fade>

                    <Fade right delay={500}>
                        <div className="booklet-wrapper">
                            <img src={techniques} className="book-img" alt=""></img>
                            <img src={silver} className="scissors" alt=""></img>
                            
                            <p className="booklet-desc">
                                (Coming soon) 
                            </p>
                        </div>
                    </Fade>
            </div>
        </React.Fragment>
    )
}

export default Workshops;