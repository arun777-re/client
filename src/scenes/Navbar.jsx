import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography } from '@mui/material';
import { SearchBar } from '../component';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Navbar = ({cartCount,cart}) => {
  
  return (
    <Box display={'flex'} 
    p={'1rem'}
    marginLeft={'1rem'}
    position='sticky' justifyContent={'space-between'}>
      <Link to={'/home'}>
    <ShoppingCartIcon sx={{color:"red"}}/>
      </Link>
      <Box sx={{display:"flex",alignItems:"center"}}>
  <Box>
      <ShoppingBasketIcon
      sx={{color:"green"}}/>{cartCount}
      </Box>   
    &nbsp;<SearchBar/>
    </Box>

    </Box>
  )
}

export default Navbar