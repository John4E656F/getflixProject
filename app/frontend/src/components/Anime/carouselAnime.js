import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '../../components/Rating/rating';



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
       
       <h2 className='titleCarousel mt-5'>Anime</h2>
        <Slider {...settings} className=''>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/47347.jpg" alt="Shingeki no Kyojin" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p className="title">Shingeki no Kyojin</p>
              <p><Rating  /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/9453.jpg" alt="Death Note" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Death Note</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg" alt="Fullmetal Alchemist: Brotherhood" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Fullmetal Alchemist: Brotherhood</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/12/76049.jpg" alt="One Punch Man" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">One Punch Man</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/11/39717.jpg" alt="Sword Art Online" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Sword Art Online</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/78745.jpg" alt="Boku no Hero Academia" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Boku no Hero Academia</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/64449.jpg" alt="Tokyo Ghoul" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Tokyo Ghoul</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/13/17405.jpg" alt="Naruto" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Naruto</p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>
{/*  */}




<h2 className='titleCarousel mt-5'>Manga</h2>
      
        <Slider {...settings}>
                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" alt="Kimetsu no Yaiba" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Kimetsu no Yaiba</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1337/99013.jpg" alt="Hunter x Hunter" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Hunter x Hunter</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/5/87048.jpg" alt="Kimi no Na wa" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Kimi no Na wa</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/5/73199.jpg" alt="Steins Gate" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Steins;Gate</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1074/111944.jpg" alt="No Game No Life" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">No Game No Life</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/5/50331.jpg" alt="Code Geass: Hangyaku no Lelouch" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Code Geass: Hangyaku no Lelouch</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1122/96435.jpg" alt="Koe no Katachi" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Koe no Katachi</p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/13/22128.jpg" alt="Toradora" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p className="title">Toradora!</p>
                      <p><Rating /></p>
                    </div>
                </div>
        </Slider>

{/*  */}
<h2 className='titleCarousel mt-5'>Kids</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/67177.jpg" alt="Shigatsu wa Kimi no Uso" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Shigatsu wa Kimi no Uso</p>
              <Rating />
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/77809.jpg" alt="Noragami" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Noragami</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg" alt="Jujutsu Kaisen" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Jujutsu Kaisen</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/6/73245.jpg" alt="One Piece" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">One Piece</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
            <img src="https://cdn.myanimelist.net/images/anime/1244/111115.jpg" alt="Angel Beats" />
            <div className="info-carousel">
              <p className="title">Angel Beats!</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1429/95946.jpg" alt="Akame ga Kill" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Akame ga Kill!</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/8/65409.jpg" alt="Nanatsu" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Nanatsu no Taizai</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/77957.jpg" alt="Boku dake" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Boku dake ga Inai Machi</p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

{/*  */}
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/13/33465.jpg" alt="Mirai Nikki" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Mirai Nikki</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/75639.jpg" alt="Ansatsu Kyoushitsu" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Ansatsu Kyoushitsu</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/8/80356.jpg" alt="Mob Psycho 100" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Mob Psycho 100</p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/75195.jpg" alt="Ao no Exorcist" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Ao no Exorcist</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/7/76014.jpg" alt="Haikyuu!!" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Haikyuu!!</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/8/77831.jpg" alt="Kono Subarashii Sekai ni Shukufuku wo!" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Kono Subarashii Sekai ni Shukufuku wo!</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1830/118780.jpg" alt="Yakusoku no Neverland" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Yakusoku no Neverland</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/40451.jpg" alt="Bleach" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Bleach</p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

{/*  */}
        {/* <h2></h2> */}
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/73178.jpg" alt="Kiseijuu: Sei no Kakuritsu" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Kiseijuu: Sei no Kakuritsu</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" alt="Cowboy Bebop" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Cowboy Bebop</p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/6/79597.jpg" alt="Sen to Chihiro no Kamikakushi" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Sen to Chihiro no Kamikakushi</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/18179.jpg" alt="Fairy Tail" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Fairy Tail</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1314/108941.jpg" alt="Neon Genesis Evangelion" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Neon Genesis Evangelion</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/71553.jpg" alt="Death Parade" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Death Parade</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1464/111943.jpg" alt="Kill la Kill" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Kill la Kill</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1795/95088.jpg" alt="Violet Evergarden" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p className="title">Violet Evergarden</p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

      </div>
    );
  }
}