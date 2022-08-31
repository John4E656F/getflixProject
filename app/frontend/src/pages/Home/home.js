import  React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import Carousels from '../../components/Carousel/carousel.js'
import Hero from '../../components/Hero/Hero'
import { textualMaterial } from "./texts";

import {
    Typography,
    Link,
    Stack 
  } from '@mui/material'


function home(){
    // const [data, setData] = useState([{
    //     cardNum: 10,

    // }])

    // const settings = () => {
    //     setData()
    // }
    const data = 10;
    const text = 'Must Watch';

      const CarouselComponents = textualMaterial.CarouselTitle.map((carouselcomp) => (
        <Stack spacing={2} sx={{paddingLeft: 5, paddingRight: 5 }}>
        <Typography gutterBottom variant="h2" component="div" sx={{color: 'white'}}>{carouselcomp.Text}</Typography>
                <Carousels
					cardNum={data}
					carouselTitle={text}
				/>
        </Stack>
	));
    return(
        
        <div className='home '>
          
            <Navbar />
            <Hero />

        {CarouselComponents}
            <Footer />
        </div>

    )
}

export default home;