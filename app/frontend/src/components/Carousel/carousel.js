import  React, {useEffect, useState} from 'react';
import Card from '../Card/card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";


const Carousel = (props) => {

  // animes.map(anime => {
  //   return <Card key= {anime.id} anime={anime}/>
  // })
  const [anime, setAnime] = useState([
    {
      id: "",
      title: "",
      genre: [""],
      trailer: "",
      picture: "",
      comments: "",
      ratings: "",
    },
  ]);

  const [error] =useState(null);
  
  useEffect(() => {
    axios.get("https://aniflix-getflix.herokuapp.com/watch")
    .then((res) => {
      setAnime(res.data)

    })
    .catch((error) => {
      console.log(error);
    })
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
        <>
        <Slider {...settings }>

          { error ? <div> Some Nice Ui saying that we cannot load </div> 
          :
          anime.map((anime )=> <Card 
            id={anime._id}
            picture={anime.picture}
            title={anime.title}
            genre={anime.genre}
            trailer={anime.trailer}
            />)} 

            {console.log(anime.picture)}
           
        </Slider>
        </>
      )
};

export default Carousel;

  // useEffect(() => {
  //   fetch("http://localhost:4000/watch", anime)
  //   .then((res) => res.json())
  //   .then((jsonRes) => setAnime(jsonRes))
  //   .catch(err => { console.log(err); });
  // });