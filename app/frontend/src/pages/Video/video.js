import React, {useState} from 'react';
import './video.css';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube';

/*--------------------------------------------------------
*Video player pages.
*This page containtes the title, description, and other details
*about the specific anime movie or series.
*--------------------------------------------------------*/

const VideoPage = (props) => {
    const [ anime ] = useState({
        id: props.key,
        title: props.title,
        genre: props.genre,
        trailer: props.trailer,
        picture: props.picture,
        comments: props.comments,
        ratings: props.ratings,
    })


    return (
        <>
            <Navbar />
            <div className="video-page" key={anime.id} >
                {/* Only loads the YouTube player*/}
                <ReactPlayer 
                width='80%'
                height='600px' 
                controls 
                url={anime.trailer}
                />
                <div className='container-info'>
                    <img src='anime.trailer' alt='anime.title' />
                    <h1 className='' >{anime.title}</h1>
                    <p>Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.</p>
                    <p bold>Genre : <span>{anime.genre}</span></p>
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