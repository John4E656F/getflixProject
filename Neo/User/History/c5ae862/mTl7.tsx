import * as React from 'react';
import CardMui from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardProps = {
  altText: string,
  text: string,
}

const Card = ({altText, text}: CardProps) => {
    
  return (
    <div key={key}>
      <img src="" alt={altText} />
      <p>{text}</p>
    </div>
  );
};

    return (
      <div key={key}>
        <CardMui sx={{ maxWidth: 300 }}>
            <CardMedia
            component="cardImg"
            alt={ altText }
            height= { height }
            image={ imageSrc }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">µ
                { cardTitle }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { cardText }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Play</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </CardMui>
      </div>
    );
};

export default Card;

import * as React from "react"

type CardProps = {
  altText: string,
  text: string,
}

const Card = ({altText, text}: CardProps) => {

  return (
    <div key={key}>
      <img src="" alt={altText} />
      <p>{text}</p>
    </div>
  );
};


const CardList = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  
  // TODO: Keep in mind of the loading state


// TODO: Do all the fetching of data inside a useEffect
  fetchData () => (
    axios.get('fancy data').then(response => setMovies(response)).catch(error => setError(error))
  
  return (
    <div>
      {error ? <div> Some Nice Ui saying that we cannot load </div>  
      : 
      movies.map(movie => <Card altText={movie.alText} text={movie.text} key={movie.id}/>)}
    </div>

  )
};