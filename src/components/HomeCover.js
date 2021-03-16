import React from 'react'; 
import '../styles/Cover.css'; 
import logo from '../images/logodark.png';

const HomeCover = (props) => {
    return (
        <React.Fragment>
            <img id="logoDark" src={logo} alt=""></img>
        </React.Fragment>
    )
}

export default HomeCover;