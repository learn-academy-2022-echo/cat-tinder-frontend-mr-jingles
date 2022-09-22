import React from 'react'
import '../styles/Header.css'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import cat from '../assets/cat.jpg'

const Header = () => {
  return (
    <div>
      <Nav
>
  <NavItem>
    <NavLink
      active
      href="#"
    ><img
    src={cat}
    alt="about icon"
    className="cat-logo"
  /> 
    </NavLink>
  </NavItem>
  {/* edit our image icon */}


  <NavItem>
    <NavLink href="#">
      Find your Cat
    </NavLink>
  </NavItem>


  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Create a Profile
    </NavLink>
  </NavItem>
</Nav> 
    </div>
  )
}

export default Header