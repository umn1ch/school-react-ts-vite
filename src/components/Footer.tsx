import React from 'react';

import '../styles/css/Footer.css';

import FooterLogo from '../images/logo brand.png';
import DecorativeShape from '../images/footer-2.png';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <img src={FooterLogo} alt="Logo" className="footer-logo" />
                    <address id="footer-address">
                        1, Fikret Amirov Street Baku Azerbaijan
                    </address>
                </div>
                <div className="footer-column">
                    <h3 id="footer-popular-courses">Popular Courses</h3>
                    <ul className="footer-links">
                        <li><a href="#" id="footer-en-courses"><i className="fi fi-rr-angle-double-small-right"></i>English
                                Courses</a></li>
                        <li><a href="#" id="footer-az-courses"><i className="fi fi-rr-angle-double-small-right"></i>Azerbaijani Courses</a></li>
                        <li><a href="#" id="footer-ru-courses"><i className="fi fi-rr-angle-double-small-right"></i>Russian
                                Courses</a></li>
                        <li><a href="#" id="footer-de-courses"><i className="fi fi-rr-angle-double-small-right"></i>German
                                Courses</a></li>
                        <li><a href="#" id="footer-sp-courses"><i className="fi fi-rr-angle-double-small-right"></i>Spanish
                                Courses</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 id="footer-info">Information</h3>
                    <ul className="footer-links">
                        <li><a href="#" id="footer-news"><i className="fi fi-rr-angle-double-small-right"></i>News</a></li>
                        <li><a href="#" id="footer-about"><i className="fi fi-rr-angle-double-small-right"></i>About us</a>
                        </li>
                        <li><a href="#" id="footer-study"><i className="fi fi-rr-angle-double-small-right"></i>Studies</a>
                        </li>
                        <li><a href="#" id="footer-contact"><i className="fi fi-rr-angle-double-small-right"></i>Contact</a>
                        </li>
                        <li><a href="#" id="footer-book-store"><i className="fi fi-rr-angle-double-small-right"></i>Book
                                Store</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 id="footer-contact-us">Contact us</h3>
                    <p>+994 (70) 226-09-90</p>
                    <p>+994 (55) 226-09-90</p>
                    <p><a href="mailto:info@kifayatahmadgizi.co.uk">info@kifayatahmadgizi.co.uk</a></p>
                    <div className="footer-social">
                        <a href="#"><i className="fi fi-brands-facebook"></i></a>
                        <a href="#"><i className="fi fi-brands-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p id="all-rr">&copy; Copyright 2024 Kifayat Ahmadgizi. All Rights Reserved.</p>
                {/* <p id="dev">This site is developed by <a href="https://t.me/umn1ch">umn1ch</a></p> */}
            </div>
            <div className="footer-shapes">
                <img src={DecorativeShape} alt="Decorative Shape" />
            </div>
        </footer>
        </>
    );
}

export default Footer;