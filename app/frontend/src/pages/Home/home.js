import React from 'react'
import '../Home/home.css';
import Nav from '../../components/Navbar/navbar';
// import Footer from '../../components/Footer/footer';
import Carousel2 from '../../components/Home/carouselHome';
function Home(){
    return(
        <div className='home '>
          
            <Nav />
            <div className='header-home'>
                <div className='imagHeader'></div>
                <div className='text-head '>
                    <h1 className='text-light display-1 '>Breath of</h1>
                    <h1 className='text-light display-1 '>Thunder</h1>
                    <p className='text-light '>Shonen Adventure Super-powers <strong>Samourai</strong></p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is asleep</p>
                    <div className='container-btn'>
                        <button className='btn btn-light mr-5 px-4'>&#128898; Play</button><button className='btn btn-light'>Mor info</button>
                    </div>
                </div>
            </div>


            <div className='carousel'>
                <Carousel2 />
            </div>
            {/* <Footer /> */}

           {/* End structure */}
        </div>

        // return End
    )
}

export default Home;
