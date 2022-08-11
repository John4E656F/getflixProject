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
                url='https://www.youtube.com/watch?v=kx0nBaS_q50'
                />
             
                <div className='discription-'>
                    <div className='container-img'>
                            <img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg" alt="Shingeki no Kyojin" />
                    </div>
                    <div className='container-description'>
                        <h3>Fullmetal Alchemist: Brotherhood</h3>
                        <span>TV series</span>
                        <p>Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;                                                  