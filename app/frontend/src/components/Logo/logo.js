import React from 'react';
import logo from '../../assets/images/Logo-aniflix.png'; // Tell webpack this JS file uses this image



function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" className='w-100' />;
}

export default Logo;