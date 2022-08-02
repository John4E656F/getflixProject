import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import navbar from '../../components/Navbar/navbar'
import footer from '../../components/Footer/footer';
import '../../components/Manga/carouselManga'
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
        
        <navbar />
        {/*  */}

        
        <Slider {...settings}>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
                    <div className="card">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
                        <h3></h3>
                    </div>
        </Slider>

        

        {/*  */}

        <Slider {...settings}>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
        </Slider>

{/*  */}

        <Slider {...settings}>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
        </Slider>

        {/*  */}

        <Slider {...settings}>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
          <div className="card">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xuU85cUqf_33odWy5rgTAwHaEK%26pid%3DApi&f=1" alt="" />
            <h3></h3>
          </div>
        </Slider>


      <footer />
        
      </div>
    );
  }
}