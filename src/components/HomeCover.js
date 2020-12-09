import React from 'react'; 
import {Fade} from 'react-reveal';

import '../styles/Cover.css'; 

import logo from '../images/logodark.png';

const HomeCover = (props) => {
    return (
        <React.Fragment>
            <img id="logoDark" src={logo}></img>
        </React.Fragment>
    )
}

export default HomeCover;