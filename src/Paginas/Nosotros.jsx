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
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


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
              {/* <Box container="div" styled={{display:"flex", justifyContent:"center", alignItem:"center"}}> */}
          <Grid item xs={6}>
            <Item>
              <img src={img1} width="100%" alt="" />
            </Item>
          </Grid>
          
          
          <Grid item xs={6}>
         


            
            <Item>
              <Typography variant="h4" color="black" fontWeight="500" pt="5vh">
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
               Somos una empresa familiar con mas de 6 años en el rubro. Comenzamos realizando reparaciones generales de motocicletas.

               <Typography 
               variant="h5"
               color="black"
               fontWeight="400"
               textAlign="left"
               m="20vh"
               marginTop="5vh">
                Nos caracterizamos por:


              </Typography>

              <Alert  style={{marginTop:"-150px", marginBottom:"5px"}}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                 Ofrecemos los precios más bajos en todas las calidades.
                </Alert>

                <Alert  style={{ marginBottom:"5px"}}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                  Novedades exclusivas.
                </Alert>
            
                <Alert style={{ marginBottom:"5px"}}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                  Siempre te recibimos con una sonrisa, disfrutamos lo que hacemos.
                </Alert>

                <Alert
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                  Asesoramiento integral sin costo.
                </Alert>

             
              </Typography>
            
            </Item>
          
           
          </Grid>
          {/* </Box> */}
          
          <Grid item xs={6}>
            <Item>
              <Typography variant="h4" color="black" fontWeight="500" pt="5vh">
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
                Cucco Respuestos inicia su actividad comercial en el año 2015. Desde nuestros primeros pasos nos hemos puesto como objetivo, no solo comercializar repuestos y accesorios de motos, sino ofrecer al cliente un servicio de consulta, para que este pueda elegir el repuesto y accesorio mas adapto a su moto.
                Una política de ventas que nos permitió no solo ingresar al mercado, sino que posicionarnos como lideres y permanecer en el tiempo.
                Nuestro crecimiento fue proporcional al del mercado de la moto en argentina, hasta llegar a posicionarnos en la venta de repuestos y accesorios en nuestra ciudad y la zona de influencia, de allí nace la necesidad de llegar a todos aquellos que por cuestiones geográficas, no pueden acercarse a nuestro negocio físicamente.
             
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
                <Item>
                  <img src={img2} width="100%" alt="" />
                </Item>
              
          </Grid>
          <Grid item xs={6}>
              <Item>
                <img src={img3} width="100%" alt="" />
              </Item>
          
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h4" color="black" fontWeight="500" pt="5vh">
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
               Contamos con una ubicación privilegiada, estamos al centro de la ciudad, ello hace de poder llegar con nuestros productos a todas partes en poco tiempo. 
              Aquí debajo te damos todos los datos para  que puedas ubicarnos o contactarnos:
              </Typography>
              
              <Alert style={{marginTop:"-150px", marginBottom:"5px", marginLeft:"85px"}}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                  Direccion: Joaquin V Gonzalez 445, 5300 La Rioja, Argentina
                </Alert>



                <Alert style={{ marginLeft:"85px",marginBottom:"5px"}}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
                }}
              >
                  Teléfono:	3804426578
                </Alert>

                




            </Item>
          </Grid>
        
   
       
          </Grid>

      </Box>
      <Footer />
    </>
  );
};

export default Nosotros;
