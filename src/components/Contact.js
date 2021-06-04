import React from 'react';
import './Contact.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';


function Contact() {
    return (

        // <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
        // Simply fill the from and send me an email.</p>
        <div id="contact"className="contact">
            <div className="contact__container">
                <div className="contact__title">
                    <h1>Contact Me</h1>
                    <h3>LET'S TALK</h3>
                </div>
                <div className="contact__content">
                <form class="form">
                    <h6>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h6>
                    <p type="Name:"><input placeholder="Write your name here"></input></p>
                    <p type="Email:"><input placeholder="Let me know how to contact you back"></input></p>
                    <p type="Message:"><textarea placeholder="What would you like to tell us"/></p>
                    <button>Send Message</button>
                    <div className="about__social">
                            <a href="https://www.facebook.com/deepshikha.sahu.3304/"><FacebookIcon fontSize="small" /></a>
                            <a href="https://www.linkedin.com/in/deepshikha10/"><LinkedInIcon fontSize="small" /></a>
                            <a href="https://twitter.com/Deepshikha_10/"><TwitterIcon fontSize="small" /></a>
                            <a href="https://github.com/deep-shikha1701"><GitHubIcon fontSize="small" /></a>
                            <a href="mailto:dsahu2901@gmail.com"><MailIcon fontSize="small" /></a>
                        </div>
                    </form>            
                </div>
            </div>            
        </div>
    )
}

export default Contact 