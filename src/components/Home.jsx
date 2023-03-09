import React from "react";
import "./css/home.css";
import {Fade, LightSpeed, Slide} from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import Comic from "./Comic";
import Clients from "./Clients";
import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link } from "react-router-dom";
import something from "../assets/something.png";
import bar1 from "../assets/line3.png";

function Home() {
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
  /* START OF END OF PAGE BUTTON */
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
  /* END OF PAGE BUTTON */
  const Button = styled.button`
      display: inline-block;
      font-size: 1em;
      margin: 1em;
      /* padding: 0.25em 1em; comento esto para solucionar el padding desplazado de la pag de home*/
      border: 2px solid #45337D;
      border-radius: 4rem;
      display: block;
      background: black;
      color: #624D8B;
      `;
    return (
      <div className="App" id="home">
            {/* Big Screen */}
            {matches && (
              <>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <div className="home-elements">
                      <Fade>
                        <Slide left delay={1250} duration={1000} distance="400px">
                          <h1 className="text-dargrey">We are,</h1>
                        </Slide>
                      </Fade>
                      <Slide left delay={500} duration={1200} distance="40px">
                        <h1 className="text-grey">We Think,</h1>
                      </Slide>
                      <Slide left delay={750} duration={1500} distance="40px">
                        <h1 className="text-white">We do!</h1>
                      </Slide>
                      <p className="p-text">We design and create a unique website for each cliente. A website must express the unique personality that each brand has, together with UX/UI concepts. Brands are becoming more creative when it comes to selling online, don't be left out.
                    Count on us to develop the website you've always wanted.
                    </p>
                          <Link className="smoothscroll" to="/contact">
                            <Button className="contact-button">
                              Get in touch
                            </Button>
                          </Link>
                </div>
            </Grid>
              <Grid item xs={8}>
                <LightSpeed right delay={250} duration={1000} distance="40px">
                  <img src={logo} className="logo" alt="logo"/>
                </LightSpeed>
              </Grid>
                        {/* NEXT BUTTON */}
                        <div className="floating">
                        {
                            isVisible 
                            && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                        }
                        </div>
                        {/* END OF NEXT BUTTON */}
                        
            </Grid>
            <Grid container>
                      <Slide left delay={100} duration={1000} distance="1200px">
                          <Grid item xs={12} md={6}>
                              <img src={something} className="images" alt="m360-do-something-marketing" />
                          </Grid>
                      </Slide>
                      <Grid item className="text" xs={10} md={6}>
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
            <Comic/>
            <Clients/>
            <div id="footer">
              <Footer/>
              </div>
            </>
          )}
          {/* Small Screen*/}
          {!matches && (
            <>
              <div className="home-elements-s">
                <div>
                  <Fade>
                    <Slide left delay={1250} duration={1000} distance="400px">
                      <h1 className="text-dargrey">We are,</h1>
                    </Slide>
                  </Fade>
                </div>
                <div>
                  <Slide left delay={500} duration={1200} distance="40px">
                  <h1 className="text-grey">We Think,</h1>
                  </Slide>
                </div>
                <div>
                  <Slide left delay={750} duration={1500} distance="40px">
                  <h1 className="text-white">We do!</h1>
                  </Slide>
                </div>
                <p className="p-text small">We design and create a unique website for each cliente. A website must express the unique personality that each brand has, together with UX/UI concepts. Brands are becoming more creative when it comes to selling online, don't be left out.
                Count on us to develop the website you've always wanted.
                </p>
                <Link className="smoothscroll" to="/contact">
                  <Button className="contact-button">
                    Get in touch
                  </Button>
                </Link>
                
                {/* NEXT BUTTON */}
                <div className="floating">
                {
                    isVisible 
                    && <a href="#footer"  id="hide"><img src={require("../assets/Vector5.png")} className="arrow" alt="down-arrow" /></a>
                }
                </div>
                {/* END OF NEXT BUTTON */}
              </div>
              
              <Slide left delay={100} duration={1000} distance="1200px">
                  <img src={something} className="images-sml" alt="m360-do-something-marketing" />
              </Slide>
                  <p className="p-text small left-s right-s">
                      You want to position yourself in the first places of organic searches "SEO", let's do it. Work with our team of SEO experts who rely on various software to find even the smallest error that you may have on your website in order to fix it. Once we have your website in order, we start with more advanced strategies for indexing, content creation and backlinks.
                  </p>
                      <Link className="smoothscroll" to="/services">
                          <Button className="contact-button">
                              Check our services
                          </Button>
                      </Link>
              <img src={bar1} className="images-sml" alt="m360-bar1" />
            <Comic/>
            <Clients/>
            <div className="spacer" id="footer">
            <Footer/>
            </div>
          </>
        )}
      </div>
    );
  }

export default Home;