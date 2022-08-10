import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer';
import { FiPlay }  from 'react-icons/fi';
import Carousel from  '../../components/Manga/carouselManga'
import './manga.css'

function Manga(){

  return (
    <div className="manga">
      
      <Navbar />
      {/*  */}
      <div className='header-manga'>
              <div className='imagHeader'></div>
              <div className='text-head '>
                  <h1 className='text-light display-1 ml-5'>Breath of</h1>
                  <h1 className='text-light display-1 '>Thunder</h1>
                  <p className='text-light '>Shonen Adventure Super-powers <strong>Samourai</strong></p>
                  <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                  <div className='container-btn'>
                      <button className='btn btn-light mr-5 px-4 '> <FiPlay /> Play</button><button className='btn btn-light opacity-50'>Moreinfo</button>
                  </div>
              </div>
          </div>
  
  
  
      <div className="container-carousel">
          <Carousel />
  
      </div>
      
  
  
      <Footer />
      
    </div>
  );

}

export default Manga ;