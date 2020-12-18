import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

const WorkshopsCover = (props) => {
    return (
        <React.Fragment>
            <Fade left>
                <h1 className="cover-title">Workshops</h1>
            </Fade>
        </React.Fragment>
    )
}

export default WorkshopsCover;