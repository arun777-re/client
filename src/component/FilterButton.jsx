import { Button } from "@mui/material";
  
  const FilterButton = ({children,onClick}) => {
    return (
      <Button
      variant="contained"
      onClick={onClick}
      sx={{
        marginRight:"10px",
        color:"primary"
      }}>
        {children}
         </Button>
    )
  }
  
  export default FilterButton