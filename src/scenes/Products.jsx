import React from 'react'
import { ProductCard } from '../component';
import { Box, Stack } from '@mui/material';
const Products = ({products,addToCart}) => {
  return (
    <Stack
    sx={{gap:"1rem"}}
    justifyContent={'center'}
    flexWrap={'wrap'}
    flexDirection='row'
    height={'80vh'}
    overflow={'auto'}
    >
    
{ products.map((prod,index)=>{
  return <Box key={index}>
  
  <ProductCard ProductDetail={prod} addToCart={addToCart}/>
  </Box>
})}
    </Stack>
  )
}

export default Products