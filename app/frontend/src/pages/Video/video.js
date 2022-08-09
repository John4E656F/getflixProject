import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube'; 

/*--------------------------------------------------------
*Video player pages.
*This page containtes the title, description, and other details
*about the specific anime movie or series.
*--------------------------------------------------------*/



const VideoPage = (props) => {


    // this.state = {
    //     key : '' ,
    //     data: [],
    // }
    // url={this.state.url}

    return (
        <>
            <Navbar />
            <Div className="video-page" style={{width:'100%' , height:'100vh' , display:'flex' , justifyContent:'center' , alignItems:'center' , backgroundColor:'#302620'}}>
                {/* Only loads the YouTube player*/}
                {/* props.url */}
                <ReactPlayer autoPlay={true} style={{ width:'100%', height:'auto',margin:'250px 30%' ,position:"absolute" , top:'0' , left:'0' , boxShadow:'0 0 15px gray'}} controls className='react-player' url={this.state.url} playing={this.state.playing} />
                <h1 className="title">{props.title}</h1>
                <p className="description">{props.description}</p>
                <div className="Genres">{props.genres}</div>
                <div className="Types">{props.types}</div>
                <h2>younes</h2>
            </Div>
        </>
    );
};

export default VideoPage;           


