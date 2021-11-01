// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { MenuItem, Typography } from "@mui/material";
import img4 from "../img/clienteComputadora.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import FormDP from "../Componentes/FormDP";


const useStyle = makeStyles({
  banner: {
    background: "red",
  },
});





export default function CrearCuenta() {
  const classes = useStyle();

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Box
            component="div"
            backgroundColor="#F44336"
            width="100%"
            height="100vh"
            minHeight="100%"
          >
            <Typography color="primary" variant="h4" p="10%">
              Cucco repuestos
            </Typography>
            <Typography
              color="primary"
              variant="h3"
              fontWeight="500"
              p="10%"
              pt="0px"
            >
              Estás a unos pocos clics de crear tu cuenta.
            </Typography>
            <Box component="div" m="10%">
              <img src={img4} width="100%" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box component="div" m="5%">
            <Typography variant="h4" fontWeight="500">
              Crea tu cuenta
            </Typography>
            <FormDP/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
