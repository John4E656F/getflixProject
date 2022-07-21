import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='menu-left'>
            <ul>
                <li><Link className='text-light' to='/'>Home</Link></li>                
                <li><Link className='text-light' to='/Anime'>Anime</Link></li>
                <li><Link className='text-light' to='/Manga'>Manga</Link></li>
                <li><Link className='text-light' to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='menu-right'>
            <ul>
                <li className='mx-5'><Link className='text-light' to='/Login'>Login</Link></li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar;