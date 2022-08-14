import React, { useState, useEffect} from 'react';
import './video.css';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';

import axios from "axios";
import './video.css';

/*--------------------------------------------------------
*Video player pages.
*This page containtes the title, description, and other details
*about the specific anime movie or series.
*--------------------------------------------------------*/

const VideoPage = () => {

    let { id } = useParams();

     const [anime, setAnime] = useState([
        {
          title: "",
          genre: [""],
          trailer: "",
          picture: "",
          comments: "",
          ratings: "",
        },
      ]);
    
    useEffect(() => {
       axios.get( `https://aniflix-getflix.herokuapp.com/watch/` + id )
       .then((res) => {
         setAnime(res.data)

       })
       .catch((error) => {
         console.log(error);
       })
     }, [])




    return (
        <>
            <Navbar />
            <div className="video-page" key={anime.id} >
                {/* Only loads the YouTube player*/}
                <div className='player-wrapper'>
                    <ReactPlayer 
                        width='80%'
                        height='600px' 
                        controls 
                        url={anime.trailer}
                    />
                </div>

                <div className='container-info'>
                    <img src={anime.picture} alt={anime.title} />
                    <h1 className='' >{anime.title}</h1>                </div>
            </div>
        </>
    );
};

export default VideoPage;      