/* eslint-disable react/jsx-no-undef */
import React from 'react'

import Carousel from './CarouselManga/Carousel';


import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Manga.css';




function Manga(){
    return(
        <div className='manga'>
            <Navbar />
            <div className='header-manga'>
                <div className='imageHeder'></div>
                <div className='text-head'>
                    <h1 className='text-light display-1'>Breath of</h1>
                    <h1 className='text-light display-1'>Thunder</h1>
                    <p className='text-light '>Shonen Adventure Super-powers Samourai</p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                    <div className='container-btn'>
                    <button className='btn btn-light mr-5 px-4'>&#128898; Play</button><button className='btn btn-light'>Mor info</button>
                    </div>
                </div>
            </div>
           <div className='carousel_container'>
            {/* Carousels */}
            
                <div className='container-carousel'>
                    <Carousel />
                    {/* <Carousel_2 /> */}
                </div>
                <div>
                    {/* <Carousel_3 /> */}
                </div>
               
           </div>


            <Footer />

           {/* End structure */}
        </div>
    )
}

export default Manga;


