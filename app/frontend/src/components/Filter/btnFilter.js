import React from 'react'
import { FaSearch, FaRegHeart, FaFilter } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModalFilter from '../Navbar/modalFilter';
import './btnFilter.css'









const BtnFilter = () => {
  return (
    <div className='btnFilter'>
                    <Tooltip title="Filter">
                    <IconButton className=''>
                        <FaFilter className='text-light FaFilter' />
                        <ModalFilter className='modal ModalFilter'/>
                    </IconButton>
                    </Tooltip>
    </div>
  )
}

export default BtnFilter