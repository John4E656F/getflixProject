import React from 'react';
import logo from '../../assets/images/logo.png'; // Tell webpack this JS file uses this image
// The style of the Navbar section is used for the logo style
// import '../Navbar/searchNav.css';
import styled from 'styled-components';

// const Img = css`
// 
  
// `

const Img = styled.img`

  width: 250px;
   margin-top: -20px;
   @media screen and (min-width:1345px) {
      margin-left: 200px;
   }
 
   @media screen and (max-width: 668px) {
     width: 200px;
     margin-top: 1px;
   }
   @media screen and (max-width:528px) { 
    width :150px ;
   }
   @media screen and (max-width:375px) { 
    display: none;
   }

`;



function Logo() {
  // Import result is the URL of your image
  return <Img  src={logo} alt="Logo" />;
}

export default Logo;