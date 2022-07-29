import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
    width:100%;
    height:70px;
    border-bottem:2px solid #f1f1f1;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;

    .logo {
        padding:15px 0 ;
    }
   
`



const Navbar = () => {
  return (
    <Nav>
        <div className='logo text-light'>
            Navbar bar
        </div>
        <Burger />
        
    </Nav>
  )
}

export default Navbar