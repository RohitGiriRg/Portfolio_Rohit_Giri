import React from "react";

import './about.styles.css';
import reactjs from '../../assets/MERN/react-1.svg';
import expressjs from '../../assets/MERN/express-109.svg';
import nodejs from '../../assets/MERN/nodejs-icon.svg';
import mongodb from '../../assets/MERN/mongodb-icon-1.svg';

const AboutSection = () => {

  
 

    return (
        <div id="about-handler" >
            <section className="about section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-card">
                            <img src={mongodb} alt="HTML" />
                            <h3>HTML</h3>
                        </div>
                        <div className="about-card">
                            <img src={expressjs} alt="CSS"/>
                            <h3>CSS</h3>
                        </div>
                        <div className="about-card">
                            <img src={nodejs} alt="ReactJS" />
                            <h3>ReactJS</h3>
                        </div>
                        <div className="about-card">
                            <img src={reactjs} alt="JavaScript"/>
                            <h3>JavaScript</h3>
                        </div>

                    </div>
                    <div className="about-info">
                        <h3 className="sub-heading sub-heading-dark">&nbsp; About me</h3>
                        <br />
                        <h1 className="heading subDark">Hello, I am Rohit Giri</h1>
                        <p className="text">I graduated from the Amravati University in 2022 with a degree in <b>Bachelor of Computer
                            Application (BCA).</b><br />
                            Through out that, I have some experience skills in <b>Html, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, TypeScript and Database like Firebase, MongoDB. </b> I am not only
                            good at
                            Frontend
                            dvelopment, But
                            also i have deep understanding of 
                           
                         <b> NPM Packages, REST API, and Responsive Web Application.</b> <br />
                            I have completed some projects like<b> E-commerce website, Real-Time Messaging App  & Youtube Clone </b>, Where I learn How to work on live projects and host them using <b>Github & Netlify. </b>
                            I am constantly seeking to <b>learn and stay up-to-date</b> with the latest trends and technologies in the industry.

                            </p>
                        <div className="cta">
                            <a href="mailto:rohitgirirg7027@gmail.com" className="btn rohit">Contact Me</a>
                            <a href="https://drive.google.com/file/d/1yBMwuch4upGms0D4UXqeSWiL_QmDZfZ8/view" target="_blank" rel="noreferrer" class="btn secondary-btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutSection;