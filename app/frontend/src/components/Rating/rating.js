import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { Navigate } from 'react-router-dom';
// import './Rating.css';
export default function RatingSize() {

  return (
    <Stack spacing={1}>
      <Rating className='starRating'  name="size-small" defaultValue={2} size="small"
      onChange={(event, newValue) => {

        console.log(newValue)
        setValue(newValue)

        let config  = {
          method: 'post',
          url: 'http://localhost:4000/rating/newAddedRating',
          header: {
            'Content-type': 'application/json'
          },
          data: newValue
        }

        axios(config)
        .then((res) => {
          console.log(res)
          console.log('Heyheyhey, I at least got here')
          Navigate('/', {replace: true})
        })
        .catch(err => {console.error(err)})
      }}
      />
    </Stack>
  );
}