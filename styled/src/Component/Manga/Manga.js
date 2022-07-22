/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Carousel_1 from './CarouselManga/Carousel_1/Carousel_1';
import Carousel_2 from './CarouselManga/Carousel_2/Carousel_2';
import Carousel_3 from './CarouselManga/Carousel_3/Carousel_3';



import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Manga.css';




function Manga(){
    return(
        <div className='manga'>
            <Navbar />
            <div className='header'>
                <div classs='container-image'>
                    <img  className="img-responsive img-fluid max-width: 100%" src="https://getwallpapers.com/wallpaper/full/9/e/a/454545.jpg" alt="logo"/>
                </div>
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
            {/* Carousel 1 */}
               
                
                <div>
                    <Carousel_1  />
                </div>
                

            {/* Container carousel End 1 */}

              {/* carousel 2 */}
               
              
                <div>
                    <Carousel_2 />
                </div>
              

            {/* Container carousel End 2 */}
                {/* Carousel 3 */}
                
                <div className='mt-3'>
                    <Carousel_3 />
                </div>
               
           </div>


            <Footer />

           {/* End structure */}
        </div>
    )
}

export default Manga;


