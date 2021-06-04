import React from 'react';
import './Skills.scss';
import image from './assets/image2.jpg';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';


function Skills() {
    return (
        <div id="skills" className="skills">
            <div className="skills__container">
                <div className="skills__title">
                    <h1> My Skills & Abilities</h1>
                    <h3> SKILL SET</h3>
                </div>
                <div className="skills__content">
                    <div className="skills__section">
                        <div className="skills__row">
                            <h6>C/C++<span style={{marginLeft:"80%"}}>92%</span></h6>
                            <div className="skills__bar">
                                <div className="skills__bar__in" style={{width: "90%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="skills__row">
                            <h6>Python<span style={{marginLeft:"62%"}}>75%</span></h6>
                            <div className="skills__bar">
                                <div className="skills__bar__in" style={{width: "75%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="skills__row">
                            <h6>Javascript<span style={{marginLeft:"68%"}}>85%</span></h6>
                            <div className="skills__bar">
                                <div className="skills__bar__in" style={{width: "85%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="skills__row">
                            <h6>ReactJS<span style={{marginLeft:"68%"}}>80%</span></h6>
                            <div className="skills__bar">
                                <div className="skills__bar__in" style={{width: "80%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="skills__row">
                            <h6>Node JS<span style={{marginLeft:"38%"}}>50%</span></h6>
                            <div className="skills__bar">
                                <div className="skills__bar__in" style={{width: "50%"}}>
                                </div>
                            </div>
                        </div>
                        <div className="skills__SoftSkills">
                            <h1>SOFT SKILLS</h1>
                            <div className="skills__row">
                                <h6>Communication<span style={{marginLeft:"68%"}}>90%</span></h6>
                                <div className="skills__bar">
                                    <div className="skills__bar__in" style={{width: "90%"}}/>
                                </div>
                            </div>
                            <div className="skills__row">
                                <h6>Problem Solving<span style={{marginLeft:"48%"}}>70%</span></h6>
                                <div className="skills__bar">
                                    <div className="skills__bar__in" style={{width: "70%"}}/>
                                </div>
                            </div>
                            <div className="skills__row">
                                <h6>Teamwork<span style={{marginLeft:"69%"}}>85%</span></h6>
                                <div className="skills__bar">
                                    <div className="skills__bar__in" style={{width: "85%"}}/>
                                </div>
                            </div>
                            <div className="skills__row">
                                <h6>Creativity<span style={{marginLeft:"55%"}}>70%</span></h6>
                                <div className="skills__bar">
                                    <div className="skills__bar__in" style={{width: "70%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills__col" >
                        <div className="skills__image">
                            <img src={image} alt=""/>
                        </div>
                        <div className="skills__tools">
                            <h1>Tools & Techonolgies </h1>
                                <img src={img1} alt=" "/>
                                <img src={img2} alt=" "/>
                                <img src={img3} alt=" "/>
                                <img src={img4} alt=" "/>
                                <img src={img5} alt=" "/>
                                <img src={img6} alt=" "/>
                                <img src={img7} alt=" "/>
                                <img src={img8} alt=" "/>
                                <img src={img9} alt=" "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
