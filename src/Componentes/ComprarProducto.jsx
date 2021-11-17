import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import img1 from "../img/volante-corona.jpg";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";
import BotonSecundario from "./BotonSecundario";
import { useState } from "react";




const useStyle = makeStyles({
  img: {
    height: "100%",
     alt:""
     //Falta poner el object fit cover
  }
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "none",
    textAlign: "center",
    height: "100%",
    color: theme.palette.text.secondary,
  }));

export default function ComprarProducto(props) {

    const classes = useStyle();

    let localstorage_idUsuario = localStorage.getItem("id_usuario");
    let localstorage_token    = JSON.parse(localStorage.getItem("token"));
    let usuario
    let cliente
    let producto
    
    const obtenerDatosUsuario = async () => {

      let url                 = `http://localhost:4000/user/${localstorage_idUsuario}`;
      let request             = await fetch(url, {
          method  : "GET",
          headers : {
              'Authorization' : localstorage_token
          }
      });
      
      if (request.status === 200) {
          usuario =  await request.json();
      } else {
          console.log("Error al obtener datos del usuario");
      }
  }

  const obtenerDatosCliente = async () => {

    let url                 = `http://localhost:4000/customerByUser`;
    let request = await fetch(url, {
      method       : "POST",
      headers      : {
          'Authorization' : localstorage_token
      },
      body: new URLSearchParams({
          id_usuario: localstorage_idUsuario
      }),
      });
     
      if (request.status === 200) {
        cliente =  await request.json();
    } else {
        console.log("Error al obtener datos del cliente");
    }
}

const obtenerProductoId = async () => {

  let url                 = `http://localhost:4000/products/searchById/${props.id}`;
  let request             = await fetch(url, {
    method  : "GET",
    headers : {
        'Authorization' : localstorage_token
    }
});

if (request.status === 200) {
    producto =  await request.json();
    producto = producto.producto
} else {
    console.log("Error al obtener datos del producto");
}
}


  const comprarProducto = async () => {
    await obtenerDatosUsuario()
    await obtenerDatosCliente()
    await obtenerProductoId()
    await console.log(usuario)
    await console.log(cliente)
    await console.log(producto)
  }



  return (
    <Grid container spacing={0}>
      <Grid item xs={6} height="600px">
        <Item>
          <img src={props.img} className={classes.img}/>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
            <Box component="div" pl="35px" pt="20%" pr="200px">
                <Typography variant="h4" color="black" textAlign="left">{props.nombre}</Typography>
                <Typography variant="subtitle2" color="black" textAlign="left" mt="3%">Descripcion</Typography>
                <Typography variant="body1" color="black" textAlign="left">{props.descripcion}</Typography>
                <Typography variant="h3" color="black" textAlign="left" mt="10%" fontWeight="500">${props.precio}</Typography>
                
                <Grid
                    height="120px"
                    spacing= {2}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    >
                    <Grid item xs={'auto'}>
                        <BotonPrimario funcionOnClick={comprarProducto} texto="Comprar ahora"></BotonPrimario>
                    </Grid>
                    <Grid item xs={'auto'} >
                        <BotonSecundario texto="Agregar al carrito" alto="46px"></BotonSecundario>
                    </Grid>
            </Grid>

                
            </Box>
        </Item>
      </Grid>
    </Grid>
  );
}
