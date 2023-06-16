import React from 'react';
import './index.css';
import { FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare } from "react-icons/fa";  
import { NavLink } from 'react-router-dom';  

const Navbar = () => {
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <h2>
                    <span>N</span>avbar
                    <span>W</span>ebsite
                    </h2>
                </div>
                <div className='menu-link'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className='social-media'>
                    <ul className='social-media -desktop'>
                        <li><a href="#"><FaFacebookSquare className='facebook'/></a></li>
                        <li><a href="#"><FaInstagramSquare className='instagram'/></a></li>
                        <li><a href="#"><FaYoutubeSquare className='youtube'/></a></li>
                    </ul>
                </div>
            </nav>
            {/* <section className='hero-section'>
                <p>Welcome To</p>
                <h2>Navbar Website</h2>
            </section> */}
        </>
    );
}

export default Navbar;