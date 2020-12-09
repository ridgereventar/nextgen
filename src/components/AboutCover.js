import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

const AboutCover = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <h1 id="aboutCover">About Us</h1>
            </Fade>
        </React.Fragment>
    )
}

export default AboutCover;