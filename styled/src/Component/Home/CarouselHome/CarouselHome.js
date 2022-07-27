import { Route, Switch } from "react-router-dom";
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './Carousel.css';
import './Carousel';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '../../Rating/Rating'

// import { FaBeer } from 'react-icons/fa';
const CarouselHome = props => {
  
// 

// 


  return (
    <div className=''>

      {/* Carousel 1   */}

        
      <div className="container-carousel">
        <h2 className=" ">Anime</h2>
        <Carousel className="carousel">
          <div className="pics">
            
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
                <div>
                  <div  className="container-play-rating">
                    <p>Brand launch Extension</p>
                    <p className="play">&#9655; Play</p> <Rating className='rating'/>
                  </div>
              </div>
            </div> 
              
           
            

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
              </div>
            </div>


            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
              </div>
              
            </div>


            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div>
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
              </div>

            </div>
          </div>
          {/* end Pics 1 */}
          <div className="pics">

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div>
                <di className="container-play-rating"v>
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </di><Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
        </Carousel>

        {/* carousel 2 */}
        <h2 className=" ">Manga</h2>
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 3 */}
        <h2 className=" ">Kid</h2>
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
    {/* Carousel  4 */}
        <h2 className=" ">Film</h2>
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>
        {/* carousel 5 */}
        <h2 className=" ">Live</h2>
        <Carousel className="carousel">
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>

            <div className="sec-1">
              <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
              <div className="container-play-rating">
                <p>Brand launch Extension</p>
                <p className="play">&#9655; Play</p> <Rating className='rating'/>
              </div>
            </div>
          </div>
        
        </Carousel>

      </div>

       





{/* Carousel  4 */}

        {/* End Structure  */}
    </div>
  )
}

export default CarouselHome;




// className="item-img img-fluid mx-auto d-block" 