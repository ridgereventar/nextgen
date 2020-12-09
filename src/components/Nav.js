import React, {useState} from 'react';
import {NavLink} from "react-router-dom"; 
import {Fade} from 'react-reveal';
import Lottie from 'lottie-web-react';                            

import '../styles/Nav.css';
import logo from '../images/xlogo.png';
import menuicon from '../images/menuicon.png';
import RegisterBtn from '../components/RegisterBtn';

const Nav = (props) => {

    const animOptionsF = {
        renderer: 'svg',
        loop: false,
        autoplay: true, 
        animationData: require('../helpers/burgerForward.json')
    }

    const animOptionsB = {
        renderer: 'svg',
        loop: false,
        autoplay: true, 
        animationData: require('../helpers/burgerBackward.json')
    }
    // const [showLogo, setShowLogo] = useState(false);
    const [showSlider, setShowSlider] = useState(false);

    const [showBurgerF, setShowBurgerF] = useState(true);
    const [showBurgerB, setShowBurgerB] = useState(false);

    const toggleSlider = () => {
        // console.log("hello");
        setShowSlider(!showSlider);
        setShowBurgerF(!showBurgerF);
        setShowBurgerB(!showBurgerB);
    }

    return (
        <div className={props.hide ? "nav-container hide-nav" : "nav-container"}>
            
            {console.log(showBurgerF)}

            <NavLink to="/">
                <img id="responsiveLogo" className="nav-logo" src={logo}></img>
            </NavLink>
            <div className="burger-container" onClick={toggleSlider}>
                {showBurgerF? 
                    <Lottie
                        className="hamburger"
                        options={animOptionsB}
                        playingState='play'/>
                    : null
                }
                {showBurgerB?
                    <Lottie
                        className="hamburger"
                        options={animOptionsF}
                        playingState='play'/>
                    : null
                }

            </div>
            

            <ul id="staticNav">
                <li>
                    <NavLink className="nav-link" to="/about"> &nbsp; About Us &nbsp; </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/">
                        <img className="nav-logo" src={logo}></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/workshops">Workshops</NavLink>                
                </li>
            </ul>

            {showSlider?    
                <Fade top appear={false}>
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