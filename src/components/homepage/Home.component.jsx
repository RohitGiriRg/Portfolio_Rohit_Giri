import React from "react";

import './Home.styles.css';
import circle1 from '../../assets/circle1.png';
import dots1 from '../../assets/dots.png';
import rg from '../../assets/person1.jpg'
import ShimmerEffect from "../ShimmerEffect";
import ShimmerNavbar from "../ShimmerNavbar";




const Home = () => {

    return (
        <div id="home_page">
            <section class="showcase-area">
                <div class="container">
                
                <ShimmerEffect/>
                    {/* <div class="showcase-info">

                        <h3 class="sub-heading sub-heading-dark">&nbsp; Home</h3>
                        <h1 class="heading subDark">Rohit Giri</h1>
                        <p class="text">I am a Frontend Developer. Let's Work Together.</p>
                        <div class="cta">
                            <a href="#contact-handler" class="btn rohit">Contact Me</a>
                            <a href="https://drive.google.com/file/d/1yBMwuch4upGms0D4UXqeSWiL_QmDZfZ8/view" target="_blank" rel="noreferrer" class="btn secondary-btn">Download CV</a>
                        </div>
                    </div> 

                    <div class="showcase-image">
                        <img src={rg} class="person" alt="Rohit" />
                        <img src={circle1} class="shape circle" alt="" />
                        <img src={dots1} class="shape dots" alt="" />

                    </div>
                    */}
                </div>
            </section>
        </div>

    );
}


export default Home;