import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import '../styles/css/Floater.css';

const Floater: React.FC = () => {
    const { t } = useTranslation();

    const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
                <a
                    href="https://wa.me/994702260990"
                    target="_blank"
                    className="whatsapp-button"
                    rel="noopener noreferrer"
                >
                    <i className="fi fi-brands-whatsapp"></i>
                </a>
                <div className="whatsapp-text-bubble">
                    <span className="whatsapp-text" id="write-to-us">
                        {t('Write to us')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Floater;
