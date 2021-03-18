import React, {useEffect} from 'react'; 
import {Fade} from 'react-reveal';
import {NavLink} from "react-router-dom";          
import Nav from '../components/Nav';

import '../styles/Workshops.css'; 

import foundations from '../images/foundationsManual.png';
import techniques from '../images/techniquesManual.png';

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
                    <Fade bottom distance="100px">
                        <div className="workshop-wrapper">
                            <NavLink to="/foundations">
                                <img className="manual" src={foundations} alt=""></img>
                            </NavLink>
                            <p className="booklet-desc">
                                    This course seeks to teach students the basics of fading, scissor work, and beard work.
                            </p>
                            <p className="summary">I. FOUNDATIONS</p>
                        </div>
                    </Fade>
                    <Fade bottom distance="100px">
                        <div className="workshop-wrapper">
                            <img className="manual" src={techniques} alt=""></img>
                            <p className="booklet-desc">
                                    (Coming soon) 
                            </p>
                            <p className="summary">(coming soon)</p>
                        </div>
                    </Fade>
            </div>
        </React.Fragment>
    )
}

export default Workshops;