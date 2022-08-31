import React from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Link
  } from '@mui/material'
  import img from '../../assets/images/Zenitsu.png'
  import video from '../../assets/images/DemonSlayer.mp4'

const Hero = (props) => {

    const styles = {
        heroContainer: {
          height: 800,
        //   backgroundImage: `url(`+ img + `)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        //   width: `calc(100vw + 48px)`,
        marginBottom: 20,
        }
    };

    return(
        <>
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="right"
                style={styles.heroContainer} >

                <video
                    autoPlay
                    muted
                    loop
                    style={{ height: "100%", width: "100%", objectFit: "cover",  }} //object-fit:cover
                >
                    <source src={video} type="video/mp4" />

                </video>
                <Grid item
                sx={{
                    zIndex: 1000,
                    backgroundColor: 'red',
                }}>
                <Typography >
                        Hello
                </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero;


