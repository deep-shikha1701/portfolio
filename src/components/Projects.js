import React from 'react';
import './Projects.scss';
import Card from './Card'

function Projects() {
    return (
        <div id="projects" className="projects">
             <div className="projects__container">
                <div className="projects__title">
                    <h1>Projects</h1>
                    <h3>MY WORKS</h3>
                </div>
                <div className="projects__content">
                    <Card title="React - Clock" description={"A simple but attractive clock using HTML, CSS and ReactJS."} link={"https://github.com/deep-shikha1701/Twitter-UI-React"} />
                    <Card title="Twitter - UI Clone" description={"Cloning twitter UI using ReactJS, Material UI, Firebase."} link={"https://github.com/deep-shikha1701/Twitter-UI-React"} />
                    <Card title="Binary Tree Maker" description={"A website where you can create and visualize a binary tree."} link={""} />
                    <Card title="Crypto-price-Tracker" description={"A price tracker for various cryptocurrencies using ReactJS, TailwindCSS, and Axios"} link={"https://github.com/deep-shikha1701/Crypto-price-tracker"} />
                </div>
                
            </div>
        </div>
    )
}

export default Projects
