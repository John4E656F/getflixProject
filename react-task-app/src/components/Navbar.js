import React from 'react';
import './Navbar.css';
import Logo from './Logo.js';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='menu-left'>
            <Logo className='logo' />
            <ul>
            <li className=''>Home</li>
            <li>Anime</li>
            <li>Manga</li>
            <li>My List</li>
            </ul>
        </div>
        <div>
            <ul>
            <li><input className='search' placeholder='Search' /></li>
            <li>login</li>
            <li></li>
            <li></li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar