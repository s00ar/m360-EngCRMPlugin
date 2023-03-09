import something from "../assets/something.png";
import bar1 from "../assets/line3.png";
import "./css/PageI.css";
import React, { useEffect, useState } from "react";
import { Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import { Link } from "react-router-dom";

function PageI() {
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
        <>
            {matches && (
                <>
                    <Grid container id="next1">
                        <Slide left delay={100} duration={1000} distance="1200px">
                            <Grid item xs={12} md={3}>
                                <img src={something} className="images" alt="m360-do-something-marketing" />
                            </Grid>
                        </Slide>
                        <Grid item className="text" xs={10} md={3}>
                            You want to position yourself in the first places of organic searches "SEO", let's do it. Work with our team of SEO experts who rely on various software to find even the smallest error that you may have on your website in order to fix it. Once we have your website in order, we start with more advanced strategies for indexing, content creation and backlinks.
                            <Link className="smoothscroll" to="/services">
                                <Button className="contact-button">
                                    Check our services
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <div className="bar">
                            <img src={bar1} className="line3" alt="m360-bar1" />
                    </div>
                </>
            )}
            {!matches && (
                <>
                    <Slide left delay={100} duration={1000} distance="1200px">
                        <img src={something} className="images-sml" alt="m360-do-something-marketing" />
                    </Slide>
                        <div className="text-sml">
                            You want to position yourself in the first places of organic searches "SEO", let's do it. Work with our team of SEO experts who rely on various software to find even the smallest error that you may have on your website in order to fix it. Once we have your website in order, we start with more advanced strategies for indexing, content creation and backlinks.
                        </div>
                            <Link className="smoothscroll" to="/services">
                                <Button className="contact-button">
                                    Check our services
                                </Button>
                            </Link>
                    <img src={bar1} className="images-sml" alt="m360-bar1" />
                    
                </>
            )}
        </>
    )
};

export default PageI;