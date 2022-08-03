import * as React from 'react';
import CardMui from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CardProps = {
  altText: string,
  cardTitle: string,
  cardDesc: string,
  imgSrc: string,
  height: number,
}

const Card = ({altText, cardTitle, cardDesc, imgSrc, height}: CardProps) => {

    return (
      <div key={key}>
        <CardMui sx={{ maxWidth: 300 }}>
            <CardMedia
            component="cardImg"
            alt={ altText }
            height= { height }
            image={ imgSrc }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">µ
                { cardTitle }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { cardDesc }
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
