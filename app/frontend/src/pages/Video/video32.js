import React from 'react';
import './video.css';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube';

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
                <div className='container-info'>
                    <h1 className='' > John in Becode</h1>
                    <p>hbabaksjbasas 2</p>
                </div>
            </div>
        </>
    );
};

export default VideoPage;                                                  