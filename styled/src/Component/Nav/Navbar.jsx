import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';
import './SearchNav.css'

// import { FaSearch, FaRegHeart, FaFilter } from 'react-icons/fa';
// import { createFilterOptions } from '@mui/material/Autocomplete';



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



  return (
    <Nav>
        <div>
          <input type='text' placeholder='Serach' className='search_input  '    />
        </div>
        <div className='logo text-light'>
          Logo
        </div>
        <Burger />
        
    </Nav>
  )
}

export default Navbar