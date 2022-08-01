import React from 'react'
import './WelcomePage.css';
import Footer from './Component/Footer/Footer';
import NavSignUp from './Component/NavSignUp/NavSignUp';



const welcomePage = () => {
  return (
    <div className='welcomePage'>
      <NavSignUp  className='navbar'/>
      <div className='header '>
        <h1 className='text-light  mt-5'>Ultimated</h1>
        <h1 className='text-light  '>Anime And Manga</h1>
        <h4 className='text-light  '>Watch anywhere , anytime .</h4>
        <p className='text-light  mt-5'>Ready to watch ? Create your account now !</p>
        <button className='text-light  border rounded  '>Get Started</button>
      </div>

      <div className='container-section'>
        <div className='container-cards'>
              <div className='Card-text'>
                <p>Enjoy AI Curated anime/manga just <br/> for YOU</p>
                <p>Our AI algorithm will suggest new anime to <br /> watch base on you liking , what have you <br /> watched and many more !</p>
              </div>
              <div className='Card-img'>
                <img className=' image img-fluid w-100'  src='https://wallup.net/wp-content/uploads/2019/09/07/638920-naruto-shippuden-ultimate-ninja-storm-anime-action-fighting-1nsuns-fantasy-martial-arts.jpg'  alt='anime' />
              </div>

        </div>

        {/* Section 2 */}
        <div className='container-cards'>
              <div className='Card-img'>
                <img className=' image img-fluid w-100'  src='https://wallup.net/wp-content/uploads/2019/09/07/638920-naruto-shippuden-ultimate-ninja-storm-anime-action-fighting-1nsuns-fantasy-martial-arts.jpg'  alt='anime' />
              </div>
              <div className='Card-text'>
                <p className='mx-5'>Download and watch your anime or <br /> read manga offline</p>
                <p className='mx-5'>Save your favorites easily and always have <br /> something to watch or read</p>
              </div>

        </div>

          
        {/* Section 3 */}


        <div className='container-cards'>
              <div className='Card-text'>
                <p>Watch everywhere</p>
                <p>Stream unlimited anime and read unlimited <br /> manga on your phone , tablet , laptop and <br /> other devices !</p>
              </div>
              <div className='Card-img'>
                <img className=' image img-fluid w-100'  src='https://wallup.net/wp-content/uploads/2019/09/07/638920-naruto-shippuden-ultimate-ninja-storm-anime-action-fighting-1nsuns-fantasy-martial-arts.jpg'  alt='anime' />
              </div>

        </div>

        {/* Section 4 */}

        <div className='container-cards questions'>
          <h1 className='text-light h'>Frequenthly Asked Questions</h1>
          <div className='container-questions'>
            <div className='question'>What can i watch on Aniflix ?</div>
            <div className='question'>What is Aniflix ?</div>
            <div className='question'>How much does Aniflix cost ?</div>
          </div>
          <h2>Ready to watch ? Enter your email to create your account</h2>
          <div className='container-email-btn'>
           <input type='email' placeholder='Email'/><button>Get Started</button>
          </div>

        </div>







      </div>
      <Footer />
        {/*  */}

    </div>
  )
}

export default welcomePage