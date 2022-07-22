import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch, FaRegHeart } from 'react-icons/fa';
import './Navbar.css'
const Navbar = () => {


const handleSubmit = (event) => {
        event.preventDefault();
};






  return (
    <div className='navbar'>
        <div className='menu-left'>
            <ul>
                <li><Link className='text-light' to='/'>Home</Link></li>                
                <li><Link className='text-light' to='/Anime'>Anime</Link></li>
                <li><Link  className='text-light' to='/Manga'>Manga</Link></li>
                <li><Link className='text-light' to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='menu-right'>
            <ul>
                <li>
                    <form className='search'onSubmit={handleSubmit}>
                        <input type='text' placeholder='Serach' className='search_input' />
                        <button type='submit' className='search_btn'>
                        <i class="fa-regular fa-magnifying-glass ri-serch-2-line"></i>
                        <FaSearch />
                        </button>
                    </form>
                </li>
                <li className='mx-5'><Link className='text-light' to='/Login'>Login</Link></li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar;