import React from 'react';
import logo from '../../assets/images/Logo-aniflix.png'; // Tell webpack this JS file uses this image
// The style of the Navbar section is used for the logo style
import '../Navbar/searchNav.css';


function Logo() {
  // Import result is the URL of your image
  return <img  src={logo} alt="Logo" className='img-fluid  ' />;
}

export default Logo;