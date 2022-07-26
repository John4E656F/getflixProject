import React from 'react'
import './Kids.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Carousel/CarouselKid';
import CarouselKids from './Carousel/CarouselKid';

function Kids(){
    return(
        <div className='home '>
            <Navbar />
            <div className='header'>
                <div classs='container-image'>
                    <img  className="img-responsive img-fluid max-width: 100%" src="https://images.hdqwalls.com/download/raya-and-the-last-dragon-2021-gp-1920x1080.jpg" alt="logo"/>
                </div>
                <div className='text-head'>
                    <h1 className='text-light display-1'>Raya</h1>
                    <h1 className='text-light display-1'>THE LAST DRAGON</h1>
                    <p className='text-light '>Shonen Adventure Super-powers Samourai</p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                    <div className='container-btn'>
                    <button className='btn btn-light mr-5 px-4'>&#128898; Play</button><button className='btn btn-light'>Mor info</button>
                    </div>
                </div>
            </div>
           <div className='carousel-1'>
            {/* Container carousel 1 */}
                <CarouselKids />
            {/* Container carousel End 1 */}
           </div>


            <Footer />

           {/* End structure */}
        </div>

        // return End
    )
}

export default Kids;





