import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';
import SearchBar from '../SearchBar/SearchBar';
import './SearchNav.css';
import Logo from  '../Logo/Logo'




const Nav = styled.nav`
  width:90%;
  height:70px;
  padding: 0 30px;
  display:flex;
  justify-content:space-between;
  align-item: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.671); 
  z-index: 8000;

  .logo {
      padding:15px 0 ;
  }
   
`



const Navbar = () => {

  return (
    <Nav className='nav'>
        <div>
          {/* Search */}
          <SearchBar />
        </div>
        <div className='logo text-light  bg-sucss  text-right'>
          <Logo />
        </div>
        <Burger />
        
    </Nav>
  )
}

export default Navbar