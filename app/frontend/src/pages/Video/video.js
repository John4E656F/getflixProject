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
            <div className="video-page" style={{width:'100%' , height:'100vh' , display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#302620'}}>
                <h1 className="title">{props.title}</h1>
                {/* Only loads the YouTube player*/}
                <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' style={{ width:'100%', height:'auto',margin:'250px 30%' ,position:"absolute" , top:'0' , left:'0' , boxShadow:'0 0 15px gray'}} />
                {/* <ReactPlayer autoPlay={true} style={{ width:'100%', height:'auto',margin:'250px 30%' ,position:"absolute" , top:'0' , left:'0' , boxShadow:'0 0 15px gray'}} controls className='react-player' url={this.state.url} playing={this.state.playing} /> */}

                <p className="description">{props.description}</p>
                <div className="Genres">{props.genres}</div>
                <div className="Types">{props.types}</div>
            </div>
        </>
    );
};

export default VideoPage;                                                  