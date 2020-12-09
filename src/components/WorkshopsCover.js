import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

const WorkshopsCover = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <div className="cover-title-container">
                    <h1>Workshops</h1>
                </div>                  
            </Fade>
        </React.Fragment>
    )
}

export default WorkshopsCover;