import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import img from "../img/correa-transmision.jpg";

export default function TarjetaOferta() {
  return (
    <Card sx={{ maxWidth: 345, mb:"80px" }}>
      <CardMedia component="img" height="250" image={img} alt="volante-corona" />
      <CardContent align="left">
      <Typography p="3px" borderRadius="4px" align="left" variant="button" color="white"  backgroundColor="red">
          OFERTA DEL DIA
        </Typography>
        <Typography align="left" variant="body2" color="text.secondary">
          Correa transmision
        </Typography>
        <Typography align="left" variant="h6" color="text.secondary" >
          $839.00
        </Typography>
        <Typography align="left" variant="h5" color="black">
          $729.00
        </Typography>
      </CardContent>
      <CardActions disableSpacing="true" justifyContent="space-around">
        <IconButton aria-label="add to cart">
          <AddShoppingCartOutlinedIcon />
        </IconButton>

        <StarOutlinedIcon fontSize="largue" />
        <StarOutlinedIcon fontSize="largue" />
        <StarOutlinedIcon fontSize="largue" />
        <StarOutlinedIcon fontSize="largue" />
        <StarOutlinedIcon fontSize="largue" />
      </CardActions>
    </Card>
  );
}
