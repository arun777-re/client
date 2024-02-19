import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, LoginPage } from './scenes';
import { Box } from '@mui/material';
import { SearchProduct } from './scenes';


// #87CEEB#1976d2 2196f3
const App = () => {
  return (
    <Box
    backgroundColor='#ffff99'
    >

    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/search/:searchTerm' element={<SearchProduct/>}/>
    </Routes>
    
    </BrowserRouter>
    </Box>

  )
}

export default App