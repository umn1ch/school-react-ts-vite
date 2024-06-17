import React from 'react';

import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';

import '../styles/css/Footer.css';

import FooterLogo from '../images/logo brand.png';
import DecorativeShape from '../images/footer-2.png';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <img src={FooterLogo} alt="Logo" className="footer-logo" />
                    <address id="footer-address">
                        {t ('top-bar-address')}
                    </address>
                </div>
                <div className="footer-column">
                    <h3 id="footer-popular-courses">{t('footer-popular-courses')}</h3>
                    <ul className="footer-links">
                        <li><a href="#" id="footer-en-courses"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-en-courses')}</a></li>
                        <li><a href="#" id="footer-az-courses"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-az-courses')}</a></li>
                        <li><a href="#" id="footer-ru-courses"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-ru-courses')}</a></li>
                        <li><a href="#" id="footer-de-courses"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-de-courses')}</a></li>
                        <li><a href="#" id="footer-sp-courses"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-sp-courses')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 id="footer-info">{t('footer-info')}</h3>
                    <ul className="footer-links">
                        <li><a href="#" id="footer-news"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-news')}</a></li>
                        <li><a href="#" id="footer-about"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-about')}</a></li>
                        <li><a href="#" id="footer-study"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-study')}</a></li>
                        <li><a href="#" id="footer-contact"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-contact')}</a></li>
                        <li><a href="#" id="footer-book-store"><i className="fi fi-rr-angle-double-small-right"></i>{t('footer-book-store')}</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 id="footer-contact-us">{t('footer-contact-us')}</h3>
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