import React, { useState }  from "react";
import Slider from "react-slick";

export default function Card(anime) {

  const [error] =useState(null);
  
  let settings= {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  }
    
    return(
         <>
           <Slider {...settings }>
           { error ? <div> Some Nice Ui saying that we cannot load </div> 
          :
          anime.map((anime )=> <Card altText={anime.altText} 
            title={anime.title}
            src={anime.picture}
            trailer={anime.trailer}
            key={anime._id}/>)} 

            {console.log(anime.picture)}
           </Slider>
         
         </>)
    }