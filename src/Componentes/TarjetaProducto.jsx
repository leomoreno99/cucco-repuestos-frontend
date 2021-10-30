import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import img from "../img/volante-corona.jpg";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
  cardA: {
    disableSpacing:"true",
     justifyContent:"space-between"
  },
  cardHover:{
    "&:hover": {
      boxShadow: "0px 10px 10px rgb(0 0 0 / 20%);",
      cursor: "pointer"

    }
  }
})

export default function TarjetaProducto() {

  const classes = useStyle();

  return (
    <Card className={classes.cardHover} sx={{ maxWidth: 345, mb: "80px" }}>
      <CardMedia
        component="img"
        height="250"
        image={img}
        alt="volante-corona"
        onClick={()=>{window.location.href = "/producto"}} 
      />
      <CardContent onClick={()=>{window.location.href = "/producto"}} >
        <Typography align="left" variant="body2" color="text.secondary">
          Volante motor con corona
        </Typography>
        <Typography align="left" variant="h5" color="black">
          $3500.00
        </Typography>
      </CardContent>
      <CardActions className={classes.cardA} >
      <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" readOnly />
        </Stack>
        <IconButton aria-label="add to cart">
          <AddShoppingCartOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
