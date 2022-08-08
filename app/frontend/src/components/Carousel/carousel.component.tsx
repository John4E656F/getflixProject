import  React, {useEffect, useState} from 'react';
import Card from '../Card/card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";+

type CarouselProps = {
  backend: datatype,
  variable: dataye,
}

const Carousel = ({backend}: carouselProps) => {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=> {
    fetch("http://localhost:4000/animes").then(
      response => response.json
    ).then(
      data => {
        setBackendData(data)
      }
      )
  }, [])

    let settings= {
      dots: false,
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
    }

      return (
        <div>
        <Slider {...settings }>
            <Card key={''} component={''} altText={''} cardTitle={''} cardDesc={''} imgSrc={''} />
        </Slider>
        </div>
      )
};

export default Carousel;