import React from 'react'
import '../styles/Header.css'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import cat from '../assets/cat.jpg'

const Header = () => {
  return (
    <div className='header'>
      <Nav
  justified
  >
        <NavItem className=''>
          <NavLink to ="/">Home
           </NavLink>
           <br></br>
        </NavItem>
        <NavItem>
            <NavLink to="./CatIndex">
                Find your Cat
            </NavLink>
        </NavItem>            
        <NavItem>
          <NavLink 
            to="./CatNew">
            Create a Profile
          </NavLink>
        </NavItem>
      </Nav> 
    </div>
  )
}

export default Header