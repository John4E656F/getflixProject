import React from 'react'
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";




const CarouselKid = () => {
    // Rating

    


    // 

  return (
    <div>
        {/* Carousel Container */}

        <div className="container-carousel">
      <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://images.hdqwalls.com/download/raya-and-the-last-dragon-2021-gp-1920x1080.jpg"} alt="Raya" />
              <p>Raya</p>
              <p className="branch">The last dragon</p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://scriptpipeline.com/wp-content/uploads/2019/04/spider-man-into-the-spider-verse-movie-review-poster.jpg"} alt="Spider man" />
              <p>Spider-Man</p>
              <p className="branch">Into the spider-verse</p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://i.insider.com/5dc2ddbb79d757516e44eb92"} alt="Klus" />
              <p>Klus</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m0Zo34wJont9wGzTGfSF5gHaEK%26pid%3DApi&f=1"} alt="Soul" />
              <p>Soul</p>
              <p className="branch"></p>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"http://operationrainfall.com/wp-content/uploads/2013/08/Wolf-Children-Logo.jpg"} alt="Wolf Children 1" />
              <p>Wolf Children</p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://disguise.com/pub/media/aw_sbb/brand/aw_shopbybrand/image/b/r/brand_insideout.jpg"} alt="Inside out" />
              <p>Inside out</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://cozinhaemcena.com.br/wp-content/uploads/2014/05/mary_and_max4-960x540.png"} alt="Mary and Max" />
              <p>Mary and Max</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.QJm1d-nS9o9vNm2O8kIGGAHaDe%26pid%3DApi&f=1"} alt="Wolfwalkers" />
              <p>Wolfwalkers</p>
              <p className="branch"></p>
            </div>
          </div>
        </Carousel>

        {/* carousel 2 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://buzz.tt/media/posters/1154/backdrops_2_1500.jpg"} alt="Zootopia" />
              <p>Zootopia</p>
              <p className="branch"> </p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HEXasX9L2qPbG8-Cv6QBPQHaFr%26pid%3DApi&f=1"} alt="Boss Baby" />
              <p>Boss-Baby</p>
              <p className="branch"> </p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.28Y-hGuknl8NWcZPOKLeVQHaGn%26pid%3DApi&f=1"} alt="Fantastic Mr. Fox" />
              <p>Fantastic Mr. Fox</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://image.tmdb.org/t/p/original/qtmGraxvwe4C70gu7ZYAkUEtzwU.jpg"} alt="Kubo and the Two Strings" />
              <p>Kubo and the Two Strings</p>
              <p className="branch"></p>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://i.ytimg.com/vi/qzMOAG0m6lM/maxresdefault.jpg"} alt="Big Hero 6 " />
              <p>Big Hero 6 </p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qzQ8vq4njgFpKRzVh7_8RQFNC7%26pid%3DApi&f=1"} alt="The Secret Life of Pets" />
              <p>The Secret Life of Pets</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.a3A_keKuRg8BhG5MginXBgHaEK%26pid%3DApi&f=1"} alt="CoCo" />
              <p>Coco</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://i0.wp.com/moviebabble.com/wp-content/uploads/2017/07/The-Emoji-Movie.jpg?fit=1200%2C630&ssl=1"} alt="The Emoji Movie" />
              <p>The Emoji Movie</p>
              <p className="branch"></p>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 3 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3c_03kd4qv5Hi-XVwG-QAQHaEA%26pid%3DApi&f=1"} alt="The Mitchells vs the Machines " />
              <p>The Mitchells vs the Machines </p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P-qwIvUP9hFNJP9XCe6LLAHaEK%26pid%3DApi&f=1"} alt="Wreck-It Ralph " />
              <p>Wreck-It Ralph </p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://1.bp.blogspot.com/-tnGPjS8QfZo/VIlit_425DI/AAAAAAAABGk/HJJpT72Y5MA/s1600/The-Little-Prince.jpg"} alt="The Little Prince" />
              <p>The Little Prince</p>
              <p className="branch">The Little Prince</p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ElIz0HAQF_2R0xxUyXMuegHaEK%26pid%3DApi&f=1"} alt="The Lego Movie" />
              <p>The Lego Movie</p>
              <p className="branch"></p>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.T6UXTS3qNPoXTunRWCQWGgHaEK%26pid%3DApi&f=1"} alt="Moana " />
              <p>Moana </p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://2.bp.blogspot.com/-DJill3ZUj1o/UeGO79hvPmI/AAAAAAAABO4/f3paWjFJlbg/s1600/Despicable-Me5.jpg"} alt="Despicable Me" />
              <p>Despicable Me</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.J0elphtCoDGtSPLCeLYOVgHaEK%26pid%3DApi&f=1"} alt="The Little Mermaid" />
              <p>The Little Mermaid</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NTvRvSD1YoI1G0aCtujITAHaD4%26pid%3DApi&f=1"} alt="Luca" />
              <p>Luca</p>
              <p className="branch"></p>
            </div>
          </div>
        
        </Carousel>
    {/* Carousel  4 */}

        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://assets1.ignimgs.com/2016/06/14/finding-dory-1280jpg-da8275_1280w.jpg"} alt="Finding Dory" />
              <p>Finding Dory</p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Kx5J_TI0v9EviFe0Vpkc1wHaEK%26pid%3DApi&f=1"} alt="My Life as a Zucchini" />
              <p>My Life as a Zucchini</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oXFkreSEUry2J9cpX-czZwHaEQ%26pid%3DApi&f=1"} alt="The Book of Life " />
              <p>The Book of Life </p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2018/04/lilo-2.jpg"} alt="Lilo & Stitch" />
              <p>Lilo & Stitch</p>
              <p className="branch"></p>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eXTucIwHk__gJAf4UcEwCwHaEK%26pid%3DApi&f=1"} alt="Sing" />
              <p>Sing</p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://wallpapercave.com/wp/wp2979692.jpg"} alt="Cars " />
              <p>Cars </p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.w-ORK4JEudnBxYZ_LQQtqAHaGI%26pid%3DApi&f=1"} alt="The Princess and the Frog" />
              <p>The Princess and the Frog</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.wallpaperflare.com/static/248/501/287/ferdinand-animation-2017-4k-wallpaper.jpg"} alt="Ferdinand " />
              <p>Ferdinand </p>
              <p className="branch"></p>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 5 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.lpl5dWiquQQn1dn_0iBBgAHaE8%26pid%3DApi&f=1"} alt="Minions " />
              <p>Minions </p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.KOuP6pjKbAr0t6WDw_tSmQHaEK%26pid%3DApi&f=1"} alt="Happy Feet" />
              <p>Happy Feet</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://image.tmdb.org/t/p/original/cE9TDkLOjYsK0mDr3iPgorbTb7y.jpg"} alt="The Good Dinosaur" />
              <p>The Good Dinosaur</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YlRfh5IrcHVnRHJK0ahosQHaFj%26pid%3DApi&f=1"} alt="Early Man" />
              <p>Early Man</p>
              <p className="branch"></p>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YrzJR9zMhmY2BOiOb5-uBgHaEK%26pid%3DApi&f=1"} alt="Onward " />
              <p>Onward </p>
              <p className="branch"></p>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://1.bp.blogspot.com/-9D3nEHR2JXI/VND1CCEiVkI/AAAAAAAAZE4/SgVZJpTo3ls/s1600/1417604322-Home%2BTeaser%2BQuad.jpg"} alt="Home" />
              <p>Home</p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.lcrpride.co.uk/wp-content/uploads/2019/01/Mulan.png"} alt="Mulan " />
              <p>Mulan </p>
              <p className="branch"></p>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://hollywoodsuite.ca/wp-content/uploads/poster/HS903226_poster_1920_1080.jpg"} alt="The Iron Giant " />
              <p>The Iron Giant </p>
              <p className="branch"></p>
            </div>
          </div>
        
        </Carousel>

      </div>


        {/* End carousel container */}
    </div>
  )
}

export default CarouselKid