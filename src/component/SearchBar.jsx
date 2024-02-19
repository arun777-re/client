import React,{useState} from 'react';
import {Paper,IconButton} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
const history = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    // prevent default is used to prevent reloading of page
// checking if there is any serch
if(searchTerm){
  history(`/search/${searchTerm}`)

}

  }
  return (
    <Paper component='form'
    onSubmit={handleSubmit}
    sx={{boxShadow:"none",
    border:"2px solid "}}>
    <input type='text'
    style={{marginLeft:"2px",alignItems:"center"}}
    placeholder='Search'
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}/>
    <IconButton type='submit'
    aria-label='search'
    sx={{color:"red"}}>
      <SearchIcon/>

    </IconButton>
    </Paper>
  )
}

export default SearchBar