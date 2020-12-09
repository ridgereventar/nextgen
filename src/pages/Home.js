import React, {useState, useEffect, useRef} from 'react';
import { Route, NavLink, Switch, useLocation } from "react-router-dom";          
import {Fade} from 'react-reveal';

import '../styles/Home.css';

import Nav from '../components/Nav';
import Landing from './Landing';
import About from './About';
import Workshops from '../components/Workshops';
import Foundations from './Foundations';
import Footer from '../components/Footer';

import HomeCover from '../components/HomeCover';
import AboutCover from '../components/AboutCover';
import WorkshopsCover from '../components/WorkshopsCover';
import FoundationsCover from '../components/FoundationsCover';

import RegisterBtn from '../components/RegisterBtn';
import mail from '../images/mail.png';
import ig from '../images/igdark.png';

const Home = (props) => {

    return (
        <div className="home-wrapper">
                
            <Fade left>
                <div className="fixed-cover-container">
                    <Nav/>
                    {/* <div className="dot"></div> */}
                    
                    <Switch>
                        <Route path="/" exact component={HomeCover}></Route>
                        <Route path="/about" exact component={AboutCover}></Route>
                        <Route path="/workshops" exact component={WorkshopsCover}></Route>
                        <Route path="/foundations" exact component={FoundationsCover}></Route>
                    </Switch>       

                    {/* <div className="cover-footer">
                        <img src={ig}></img>
                        <RegisterBtn/>
                    </div> */}

                    <div className="register-container">
                        <RegisterBtn/>
                    </div>

                    <div className="socials-section">
                        <a href="https://www.instagram.com/next_gen_edu/" target="_blank">
                            <img src={ig}></img>
                        </a>
                    </div>

                </div>
            </Fade>

            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/about" exact component={About}/>
                <Route path="/workshops" exact component={Workshops}></Route>
                <Route path="/foundations" exact component={Foundations}/>
            </Switch>

            <Footer/>

        </div>
    );
}

export default Home;