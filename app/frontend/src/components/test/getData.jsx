import React, { useState } from 'react';
import axios from 'axios';
import Card from './data'
import { useEffect } from 'react';

const Parent = (props) => {
    
    //get data from APi

    const [anime, getAnime] = useState('');

    const url= 'https://aniflix-getflix.herokuapp.com/';
    
    const getData = () => {
        axios.get(`${url}watch`)

        .then((res) => {
            console.log( res);
            const animeData = res.data.animeData;
            getAnime(animeData);
            console.log(animeData);
        })
        .catch((err) => console.error(`Error: ${err}`));
    }

    useEffect(() => {
        getData();
    })

        return (
            <Card anime={anime}/>
        )
    
};

export default Parent;