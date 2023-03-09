import React, { useState, useEffect } from "react";
import "./css/home.css";
import {Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import line1 from "../assets/line1.png";
import client from "../assets/image8.png";
import { Link } from "react-router-dom";

function Clients() {
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
    const Button = styled.button`
        display: inline-block;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #45337D;
        border-radius: 4rem;
        display: block;
        background: black;
        color: #624D8B;
        `;
    return (
        <>{matches && (

            <Grid container id="footer" spacing={1}>
                <Grid item xs={6}>
                    <div className="home-elements">
                        <Slide left delay={750} duration={1500} distance="40px">
                            <h1>Our Success Cases</h1>
                            <img src={line1} alt="line-m360" />
                        </Slide>
                        <p>High-performance Google Ads campaigns aimed at achieving your brand's objectives. Together with you, we trace KPIs that will allow us to measure the return on your investment. We always keep you informed by email about how your campaign is going. And you always, always have customer service at your disposal, we put at your disposal an executive who will watch over your project, who will also control that the quality of the service you are getting meets your expectations.</p>
                        <p>There are thousands of agencies and developers in the world, why choose us? Simple, (we care about what you care about) and that is what makes us deliver everything on the field in each project, we do not stop until we obtain the total satisfaction of our valued clients.</p>
                        <Link className="smoothscroll" to="/work">
                                <Button className="contact-button">
                                View our work
                                </Button>
                            </Link>
                    </div>
                </Grid>
                
                <Grid item xs={6}>
                    <img src={client} className="space" alt="client-m360" width={500}/>
                </Grid>
            </Grid>
        )}
        {!matches && (
            <div className="home-elements">
                <Slide left delay={750} duration={1500} distance="40px">
                    <h1>Our Success Cases</h1>
                    <img src={line1} alt="line-m360" className="line1" />
                </Slide>
                <div className="right-s">
                    <p>High-performance Google Ads campaigns aimed at achieving your brand's objectives. Together with you, we trace KPIs that will allow us to measure the return on your investment. We always keep you informed by email about how your campaign is going. And you always, always have customer service at your disposal, we put at your disposal an executive who will watch over your project, who will also control that the quality of the service you are getting meets your expectations.</p>
                    <p>There are thousands of agencies and developers in the world, why choose us? Simple, (we care about what you care about) and that is what makes us deliver everything on the field in each project, we do not stop until we obtain the total satisfaction of our valued clients.</p>
                </div>
                <Link className="smoothscroll" to="/work">
                                <Button className="contact-button">
                                View our work
                                </Button>
                            </Link>
                <img src={client} className="image" alt="client-m360" width={100}/>
        </div>
        )}
        </>
    )
};
export default Clients;