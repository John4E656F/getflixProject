//ADD ALTS to all the images


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '../Rating/rating';
import "./carouselManga.css";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        
        {/*  */}

       
            <Slider {...settings}>
            <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1988/113791.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Gintama: The Final</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1122/96435.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Koe no Katachi</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1825/110716.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Violet Evergarden Movie</p>
              <p><Rating /></p>
            </div>
          </div>

                     <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/51723.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare</p>
              <p><Rating /></p>
            </div>
          </div>

                     <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kimi no Na wa.</p>
              <p><Rating /></p>
            </div>
          </div>

                     <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1084/112813.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kizumonogatari III: Reiketsu-hen</p>
              <p><Rating /></p>
            </div>
          </div>

                      <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/6/79597.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Sen to Chihiro no Kamikakushi</p>
              <p><Rating /></p>
            </div>
          </div>
                     <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1142/112957.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Fate/stay night Movie: Heaven's Feel - III. Spring Song</p>
              <p><Rating /></p>
            </div>
          </div>

            </Slider>

        

        {/*  */}

        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/7/75919.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Mononoke Hime</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1502/110723.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Made in Abyss Movie 3: Fukaki Tamashii no Reimei</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/75810.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Howl no Ugoku Shiro</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1704/106947.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kimetsu no Yaiba Movie: Mugen Ressha-hen</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1422/113533.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Evangelion: 3.0+1.0 Thrice Upon a Time</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1613/102179.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1248/112352.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Suzumiya Haruhi no Shoushitsu</p>
              <p><Rating /></p>
            </div>
          </div>

        <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/72689.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Mushishi Zoku Shou: Suzu no Shizuku</p>
              <p><Rating /></p>
            </div>
          </div>

        </Slider>

{/*  */}

        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/35721.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Ookami Kodomo no Ame to Yuki</p>
              <p><Rating /></p>
            </div>
          </div>

        <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1981/112812.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kizumonogatari II: Nekketsu-hen</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/12/19698.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Tengen Toppa Gurren Lagann Movie 2: Lagann-hen</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1768/93291.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kimi no Suizou wo Tabetai</p>
              <p><Rating /></p>
            </div>
          </div>

      <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1404/98182.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Neon Genesis Evangelion: The End of Evangelion</p>
              <p><Rating /></p>
            </div>
          </div>

        <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1378/119190.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Shoujo☆Kageki Revue Starlight Movie</p>
              <p><Rating /></p>
            </div>
          </div>

         <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1574/112838.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Kara no Kyoukai Movie 5: Mujun Rasen</p>
              <p><Rating /></p>
            </div>
          </div>

         <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/11/79127.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Perfect Blue</p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

        {/*  */}

        <Slider {...settings}>
         <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1974/98158.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Fate/stay night Movie: Heaven's Feel - II. Lost Butterfly</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1034/120096.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Fruits Basket: Prelude</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/4/28803.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Gintama Movie 1: Shinyaku Benizakura-hen</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1121/119044.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Jujutsu Kaisen 0 Movie</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/7/75808.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Hotaru no Haka</p>
              <p><Rating /></p>
            </div>
          </div>

         <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/54231.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari</p>
              <p><Rating /></p>
            </div>
          </div>
                     <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1611/112806.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Steins;Gate Movie: Fuka Ryouiki no Déjà vu</p>
              <p><Rating /></p>
            </div>
          </div>

           <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1022/96168.jpg" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>Zoku Owarimonogatari</p>
              <p><Rating /></p>
            </div>
          </div>
                    
        </Slider>



      </div>
    );
  }
}