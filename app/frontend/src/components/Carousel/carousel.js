import  React, {useEffect, useState} from 'react';
import Card from '../Card/card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({animes}) => {


  (()=> {
   
  })();
  // animes.map(anime => {
  //   return <Card key= {anime.id} anime={anime}/>
  // })
   
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

          {animes.map(anime=> {
            
            if(typeof anime.title === 'undefined'){
              <p>loading...</p>
            }else{
             // console.log("at carousel news " + anime.id);
              <Card key={anime.id} anime={anime} />
              console.log('exed')
            }
           })}
           <Card anime= {animes} />
           
        </Slider>
        </div>
      )
};

export default Carousel;