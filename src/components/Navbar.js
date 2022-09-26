import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    // location changes will set navbar loc to false, will close navbar
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])


  return (
    <div className='navbar' id ={expandNavbar ? "open": "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
         }}
        >
         
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/CatIndex"> Cats </Link>
            {/* <Link to="/experience"> Experience </Link> */}
        </div>
    </div>
  )
}

export default Navbar;