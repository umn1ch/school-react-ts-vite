import React, { useEffect, useRef } from "react";
import '../styles/css/Floater.css';

const Floater: React.FC = () => {
    const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtnRef.current?.classList.add("visible");
            } else {
                scrollToTopBtnRef.current?.classList.remove("visible");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    };

    return (
        <div className="floating-container">
            <button
                id="scrollToTopBtn"
                className="scroll-to-top"
                ref={scrollToTopBtnRef}
                onClick={scrollToTop}
            >
                <i className="fi fi-rs-angle-small-up"></i>
            </button>
            <div className="whatsapp-container">
                <a href="https://wa.me/994702260990" target="_blank" className="whatsapp-button" rel="noopener noreferrer">
                    <i className="fi fi-brands-whatsapp"></i>
                </a>
                <div className="whatsapp-text-bubble">
                    <span className="whatsapp-text" id="write-to-us">Write to us</span>
                </div>
            </div>
        </div>
    );
};

export default Floater;
