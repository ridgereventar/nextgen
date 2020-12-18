import React, {useState} from 'react';
import {NavLink} from "react-router-dom"; 
import {Fade} from 'react-reveal';
import Lottie from 'lottie-web-react';                            

import '../styles/Nav.css';

import logo from '../images/xlogo.png';
import RegisterBtn from '../components/RegisterBtn';
import burgerForward from '../helpers/burgerForward.json';
import burgerBackward from '../helpers/burgerBackward.json';

const Nav = (props) => {

    const animOptionsF = {
        renderer: 'svg',
        loop: false,
        autoplay: false, 
        animationData: burgerForward
    }

    const animOptionsB = {
        renderer: 'svg',
        loop: false,
        autoplay: false, 
        animationData: burgerBackward
    }

    const [showSlider, setShowSlider] = useState(false);
    const [showBurgerF, setShowBurgerF] = useState(true);
    const [showBurgerB, setShowBurgerB] = useState(false);

    const toggleSlider = () => {
        setShowSlider(!showSlider);
        setShowBurgerF(!showBurgerF);
        setShowBurgerB(!showBurgerB);
    }

    return (
        <div className={props.hide ? "nav-container hide-nav" : "nav-container"}>
            
            <ul id="staticNav">
                <li>
                    <NavLink className="nav-link" to="/about"> &nbsp; About Us &nbsp; </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/">
                        <img className="nav-logo" src={logo}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/workshops">Workshops</NavLink>                
                </li>
            </ul>
            
            <NavLink to="/">
                <img id="logoLeft" className="nav-logo" src={logo}></img>
            </NavLink>

            <div className="burger-wrapper" onClick={toggleSlider}>
                {showBurgerF? 
                    <Lottie
                        className="burger"
                        options={animOptionsB}
                        playingState='play'/>
                    : null
                }
                {showBurgerB?
                    <Lottie
                        className="burger"
                        options={animOptionsF}
                        playingState='play'/>
                    : null
                }
            </div>
        
    
            {showSlider?    
                <Fade top>
                    <div className="slider-container">
                        <ul id="sliderNav">
                            <Fade top>
                                <li>
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                            </Fade>
                            <Fade top delay={100}>
                                <li>
                                    <NavLink className="nav-link" to="/workshops">Workshops</NavLink>
                                </li>
                            </Fade>
                            <Fade top delay={200}>
                                <li>
                                    <RegisterBtn/>
                                </li>
                            </Fade>
                        </ul>
                    </div> 
                </Fade>
                : null
            }

        </div>    
    )
}

export default Nav; 