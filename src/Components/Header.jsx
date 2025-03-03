import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header() {
   const [toggleMenu , setToggleMenu] =  useState(false);

  return (
    <header className="flex px-5 py-5 font-two justify-between gradient_primary">
    <a className='alfa font-bold text-white' href='#' >PORTFOILO </a>
    <nav className="hidden md:block">
    <ul className='flex text-white'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    {toggleMenu && <nav className="font-two block md:hidden mobile-nav">
    <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-white'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Us </a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon  className='text-white h-5 '/></button>

    </header>
  )
}

export default Header

