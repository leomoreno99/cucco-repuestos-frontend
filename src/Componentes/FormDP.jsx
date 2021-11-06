import { Grid, MenuItem, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";

const tiposDocumento = [
  "Documento Nacional de Identidad",
  "Pasaporte",
  "No tengo xd",
];

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

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

  const cambiarTD = (event) => {
    setTD(event.target.value);
  };

  const [anio, setAnio] = useState(1999);

  const cambiarAnio = (event) => {
    setAnio(event.target.value);
  };

  const [mes, setMes] = useState("Enero");

  const cambiarMes = (event) => {
    setMes(event.target.value);
  };

  const [dia, setDia] = useState(1);

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
            />

            <TextField
              id="outlined-number"
              label="Numero de documento"
              type="number"
              color="error"
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
              {meses.map((option) => (
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
            />

            <TextField
              required
              id="outlined-required"
              label="Provincia"
              color="error"
            />

            <TextField
              required
              id="outlined-required"
              label="Dirección"
              color="error"
            />
          </Grid>
          <Grid item xs={12} xl={5}>
            <TextField
              id="outlined-number"
              label="Numero de casa"
              type="number"
              color="error"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-number"
              label="Numero de telefono"
              type="number"
              color="error"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid container justifyContent="flex-end" xs={10} mt="5vh">
            <BotonPrimario
              href="/"
              texto="Finalizar"
            ></BotonPrimario>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
