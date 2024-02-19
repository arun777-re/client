import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// here we are making the productcard using mui and the details comes out from Homepage and the details we are getting through prop
const ProductCard = ({
  addToCart,
  ProductDetail: { _id,stock, images, description, price, title },
}) => {
  // here we are destructuring the details comes out from fetch
  return (
    <Card
      borderRadius="0"
      display="flex"
      flexDirection="row"
      flex="1"
      sx={{
        width: { xs: "100%", sm: "550px", md: "440px" },
        boxShadow: "none",
      }}
    >
      <CardMedia
        image={images[0]}
        alt={images[0].name}
        sx={{ height: "100px", width: { xs: "100%", sm: "358px", md: "440px" } }}
      />
      <CardContent>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="body2">{description.slice(0, 10)}</Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          flex={"1"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Price:{price}</Typography>
          <Typography variant="h6" fontWeight={"bold"} fontSize={"12px"}>
            &nbsp; Stock:{stock}
          </Typography>
          <Button onClick={() => addToCart(_id)}>
            <AddShoppingCartIcon />
           &nbsp; Add To Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
