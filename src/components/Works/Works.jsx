import React, { useContext, useRef, useState } from "react";
import "./Works.css";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import geo from "../../img/geo.png";
import suda from "../../img/suda.png";

const Works = () => {
    const { state: { darkMode } } = useContext(themeContext);
    const wheelRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const startDrag = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const stopDrag = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        rotateWheel(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        rotateWheel(touch.clientX, touch.clientY);
    };

    const rotateWheel = (clientX, clientY) => {
        const wheel = wheelRef.current;
        const { top, left, width, height } = wheel.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        wheel.style.transform = `rotate(${angle}deg)`;
    };

    return (
        <div className="works" id="works">
            <div className="w-left">
                <div className="awesome">
          <span style={{color: darkMode ? "white" : ""}}>
            Works for All these
          </span>
                    <span>Brands & Clients</span>
                    <div>
  <span>
    I began my tech journey freelancing on Fiverr and Upwork, <br/>
    which led to a specialization in Geoinformatics through internships. <br/>
    This diverse background has honed my skills in both technology <br/>
    and its practical applications.
  </span>
                    </div>

                    <Link to="contact" smooth={true} spy={true}>
                        <button className="button s-button">Hire Me</button>
                    </Link>
                    <div
                        className="blur s-blur1"
                        style={{background: "#ABF1FF94"}}
                    ></div>
                </div>
            </div>
            <div className="w-right" onMouseDown={startDrag} onMouseUp={stopDrag} onMouseLeave={stopDrag}
                 onMouseMove={handleMouseMove} onTouchStart={startDrag} onTouchEnd={stopDrag}
                 onTouchMove={handleTouchMove}>
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle"
                    ref={wheelRef}
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">

                    </div>
                    <div className="w-secCircle">
                        <img src={geo} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={suda} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;
