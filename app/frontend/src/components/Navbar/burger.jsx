import React , { useState } from 'react';
import styled from 'styled-components';
import RightNav from './rightNav';
import Logo from '../Logo/logo'

const StyledBurger = styled.div`
    width:2rem;
    height:2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    flex-flow:column nowrap;
    @media (max-width: 1123px) {
        display: flex;
        justify-content: space-around;
        flex-flow:column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        cursor: pointer;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        z-index: 2000;
        transform-origin:1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3) {
            
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
        visibility: visible;
    }
    @media (min-width:1122px){
        div {
           display: none;
        }
    }
    @media screen and (max-width: 390px) {
        width: 80px;
    }
    @media screen and (max-width: 380px) {
        margin-right: 50px ;
    }
    @media screen and (max-width: 380px) {
        margin-left:  50px ;
    }
    @media screen and (max-width: 375px) {
       margin-right: -10px;
    }
  
`;

const Burger = () => {

    const [open , setOpen] = useState(false)

  return (
    <>
    
        <Logo />
    
        <RightNav open={open} />
        <StyledBurger open={open} onClick={() => setOpen( !open )} className='' >
           <div className='border'></div>
           <div className='border'></div>
           <div className='border'></div>
        </StyledBurger>
    </>
  )
}

export default Burger ;