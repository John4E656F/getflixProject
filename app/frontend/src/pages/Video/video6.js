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
                url='https://www.youtube.com/watch?v=vGuQeQsoRgU'
                />
                <div className='container-info'>
                    <img src='https://cdn.myanimelist.net/images/anime/5/64449.jpg' alt='Tokyo Ghoul' />
                    <h1 className='' >Tokyo Ghoul</h1>
                    <p>A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the news of the growing crisis. However, the appearance of an attractive woman named Rize Kamishiro shatters his solitude when she forwardly asks him on a date. While walking Rize home, Kaneki discovers she isn't as kind as she first appeared, and she has led him on with sinister intent. After a tragic struggle, he later awakens in a hospital to learn his life was saved by transplanting the now deceased Rize's organs into his own body. Kaneki's body begins to change in horrifying ways, and he transforms into a human-ghoul hybrid. As he embarks on his new dreadful journey, Kaneki clings to his humanity in the evolving bloody conflict between society's new monsters and the government agents who hunt them.</p>
                    <p bold>Genre : <span>Action, Fantasy, Horror</span></p>
                    <p bold>Episodes : <span>12</span></p>
                    <p bold>Demographic : <span>Shounen</span></p>
                    <p bold>Studio : <span>Pierrot</span></p>
                    <bold>Rated : <span>R - 17= (violence & profanity)</span></bold>
                </div>
            </div>
        </>
    );
};

export default VideoPage;      