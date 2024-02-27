import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github"; // Corrected typo

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>ericerraez22@gmail.com</span>
                <div className="f-icons">
                    {/* Update these links to point to your actual social media profiles */}
                    <a href="https://www.instagram.com/eric_erraez/" target="_blank" rel="noopener noreferrer">
                        <Insta color="white" size={"3rem"} />
                    </a>
                    <a href="https://www.facebook.com/eric.erraez/" target="_blank" rel="noopener noreferrer">
                        <Facebook color="white" size={"3rem"} />
                    </a>
                    <a href="https://github.com/ericerraez?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github color="white" size={"3rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
