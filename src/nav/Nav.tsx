import React from 'react'
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'


export const Nav = () => {
    return (
        <div className={s.nav}>
            {/* <NavLink to='/' ></NavLink> */}
            <Link activeClass={s.active} offset={-60} className="test1" to="home" spy={true} smooth={true} duration={500} >Home</Link>
            <Link activeClass={s.active} offset={1} className="test1" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
            <Link activeClass={s.active} offset={1} className="test1" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
            <Link activeClass={s.active} offset={1} className="test1" to="contacts" spy={true} smooth={true} duration={500} >Contacts</Link>
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <a href="#skills">Skills</a>
            <NavLink to="#projects">Projects</NavLink>
            <NavLink to="#contacts">Contacts</NavLink> */}
        </div>
    )
}

