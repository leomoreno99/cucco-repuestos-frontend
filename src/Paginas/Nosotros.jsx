import NavBar from "../Componentes/AppBar";
import Categorias from "../Componentes/Categorias";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../Componentes/Footer";
import img1 from "../img/nosotros1.png";
import img2 from "../img/nosotros2.png";
import img3 from "../img/nosotros3.png";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

const Nosotros = () => {
  return (
    <>
      <NavBar />
      <Categorias />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <Item>
              <img src={img1} width="100%" alt="" />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h2" color="black" fontWeight="500" pt="15vh">
                ¿Quiénes somos?
              </Typography>
              <Typography
                variant="h5"
                color="black"
                fontWeight="400"
                component="div"
                m="20vh"
                marginTop="5vh"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h2" color="black" fontWeight="500" pt="15vh">
                Nuestra historia
              </Typography>
              <Typography
                variant="h5"
                color="black"
                fontWeight="400"
                component="div"
                m="20vh"
                marginTop="5vh"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Item>
                <Item>
                  <img src={img2} width="100%" alt="" />
                </Item>
              </Item>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Item>
                <img src={img3} width="100%" alt="" />
              </Item>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h2" color="black" fontWeight="500" pt="15vh">
                ¿Donde estamos?
              </Typography>
              <Typography
                variant="h5"
                color="black"
                fontWeight="400"
                component="div"
                m="20vh"
                marginTop="5vh"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Nosotros;
