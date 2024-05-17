import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../components/Navbar.css'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("menu__icon");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "menu__icon") {
            setIcon("menu__icon toggle");
        } else setIcon("menu__icon");
    };
    return (
        <nav className="nav">
            <div className="brand__logo">
                Teban. 
            </div>
            <ul className={active}>
                <li className="nav__bg"><NavLink to="/" >Home</NavLink></li>
                <li className="nav__bg"><NavLink to="/about">About</NavLink></li>
                <li className="nav__bg"><NavLink to="/project">Project</NavLink></li>
                <li className="nav__bg"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar