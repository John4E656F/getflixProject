import React from 'react';
import './Carousel_2.css';
import './code_2';


const Carousel_2 = () => {
  return (
    <div>

      <div className='container_carousel'>
          <div class="c-carousel">
          <div class="c-carousel__arrow c-carousel__arrow_left">&#x1F844;</div>
          <div class="c-carousel__arrow c-carousel__arrow_right">&#x1F846;</div>
          <ul class="c-carousel__slides">
            <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HJQ7mI0ISKXJvlGlG-OswAHaLo%26pid%3DApi&f=1"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0DuvYXDWpeambGVQUNNXXwAAAA%26pid%3DApi&f=1"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YHQV9ICpXuworp5dIQQUkAHaLH%26pid%3DApi&f=1"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://www.anime-planet.com/images/manga/covers/adelaide-33069.jpg"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-20198-2.jpg"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://somoskudasai.com/wp-content/uploads/2020/12/EpXiVBUUYAAbUJ2.jpg"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://879ed873-madman-com-au.akamaized.net/media/Releases/33400/33400-1060806.jpg"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.m8A8bVIsQAbk9ZNc1LVV8wDUEm%26pid%3DApi&f=1"}/></li>
            <li><img src={process.env.PUBLIC_URL+"https://vignette.wikia.nocookie.net/claymore/images/4/44/Claymore_manga_v01.jpg/revision/latest?cb=20100825224532"}/></li>
          </ul>
          {/* -------------------- */}
        </div>
      </div>
   

    </div>
  )
}

export default Carousel_2 ;