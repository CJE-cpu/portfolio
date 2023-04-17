import './navbar.css'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
  <p><a href="#about">ABOUT</a></p>
  <p><a href="#skill">SKILL</a></p>
  <p><a href="#project">PROJECTS</a></p>
  <p><a href="#contact">CONTACT</a></p>
  </>
)


const Navbar = () => {
  const  [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='portfolio__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='portfolio__navbar-menu'>
        {toggleMenu
        ? <AiOutlineClose color="#000" size={27} onClick={()=> setToggleMenu(false)} />
        : <AiOutlineMenu color="#000" size={27} onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='portfolio__navbar-menu_container scale-up-center'>
            <div className='portfolio__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar