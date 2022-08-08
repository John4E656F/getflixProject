//import * as React from 'react';
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// import './Rating.css';
export default function RatingSize() {

  const navigate = useNavigate()

  async function changeRating (event, newValue) {
    event.preventDefault()

      console.log(newValue)
      const newRating = {
        'value': newValue
      }
      console.log(newRating)
      //setValue(newValue)

      axios.post('https://localhost:4000/rating/newAddedRating', newRating)
      .then(res => {console.log(res)})
      .catch((error)=> {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('error.response.data: ' + error.response.data);
          console.log('error.response.status: ' + error.response.status);
          console.log('error.response.headers: ' + error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })
      navigate('/kids')
  }
  return (
    <Stack spacing={1}>
      <Rating className='starRating'  name="size-small" defaultValue={2} size="small" onChange={changeRating}/>
    </Stack>
  );
}