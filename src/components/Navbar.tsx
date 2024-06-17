import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../i18n';
import '../hooks/use-localstorage';

import Logo from '../images/logo brand.png';

import '../styles/css/Navbar.css';

const Navbar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li><NavLink to="/" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-home">{t ('nav-home')}</NavLink></li>
                <li><NavLink to="/gallery" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-gallery">{t ('nav-gallery')}</NavLink></li> {}
                <li><NavLink to="/abroad" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-abroad">{t ('nav-abroad')}</NavLink></li>
                {/* <li><NavLink to="/store" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-store">Book Store</NavLink></li> */}
                <li><NavLink to="/courses" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-courses">{t ('nav-courses')}</NavLink></li>
                {/* <li><NavLink to="/tests" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-tests">Tests</NavLink></li> */}
                <li><NavLink to="/info" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-info">{t ('nav-info')}</NavLink></li>
                <li><NavLink to="/more" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-more">{t ('nav-more')}</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
