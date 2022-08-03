import React from 'react'
import './home.css';
import Carousel from '../../components/Carousel/carousel.component'
import { FiPlay }  from 'react-icons/fi'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Carousel2 from '../../components/Home/carouselHome';
function home(){

    
    return(
        <div className='home '>
          
            <Navbar />
            <div className='header-home'>
                <div className='imagHeader'></div>
                <div className='text-head '>
                    <h1 className='text-light display-1 ml-5'>mikasa ackerman</h1>
                    <p className='text-light '>Shonen Adventure Super-powers <strong>Samourai</strong></p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                    <div className='container-btn'>
                        <button className='btn btn-light mr-5 px-4 '> <FiPlay /> Play</button><button className='btn btn-light'>Moreinfo</button>
                    </div>
                </div>
            </div>

            <Carousel />

            <div className='carousel'>
                <Carousel2 />
            </div>
            <Footer />

           {/* End structure */}
        </div>

        // return End
    )
}

export default home;
