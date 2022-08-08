import React from 'react'
import './kids.css';
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer';
import { FiPlay }  from 'react-icons/fi'

// import CarouselKids from './Carousel/CarouselKid';
import Carousel from '../../components/Kids/carouselKids';
function Kids(){
    return(
        <div className='kid '>
           <Navbar />
            {/* <Navbar /> */}
            <div className='header-kid'>
                <div className='imageHeader'></div>
                <div className='text-head'>
                    <h1 className='text-light display-1'>Raya</h1>
                    <h1 className='text-light display-1'>THE LAST DRAGON</h1>
                    <p className='text-light '>Shonen Adventure Super-powers Samourai</p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                    <div className='container-btn'>
                    <button className='btn btn-light mr-5 px-4'><FiPlay /> Play</button><button className='btn btn-light'>Mor info</button>
                    </div>
                </div>
            </div>
           <div className='container-carousel'>
            {/* Container carousel 1 */}

                    <Carousel />
                {/* <CarouselKids /> */}
            {/* Container carousel End 1 */}
           </div>


             <Footer />

           {/* End structure */}
        </div>

        // return End
    )
}

export default Kids;


