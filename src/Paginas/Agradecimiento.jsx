import NavBar from "../Componentes/AppBar";
import Categorias from "../Componentes/Categorias";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../Componentes/Footer";
import img1 from "../img/corazon.svg";
import img2 from "../img/nosotros2.png";
import img3 from "../img/nosotros3.png";
import { Typography } from "@mui/material";
import BotonPrimario from "../Componentes/BotonPrimario";
import BotonSecundario from "../Componentes/BotonSecundario";
import { forwardRef, useEffect } from "react";
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

const Agradecimiento = () => {

    useEffect(async () => {
        // await obtenerDatosUrl();
        await crearVenta()
      }, []);

    let localstorage_idUsuario = localStorage.getItem("id_usuario");
    let localstorage_idProducto = localStorage.getItem("id_producto");
    let localstorage_token    = JSON.parse(localStorage.getItem("token"));
    let cliente
    let status

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
            // cliente =  await request.json();
            return await request.json()
            // console.log(cliente)
        } else {
            console.log("Error al obtener datos del cliente");
        }
      }

      

    const obtenerDatosUrl = () => {
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        return urlParams.get('status');
        // console.log(status)
    }

    

    const crearVenta = async () => {
        let status = obtenerDatosUrl()
        console.log(status)

        if(status === 'approved'){
            cliente = await obtenerDatosCliente()

            let url                 = `http://localhost:4000/sales/new`;
            let request = await fetch(url, {
            method       : "POST",
            headers      : {
                'Authorization' : localstorage_token
            },
            body: new URLSearchParams({
                id_usuario: localstorage_idUsuario,
                id_productos: localstorage_idProducto,
                cantidad: 1,
                id_cliente: cliente._id,
            }),
            });
            
            if (request.status === 200) {
                console.log("venta realizada correctamente")
            } else {
                console.log("Error al realizar la venta");
            }
        } else {
            console.log("venta rechazada")
        }
            
        
    }


  return (
    <Box component="div" style={{background:"white"}}>
      <NavBar />
      <Categorias />
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box component="div" style={{display:"flex", justifyContent: "end", margin: "20px"}}>
            <img src={img1} style={{width:"25%", margin:"100px"}} ></img>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box component="div" style={{display:"flex", flexDirection: "column", alignItems: "baseline", justifyContent:"center", height:"100%"}} >
            <Typography textAlign="start" variant="h3" fontWeight="500" color="secondary" mb="20px">Gracias por su compra!</Typography>
            <BotonSecundario href="http://localhost:3000" texto="Seguir comprando" />
        </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Agradecimiento;
