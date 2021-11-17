import { AppBar, Container, Grid, IconButton, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import img1 from "../img/logo-blanco.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from "@mui/material/Box";


export default function Footer() {
  return (
    <AppBar position="static" color="secondary">
      <Container sx={{ maxWidth: "md", height: "430px" }}>
        <Toolbar
          sx={{ justifyContent: "center", mt: "80px", flexDirection: "column" }}
        >
          <Typography
            align="center"
            display="block"
            variant="h4"
            color="inherit"
            fontFamily="Verdana"
          >
            Cucco Repuestos
          </Typography>
          {/* <img src={img1}></img> */}
          <Grid
            height="120px"
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-end"
          >
            <Link underline="hover" color="white" href="#" align="left">
              <Typography fontSize="20px"     display="inline"> Nosotros</Typography>
            </Link>
            <Link underline="hover" color="white" href="#" align="left">
              <Typography fontSize="20px"     display="inline"> Ayuda</Typography>
            </Link>
            <Link underline="hover" color="white" href="#" align="left">
              <Typography fontSize="20px"     display="inline"> Donde estamos</Typography>
            </Link>
            <Link underline="hover" color="white" href="#" align="left">
              <Typography  fontSize="20px"  display="inline"> Contacto</Typography>
            </Link>
          </Grid>
          <Grid
            height="120px"
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
          >
           
          

           
            <Link underline="hover" color="white" href="https://www.facebook.com/Cucco-Repuestos-1783408218424918/about" align="left">
              <IconButton aria-label="facebokIcon" color="primary">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link underline="hover" color="white" href="#" align="left">
            <IconButton aria-label="facebokIcon" color="primary">
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link underline="hover" color="white" href="#" align="left">
            <IconButton aria-label="facebokIcon" color="primary">
                <InstagramIcon />
              </IconButton>
            </Link>
           
          
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
