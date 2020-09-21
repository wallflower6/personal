import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper nav-shadows white">
            <div className="container">
                <a className="brand-logo left"><NavLink to="/"><span className="light-text">Lindy</span><span className="dark-text">Lim</span></NavLink></a>

                <ul className="right">
                    <li><NavLink to="/portfolio" className="dark-text">Projects</NavLink></li>
                    <li><NavLink to="/contact" className="dark-text">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;