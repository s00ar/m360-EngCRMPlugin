import "./css/home.css";
import React, { useState, useEffect } from "react";
import {Fade, Slide} from "react-reveal";
import ilu1 from "../assets/ilu1.png";
import ilu2 from "../assets/ilu2.png";
import ilu3 from "../assets/ilu3.png";
import ilu4 from "../assets/ilu4.png";
import ilu5 from "../assets/ilu5.png";

function Comic() {
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
    return (
        <>{matches && (
            <>
            {/* DESKTOP VERSION */}
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="column">
                            <img src={ilu1} style={{ width: "100%"}} alt="ilustration1" />
                        </div>
                        <div className="column">
                            <img src={ilu2} style={{ width: "100%"}} alt="ilustration2" />
                        </div>
                    </Slide>
                    <Fade right delay={400} duration={1000} distance="1600px">
                        <div className="column">
                            <img src={ilu3} style={{ width: "100%"}} alt="ilustration3" />
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="twocolumn">
                            <h4 className="comic-text">Founder of Turbomekanics...</h4>
                        </div>
                    </Slide>
                    <Fade right delay={450} duration={1000} distance="1600px">
                        <div className="twocolumn">
                            <h4 className="comic-text">M360 proposes a strategy...</h4>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="twocolumn">
                            <img src={ilu4} style={{ width: "100%"}} alt="ilustration4" />
                        </div>
                    </Slide>
                    <Fade right delay={250} duration={1000} distance="1600px">
                        <div className="twocolumn">
                            <img src={ilu5} style={{ width: "70%"}} alt="ilustration5" />
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="twocolumn">
                            <h4 className="comic-text">Website design, word study...</h4>
                        </div>
                    </Slide>
                    <Fade right delay={1250} duration={1000} distance="1600px">
                        <div className="twocolumn">
                            <h4 className="comic-text">Sales have grown by %300.</h4>
                        </div>
                    </Fade>
                </div>
            </>
            )}
            {!matches && (
            <>
            {/* MOBILE VERSION */}
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="twocolumn-s">
                            <img src={ilu1} style={{ width: "100%"}} alt="ilustration1" />
                            <img src={ilu2} style={{ width: "100%"}} alt="ilustration2" />
                        </div>
                        
                            <h4 className="comic-text-s">David Mayorga, founder of Turbomekanics...</h4>
                    </Slide>
                    <Fade right delay={1250} duration={1000} distance="1600px">                        
                        <div className="row">
                            <div>
                                <img src={ilu3} style={{ width: "80%"}} alt="ilustration3" />
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div className="twocolumn">
                        </div>
                    </Slide>
                    <Fade right delay={1250} duration={1000} distance="1600px">
                        <div>
                            <h4 className="comic-text-s">M360 proposes a strategy...</h4>
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Slide left delay={250} duration={1000} distance="400px">
                        <div>
                            <img src={ilu4} style={{ width: "80%"}} alt="ilustration4" />
                            <h4 className="comic-text-s">Website design, word study...</h4>
                        </div>
                    </Slide>
                </div>
                <div className="row">
                    <Fade right delay={1250} duration={1000} distance="1600px">
                        <div>
                            <img src={ilu5} style={{ width: "50%"}} alt="ilustration5" />
                        </div>
                    </Fade>
                </div>
                <div className="row">
                    <Fade right delay={1250} duration={1000} distance="1600px">
                        <div>
                            <h4 className="comic-text-s">Sales have grown by %300.</h4>
                        </div>
                    </Fade>
                </div>
            </>
            )}
        </>
    )
}
export default Comic;