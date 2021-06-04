import React from 'react';
import './About.scss'
import img from './assets/image.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

function About() {
    return (
        <div id="about" className="about">
            <div className="about__container">
                <div className="about__title">
                    <h1>About Me</h1>
                    <h3>INTRODUCTION</h3>
                </div>
                <div className="about__contents">
                    <div className='about__image'>
                        <img src={img} alt=''/>
                    </div>
                    <div className="about__text">
                        <p>I am a third year undergraduate at KIIT University, Bhubaneswar. I am a front-end developer. Currently, I am trying my hands on Backend development as well. I have learned C, C++, Java and JavaScript. 
                            I am looking for opportunities where I can be more involved in learning new concepts and technologies. Something that I love about programming is the opportunity to work with people from a wide range of discplines. Alongside, I've also developed sound communication and interpersonal skills. 
                            <br/><br/>Apart from work, I am a content writer and editor. I have also lent my services to various student societies in my academic years.
                        </p>
                        <div className="about__social">
                            <a href="https://www.facebook.com/deepshikha.sahu.3304/"><FacebookIcon fontSize="small" /></a>
                            <a href="https://www.linkedin.com/in/deepshikha10/"><LinkedInIcon fontSize="small" /></a>
                            <a href="https://twitter.com/Deepshikha_10/"><TwitterIcon fontSize="small" /></a>
                            <a href="https://github.com/deep-shikha1701"><GitHubIcon fontSize="small" /></a>
                            <a href="mailto:dsahu2901@gmail.com"><MailIcon fontSize="small" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
