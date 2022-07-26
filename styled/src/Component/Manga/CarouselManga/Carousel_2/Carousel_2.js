import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



import './Carousel.css'







const Carousel_2 = () => {
  return (
    <div>

      {/* start */}

      <Carousel className="carousel">
      <div className="pics">
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TJe8qo5cYT3Gh8zM1RXZrgHaEK%26pid%3DApi&f=1"} alt="Spirited Away" />
          <p>Spirited Away</p>
          <p className="branch"></p>
        </div>
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://573452.smushcdn.com/767387/wp-content/uploads/2021/03/Grave-of-the-Fireflies-Best-of-Studio-Ghibli.jpg?lossy=1&strip=1&webp=1"} alt="Grave of the Fireflies" />
          <p>Grave of the Fireflies</p>
          <p className="branch"></p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.l7-4TgL7BV9JopVf-_4jFQHaFJ%26pid%3DApi&f=1"} alt="Your Name" />
          <p>Your Name</p>
          <p className="branch"></p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.btO8_vlOe7PyuNEjj5IG9AHaE1%26pid%3DApi&f=1"} alt="Nausicaä " />
          <p>Nausicaä of the Valley of the Wind</p>
          <p className="branch"></p>
        </div>
      </div>
      <div className="pics">
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://cdn.discordapp.com/attachments/660300830766792705/660302249121284107/Review-Tokio-Godfathers.png"} alt="Tokyo Godfathers" />
          <p>Tokyo Godfathers</p>
          <p className="branch"></p>
        </div>
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yhRdz4vEz3g5upHcZ8IQZQHaEo%26pid%3DApi&f=1"} alt="Paprika " />
          <p>Paprika </p>
          <p className="branch"></p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://i1.wp.com/www.animated247.net/wp-content/uploads/2020/01/I-Lost-My-Body-2019-480P-BluRay-English-Animated247.com_.mkvaa_.jpg?resize=660%2C392"} alt="I Lost My Body" />
          <p>I Lost My Body</p>
          <p className="branch"></p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eO2Ptpz11kFm7ZLa7NmlMgHaEK%26pid%3DApi&f=1"} alt="Weathering with You" />
          <p>Weathering with You</p>
          <p className="branch"></p>
        </div>
      </div>
    </Carousel>

    {/* carousel 2 */}
    <Carousel className="carousel">
      <div className="pics">
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"http://operationrainfall.com/wp-content/uploads/2013/08/Wolf-Children-Logo.jpg"} alt="Wolf Children" />
          <p>Wolf Children</p>
          <p className="branch"></p>
        </div>
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>
      </div>
      <div className="pics">
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>
        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>

        <div className="sec-1">
          <img src={process.env.PUBLIC_URL+"https://www.pcclean.io/wp-content/gallery/naruto-hd-wallpapers-1/106780.jpg"} alt="Slider 1" />
          <p>Brand launch Extension</p>
          <p className="branch">Branch Matrics</p>
        </div>
      </div>
    
    </Carousel>

      {/* end */}
    </div>
  );
};

export default Carousel_2