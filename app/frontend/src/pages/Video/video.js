import React from 'react';

import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube'


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
                <h1 className="title">{props.title}</h1>
                {/* Only loads the YouTube player*/}
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

                <p className="description">{props.description}</p>
                <div className="Genres">{props.genres}</div>
                <div className="Types">{props.types}</div>
            </div>
        </>
    );
};

export default VideoPage;                                                  