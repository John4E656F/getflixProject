import React from 'react'
import { Link } from 'react-router-dom';





import styled from 'styled-components';

const Ul = styled.ul`

  list-style: none ;
  display: flex;
  flex-flow:row nowrap;

  li {
      padding: 18px 10px;
  }

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
        </Ul>
       
   
  )
}

export default RightNav