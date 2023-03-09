import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Fade, Slide } from "react-reveal";
import { useState, useEffect } from "react";
import './css/contact.css';
import Footer from './Footer';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/4b1bfb70-0859-11ed-be50-e78da9ee852d";

const Button = styled.button`
display: inline-block;
font-size: .8em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #45337D;
border-radius: 2rem;
display: block;
background: black;
color: white;
`;
const Contact = () => {
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

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
    setTimeout(() => {
        setSubmitted(true);
    }, 100);
    };

    if (submitted) {
    return (
        <>
            <div class="container">
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
        <Button className="nav-button">
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/services">
                Regresar
            </NavLink>
        </Button>
            </div>
        </>
    );
    }


    return (
        <div id='home'>
        {matches ? (
            <div class="container">                
                <Fade bottom duration={1000}>
                    <h1 className="white--header">
                        <span>Contact us and get your M360 assesment today!</span>
                    </h1>
                </Fade>
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="form-container"
                >
                    <h2 className="FormElement">
                        <span className='FormText' >
                        Please tell us  
                        </span>
                        <span  className="FormInput--container">
                            <input className="FormElement" type="text" placeholder="your name" name="name" required />
                        </span>
                    </h2>
                    <h2>
                        <span className="FormText">
                        and also give us  
                        </span>
                        <span  className="FormInput--container">
                            <input type="email" placeholder="your email" name="email" required />
                        </span>
                    </h2>
                    <h2>
                        <span className="FormText">
                            and last but not least
                        </span>
                        <span className="FormInput--container">
                            <input type="text" className="FormInput" placeholder="tell us how we may assist you" name="message" required />
                        </span>
                    </h2>
                    <h2 className="FormText">
                        and we'll get back to you as soon as possible!
                    </h2>
                    <button className="FormText--button" type="submit" >
                        Send
                    </button>
                    <div class="loader">
                        <div class="check">
                            <span class="check-one"></span>
                            <span class="check-two"></span>
                        </div>
                    </div>
                </form>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        ) : (
            <div class="container-s">
                <Fade bottom duration={1000}>
                    <h1 className="white--header mobile">
                        <span>Contact us and get your M360 assesment today!</span>
                    </h1>
                </Fade>
                <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                className="form-container-s"
                >
                    <h2>
                        <span className='FormText' >
                        Please tell us  
                        </span>
                        <span>
                            <input className="FormInput inputi" type="text" placeholder="your name" name="name" required />
                        </span>
                    </h2>
                    <h2>
                        <div className="FormText">
                        and also give us  
                        </div>
                        <div>
                            <input type="email" placeholder="your email" name="email" className="FormInput" required />
                        </div>
                    </h2>
                    <h2>
                        <span className="FormText">
                            and last but not least
                        </span>
                        <span>
                            <input className="FormInput inputiii" type="text" placeholder="tell us how we may assist you" name="message" required/>
                        </span>
                    </h2>
                    <h2 className="FormText">
                        and we'll get back to you as soon as possible!
                    </h2>
                    <button className="FormText--button" type="submit" >
                        Send
                    </button>
                    <div class="loader">
                        <div class="check">
                            <span class="check-one"></span>
                            <span class="check-two"></span>
                        </div>
                    </div>
                </form>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        )}
    </div>
    );
};

export default Contact;