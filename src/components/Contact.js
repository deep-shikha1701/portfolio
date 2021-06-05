import React,{useState} from 'react';
import './Contact.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';  
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';


function Contact() {

    const [value, setValue] = useState({name:"", email:"",message:""});

    const {name,email,message} = value;

    const handleChange = e =>{
            setValue({...value,[e.target.name]:e.target.value})
    }   

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response= await fetch("https://v1.nocodeapi.com/ds1701/google_sheets/HtopwTywLJluVqYq?tabId=Sheet1",{
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify([[name,email,message,new Date().toLocaleString()]])

            });
            await response.json();

            setValue({...value,name:"",email:"",message:""});
        }
        catch(err){
            console.log(err);
        }
    };


    return (
        <div id="contact"className="contact">
            <div className="contact__container">
                <div className="contact__title">
                    <h1>Contact Me</h1>
                    <h3>LET'S TALK</h3>
                </div>
                <div className="contact__content">
                <form className="form" action="/" method="POST" onSubmit={handleSubmit}> 
                    <h6>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</h6>
                    <p type="Name:"><input type="text" name="name" value={name} onChange={handleChange} placeholder="Write your name here" required /></p>
                    <p type="Email:"><input type="email" name="email" value={email} onChange={handleChange} placeholder="Enter your email address" required /></p>
                    <p type="Message:"><textarea type="text" value={message} onChange={handleChange} name="message" placeholder="Leave your message here" required /></p>
                    <button type="Submit">Send message</button>
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
