import React from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './CarouselHome/Carousel';
import CarouselHome from './CarouselHome/CarouselHome';

function Home(){
    return(
        <div className='home '>
            <Navbar />
            <div className='header'>
                <div classs='container-image'>
                    <img  className="img-responsive img-fluid max-width: 100%" src="https://www.itl.cat/pngfile/big/202-2024159_one-piece-monkey-d-luffy-straw-hat-portrait.jpg" alt="logo"/>
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
           <div className='carousel-1'>
            {/* Container carousel 1 */}
                <CarouselHome />
            {/* Container carousel End 1 */}
           </div>


            <Footer />

           {/* End structure */}
        </div>

        // return End
    )
}

export default Home;





