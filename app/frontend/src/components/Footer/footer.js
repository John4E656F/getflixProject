import * as React from 'react';
import { css } from '@emotion/react'
import './footer.css'
import styled from 'styled-components';

const Ul = css`
  text-decoration: none;
  padding-top: 20px;
  li {
    color: #ccc;
    line-height: 35px;
    text-decoration: none;
  }

`;

export default function BasicSpeedDial() {
  return (

<div className='footer'>
      <div className='row'>
      
        <div className='item'>
          
          <Ul>
            <li>FAQ</li>  
            <li>Investor Relations</li>  
            <li>Ways to watch</li>  
            <li>Corporation Information</li> 
            <li>Legal Notice</li> 
          </Ul>  
        </div>        


        
      </div> 
       

    </div>
 
  );
}