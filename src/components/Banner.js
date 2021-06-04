import React from 'react';
import './Banner.scss'
import Typed from 'react-typed';
// import img from './assets/image.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';




function Banner() {

    const handleClick = () =>{
        window.location.href='https://drive.google.com/file/d/1vdY-7TNgZoHSIG7SS--zMMSacODCLN9n/view?usp=sharing';
    }



    return (
        <header id="home" className="banner">
           <div className="banner__contents">
               <div className="banner__text">
                    <h1 className="banner__title">
                        <h6>Hi, I am </h6>
                        <Typed strings={["Deepshikha Sahu"]} typeSpeed={50}/>
                      </h1>
                    <div className="banner__descrption">
                        <Typed strings={["I am a Frontend Developer and a Backend hustler."]} typeSpeed={40}/>
                    </div>
                    <button onClick={handleClick} className="banner__button">View Resume</button>
                    <div className="banner__social">
                            <a href="https://www.facebook.com/deepshikha.sahu.3304/"><FacebookIcon fontSize="small" /></a>
                            <a href="https://www.linkedin.com/in/deepshikha10/"><LinkedInIcon fontSize="small" /></a>
                            <a href="https://twitter.com/Deepshikha_10/"><TwitterIcon fontSize="small" /></a>
                            <a href="https://github.com/deep-shikha1701"><GitHubIcon fontSize="small" /></a>
                            <a href="mailto:dsahu2901@gmail.com"><MailIcon fontSize="small" /></a>
                        </div>
                </div>
           </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
