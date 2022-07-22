import React from 'react'
import './Carousel_3.css';
import './code_3';

const Carousel_3 = () => {
  return (
    <div className='mangaStyle'>

        {/*  */}



       
{/* start container */}
<div className='container-carousel'>
  {/* Carousel 3 */}

    <div class="c-carousel">
      <div class="c-carousel__arrow c-carousel__arrow_left">&#x1F844;</div>
      <div class="c-carousel__arrow c-carousel__arrow_right">&#x1F846;</div>
      <ul class="c-carousel__slides">
        <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5Gxk7TA79QLzi9fbl4SyxwAAAA%26pid%3DApi&f=1"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CaLeLojU_ptOqoqYWhm5_wAAAA%26pid%3DApi&f=1"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://879ed873-madman-com-au.akamaized.net/media/Releases/42498/42498-1511009.jpg"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://somoskudasai.com/wp-content/uploads/2020/10/ElZ7NbKVcAMsrjB.jpg"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://mangarock.to/uploads/2019/03/maiden-rose_artwork_2.jpg"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://www.rightstufanime.com/images/productImages/9781612627946_manga-No-6-Graphic-Novel-9-primary.jpg?resizeid=3&resizeh=600&resizew=600"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://www.anime-planet.com/images/manga/covers/aidin-58414.jpg"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://www.anime-planet.com/images/manga/covers/zhaohuan-wansui-18940.jpg"}/></li>
        <li><img src={process.env.PUBLIC_URL+"https://i.pinimg.com/736x/05/46/6e/05466e691303767c1b3fbf1ac21b17a2--news-otaku.jpg"}/></li>
      </ul>
      {/* -------------------- */}
    </div>

        {/* end container */}
        </div>
  
        {/* End structure */}
    </div>
  )
}

export default Carousel_3 ;