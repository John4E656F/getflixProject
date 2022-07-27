import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch, FaRegHeart, FaFilter } from 'react-icons/fa';
import { createFilterOptions } from '@mui/material/Autocomplete';
import ModalFilter from './ModalFilter';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterIcon from '@mui/icons-material/Filter';
import '../Filter/Filter' ;
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css';
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
                <li><Link className='text-light' to="/Kids">Kids</Link></li>
                <li><Link className='text-light' to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='menu-right'>
            <ul>
                <li>
                    <form className='search'onSubmit={handleSubmit}>
                        <input type='text' placeholder='Serach' className='search_input filter' />
                        <button type='submit' className='search_btn'>
                        <i class="fa-regular fa-magnifying-glass ri-serch-2-line">
                            <Tooltip title="Search">
                            <IconButton>
                            <FaSearch />
                                
                            </IconButton>
                            </Tooltip>
                        </i>
                          
                        </button>
                       
                    </form>
                </li>
                <li>
                    <Tooltip title="Profile">
                        <IconButton>
                        <PersonIcon className='text-light' cursor='pointer' />
                        </IconButton>
                    </Tooltip>
                    
                </li>
                <li>
                    <Tooltip title="Filter">
                    <IconButton className='container-filter'>
                        <FaFilter className='text-light filterIcon' />
                        <ModalFilter className='modal'/>
                    </IconButton>
                    </Tooltip>
                   
                </li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar;