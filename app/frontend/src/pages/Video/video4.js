import React from 'react';
import './video.css';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube';
import Footer from '../../components/Footer/footer'
/*--------------------------------------------------------
*Video player pages.
*This page containtes the title, description, and other details
*about the specific anime movie or series.
*--------------------------------------------------------*/

const VideoPage = (props) => {



    return (
        <>
            <Navbar />
            <div className="video-page" >
                {/* Only loads the YouTube player*/}
                <ReactPlayer 
                playing={true}
                width='80%'
                height='600px' 
                controls 
                url='https://www.youtube.com/watch?v=Poo5lqoWSGw'
                />
             
                <div className='discription-'>
                    <div className='container-img'>
                            <img src="https://cdn.myanimelist.net/images/anime/12/76049.jpg" alt="One Punch Man" />
                    </div>
                    <div className='container-description'>
                        <h3>One Punch Man</h3>
                        <span>TV series</span>
                        <p>Life gets pretty boring when you can beat the snot out of any villain with just one punch.
                            If you like Read One-Punch Man Manga Free - Official Shonen Jump From Japan, Shonen Jump recommends:
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;                                                  