import React, { useState } from 'react';

import useDarkMode from '@fisch0920/use-dark-mode';
import { FaBars } from 'react-icons/fa';
import ShimmerNavbar from '../ShimmerNavbar';



import './Navbar.style.css';

const Navbar = () => {
    
    const [scroll , setScroll] = useState(false);
    const [darkmodestate, setDarkmodesate] = useState(false);
    const darkMode = useDarkMode(false);
    const [navbar, setNavbar] = useState(false);
    
    const handleScroll = () => {


        
        // console.log(window.pageYOffset > 0);
        if(window.pageYOffset > 0){
        setScroll(true);
        }
        else{
            setScroll(false)
        }
    }

    const handleDarkmode = () => {

        if(darkmodestate){

            setDarkmodesate(false);
        }else{
            setDarkmodesate(true);
        }

    }

    // console.log(darkmodestate);

    const handleNavbar = () => {
        if(navbar){
            setNavbar(false)
        }else{
            setNavbar(true)
        }
    }



    return (
        <>
                
        <div  onScroll={window.addEventListener('scroll', handleScroll)} >

            <header className={scroll ? 'stickyHeader': null }>

                  <ShimmerNavbar></ShimmerNavbar> 
                <div className="navbar">

                    
                    <a href="#home_page" className="logo">
                    <div className="darkTitle">
                         Portf<span>olio.</span>
                         </div>
                        
                    </a>
                    {navbar ? <div onClick={handleNavbar} className="menu-bars cross">X</div> :  <FaBars className='menu-bars' onClick={handleNavbar}/> }
                    
                   
                   
                   
                    <div className={navbar ? 'links' : 'displaynone'}>
                        <ul>
                            <li>
                                <a href="#home_page" className="nav-link">Home</a>
                            </li>
                            <li>
                                <a href="#about-handler" className="nav-link">About</a>
                            </li>
                            <li>
                                <a href="#skill-handler" className="nav-link">SKILLS</a>
                            </li>
                            <li>
                                <a href="#projects-handler" className="nav-link">Projects</a>
                            </li>
                            <li>
                                <a href="#contact-handler" className="nav-link">Contact</a>
                            </li>


                        </ul>
                        
                        {/* <i className={darkmode ? 'uil uil-sun toggle-btn' : 'uil uil-moon toggle-btn'} onClick={handleDarkmode}></i> */}
                        {/* <i checked={darkMode.value} onChange={darkMode.toggle} ></i> */}

                        {darkmodestate ? 
                        <button id='rohit' className="toggle-btn darkTitleColor" type="button" onClick={darkMode.enable} onClickCapture={handleDarkmode}>
                           ☀ 
                        </button>                            
                       : 
                        <button id='giri' className="toggle-btn darkTitleColor" type="button" onClick={darkMode.disable} onClickCapture={handleDarkmode}>
                        ☾
                        </button> 
                            
                        
                        }

                        
                            {/* darkmodestate ? <h2 onClick={handleDarkmode} htmlFor='giri'> ☾</h2> : <h2 onClick={handleDarkmode}>☀</h2> */}
                        

                                 
                        

                    </div>
                </div>
            </header>

        </div>
        </>
    );
}


export default Navbar;



