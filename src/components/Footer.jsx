import React from 'react';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Fade } from "react-reveal";
import './css/footer.css';
import arrow from "../assets/Vector5.png";

function Footer() {

    return (
        
    <Grid container className="footer" spacing={1}>
        <Grid item xs={5.5}>
            <a href='https://www.linkedin.com/in/diegomayorgam360/'>
            <LinkedInIcon/>
            </a>
            <a href='https://www.instagram.com/m360devs/'>
            <InstagramIcon/>
            </a>
        </Grid>
        <Fade delay={700}>
            <Grid item xs={1}><a href="#home">
                <img src={arrow} className="up-arrow" alt="down-arrow" /></a>
            </Grid>
        </Fade>
        <Grid item xs={5.5}>
        </Grid>
    </Grid>
    )
}

export default Footer;