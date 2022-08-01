import React from 'react'
import { Link } from 'react-router-dom';

import FilterIcon from '@mui/icons-material/Filter';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import { FaSearch, FaRegHeart, FaFilter } from 'react-icons/fa';
import { createFilterOptions } from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import ModalFilter from './ModalFilter';
import '../Filter/Filter' ;


import styled from 'styled-components';

const Ul = styled.ul`
  
  list-style: none ;
  display: flex;
  flex-flow:row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (min-width:768px) {margin-right: 120px;}
  @media (max-width:768px) {
    flex-flow:column nowrap;
    background-color:#0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'} ;
    top: 0;
    right: 0;
    height:100vh;
    width:300px;
    padding-top:3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 4000;
  }
  li {
    color: #fff;
  }
 
`;



const RightNav = ({ open }) => {
  return (
    
        <Ul open={open}>
          <li><Link className='text-light' to='/'>Home</Link></li>
          <li><Link className='text-light' to='/Anime'>Anime</Link></li>
          <li><Link  className='text-light' to='/Manga'>Manga</Link></li>
          <li><Link className='text-light' to="/Kids">Kids</Link></li>
          <li><Link className='text-light' to="/contact">Contact</Link></li>
          <li className=''>
                    <Tooltip title="Profile">
                        <IconButton>
                        <PersonIcon className='text-light mr-3' cursor='pointer' />
                        </IconButton>
                    </Tooltip>
                    
                </li>
                <li>
                    <Tooltip title="Filter">
                    <IconButton className='container-filter'>
                        <FaFilter className='text-light filterIcon mr-5' />
                        <ModalFilter className='modal'/>
                    </IconButton>
                    </Tooltip>
                   
                </li>


        </Ul>
       
   
  )
}

export default RightNav