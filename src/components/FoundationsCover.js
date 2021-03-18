import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

const FoundationsCover = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <div className="cover-title-container">
                    <span>Workshop 1:</span>
                    <h1>Foundations</h1>
                </div>                
                
                <p className="workshop-desc pheight">
                    This course seeks to teach students the basics of fading, scissor work, and beard work. 
                </p>
            </Fade>
        </React.Fragment>
    )
}

export default FoundationsCover;