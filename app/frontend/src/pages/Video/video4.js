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
                url='https://www.youtube.com/watch?v=6ohYYtxfDCg'
                />
                <div className='container-info'>
                    <img src='https://cdn.myanimelist.net/images/anime/11/39717.jpg' alt='Sword Art Online' />
                    <h1 className='' >Sword Art Online</h1>
                    <p>Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination. With the release of this worldwide sensation, gaming has never felt more lifelike. However, the idyllic fantasy rapidly becomes a brutal nightmare when SAO's creator traps thousands of players inside the game. The "log-out" function has been removed, with the only method of escape involving beating all of Aincrad's one hundred increasingly difficult levels. Adding to the struggle, any in-game death becomes permanent, ending the player's life in the real world. While Kazuto "Kirito" Kirigaya was fortunate enough to be a beta-tester for the game, he quickly finds that despite his advantages, he cannot overcome SAO's challenges alone. Teaming up with Asuna Yuuki and other talented players, Kirito makes an effort to face the seemingly insurmountable trials head-on. But with difficult bosses and threatening dark cults impeding his progress, Kirito finds that such tasks are much easier said than done.</p>
                    <p bold>Genre : <span> Action, Adventure, Fantasy, Romance</span></p>
                    <p bold>Episodes : <span>25</span></p>
                    <p bold>Studio : <span>A-1 Pictures</span></p>
                    <bold>Rated : <span> PG-13 - Teens 13 or older</span></bold>
                </div>
            </div>
        </>
    );
};

export default VideoPage;      