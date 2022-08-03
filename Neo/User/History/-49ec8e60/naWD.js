import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = (props) => {
    const token = localStorage.getItem("token")
    //Hooks
    const [card, setCard] = useState({
        title: {
            value: "",
        },
        img: {
            src: "",
        },
        
    });

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
            component="cardImg"
            alt={ altText }
            height="250"
            image={ imageSrc }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">µ
                { cardTitle }
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cards;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ImgMediaCard() {
  return (
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}