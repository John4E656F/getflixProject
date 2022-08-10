import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import './Rating.css';
export default function RatingSIze() {
  return (
    <Stack spacing={1}>
      <Rating className='starRating'  name="size-small" defaultValue={2} size="small" />
    </Stack>
  );
}

