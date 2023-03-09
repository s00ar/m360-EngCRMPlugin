import React from "react";
import { Slide } from "react-reveal";
import "./css/home.css";

const Error404 = () => {
    return (
        <>
            <Slide left delay={250} duration={1000} distance="400px">
                <div className="pgf">
                    <h1>
                    Page not found
                    </h1>
                </div>
            </Slide>
        </>
    )
}

export default Error404;