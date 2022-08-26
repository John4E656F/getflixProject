import  React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link
} from '@mui/material'



const Cards = (anime) => {

    return (
      <>
        <Link href={`/watch/${anime.id}`}>
          <Card sx={{ maxWidth: 500}} key={anime.id}>
            <CardMedia 
            component="img"
            height='200'
            image={anime.picture}
            alt={anime.title}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {anime.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
        {/* <a href={`/watch/${anime.id}`}>
        <div className="card" key={anime.id}>
          <img className='cardImg' src={anime.picture} alt={anime.title}/>
          <div  className="info-carousel">
            <p>{anime.title}</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
          </div>
        </div> 
        </a> */}

      </>
      
    );
};

export default Cards;