import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import BotonPrimario from "./BotonPrimario";

const FormCrearCuenta = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [repContrasenia, setRepContrasenia] = useState("");
  const [textoError, setTextoError] = useState("");

  const onChangeUsuario = (event) => {
    setUsuario(event.target.value);
  };

  const onChangeContrasenia = (event) => {
    setContrasenia(event.target.value);
  };

  const onChangeRepContrasenia = (event) => {
    setRepContrasenia(event.target.value);
  };

  const onChangeTextoError = () => {
    if(compararContrasenias()){
      setTextoError("")
    } else {
      setTextoError("Las contraseñas no coinciden")
    }
  };

  const crearCuenta = () => {
    if(compararContrasenias()){
      onChangeTextoError()
      window.location.href = "/signup/paso2";
    }else{
      onChangeTextoError()
    }

  };

  const compararContrasenias = () => {
    return contrasenia === repContrasenia
  }

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
              Crea tu cuenta
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Usuario"
              color="error"
              onChange={onChangeUsuario}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Contraseña"
              type="password"
              color="error"
              onChange={onChangeContrasenia}
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Repetir contraseña"
              type="password"
              color="error"
              helperText= {textoError}
              onChange={onChangeRepContrasenia}
            />
          </Grid>
          <Grid container justifyContent="flex-end" xs={10} mt="5vh">
            <BotonPrimario
              funcionOnClick={crearCuenta}
              texto="Crear cuenta"
            ></BotonPrimario>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default FormCrearCuenta;
