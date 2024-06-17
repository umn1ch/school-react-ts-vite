import React from "react";
import '../styles/css/Header.css';
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
    return (
        <div className="top-bar">
            <div className="contact-info">
                <ul>
                    <li>
                        <i className="fi fi-sr-phone-flip"></i>
                        +994 (70) 226-09-90
                    </li>
                    <li>
                        <i className="fi fi-sr-phone-flip"></i>
                        +994 (55) 226-09-90
                    </li>
                    <li>
                        <i className="fi fi-sr-envelope"></i>
                        info@kifayatahmadgizi.co.uk
                    </li>
                    <li>
                        <i className="fi fi-sr-marker"></i>
                        <span id="top-bar-address">1, Fikret Amirov Street Baku Azerbaijan</span>
                    </li>
                    <li>
                        <i className="fi fi-sr-clock-five"></i>
                        <span id="top-bar-schedule">Mon-Sat 09:00-21:00</span>
                    </li>
                </ul>
            </div>
            <LanguageSwitcher />
        </div>
    );
}

export default Header;
