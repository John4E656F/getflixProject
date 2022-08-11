import React, { Component } from "react";
import Slider from "react-slick";
import Rating from '../Rating/rating'
export default class Responsive extends Component {
  
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // initialSlide: 0,
      left: 5 ,
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
        <h2 className='titleCarousel'>Anime</h2>
        <Slider {...settings} >
          <div className="card">
            <img src="https://cdn.myanimelist.net/images/anime/1566/122794.jpg" alt="Kingdom 4th Season" />
                <p>&#9655; Play</p>
            <div  className="info-carousel">
              <p>Kingdom 4th Season</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1346/119505.jpg" alt="Rurouni Kenshin" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Rurouni Kenshin</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1375/121599.jpg" alt="Samurai Champloo" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Samurai Champloo</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/15874.jpg" alt="Afro Samurai" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Afro Samurai</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>
{/*  */}

        <h2 className='titleCarousel'>Manga</h2>
        <Slider {...settings}>
                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>
        </Slider>

{/*  */}
        <h2 className='titleCarousel'>Kids</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <Rating />
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
            <img src="" alt="" />
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

{/*  */}
        <h2 className='titleCarousel'>Film</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

{/*  */}
        {/* <h2></h2> */}
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="" alt="" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>



      </div>
    );
  }
}