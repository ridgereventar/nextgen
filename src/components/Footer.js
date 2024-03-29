import React from 'react';
import {NavLink} from "react-router-dom"; 

import '../styles/Footer.css';

import logo from '../images/nextgenlogo.png';
import mail from '../images/icons/mail.png';
import ig from '../images/icons/ig.png';

const Footer = (props) => {
    return (
        <div className="section footer">
            <div className="content-container">
                <div className="statement-container">
                    <img src={logo} alt=""/>
                    <div className="bar-divider"></div>
                    <div>
                        <p id="missionStatement">
                            Seeking to lead the next generation of barbers towards success.
                        </p>
                        <p id="quote">
                            “Our experience leads to yours.”
                        </p>
                    </div>

                </div>
                <div className="link-container">
                    <ul>
                        <li>
                            <NavLink className="nav-link-light" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link-light" to="/workshops">Workshops</NavLink>
                        </li>
                        <li>
                            <a className="nav-link-light" href="mailto:nextgenedu@gmail.com?subject=REGISTRATION&body=Full Name:%0D%0APhone number:">
                                Register
                            </a>
                            {/* <NavLink className="nav-link-light" to="/register">Register</NavLink> */}
                        </li>
                    </ul>
                </div>
            </div> 
            <div className="socials-container">
                <div className="icons-container">
                    <a href="mailto:nextgenedu@gmail.com">
                        <img src={mail} alt=""></img>
                    </a>
                    <a href="https://www.instagram.com/next_gen_edu/" target="_blank" rel="noreferrer">
                        <img src={ig} alt=""></img>
                    </a>
                </div>
                <p>2020 Next Gen. All Rights Reserved.</p>
            </div> 
        </div>
    )
}

export default Footer;