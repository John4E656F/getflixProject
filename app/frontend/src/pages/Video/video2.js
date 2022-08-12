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
                url='https://www.youtube.com/watch?v=kx0nBaS_q50'
                />
                <div className='container-info'>
                    <img src='https://cdn.myanimelist.net/images/anime/1223/96541.jpg' alt='Fullmetal Alchemist: Brotherhood' />
                    <h1 className='' >Fullmetal Alchemist: Brotherhood</h1>
                    <p>After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.</p>
                    <p bold>Genre : <span> Action, Adventure, Drama, Fantasy</span></p>
                    <p bold>Episodes : <span>64</span></p>
                    <p bold>Demographic : <span>Shounen</span></p>
                    <p bold>Studio : <span>Bones</span></p>
                    <bold>Rated : <span>R - 17= (violence & profanity)</span></bold>
                </div>
            </div>
        </>
    );
};

export default VideoPage;      