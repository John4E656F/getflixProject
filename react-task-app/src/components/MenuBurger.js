import React from 'react'
import './MenuBurger.css'
const MenuBurger = () => {
  return (
    <div className='menu-burger'>
        <button className='btn-menuBurger close open'>Open</button>
        <div className='menuBurger'>
            <ul>
                <li>Home</li>
                <li>Anime</li>
                <li>Manga</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default MenuBurger