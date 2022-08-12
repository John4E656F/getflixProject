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
                    <p>Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten. For his own amusement, Ryuk drops his "Death Note" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder. Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias "Kira"—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.</p>
                    <p bold>Genre : <span>Supernatural, Suspense</span></p>
                    <p bold>Episodes : <span>37</span></p>
                    <p bold>Demographic : <span>Shounen</span></p>
                    <p bold>Studio : <span>Supernatural, Suspense</span></p>
                    <bold>Rated : <span>R - 17= (violence & profanity)</span></bold>
                </div>
            </div>
        </>
    );
};

export default VideoPage;      