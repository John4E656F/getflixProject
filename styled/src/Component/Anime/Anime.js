import React from 'react'
import './Anime.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Carousel from './CarouselAnime/Carousel'
// import CarouselAnime from './CarouselAnime/CarouselAnime';


const Anime = () => {
  return (
    <div className='anime'>
      <Navbar />
         <div className='header'>
         <div classs='container-image'>
                    <img  className="img-responsive img-fluid max-width: 100%" src="https://www.xtrafondos.com/wallpapers/shoto-todoroki-my-hero-academia-3370.jpg" alt="logo"/>
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
           <div className='carousel'>
              <Carousel />
           </div>


            <Footer />

           {/* End structure */}
    </div>
  )
}

export default Anime