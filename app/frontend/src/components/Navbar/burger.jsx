import React , { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width:2rem;
    height:2rem;
    // psition: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow:column nowrap;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow:column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        margin: 0 -24px;
        cursor: pointer;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin:1px;
        transition: all 0.3s linear;
        z-index: 5000;
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
    }
    @media (min-width:768px){
        div {
            display:none
        }
    }
`;

const Burger = () => {

    const [open , setOpen] = useState(false)

  return (
    <>
        <StyledBurger open={open} onClick={() => setOpen( !open )} className='mt-4'>
           <div className='border'></div>
           <div className='border'></div>
           <div className='border'></div>
        </StyledBurger>
        <RightNav open={open} />
    </>
  )
}

export default Burger ;
Footer
