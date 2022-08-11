import React, { Component } from "react";
import Slider from "react-slick";
// import Rating from '../Rating/rating'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
export default class Responsive extends Component {
  
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      // initialSlide: 0,
      left: 5 ,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2 className='titleCarousel'>Must Watch</h2>
        <Slider {...settings} >
          <div className="card">
            <img src="https://cdn.myanimelist.net/images/anime/1566/122794.jpg" alt="Kingdom 4th Season" />
                <p>&#9655; Play</p>
            <div  className="info-carousel">
              <p>Kingdom 4th Season</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1346/119505.jpg" alt="Rurouni Kenshin" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Rurouni Kenshin</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={1} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1375/121599.jpg" alt="Samurai Champloo" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Samurai Champloo</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={4} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/15874.jpg" alt="Afro Samurai" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Afro Samurai</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/21834.jpg" alt="Claymore" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Claymore</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1780/121555.jpg" alt="Elfen Lied" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Elfen Lied</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/13/33465.jpg" alt="Mirai Nikki" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Mirai Nikki</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/4/24648.jpg" alt="Chobits" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Chobits</p>
              <Stack spacing={1}>
                <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
              </Stack>
            </div>
          </div>
        </Slider>
{/*  */}

        <h2 className='titleCarousel'>John's Recommendation</h2>
        <Slider {...settings}>
                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1223/96541.jpg" alt="Fullmetal Alchemist: Brotherhood" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Fullmetal Alchemist: Brotherhood</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1337/99013.jpg" alt="Hunter x Hunter" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Hunter x Hunter</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" alt="Demon Slayer" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Kimetsu no Yaiba</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/5/50331.jpg" alt="Code Geass: Hangyaku no Lelouch" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Code Geass: Hangyaku no Lelouch</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/10/75195.jpg" alt="Ao no Exorcist" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Ao no Exorcist</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/1314/108941.jpg" alt="Neon Genesis Evangelion" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Neon Genesis Evangelion</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/5/43399.jpg" alt="Psycho-Pass" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Psycho-Pass</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>

                <div className="card">
                <div className='blurImg'>
                    <img src="https://cdn.myanimelist.net/images/anime/4/5123.jpg" alt="Tengen Toppa Gurren Lagann" />
                <p>&#9655; Play</p>
              </div>
                    <div className="info-carousel">
                      <p>Tengen Toppa Gurren Lagann</p>
                      <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
                    </div>
                </div>
        </Slider>

{/*  */}
        <h2 className='titleCarousel'>Random</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/7/75199.jpg" alt="Detective Conan" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Detective Conan</p>
              <Rating />
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1646/113504.jpg" alt="Rekka no Honoo" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Rekka no Honoo</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1228/111372.jpg" alt="Yuu☆Yuu☆Hakusho" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Yuu☆Yuu☆Hakusho</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1607/117271.jpg" alt="Dragon Ball Z" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Dragon Ball Z</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
            <img src="https://cdn.myanimelist.net/images/anime/9/28496.jpg" alt="Saint Seiya" />
            <div className="info-carousel">
              <p>Saint Seiya</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/2/88336.jpg" alt="Black Clover" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Black Clover</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/86573.jpg" alt="Fate/Apocrypha" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Fate/Apocrypha</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/12/79164.jpg" alt="Koutetsujou no Kabaneri" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Koutetsujou no Kabaneri</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>
        </Slider>

{/*  */}
        <h2 className='titleCarousel'>For Adult</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/5/64449.jpg" alt="Tokyo Ghoul" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Tokyo Ghoul</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/3/73178.jpg" alt="Kiseijuu: Sei no Kakuritsu" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Kiseijuu: Sei no Kakuritsu</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1889/123307.jpg" alt="Tokyo Ghoul √A" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Tokyo Ghoul √A</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/11/78311.jpg" alt="Highschool of the Dead" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Highschool of the Dead</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/2/89973.jpg" alt="Devilman: Crybaby" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Devilman: Crybaby</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1408/114012.jpg" alt="Akira" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Akira</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/10183.jpg" alt="Blood+" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Blood+</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/10/79352.jpg" alt="Berserk" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Berserk</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>
        </Slider>

{/*  */}
        <h2 className='titleCarousel'>Award Winning</h2>
        <Slider {...settings}>
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/6/79597.jpg" alt="Sen to Chihiro no Kamikakushi" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Sen to Chihiro no Kamikakushi</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1063/117013.jpg" alt="Tsumiki no Ie" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Tsumiki no Ie</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>
          
          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1908/123597.jpg" alt="The Angler" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>The Angler</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1484/124254.jpg" alt="Jinyu" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Jinyu</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1718/118175.jpg" alt="Changbaekhan Eolkuldeul" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Changbaekhan Eolkuldeul</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1619/121068.jpg" alt="Pukkulapottas to Mori no Jikan" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Pukkulapottas to Mori no Jikan</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/1155/124253.jpg" alt="Xingfu Lushang" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Xingfu Lushang</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>

          <div className="card">
          <div className='blurImg'>
            <img src="https://cdn.myanimelist.net/images/anime/9/35721.jpg" alt="Wolf Children" />
                <p>&#9655; Play</p>
              </div>
            <div className="info-carousel">
              <p>Wolf Children</p>
              <Stack spacing={1}>
                        <Rating className='starRating'  name="size-small" defaultValue={5} size="small" />
                      </Stack>
            </div>
          </div>
        </Slider>



      </div>
    );
  }
}