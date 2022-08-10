import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModalFilter from '../Navbar/modalFilter';
import styled from 'styled-components';



const Div = styled.div`

  width: 50px;
  margin: -10px 0;
  display: flex;
`;








const BtnFilter = () => {
  return (
    <Div className='btnFilter'>
                    <Tooltip title="Filter">
                    <IconButton className=''>
                        <ModalFilter className='modal ModalFilter'/>
                    </IconButton>
                    </Tooltip>
    </Div>
  )
}

export default BtnFilter