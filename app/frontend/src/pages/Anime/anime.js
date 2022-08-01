import React from 'react'
// import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Carousel from './CarouselAnime/Carousel';
// import SmallNavbar from '../SmallNavbar/SmallNavbar';
import Navbar from '../Nav/Navbar'

import './Anime.css'

const Anime = () => {
  return (
    <div className='anime'>
      {/* <Navbar /> */}
      {/* <SmallNavbar/> */}
      <Navbar />
         <div className='header-anime'>
          <div className='imagHeader'></div>
                <div className='text-head'>
                    <h1 className='text-light '>DR. STONE</h1>
                    <h1 className='text-light '>A rock-solid </h1>
                    <p className='text-light '>The society we live in today is the result of millions of years of gradual scientific advancements and struggle. But what if all of that advancement suddenly disappeared?</p>
                    <p className='text-light '>The Dr. Stone manga series explores these questions</p>
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