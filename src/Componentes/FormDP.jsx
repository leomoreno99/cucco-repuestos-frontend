import { Grid, MenuItem, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";

let localstorage_idUsuario = localStorage.getItem("id_usuario");
let localstorage_token    = JSON.parse(localStorage.getItem("token"));

const tiposDocumento = [
  "DNI",
  "Pasaporte",
];

const meses = () => {
  let a = [];
  for (let i = 1; i <= 12; i++) {
    a.push(i);
  }
  return a;
};

const anios = () => {
  let a = [];
  for (let i = 2021; i >= 1901; i--) {
    a.push(i);
  }
  return a;
};

const dias = () => {
  let a = [];
  for (let i = 1; i <= 31; i++) {
    a.push(i);
  }
  return a;
};

export default function FormDP() {
  const [tipoD, setTD] = useState("Documento Nacional de Identidad");
  const [anio, setAnio] = useState(1999);
  const [mes, setMes] = useState(1);
  const [dia, setDia] = useState(1);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numDoc, setNumDoc] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [direccion, setDireccion] = useState("");
  const [numCasa, setNumCasa] = useState("");
  const [numTel, setNumTel] = useState("");

  const crearCliente = async () => {

    let url                 = `http://localhost:4000/customer/new`;
    let request = await fetch(url, {
      method       : "POST",
      headers      : {
          'Authorization' : localstorage_token
      },
      body: new URLSearchParams({
        nombre           : nombre,
        apellido         : apellido,
        tipo_dni         : tipoD,
        documento        : numDoc,
        fecha_nacimiento : `${dia}/${mes}/${anio}`, 
        pais             : pais,
        provincia        : provincia,
        direccion        : direccion,
        nro_casa         : numCasa,
        nro_telefono     : numTel,
        id_usuario       : localstorage_idUsuario
      }),
      });
     
      if (request.status === 201) {
        window.location.href = "http://localhost:3000/";
    } else {
        console.log("Error al crear cliente");
      }
  



  // console.log(tipoD)
  // console.log(anio)
  // console.log(mes)
  // console.log(dia)
  // console.log(nombre)
  // console.log(apellido)
  // console.log(numDoc)
  // console.log(pais)
  // console.log(provincia)
  // console.log(direccion)
  // console.log(numCasa)
  // console.log(numTel)
  // console.log(localstorage_idUsuario)
}
  

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onChangeNumCasa = (event) => {
    setNumCasa(event.target.value);
  };

  const onChangeNumTel = (event) => {
    setNumTel(event.target.value);
  };

  const onChangePais = (event) => {
    setPais(event.target.value);
  };

  const onChangeDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const onChangeProvincia = (event) => {
    setProvincia(event.target.value);
  };

  const onChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const onChangeNumDoc = (event) => {
    setNumDoc(event.target.value);
  };

  const cambiarTD = (event) => {
    setTD(event.target.value);
  };

  const cambiarAnio = (event) => {
    setAnio(event.target.value);
  };

  const cambiarMes = (event) => {
    setMes(event.target.value);
  };

  const cambiarDia = (event) => {
    setDia(event.target.value);
  };

  

  return (
    <Box ml="5vw" mt="18vh">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: "20px", width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} xl={12}>
            <Typography variant="h4" fontWeight="500">
              Datos personales
            </Typography>
          </Grid>
          <Grid item xs={12} xl={5}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Nombre"
              color="error"
              onChange={onChangeNombre}
            />

            <TextField
              id="outlined-select-currency"
              select
              label="Tipo de documento"
              color="error"
              value={tipoD}
              onChange={cambiarTD}
            >
              {tiposDocumento.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xl={5}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Apellido"
              color="error"
              onChange={onChangeApellido}
            />

            <TextField
              id="outlined-number"
              label="Numero de documento"
              type="number"
              color="error"
              onChange={onChangeNumDoc}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} xl={3.333333333}>
            <TextField
              id="outlined-select-currency"
              select
              label="Día"
              color="error"
              value={dia}
              onChange={cambiarDia}
            >
              {dias().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xl={3.333333333}>
            <TextField
              id="outlined-select-currency"
              select
              label="Mes"
              color="error"
              value={mes}
              onChange={cambiarMes}
            >
              {meses().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xl={3.333333333}>
            <TextField
              id="outlined-select-currency"
              select
              label="Año"
              color="error"
              value={anio}
              onChange={cambiarAnio}
            >
              {anios().map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} xl={12}>
            <Typography variant="h4" fontWeight="500">
              Datos de contacto
            </Typography>
          </Grid>
          <Grid item xs={12} xl={5}>
            <TextField
              required
              id="outlined-required"
              label="País"
              color="error"
              onChange={onChangePais}
            />

            <TextField
              required
              id="outlined-required"
              label="Dirección"
              color="error"
              onChange={onChangeDireccion}
            /> 

            <TextField
              id="outlined-number"
              label="Numero de telefono"
              type="number"
              color="error"
              onChange={onChangeNumTel}
              InputLabelProps={{
                shrink: true,
              }}
            />

            
          </Grid>
          <Grid item xs={12} xl={5}>
            
          <TextField
              required
              id="outlined-required"
              label="Provincia"
              color="error"
              onChange={onChangeProvincia}
            />

            <TextField
              id="outlined-number"
              label="Numero de casa"
              type="number"
              color="error"
              onChange={onChangeNumCasa}
              InputLabelProps={{
                shrink: true,
              }}
            />

             
            
          </Grid>
          <Grid container justifyContent="flex-end" xs={10} mt="5vh">
            <BotonPrimario
              funcionOnClick={crearCliente}
              href="#"
              texto="Finalizar"
            ></BotonPrimario>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
