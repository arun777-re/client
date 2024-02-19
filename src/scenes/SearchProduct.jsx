import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar,Products} from './index.jsx';


const SearchProduct = () => {
  const {searchTerm} = useParams();
  const [product,setProduct] = useState([]);
  const [cartCount,setCartCount] = useState(0);


const searchProduct =async()=>{
    await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
    .then((response)=>{
        console.log(response.data?.products);
        setProduct(response.data?.products);
    }).catch((error)=>console.log(error.message));
    };
    
    useEffect(()=>{
        searchProduct();
    },[searchTerm]);

    // function for add to card count we can also do these things with createContext hook and redux

    const addToCart = (prod)=>{
         setCartCount(cartCount + 1)
    }
  return (
    <div>
   <Box>
   <Navbar cartCount={cartCount}/>
   </Box>
   <Products products={product} addToCart={addToCart}/>
    </div>
  )
}

export default SearchProduct;