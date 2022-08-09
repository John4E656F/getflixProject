import React from 'react'
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import '../Filter/filter' ;
import BtnFilter from '../Filter/btnFilter';

import styled from 'styled-components';
import FilterAlt from '@mui/icons-material/FilterAlt';

const Ul = styled.ul`
  list-style: none ;
  display: flex;
  flex-flow:row nowrap;
  position: relative;
  float: right;
  li {
    padding: 18px 10px;
  }
  @media (max-width:1122px) {
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
    
  }
  li {
    color: #fff;
  }
 
`;



const RightNav = ({ open }) => {
  return (
    
        <Ul open={open}  className=''>
          <li><Link className='text-light' to='/home'>Home</Link></li>
          <li><Link className='text-light' to='/anime'>Anime</Link></li>
          <li><Link  className='text-light' to='/manga'>Manga</Link></li>
          <li><Link className='text-light' to="/kids">kids</Link></li>
          <li className=''>
            <Tooltip title="Profile">
                <IconButton>
                  <PersonIcon className='text-light ' cursor='pointer' />
                </IconButton>
            </Tooltip>
                    
          </li>
            <li className='filter d-flex justify-content-center align-items-center '>
              <FilterAlt className='position-absolute'/>
              <BtnFilter  />
            </li>
          


        </Ul>
       
   
  )
}

export default RightNav