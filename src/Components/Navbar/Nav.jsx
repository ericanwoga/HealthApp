import React , {useState, useRef } from 'react'
import './nav.css'


function Nav() {
  //const [clickedNav, setClickedNav] = useState(false);

  return (

      <nav className="navbar">
        <ul className='navbar-links'>
          <li><a href="#home" className="navbar-item">home</a></li>
          <li><a href="#about" className="navbar-item">about</a></li>
          <li><a href="#dashboard" className="navbar-item">portfolio</a></li>
          <li><a href="#contact" className="navbar-item">contact</a></li>
        </ul>
    </nav>
  )
}

export default Nav