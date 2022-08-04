import React from 'react';
import logo from '../../assets/images/Logo-aniflix.png'; // Tell webpack this JS file uses this image
// The style of the Navbar section is used for the logo style
import '../Navbar/searchNav.css';
import { css } from '@emotion/react';

function Logo() {
  // Import result is the URL of your image
  return <img  src={logo} alt="Logo" className='img-fluid  ' 
  css={css`
  width: 100px; height: 50px; background-color: aqua;
  @media (max-width: 583px) {
    width: 105px;
    
  }
`} />;
}

export default Logo;