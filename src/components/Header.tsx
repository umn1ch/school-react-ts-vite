import React from "react";
import '../styles/css/Header.css';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';
import '../styles/css/Floater.css';

const Header: React.FC = () => {
    const { t } = useTranslation();

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
                        <span id="top-bar-address">{t ('top-bar-address')}</span>
                    </li>
                    <li>
                        <i className="fi fi-sr-clock-five"></i>
                        <span id="top-bar-schedule">{t ('top-bar-schedule')}</span>
                    </li>
                </ul>
            </div>
            <LanguageSwitcher />
        </div>
    );
}

export default Header;
