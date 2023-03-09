import "./css/janneth.css";
import React, { useState, useEffect } from "react";
import { Slide, Fade } from "react-reveal";
import Footer from './Footer';
import line2 from "../assets/Line 2.png";

function Janneth() {
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
            let heightToHideFrom = 900;
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
                                <img src={require("../assets/img005.jpg")} className="story-image" alt="m360-marketing"/>
                            </div>
                        </Slide>
                        <div>
                            <Slide right duration={1500} distance="1400px">
                                <div className="story-padding-left">
                                    <h1 className="text-background left-align">Janneth Spa</h1>
                                    <p className="story-paragraph">We've done a complete digital campaign, creating a Web site, SEO, Google Adds, Unified listing and a Facebook ad campaign to attract more customers to their business</p>
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
                                <h1 className="background-image">Come relax with us</h1>
                                <p className="story-paragraph">This SPA had a huge team of experts, in addition to an impressive workspace in which to provide quality services to its consumers. However, it was unable to attract new consumers, since it did not have an online presence.
                                We created a web site with a strong SEO strategy to optimize organic searches. Meanwhile, we established the profile of their primary, secondary and negative buyer persona, and using all this information, we created campaigns for Google search and display networks, as well as a Facebook ads campaign, boosting conversions and maximizing ROI.<br/><br/>
                                We work using collaborative work methodologies offering partial reviews prior the final delivery of the product. </p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={require("../assets/img004.jpg")} className="centered" alt="m360-marketing"/>
                            </div>
                        </Slide>
                    </div>
                </div>
                <h2 className="background-image " id="footer">This why we ensure 100% satisfaction</h2>
                <div className="story-container story-padding">
                        <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img006.jpg")}  alt="m360-marketing"/>
                        </Slide>
                    <div className="">
                        <Slide right duration={1500} distance="1400px">
                                <p className="story-padding-left">I attribute my company ‘s must recent success and growth to the amazing team of Metamorphosis I have commissioned mutile projects with them. They are professional, deliver extremely fast and are highly talented. All the team members communicate well and are always available. They have provided me with exquisite branding and presentation packages. They inspire confidence and give you tools for success.<br/><br/>Alejandra Wyse </p>
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
                                    <h1 className="text-background top-space-s">Janneth Spa</h1>
                                    <p className="story-paragraph-s">We've done a complete digital campaign, creating a Web site, SEO, Google Adds, Unified listing and a Facebook ad campaign to attract more customers to their business.</p>
                                </Slide>
                            <Slide left delay={150} duration={1000} distance="1200px">
                                <img src={require("../assets/img005.jpg")} alt="m360-marketing" width={"70%"} className="story-image-s"/>
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
                                        <h4 className=" left-align">Come relax with us</h4>
                                    </div>
                                    <p className="story-paragraph-s">This SPA had a huge team of experts, in addition to an impressive workspace in which to provide quality services to its consumers. However, it was unable to attract new consumers, since it did not have an online presence.
                                    We created a web site with a strong SEO strategy to optimize organic searches. Meanwhile, we established the profile of their primary, secondary and negative buyer persona, and using all this information, we created campaigns for Google search and display networks, as well as a Facebook ads campaign, boosting conversions and maximizing ROI.<br/><br/>
                                    We work using collaborative work methodologies offering partial reviews prior the final delivery of the product. </p>
                            </Slide>
                        <div className="center-align">
                            <Slide right delay={150} duration={1000} distance="1200px">
                                    <img src={require("../assets/img005.jpg")} width={"70%"} className="story-image-s" alt="m360-marketing"/>
                            </Slide>
                        </div>
                    </div>
                    <div className="bottom-space">
                        <h4 className="inverted-background left-align" id="footer">This why we ensure 100% satisfaction</h4>
                                <Slide right duration={1500} distance="1400px">
                                        <p className="story-paragraph-s">I attribute my company ‘s must recent success and growth to the amazing team of Metamorphosis I have commissioned mutile projects with them. They are professional, deliver extremely fast and are highly talented. All the team members communicate well and are always available. They have provided me with exquisite branding and presentation packages. They inspire confidence and give you tools for success.<br/><br/> Alejandra Wyse</p>
                                </Slide>
                            <div className="center-align">
                                <Slide left delay={150} duration={1000} distance="1200px">
                                        <img src={require("../assets/img006.jpg")}  alt="m360-marketing" width={"70%"} className="story-image-s"/>
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

export default Janneth;