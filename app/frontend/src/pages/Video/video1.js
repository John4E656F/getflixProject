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
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                />
             
                <div className='discription-'>
                    <div className='container-img'>
                            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Shingeki no Kyojin" />
                    </div>
                    <div className='container-description'>
                        <h3>Shingeki no Kyojin</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;                                                  