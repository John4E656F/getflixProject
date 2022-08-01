import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselHome.css";
import Rating from '../../Rating/Rating'
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
        <h2 className='titleCarousel'>Anime</h2>
        <Slider {...settings} className=''>
          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div  className="info-carousel">
              <p>anime</p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
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
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p></p>
                      <p><Rating /></p>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
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
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
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
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
        </Slider>

{/*  */}
        <h2></h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p></p>
              <p><Rating /></p>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" />
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