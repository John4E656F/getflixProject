import React from 'react'
import styled from 'styled-components';
import Burger from './burger';
import SearchBar from '../SearchBar/searchBar';
import './searchNav.css';
import Logo from  '../Logo/logo'




const Nav = styled.nav`
  width:100%;
  height:70px;
  margin: 0 auto;
  padding: 0 50px;
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



const navbar = () => {

  return (
    <Nav className='nav'>
        <div className='container-search'>
          {/* Search */}
          <SearchBar className='search' />
        </div>
        <div className='logo text-light  bg-sucess  text-right' >
          <Logo  />
        </div>
        <Burger />
        
    </Nav>
  )
}

export default navbar