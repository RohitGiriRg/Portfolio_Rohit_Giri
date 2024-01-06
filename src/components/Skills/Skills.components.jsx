import React, { useState } from "react";
import { useRef,useEffect } from "react";

import './Skills.styles.css';

const Skills = () => {

  const [handle, handleScore] = useState(0);
  const [css, setCss] = useState(0);
  const [javascripted, setJavascripted] = useState(0);
  const [areact, setReact] = useState(0);
  const [active, setActivate] = useState(false);

  
  const inputRef = useRef();


  if(active){
            
    if(handle===89){
            clearTimeout();
     }
         else{
             setTimeout(()=>{
             handleScore(handle + 1);
             },30)
    }
    if(css===72){
        clearTimeout();
    }
    else{
        setTimeout(()=>{
            setCss(css+1);
        },30);
    }
    if(javascripted===82){
        clearTimeout();
    }
    else{
        setTimeout(()=>{
            setJavascripted(javascripted+1);
        },30);
    }
    if(areact===90){
        clearTimeout();
    }
    else{
        setTimeout(()=>{
            setReact(areact+1);
        },30);
    }
    
   
    
  }
 

  




    const scrollHandler = () => {    
    const currentScrollPosition = inputRef.current.getBoundingClientRect();  
    
    // console.log(currentScrollPosition.top);

    if(185 > currentScrollPosition.top ){
        setActivate(true);
        
    }
   
};


 

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

    return (
        <div id="skill-handler" ref={inputRef}>
            <section  className="skills section" >
                <div className="container">
                    <div className="skills-box" >
                    <h3 className="sub-heading align-heading sub-heading-dark">&nbsp; My skills</h3>
                        <div className="box-heading">

                            <div className="box-desc">
                                <h1 className="heading subDark"> Let me help you</h1>
                                <p className="text">
                                    <a href="#home_page" className="btn"> Hire me</a>
                                </p>

                            </div>
                        </div>
                        <div className="skills-wrap">
                            <div className="skill" on>
                               <div className={active ? 'sk-progress counter-activate':'sk-progress counter-unactivate'}>
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="89">{handle}</span>%
                                    </h2>
                                </div>
                                <div className="sk-title subDark">HTML</div>
                            </div>

                            <div className="skill">
                                <div className={active ? 'sk-progress css-activate':'sk-progress counter-unactivate'}>
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="68">{css}</span>%
                                    </h2>
                                </div>
                                <div className="sk-title subDark">CSS</div>
                            </div>


                            <div className="skill">
                                <div className={active ? 'sk-progress js-activate':'sk-progress counter-unactivate'}>
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="82">{javascripted}</span>%
                                    </h2>
                                </div>
                                <div className="sk-title subDark">JavaScript</div>
                            </div>


                            <div className="skill">
                                <div className={active ? 'sk-progress areact-activate':'sk-progress counter-unactivate'}>
                                    <svg>

                                        <circle cx="75" cy="75" r="68" />
                                    </svg>
                                    <h2 className="counter">
                                        <span data-target="80">{areact}</span>%
                                    </h2>
                                </div>
                                <div className="sk-title subDark">React JS</div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Skills;