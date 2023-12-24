import './Stylepor.css'
import React from 'react'
import imginsta from './logo and photo/icons8-instagram-30.png'
import imglink from './logo and photo/icons8-linkedin-30.png'
import imggit from './logo and photo/icons8-github-30 (1).png'
import imgheadlogo from './logo-removebg-preview.png'
import imgpor from './logo and photo/Screenshot 2023-12-01 at 9.26.54 AM.png'
import imgsh from './logo and photo/IMG_0721.JPG'
import { Link } from 'react-router-dom'
function Portfolio(){
    return (
        <div id="portfolio"> 
            <div className="header">
                <img src={imgheadlogo} alt="error to load img"/>
                <nav className="navbar-options">
                <Link to="/" >Home</Link>
                <Link to="/portfolio" style={{ borderBottom: "2px solid #07f5b2" }}>Project</Link>
                <Link to="/about" >About</Link>
                </nav>
            </div>
            <div className="section">
                <div className="projects">
                    <img src={imgpor} alt=""/>
                    <div className="project-des">
                        <h1>portfolio website</h1>
                        <p>A Portfolio Website Made by Himanshu Jangir With Contains Information About Me.<br/> It's Made With The Help Of Html &amp; Css.</p>
                        <a href="https://himanshujangir1.github.io/project/index.html"><button>Link!</button></a>
                    </div>
                </div>
                <div className="projects">
                    <div className="project-des">
                        <h1>Gram vikas <br />strategy project</h1>
                        <p>It Is A Project Takan Up By ShARE,IIT KGP <br />In Which Intersed The Juniour Member Including Me <br />Will Be Researching On The NGOs of different Domains And Companies Funding Them</p>
                        <button>Link!</button>
                    </div>
                    <img src={imgsh} alt="" style={{ width: 400 }} />
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
export default Portfolio