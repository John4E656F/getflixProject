/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Rating from '../../Rating/Rating';

import './Carousel.css';

const CarouselHome = () => {
  return (
    <div className=''>

      <div className="container-carousel">
      <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://foothilldragonpress.org/wp-content/uploads/2014/03/the-wind-rises.jpg"} alt="The Wind Rises" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>The Wind Rises</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kNfpTrhFkwojnxo1XFmhMQHaEK%26pid%3DApi&f=1"} alt="One Piece" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>One Piece</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wjwi7fKDo-TP4kXc5oZ1RwHaEK%26pid%3DApi&f=1"} alt="ORIENT" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>ORIENT</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://financerewind.com/wp-content/uploads/2020/11/Classroom-of-the-Elite-Season-2-Renewal-Elites-will-Return-Soon-for-Second-Season-of-the-Anime-scaled-1-1200x900-1-1068x801.jpg"} alt="Classroom " />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Classroom </p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>


          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://static.animecorner.me/wp-content/uploads/2020/09/attack-e1600258199510.jpg"} alt="Attack on Titan" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Attack on Titan</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MMbZpK6AXXhpaxYu5sVBfQHaEK%26pid%3DApi&f=1"} alt="SPY x FAMILY" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>SPY x FAMILY</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M5klcPTxji9Z-SJznF9ITwHaEK%26pid%3DApi&f=1"} alt="Dr STONE" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Dr. STONE</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://otakuusamagazine.com/wp-content/uploads/2021/04/86-prequel.jpg"} alt="86 EIGHTY-SIX" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>86 EIGHTY-SIX</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>
        </Carousel>

        {/* carousel 2 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TNrP1RYisjHixeABeER6jwHaEK%26pid%3DApi&f=1"} alt="aharen-san wa hakarenai" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>aharen-san wa hakarenai</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ohN8UPXLvQ-xIo8C3RtlwAHaEK%26pid%3DApi&f=1"} alt="World Trigger" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>World Trigger</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AKsWKNVF37n3oemHEEE3UAHaD5%26pid%3DApi&f=1"} alt="Demon Slayer" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Demon Slayer</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>

            
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.tvseasonspoilers.com/wp-content/uploads/2021/01/Arifureta-Season-2-2-1024x538.jpg"} alt="Arifureta" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Arifureta</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>


          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://otakukart.com/wp-content/uploads/2021/07/Screenshot-2021-07-07-195311-1024x576.jpg"} alt="TSUKIMICHI" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>TSUKIMICHI</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aHjRaOQoFv1DmceDPZ7R7AHaEo%26pid%3DApi&f=1"} alt="Horimiya" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Horimiya</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.l8OwBF09JG2l7yfAVi-FKAHaEH%26pid%3DApi&f=1"} alt="RWBY" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>RWBY</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://miro.medium.com/max/3840/1*6TOX5JNorXkGKrEB-NjSDA.jpeg"} alt="Food Wars" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Food Wars</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 3 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
          <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._beIQNqLijdw4G-KYyiF9AHaFL%26pid%3DApi&f=1"} alt="Love of Kill" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Love of Kill</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://neveril.net/wp-content/uploads/2020/11/unnamed.png"} alt="the god of high school" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>The god of high school</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://images-geeknative-com.exactdn.com/wp-content/uploads/2020/05/11222404/The-8th-Son_-Are-You-Kidding-Me_-Seasonal_2x3-banner.png"} alt="The 8th son" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>The 8th son</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NfKifuCKq4jiLEM8qSwQ0gHaEo%26pid%3DApi&f=1"} alt="Yu-Gi-Oh" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Yu-Gi-Oh</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>


          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://i.ytimg.com/vi/mgLlMVhP8nU/maxresdefault.jpg"} alt="World's End Harem" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>World's End Harem</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://vignette.wikia.nocookie.net/masamunekuns-revenge/images/0/08/Masamunekunmangalogo.jpg/revision/latest/scale-to-width-down/554?cb=20170120171631&path-prefix=es"} alt="masamune-kun's revenge" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Masamune-kun's revenge</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wgeAwJKZtiYqWq76jI0YmgHaEK%26pid%3DApi&f=1"} alt="cardfight vanguard" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Cardfight vanguard</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
    {/* Carousel  4 */}

        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.jsiByTcCgxWtVN6cYfiqdgHaEj%26pid%3DApi&f=1"} alt="LINK CLICK" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>LINK CLICK</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VEFxGuQU1R1NOYpqw9PZGAHaEK%26pid%3DApi&f=1"} alt="Plunderer" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Plunderer</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://financerewind.com/wp-content/uploads/2020/09/ahiru-no-sora.jpg"} alt="Ahiru no Sora" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Ahiru no Sora</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>


          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 5 */}
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>


          <div className="pics">
            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>


            <div className="sec-1">
            <div className='blurImg'>
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                 <p>&#9655; Play</p>
               </div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="branch"></p>
                <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>

      </div>

        {/* Carousel 1   */}

       
        {/* End Structure  */}
    </div>
  )
}

export default CarouselHome;




// className="item-img img-fluid mx-auto d-block" 