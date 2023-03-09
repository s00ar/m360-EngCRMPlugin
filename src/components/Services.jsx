import "./css/services.css";
import React from "react";
import { Slide } from "react-reveal";
import { Grid } from '@mui/material';
import styled from "styled-components";
import Footer from './Footer';
import Img1 from "../assets/img002.jpg";
import Img2 from "../assets/img015.jpg";
import Img3 from "../assets/img001.jpg";
import Img4 from "../assets/img012.jpg";
import Img5 from "../assets/img003.jpg";
import line1 from "../assets/line1.png";
import next from "../assets/Vector2.png"
import prev from "../assets/Vector.png";
import { useState, useEffect } from 'react';

function Services() {
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
    font-size: 1.2em;
    margin: 1em;
    height: 48px;
    /* border: 2px solid #45337D; */
    border-radius: 4rem;
    color: #ffffff;
    margin-bottom: 60px;
    background-color: #000;
    height: 3em;
    `;
    const Buttonsmall = styled.button`
        display: inline-block;
        // font-size: 1.2em;
        // margin: 1em;
        min-width: 12rem;
        height: 48px;
        border: 2px solid #45337D;
        border-radius: 4rem;
        color: #ffffff;
        // margin-bottom: 60px;
        background-color: #45337D;
        height: 3em;
        align-items: center;
        justify-content: center;
        padding-left: 8%;
        padding-right: 8%;
        `;
        
        const arrayElements = [
            {
                name:"Mobile Apps",
                text:"Mobile app development is a huge part of the modern world, and we can help you make your own mobile app a reality. Whether you're looking to develop an app for your business or just want to start a hobby project, we can help you create exactly what you need. We specialize in helping clients with any level of experience—from those who have never coded before to those who want to bring their existing code into the next generation of mobile apps.",
                img:Img1,
            },
            {
                name:"Web Development",
                text:"Creating an unique website for each client; a website must express the unrepeatable personality that each brand possesses, hand in hand with UX/UI concepts. Brands are becoming more creative when it comes to selling for internet,don't be left behind",
                img:Img2,
            },
            {
                name:"Google ADS",
                text:"High-performance Google Ads campaigns aimed at achieving the objectives of your brand. Together with you, we trace the KPIs that will allow us to measure the return on your investment, we always keep you informed by email about. How is your campaign going? And you always,always have customer service at your disposal, we put at your disposal an executive who will watch over your project, who is also going to control that the quality of the service you are getting meet your expectations.",
                img:Img3,
            },
            {
                name:"SEO",
                text:"You want to position yourself in the first places of organic searches SEO, let's do it. Work with our team of FullStack experts who rely on various software to find even the smallest error you have on your website and fix it. Once we have your website in order and totally semantic, we start with more advanced indexing strategies, content creation, backlinks and perfecting your SEO.",
                img:Img4,
            },
            {
                name: "Unified Listings",
                text:"Keep your business information in order and consistent so that people who find you through any portal, is essential in a strategy of digital marketing, in this way you can gain trust and provoke contact with your business.",
                img:Img5,
            },
];

const [text, setText] = useState(arrayElements[0].text);
const [img, setImg] = useState(arrayElements[0].img);
const [name, setName] = useState(arrayElements[0].name);
const [count, setCount] = useState(1);
const [first, setFirst] = useState(true);
const [last, setLast] = useState(false);
const [isActiveI, setIsActiveI] = useState(true);
const [isActiveII, setIsActiveII] = useState(false);
const [isActiveIII, setIsActiveIII] = useState(false);
const [isActiveIV, setIsActiveIV] = useState(false);
const [isActiveV, setIsActiveV] = useState(false);

const navBtnNext = () => {
    if (count<4) {
        setFirst(false);
        setCount(count + 1);
    } else if(count===4){
        setLast(true);
    } else {
        setCount(0);
    }
    setName(arrayElements[count].name)
    setText(arrayElements[count].text)
    setImg(arrayElements[count].img)
}
const navBtnPrev = () => {
    if (count>0) {
        setCount(count - 1);
        setLast(false);
    } else {
        setCount(0);
        setFirst(true);
        setLast(false);
    }
    setName(arrayElements[count].name)
    setText(arrayElements[count].text)
    setImg(arrayElements[count].img)
}

const opc1 = () => {
    setText(arrayElements[0].text)
    setImg(arrayElements[0].img)
    setIsActiveI(true)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc2 = () => {
    setText(arrayElements[1].text)
    setImg(arrayElements[1].img)
    setIsActiveI(false)
    setIsActiveII(true)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc3 = () => {
    setText(arrayElements[2].text)
    setImg(arrayElements[2].img)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(true)
    setIsActiveIV(false)
    setIsActiveV(false)
}
const opc4 = () => {
    setText(arrayElements[3].text)
    setImg(arrayElements[3].img)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(true)
    setIsActiveV(false)
}
const opc5 = () => {
    setText(arrayElements[4].text)
    setImg(arrayElements[4].img)
    setIsActiveI(false)
    setIsActiveII(false)
    setIsActiveIII(false)
    setIsActiveIV(false)
    setIsActiveV(true)
}

    return(
        <div>
        {matches ? (
            /* DESKTOP */
            <div className="container">
                <h1 className="title">
                    Success through<strong className="title-strong"> DEDICATION</strong>
                </h1>
                {/* NAVEGACIÓN INTERNA*/}

                <div className="services-nav">
                    <div>
                        <Button className={isActiveI ? 'services-button-active' : 'services-button'} onClick={opc1}>
                            Mobile Apps
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveII ? 'services-button-active' : 'services-button'} onClick={opc2}>
                            Web development
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveIII ? 'services-button-active' : 'services-button'} onClick={opc3}>
                            Google Ads
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveIV ? 'services-button-active' : 'services-button'} onClick={opc4}>
                            SEO
                        </Button>
                    </div>
                    <div>
                        <Button className={isActiveV ? 'services-button-active' : 'services-button'} onClick={opc5}>
                            Unified Listing
                        </Button>
                    </div>
                    
                </div>
                <img className="line" src={line1} alt="line-m360" />

            {/* CONTENIDO */}
                <Grid container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2} >
                    <Grid item className="text" xs={5}>
                        <Slide left duration={1500} distance="1400px">
                            <div className="padding">
                                <p className="dinamic-text">{text}</p>
                            </div>
                        </Slide>
                    </Grid>
                    <Slide right delay={150} duration={1000} distance="1200px">
                        <Grid item xs={7}>
                            <img src={img} className="dinamic-img" alt="m360-marketing" />
                        </Grid>
                    </Slide>
                </Grid>

        {/* FOOTER */}
            <Footer/>
            </div>
        ) : (
        /* MOBILE */
        <>
            <div className="container-s">
                    <h1 className="title-s">
                        Success through<strong className="title-strong"> DEDICATION</strong>
                    </h1>
                    {/* NAVEGACIÓN INTERNA*/}

                    <div className="services-nav-s">
                        {!first ? (
                            <div className="left-arrow">
                                <img src={prev} width= {"30%"} className="left-arrow" alt="m360-marketing" onClick={navBtnPrev} />
                            </div>
                        ):(
                            <div className="left-arrow">
                                <img src={prev} width= {"30%"} className="left-arrow hidden" alt="m360-marketing" onClick={navBtnPrev} />
                            </div>
                        )
                        }
                            <Buttonsmall>
                                {name}
                            </Buttonsmall>
                        {!last? (
                            <div className="right-arrow">
                                <img src={next} width= {"30%"} className="right-arrow" alt="m360-marketing" onClick={navBtnNext} />
                            </div>
                        ):( <div className="right-arrow">
                            <img src={next} width= {"30%"} className="hidden" alt="m360-marketing" onClick={navBtnNext} />
                        </div>
                        ) 
                        }
                        
                    </div>
                    <img className="line-s" src={line1} alt="line-m360" width={"100%"} />

                {/* CONTENIDO */}
                    <div>
                        <div>
                            <Slide left duration={1500} distance="1400px">
                                <div>
                                    <p className="dinamic-text-s">{text}</p>
                                </div>
                            </Slide>
                        </div>
                        <Slide right delay={150} duration={1000} distance="1200px">
                            <div>
                                <img src={img} width= {"100%"}className="dinamic-img-s" alt="m360-marketing" />
                            </div>
                        </Slide>
                    </div>

            {/* FOOTER */}
                <Footer/>
                </div>
            </>
        )}
        </div>
    )
}

export default Services;