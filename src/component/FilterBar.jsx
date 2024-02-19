import React from "react";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import FilterButton from "./FilterButton";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterBar = ({ onPriceFilter }) => {


  return (
    <Stack
      display={"flex"}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={"row"}
      bgcolor={"#ffffcc"}
    
    
    >
      <IconButton onClick={()=>onPriceFilter(0,1000)} aria-label="filter" 
      sx={{color:'primary'
      }}>
    
        &nbsp;<FilterListIcon sx={{ color: "navy" }} />
       </IconButton>
      <FilterButton  onClick={() =>onPriceFilter(10, 50)}>
        10Rs - 350Rs{""}
      </FilterButton>
      <FilterButton onClick={() => onPriceFilter(51, 100)}>
        51Rs - 100Rs{" "}
      </FilterButton>
    </Stack>
  );
};

export default FilterBar;
