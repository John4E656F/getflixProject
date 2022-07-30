import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';
import './SearchNav.css'

import { FaSearch, FaRegHeart, FaFilter } from 'react-icons/fa';
import { createFilterOptions } from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



const Nav = styled.nav`
    width:100%;
    height:70px;
    border-bottem:2px solid #f1f1f1;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;
    position: fixed;
    background-color: black;
    z-index: 8000;

    .logo {
        padding:15px 0 ;
    }
   
`



const Navbar = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
};

  return (
    <Nav>
        <div className='logo text-light'>
            Logo
        </div>
        <div>
        <form className='search mt-3 'onSubmit={handleSubmit}>
                        <input type='text' placeholder='Serach' className='search_input filter ' />
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
        </div>
        <Burger />
        
    </Nav>
  )
}

export default Navbar