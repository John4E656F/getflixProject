import React from 'react'
import styled from 'styled-components';

const Input = styled.input`

 .search {
    width: 200px;
    margin: 20px 50px;
    padding: 3px 5px;
    background-color: transparent;
    border: solid 1px rgba(158, 145, 145, 0.788);
    border-radius: 7px;
    color: aliceblue;
  }
`;



const SearchBar = () => {
  return (
    <div>
        <input type='text' placeholder='Search' className='search  '    />
    </div>
  )
}

export default SearchBar


