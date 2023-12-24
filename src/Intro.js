import './Intro.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './Detailpage';  // Make sure this import is correct

import imgheadlogo from './logo-removebg-preview.png';
import imginsta from './logo and photo/icons8-instagram-30.png';
import imglink from './logo and photo/icons8-linkedin-30.png';
import imggit from './logo and photo/icons8-github-30 (1).png';
import imgme from './logo and photo/profile.JPG';


function Intro(){
    return (
        <div id="intro">
          <div className="header">
            <img src={imgheadlogo} alt="error to load the image" />
            <nav className="navbar-options">
              <Link to="/" style={{ borderBottom: "2px solid #07f5b2" }}>Home</Link>
              <Link to="/portfolio">Project</Link>
              <Link to="/about">About</Link>
            </nav>    
        </div>
        <div className="intro-section">
            <div className="intro">
                <h1>Himanshu jangir</h1>
                <p>My name is Himanshu Jangir<br />I am a first year undergraduate student of the department of Biotechnology and Biochemical Engineering in IIT Kharagpur <br /> I am from Sujangarh,Churu,Rajasthan.</p>
                <a href="Detailpage.js" style={{ width: 120 }}><button>More About</button></a>
            </div>
            <div className="intro-img">
                <img src={imgme} alt="eroor to load a image" style={{ width: 300 }}/>
            </div>
        </div>
        <div className="footer">
            <div>@Copyright Himanshu Jangir PVT. LTD</div>
            <div className="footer-links">
                <a href="https://www.instagram.com/himanshujangir2459/"><img src={imginsta} alt="" /></a>
                <a href="https://www.linkedin.com/in/himanshu-jangir-868271290/"><img src={imglink} alt="" /></a>
                <a href="https://github.com/HimanshuJangir1"><img src={imggit} alt="" /></a>
            </div>
        </div>
    </div>
    )
}
export default Intro