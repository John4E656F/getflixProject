import React from 'react'
import HeaderHome from '../Headers/HeaderHome/HeaderHome';
import Navbar from '../Navbar/Navbar';

import './Home.css';
function Home(){
    return(
        <div className='home py-'>
            <Navbar />
            <HeaderHome />
            <div className='header'>
                <div classs='container-image'>
                    <img  className="img-responsive img-fluid max-width: 100%" src="https://www.itl.cat/pngfile/big/202-2024159_one-piece-monkey-d-luffy-straw-hat-portrait.jpg" alt="logo"/>
                </div>
                <div className='text-head'>
                    <h1 className='text-light display-1'>Breath of</h1>
                    <h1 className='text-light display-1'>Thunder</h1>
                    <p className='text-light '>Shonen Adventure Super-powers Samourai</p>
                    <p className='text-light '>Dive into the of Zenitsu and discover <br /> his over half and why Zenitsu's true <br /> streght awakens when he is aslepp</p>
                    <div className='container-btn'>
                    <button className='btn btn-light mr-5'>	
&#128898; Play</button><button className='btn btn-light'>Mor info</button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Home;