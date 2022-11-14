import React from 'react'
import {NavLink} from "react-router-dom"
import "./Styles.css"

function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <NavLink className="navlink"  to="/About">About</NavLink>
        <NavLink className="navlink"  to="/Skills">Skills</NavLink>
        <NavLink className="navlink"  to="/Projects">Projects</NavLink>
        <NavLink className="navlink"  to="/Contact">Contact</NavLink>
      </nav>

    </div>
  )
}

export default Navbar