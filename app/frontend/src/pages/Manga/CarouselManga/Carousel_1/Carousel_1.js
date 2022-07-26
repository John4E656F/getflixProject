import React from 'react'
import './Carousel.css';
import './code';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const Carousel_1 = () => {
  return (
    <div className=''>
       
{/* start container */}
<div className='container-carousel'>



  <div class="c-carousel">
    <div class="c-carousel__arrow c-carousel__arrow_left">&#x1F844;</div>
    <div class="c-carousel__arrow c-carousel__arrow_right">&#x1F846;</div>
    <ul class="c-carousel__slides">
      <li><img src={process.env.PUBLIC_URL+"https://i.pinimg.com/736x/b6/fb/51/b6fb512cc644493da24aebbd429d9971.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://i.pinimg.com/736x/d0/2d/2f/d02d2fd901c726f0606a305f58ddb6aa.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://3.bp.blogspot.com/-giIUt3d6Oe0/VP7ZfUR6FPI/AAAAAAAAAtE/pMgtCS_5-Y8/s1600/yato_noragami_56795.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://www.anime-planet.com/images/manga/covers/hatsukoi-maze-58461.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://somoskudasai.com/wp-content/uploads/2020/11/EoD3BdSXcAA_Kfy.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://vignette.wikia.nocookie.net/dungeon-ni-deai-o-motomeru/images/8/80/DanMachi_II_Manga_Volume_1.jpg/revision/latest?cb=20200722072909"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://images.saymedia-content.com/.image/t_share/MTc0NDQ0NjkxMjY4MzE0NDcy/top-10-best-selling-manga.jpg"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://cdn.shopify.com/s/files/1/0747/3829/products/mL2311_0296eec6-1b8c-48e1-bbd5-50245c4664ee_grande.jpg?v=1571445524"}/></li>
      <li><img src={process.env.PUBLIC_URL+"https://www.anime-planet.com/images/manga/covers/hanza-sky-4111.jpg"}/></li>
    </ul>
    {/* -------------------- */}
  </div>




  



{/* end container */}
        </div>
  
        {/* End structure */}
    </div>
  )
}

export default Carousel_1 ;