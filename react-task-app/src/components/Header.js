import React from 'react'
import './Header.css';
import './Navbar'
import Navbar from './Navbar';
import TextHeader from './TextHeader';
import MenuBurger from './MenuBurger';
const Header = () => {
  return (
    <div className='header'>
      <MenuBurger />
      <Navbar />
      <TextHeader />
    </div>
  )
}

export default Header