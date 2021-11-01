import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { spacing, typography } from "@mui/system";
import { InputAdornment, Typography } from "@mui/material";
import img4 from "../img/imgLogin.jpg";
import img5 from "../img/logo-blanco.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import BotonPrimario from "../Componentes/BotonPrimario";
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <Grid container style={{ minHeigth: "100vh" }}>
          <Grid
            container
            Item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 10 }}
          >
            <Grid container>
              <img src={img5} alt="Logo" width={90} style={{}} />
            </Grid>

            {/* <div /> */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: 400,
                  minWidth: 300,
                  marginTop: "60%",
                }}
              >
                <label>Bienvenido</label>
                <h3 style={{ marginTop: "5px" }}>Iniciar sesion</h3>

                <TextField
                  color="error"
                  label="Email"
                  style={{
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                />

                <FormControl
                  color="error"
                  sx={{ width: "100%" }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <FormControlLabel
                    style={{ fontSize: "10px !important" }}
                    control={
                      <Checkbox defaultChecked size="small" color="secondary" />
                    }
                    label="Recordar contraseña"
                  />
                </FormControl>

                <div style={{ height: 20 }} />

                <BotonPrimario texto="Ingresar"></BotonPrimario>

                <div style={{ height: 20 }} />
                {/* <Button color="secondary" variant="outlined"
                 style={{
                    height: 46,
                    paddingTop:8,
                }} >
                  Iniciar session con google
                </Button> */}
              </div>
            </div>

            <div>
              <Grid
                container
                justify="center"
                spacing={0.45}
                style={{
                  marginTop: 25,
                  justify: "center",
                }}
              >
                <Grid item>
                  <Typography variant="body1" mr="10px">¿No tienes una cuenta?</Typography>
                </Grid>

                <Grid item>
                  <Link href="/signup" color="secondary" >Crear una cuenta</Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={img4}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
              }}
              alt="foto"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Login;
