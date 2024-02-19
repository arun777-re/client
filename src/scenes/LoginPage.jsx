import React from 'react';
import FlexBetween from '../component/FlexsBetween';
import {Form} from './index'
import { Box, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const LoginPage = () => {
  return (
    <Box sx={{
        minHeight:"100vh",backgroundColor:"lightblue"
    }}>
    <Box
    p={'3rem'}>
     <AddShoppingCartIcon/>
     <Typography>
       Shopping at Home
     </Typography>
    </Box>
    <Box
    marginRight='2rem'
    marginLeft={'2rem'}>
     <Form/>

    </Box>
    
    </Box>
   
  )
}

export default LoginPage