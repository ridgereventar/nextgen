import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

const AboutCover = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <h1 className="cover-title">About Us</h1>
            </Fade>
        </React.Fragment>
    )
}

export default AboutCover;