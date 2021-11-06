import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";


const FormCrearCuenta = () => {
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
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Contraseña"
              type="password"
              color="error"
            />
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Repetir contraseña"
              type="password"
              color="error"
            />
          </Grid>
          <Grid container justifyContent="flex-end" xs={10} mt="5vh" >
        <BotonPrimario href="/signup/paso2" texto="Crear cuenta"></BotonPrimario>
        </Grid>
        </Grid>
        
      </Box>
    </Box>
  );
};
export default FormCrearCuenta;
