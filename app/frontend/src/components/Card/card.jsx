import  React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



const Card = (anime) => {

    return (
      <>

        <a href={`/watch/${anime.id}`}>
        <div className="card" key={anime.id}>
          <img className='cardImg' src={anime.picture} alt={anime.title}/>
          <div  className="info-carousel">
            <p>{anime.title}</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
          </div>
        </div> 
        </a>

      </>
      
    );
};

export default Card;