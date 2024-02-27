import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import web from "../../img/web.png";
import geovis from "../../img/geovis.png";
import games from "../../img/games.png";
import portfolio from "../../img/portfolio.png"
import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3} // Default number of slides per view
                grabCursor={true}
                className="portfolio-slider"
                // Define responsive breakpoints
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            >
                <SwiperSlide>
                    <a href="https://psym-8ba18.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={web} alt="Web Project" />
                    </a>
                    <p className="slide-text">Web Project</p>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/ericerraez/Maps" target="_blank" rel="noopener noreferrer">
                        <img src={geovis} alt="Geovis Project" />
                    </a>
                    <p className="slide-text">Geovis Project</p>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/ericerraez/Games" target="_blank" rel="noopener noreferrer">
                        <img src={games} alt="My Games" />
                    </a>
                    <p className="slide-text">My Games</p>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/ericerraez/portfolio" target="_blank" rel="noopener noreferrer">
                        <img src={portfolio} alt="This Portfolio"/>
                    </a>
                    <p className="slide-text">This portfolio</p>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
