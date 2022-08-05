import React from 'react'
import styled from 'styled-components';
// import '../Navbar/searchNav.css'

const Input = styled.input`

width: 250px;
  margin: -20px -10px;
  padding: 5px 15px;
  background-color: transparent;
  border: solid 1px rgba(158, 145, 145, 0.788);
  border-radius: 7px;
  color: aliceblue;
  position: absolute;

@media screen and (max-width: 844px) {
    
  width:170px;
  margin:  -20px -6px;
  position: absolute;
   
}
@media screen and (max-width:668px ) {
   
  margin-top: -15px;
   
}
@media screen and (max-width: 390px) {
  margin: 0 3px;
}
@media screen and (max-width: 360px) {
  margin: 0 40px;
}



`

const SearchBar = () => {
  return (
    <div>
        <Input type='text' placeholder='Search' className='search  '    />
    </div>
  )
}

export default SearchBar


