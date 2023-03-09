import "./css/sinergix.css";
import React, { useState, useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import Footer from './Footer';
import line2 from "../assets/Line 2.png"

function Work() {
    /* START MEDIA QUERIES */
    const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 924px)").matches
    )
    
useEffect(() => {
    window
    .matchMedia("(min-width: 924px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []); 
    /* END MEDIA QUERIES */
        const [isVisible, setIsVisible] = useState(true);

        const [height, setHeight] = useState(0)
        
        useEffect(() => {   
            window.addEventListener("scroll", listenToScroll);
            return () => 
            window.removeEventListener("scroll", listenToScroll); 
        }, [])
        
        const listenToScroll = () => {
            let heightToHideFrom = 1200;
            const winScroll = document.body.scrollTop || 
                document.documentElement.scrollTop;
            setHeight(winScroll);
            if (winScroll > heightToHideFrom) {  
                isVisible && setIsVisible(false);
            } else {
                setIsVisible(true);
            }  
        };


    return(
        <>
            {matches ? (
                <div className="container" id="home">
                <div className="story-container">
                        <Slide left delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img007.jpg")} className="story-image" alt="m360-marketing"/>
                            </div>
                        </Slide>
                        <div>
                            <Slide right duration={1500} distance="1400px">
                                <div className="story-padding-left">
                                    <h1 className="text-background left-align">Synergix</h1>
                                    <p className="story-paragraph">We have created a Web site that is optimized for SEO that will help increase their ranking on Google, so is easy to find their products.</p>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div>
                        {
                        isVisible 
                        && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                    }
                </div>
                <div className="story-container">
                    <div>
                        <Slide left duration={1500} distance="1400px">
                            <div className="story-padding-right">
                                <h3 className="background-image">Synergix's mission is to empower individuals and businesses</h3>
                                <p className="story-paragraph">Synergix Worldwide Inc. is a customer service oriented company dedicated to providing every business and individual with genuine Hyundai and Doosan marine engine turbochargers and parts, as well as completely new engines. 
                                <br/>
                                Synergix's challenge was to enable businesses that needed these types of products to find them and contact them with full confidence. This project started with his Synergix same  need of finding a supplier that covers these requirements. When he contacted his M360, we immediately started working and our corporate culture clicked right away. </p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img008.jpg")} className="centered" alt="m360-marketing"/>
                            </div>
                        </Slide>
                    </div>
                </div>
                <h2 className="background-image " id="footer">This why we ensure 100% satisfaction</h2>
                <div className="story-container story-padding">
                        <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img009.jpg")}  alt="m360-marketing"/>
                        </Slide>
                    <div className="">
                        <Slide right duration={1500} distance="1400px">
                                <p className="story-padding-left">With the goal of always achieving 100% customer satisfaction, we started with workflow. The website has generated many qualified leads across America and has been able to generate contacts and business relationships thanks to its robustness and clarity in presenting the company and its value proposition.</p>
                        </Slide>
                    </div>
                </div>
            {/* FOOTER AND BACK TO TOP BUTTON */}
                <Footer/>
            </div>
            ):(
                <>
                    <div className="container-s" id="home">
                        <div className="center-align">
                                <Slide right duration={1500} distance="1400px">
                                    <h1 className="text-background top-space-s">Synergix</h1>
                                    <p className="story-paragraph-s">We have created a Web site that is optimized for SEO that will help increase their ranking on Google, so is easy to find their products.</p>
                                </Slide>
                            <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img007.jpg")} alt="m360-marketing" width={"70%"} className="story-image-s"/>
                            </Slide>
                            <img src={line2} height= {"10em"} width= {"100%"} className="line-s" alt="m360-line"/>
                        </div>
                        <div>
                            {isVisible 
                            && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                        }
                    </div>
                    <div className="story-container-s">
                            <Slide left duration={1500} distance="1400px">
                                    <div className="background-image">
                                        <h4 className=" left-align">Synergix's mission is to empower individuals and businesses</h4>
                                    </div>
                                    <p className="story-paragraph-s">Synergix Worldwide Inc. is a customer service oriented company dedicated to providing every business and individual with genuine Hyundai and Doosan marine engine turbochargers and parts, as well as completely new engines. 
                                    <br/>
                                    Synergix's challenge was to enable businesses that needed these types of products to find them and contact them with full confidence. This project started with his Synergix same  need of finding a supplier that covers these requirements. When he contacted his M360, we immediately started working and our corporate culture clicked right away. </p>
                            </Slide>
                        <div className="center-align">
                            <Slide right delay={150} duration={1000} distance="1200px">
                                    <img src={require("../assets/img008.jpg")} width={"70%"} className="story-image-s" alt="m360-marketing"/>
                            </Slide>
                        </div>
                    </div>
                    <div className="bottom-space">
                        <h4 className="inverted-background left-align" id="footer">This why we ensure 100% satisfaction</h4>
                                <Slide right duration={1500} distance="1400px">
                                        <p className="story-paragraph-s">With the goal of always achieving 100% customer satisfaction, we started with workflow. The website has generated many qualified leads across America and has been able to generate contacts and business relationships thanks to its robustness and clarity in presenting the company and its value proposition.</p>
                                </Slide>
                            <div className="center-align">
                                <Slide left delay={150} duration={1000} distance="1200px">
                                        <img src={require("../assets/img009.jpg")}  alt="m360-marketing" width={"70%"} className="story-image-s"/>
                                </Slide>
                            </div>
                        <Footer/>
                    </div>
                </div>
            </>
            )}
    </>
    )
}

export default Work;