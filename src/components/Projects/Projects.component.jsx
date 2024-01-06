import React from "react";

import './Projects.styles.css';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';



const ProjectContainer = () => {

    return (
        
        <div id="projects-handler" className="sub-container">

        <br/>
        <br/>
        <br/>
        <center>
        <div className="project1">
        <a href='https://crown-clothing-rg.netlify.app/' target='_blank' rel="noreferrer">Live Demo</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://github.com/RohitNGiri/crown-clothing' target='_blank' rel="noreferrer" >Source Code</a>



        </div>
           </center>
           <main className="rohitaa">
            
        <div className="project2">
        <a href='https://rgmedia-duckanoo-703ea8.netlify.app/' target='_blank' className="simple-btn" rel="noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://github.com/RohitNGiri/Youtube_Clone' target='_blank' className="simple-btn" rel="noreferrer">Source Code</a>
                        


        </div>

        </main>

        <main className="rohitbb">
            
        <div className="project2">
        <a href='https://rgchat-seahorse-747e4b.netlify.app/' target='_blank' className="simple-btn" rel="noreferrer">Live Demo</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href='https://github.com/RohitNGiri/Real_Time_Chat_Application' target='_blank' className="simple-btn" rel="noreferrer">Source Code</a>
                        


        </div>

        </main>
            <h3 className="sub-heading align-heading-project sub-heading-dark">&nbsp; Projects</h3>
            <br/>
            <section className="project-section">
                 <div className="single-project">

                    <img src={p1} className='image1' alt="E-Commerce Website Screen Shot" />
                    <p className="project-data">
                        <h4>E - Commerce Site
                       
                        </h4>
                     
                            An online clothing buying website.
                        
                        <div className="demo-btns" >
                       
                            <a href='https://crown-clothing-rg.netlify.app/' target='_blank' className="simple-btn" rel="noreferrer">Live Demo</a>
                            <a href='https://github.com/RohitNGiri/crown-clothing' target='_blank' className="simple-btn" rel="noreferrer">Source Code</a>
                        </div>
                        
                    </p>
                </div><div className="space-bet"></div>
                 <div className="single-project">

                    <img src={p2} className='image1' alt="Youtube Clone Screen Shot"/>
                    <div className="project-data">
                        <h4>Youtube Clone</h4>
                   
                             Youtube Clone made with Rapid API 

                        <div className="demo-btns" >
                       
                            <a href='https://rgmedia-duckanoo-703ea8.netlify.app/' target='_blank' className="simple-btn" rel="noreferrer">Live Demo</a>
                            <a href='https://github.com/RohitNGiri/Youtube_Clone' target='_blank' className="simple-btn" rel="noreferrer">Source Code</a>
                        </div>
                    </div>
            
                </div><div className="space-bet"></div>
                 <div className="single-project">

                    <img src={p3} className='image1' alt="Real_Time_Chat_Application_Screen_Shot"/>
                    <p className="project-data">
                        <h4>Real Time Chat Application</h4>
                                                     
                            Way to live chat with other users.
                   
                        <div className="demo-btns" >
                       
                            <a href='https://rgchat-seahorse-747e4b.netlify.app/' target='_blank' className="simple-btn" rel="noreferrer">Live Demo</a>
                            <a href='https://github.com/RohitNGiri/Real_Time_Chat_Application' target='_blank' className="simple-btn" rel="noreferrer">Source Code</a>
                        </div>
                    </p>
                </div>
                <div className="space-bet"></div>


            </section>

          

        </div>
    )
}


export default ProjectContainer;