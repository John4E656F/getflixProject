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
                width='80%'
                height='600px' 
                controls 
                url='https://www.youtube.com/watch?v=NlJZ-YgAt-c'
                />
                <div className='container-info'>
                    <img src='https://cdn.myanimelist.net/images/anime/9/9453.jpg' alt='Death Note' />
                    <h1 className='' >Death Note</h1>
                    <p></p>
                    <p bold>Genre : <span>Action, Drama</span></p>
                    <p bold>Episodes : <span>25</span></p>
                    <p bold>Demographic : <span>Shounen</span></p>
                    <p bold>Studio : <span>Wit Studio</span></p>
                    <bold>Rated : <span>R - 17= (violence & profanity)</span></bold>
                </div>
            </div>
        </>
    );
};

export default VideoPage;      