import { Route, Switch } from "react-router-dom";
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Carousel.css';
import './Carousel';
import { FaBeer } from 'react-icons/fa';

const CarouselHome = () => {
  return (
    <div className=''>

        {/* Carousel 1   */}
        
<div class="carousel-container">
<h3 className='text-light float-left'>Bingeworthy Anime</h3>
  <div class="carousel-inner">
    <div class="track">
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img className='img-fluid' src={process.env.PUBLIC_URL+"https://i.pinimg.com/736x/11/1e/3d/111e3d537407342dfda36fc7b0e72abf.jpg"} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 2
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 3
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      {/*  */}

      {/* You can added card */}



        {/* <div class="card-container">
            <div class="card">
                <div class="img">
                        <img src={process.env.PUBLIC_URL+""} />
                </div>
                <div class="info">
                    Title 1
                </div>
            </div>
        </div> */}






      {/*  */}
    </div>
  </div>
  <div class="nav btn-carousel">
    <button  class="prev">
    <span class="material-icons">keyboard_double_arrow_left</span>
    </button>
    <button  class="next">
    <span class="material-icons">double_arrow</span>
    </button>
  </div>
</div>

{/* Second Carousel   2 */}

<div class="carousel-container">
<h3 className='text-light float-left'>Must watch </h3>
  <div class="carousel-inner">
    <div class="track">
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 2
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 3
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>

      {/*  */}

      {/* You can added card */}



        {/* <div class="card-container">
            <div class="card">
                <div class="img">
                        <img src={process.env.PUBLIC_URL+""} />
                </div>
                <div class="info">
                    Title 1
                </div>
            </div>
        </div> */}



      {/*  */}
    </div>
  </div>
  <div class="nav btn-carousel">
    <button  class="prev">
    <span class="material-icons">keyboard_double_arrow_left</span>
    </button>
    <button  class="next">
    <span class="material-icons">double_arrow</span>
    </button>
  </div>
</div>


{/* Carousel  3 */}


<div class="carousel-container">
<h3 className='text-light float-left'>Recently Updated</h3>
  <div class="carousel-inner">
    <div class="track">
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 2
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 3
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">
                <img src={process.env.PUBLIC_URL+""} />
          </div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
        <div class="card-container">
            <div class="card">
                <div class="img">
                        <img src={process.env.PUBLIC_URL+""} />
                </div>
                <div class="info">
                    Title 1
                </div>
            </div>
        </div>
      {/*  */}
      {/* You can added card */}


      {/* <div class="card-container">
            <div class="card">
                <div class="img">
                        <img src={process.env.PUBLIC_URL+""} />
                </div>
                <div class="info">
                    Title 1
                </div>
            </div>
        </div> */}






    </div>
  </div>
  <div class="nav btn-carousel">
    <button  class="prev">
    <span class="material-icons">keyboard_double_arrow_left</span>
    </button>
    <button  class="next">
    <span class="material-icons">double_arrow</span>
    </button>
  </div>
</div>




{/* Carousel  4 */}

        {/* End Structure  */}
    </div>
  )
}

export default CarouselHome;




// className="item-img img-fluid mx-auto d-block" 