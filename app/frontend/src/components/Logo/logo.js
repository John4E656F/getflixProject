import React from 'react';
import logo from '../../assets/images/Logo-aniflix.png'; // Tell webpack this JS file uses this image
// The style of the Navbar section is used for the logo style
import '../Navbar/searchNav.css';
<<<<<<< Updated upstream
import styled from 'styled-components';



const Img = styled.img`

  width: 250px;
  margin-top: -20px;

`;


=======
<<<<<<< HEAD
import { css } from '@emotion/react';
=======


// import { css } from '@emotion/react';
import styled from 'styled-components';

const StyleLogo = styled.div`
  width: 300px;
  height: 50px;
  margin: 2px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:1287px ) {
    width: 200px;
  }
  @media screen and (max-width:668px ) {
    width: 200px;
    margin-left: 20px;
  }
  @media screen and (max-width:668px ) {
    width: 170px;
    margin-top: 10px;
  }
  @media screen and (max-width: 390px) {
    width: 120px;
    margin-top: 20px ;
  }
  @media screen and (max-width: 380px) {
    width: 130px;
    margin-top: 20px;
  }
  @media screen and (max-width: 414px) {
    width: 130px;
  }
  @media screen and (max-width: 375px) {
    width: 130px;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
`;



>>>>>>> 51e8c7bd (Update navbar)
>>>>>>> Stashed changes

function Logo() {
  // Import result is the URL of your image
  return <Img  src={logo} alt="Logo" className='img-fluid  '/>;
}

export default Logo;