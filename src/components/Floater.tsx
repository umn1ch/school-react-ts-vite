import React from "react";
import '../styles/css/Floater.css';

function Floater () {
    return (
        <div className="floating-container">
        <button id="scrollToTopBtn" className="scroll-to-top">
            <i className="fi fi-rs-angle-small-up"></i>
        </button>
        <div className="whatsapp-container">
            <a href="https://wa.me/994702260990" target="_blank" className="whatsapp-button">
                <i className="fi fi-brands-whatsapp"></i>
            </a>
            <div className="whatsapp-text-bubble">
                <span className="whatsapp-text" id="write-to-us">Write to us</span>
            </div>
        </div>
    </div>
    );
}

export default Floater;