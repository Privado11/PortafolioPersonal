import React from 'react'
import { Link } from 'react-scroll';
import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <div className='header__content'>
        <div className='header__logo-container'>
          <div className='header__logo-img-cont'>
            <img className='header__logo-img' src={logo} alt='logo'/>
          </div>
          <span className='header__logo-text'>Walter Jiménez</span>
        </div>
        <div className='header__navbar'>
          <ul className='header__navBar-menu'>
            <li><Link to="Home" smooth={true}>Inicio</Link></li>
            <li><Link to="About" smooth={true}>Sobre mí</Link></li>
            <li><Link to="Projects" smooth={true}>Proyectos</Link></li>
            <li><Link to="Contact" smooth={true}>Contáctame</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export { Header }