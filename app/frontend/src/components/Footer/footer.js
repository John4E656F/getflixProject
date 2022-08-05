import * as React from 'react';
import './footer.css'
import styled from 'styled-components';

const Ul = styled.ul`
  text-decoration: none;
  padding-top: 20px;
  li { color:#ccc; line-height:35px; text-decoration: none;}

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

        <div className='item'>
          
          <Ul>
            <li>Help Center</li>  
            <li>Jobs</li>  
            <li>Terms of Use</li>  
            <li>Contact Us</li>  
            <li>Only on Netflix</li>  
          </Ul>  
        </div>        

        <div className='item'>
          
          <Ul>
            <li>Account</li>  
            <li>Redeem Git Cards</li>  
            <li>Privacy</li>  
            <li>Speed Test</li>  
            <li>Media Center</li>  
          </Ul>  
        </div>        
        
      </div> 
       

    </div>
 
  );
}