import './Styleabout.css'

import React from 'react' 
import imginsta from './logo and photo/icons8-instagram-30.png'
import imglink from './logo and photo/icons8-linkedin-30.png'
import imggit from './logo and photo/icons8-github-30 (1).png'
import imgheadlogo from './logo-removebg-preview.png'
import imgme from './logo and photo/profile.JPG'
import imgc from './logo and photo/C++ logo.png'
import imghtml from './logo and photo/html logo.png'
import imgcss from './logo and photo/css logo.png'
import imgmt from './logo and photo/math logo.png'
import imgph from './logo and photo/ph logo.png'
import { Link } from 'react-router-dom'
function About(){
    return(
        <div id="about">
            <div className="header">
                <img src={imgheadlogo} alt="error to load img"/>
                <nav className="navbar-options">
                <Link to="/" >Home</Link>
                <Link to="/portfolio">Project</Link>
                <Link to="/about" style={{ borderBottom: "2px solid #07f5b2" }}>About</Link>
                </nav>
            </div>
            <div className="section">
                <div className="photo">
                    <img src={imgme} alt="" />
                </div>
                <div className="AboutMe">
                    <h1>About Me</h1>
                    <p>My name is Himanshu Jangir. I am a first year undergraduate of the department of Biotechnology ad Biochemical Engineering enrolled in its dual degree course.I am from Rajasthan.My field of interest mostly includes Data analytics,Finance and my hobbies are to film and edit videos along wiht this I also like to sing classical music.</p>
                </div> 
                <div className="Achievements">
                    <h1>My Achievements</h1>
                    <p>Qualified JEE Advanced and JEE Mains. Passed class 10th and 12th with 92.8% and 93.8% respectively.{" "}</p>
                </div>
                <div className="Skills">
                    <h1>Skills</h1>
                    <div className="skill">
                        <img src={imgc} alt="error" />
                        <img src={imghtml} alt="error" />
                        <img src={imgcss} alt="error" />
                        <img src={imgmt} alt="error" />
                        <img src={imgph} alt="error" />
                    </div>
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
export default About