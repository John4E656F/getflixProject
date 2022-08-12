import React, { useState } from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import Slider from "react-slick";

const Parent = (props) => {
    
    //get data from APi

    const [anime, getAnime] = useState([
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

    // const url= 'https://aniflix-getflix.herokuapp.com/';
    
    // const getData = () => {
    //     axios.get(`${url}watch`)

    //     .then((res) => {
    //         console.log( res);
    //         const animeData = res.dataa;
    //         getAnime(animeData);
    //         console.log(animeData);
    //     })
    //     .catch((err) => console.error(`Error: ${err}`));
    // }

    // useEffect(() => {
    //     getData();
    // })

    useEffect(() => {
        axios.get("https://aniflix-getflix.herokuapp.com/watch")
        // .then(res => setAnimes(res))
        // .catch(error => setError(error));
        .then((res) => {
          const animeData = res.data;
        //   console.log(res.data);
        //   console.log(animeData[0]);
        //   console.log(animeData[0].picture);
          getAnime(res.data)

        })
        .catch((error) => {
          console.log(error);
        })
      }, []);
    //   for (let i = 0; i < 10; i++) {
    //         console.log(anime[i])
    // }

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
         anime.map((anime )=>       
         <div className="card" key={anime.id}>

            <div className="blurImg">
                <img src={anime.picture}  className="cardImg" alt="alt text goes here"/>
                <h1 className="cardTitle">{anime.title}</h1>
                <p className="cardDesc">{anime.genre}</p>
                <p>{anime.trailer}</p>
            </div>

        </div>
)} 

           {console.log(anime.picture)}
          </Slider>
        
        </>)
   }

export default Parent;