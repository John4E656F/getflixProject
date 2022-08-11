import React from 'react';
import './video.css';
import Navbar from '../../components/Navbar/navbar';
import ReactPlayer from 'react-player/youtube';
import Footer from '../../components/Footer/footer'
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
                playing={true}
                width='80%'
                height='600px' 
                controls 
                url='https://www.youtube.com/watch?v=MGRm4IzK1SQ'
                />
             
                <div className='discription-'>
                    <div className='container-img'>
                            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Shingeki no Kyojin" />
                    </div>
                    <div className='container-description'>
                        <h3>Shingeki no Kyojin</h3>
                        <p>Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VideoPage;                                                  