import React,{ useEffect,useState } from "react";
import {Navbar, Products} from './index'
import axios from 'axios';
import { Box, Stack } from "@mui/material";
import FilterBar from "../component/FilterBar";
const Home = () => {
  const [cart,setCart]= useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [producte,setProduct] = useState([]);



  // function to fetch the products from api
 const Product = ()=>{
  axios.get(`https://dummyjson.com/products`)

  .then((response)=>{
    console.log(response.data?.products)
    setProduct(response.data?.products)})
    .catch((error)=>{
      console.error(error.message);
    })

 }
 

 useEffect(()=>{
  Product()
 },[]);
   // Function to handle price range filter selection
   const handlePriceFilter =(minPrice,maxPrice) =>{
    const filtered = producte.filter((prod)=>{
    return prod?.price >= minPrice && prod?.price<=maxPrice;
    
    }); 
    setProduct(filtered);
  }

  // function to set cart count to +1
  const addToCart = (prod)=>{
     setCart([...cart,prod]);
     setCartCount(cartCount+1);
  }
  
  return (
    <Stack>
      
     <Navbar cart={cart} cartCount={cartCount}/>
     <Box display={'flex'} flexDirection={'column'}>
     <FilterBar onPriceFilter={handlePriceFilter}/>
     <Products products={producte} addToCart={addToCart}/>

     </Box>

      
 
    </Stack>
  )
}

export default Home