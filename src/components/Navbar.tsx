import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo brand.png';

import '../styles/css/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <li><NavLink to="/" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-home">Home Page</NavLink></li>
                <li><NavLink to="/gallery" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-gallery">Gallery</NavLink></li>
                <li><NavLink to="/abroad" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-abroad">Studying Abroad</NavLink></li>
                {/* <li><NavLink to="/store" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-store">Book Store</NavLink></li> */}
                <li><NavLink to="/courses" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-courses">Courses</NavLink></li>
                {/* <li><NavLink to="/tests" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-tests">Tests</NavLink></li> */}
                <li><NavLink to="/info" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-info">Information</NavLink></li>
                <li><NavLink to="/more" 
                className={({ isActive }) => isActive ? 'active' : ''} 
                id="nav-more">More</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
