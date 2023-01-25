import React from "react";
import {
    Container,
    Grid,
    Box,
    Button,
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
                style={styles.heroContainer} 
            >

                <Grid item>
                    <video
                        autoPlay
                        muted
                        loop
                        style={{ height: "100%", width: "100%", objectFit: "cover",  }} //object-fit:cover
                    >
                        <source src={video} type="video/mp4" />

                    </video>
                </Grid>
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  color="#fff"
                >
                  <Typography variant="h3" component="h1" >
                    Title Goes Here
                  </Typography>
                  <Button color="primary" variant="contained">
                    Click Me
                  </Button>
                </Box>

            </Grid>
        </>
    )
}

export default Hero;


