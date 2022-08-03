import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ModalFilter from '../Navbar/modalFilter';
import './btnFilter.css'









const BtnFilter = () => {
  return (
    <div className='btnFilter'>
                    <Tooltip title="Filter">
                    <IconButton className=''>
                        <ModalFilter className='modal ModalFilter'/>
                    </IconButton>
                    </Tooltip>
    </div>
  )
}

export default BtnFilter