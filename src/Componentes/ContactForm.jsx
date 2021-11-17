import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DatosForm from "./DatosForm";
import Maps from "./Maps";
// import { Maps } from "@mui/icons-material";
import credentials from '../credentials';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mapURL= `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

const ContactForm = () => {
  return (
    <Box
  
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        paddingTop: "30px",
        maxWidth: 1400,
      }}
    >
      <Typography display="inline" align="left" variant="h4" color="secondary">
        Contactanos
      </Typography>
      
      <Box sx={{ mt: 4, mb: 4 , flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={5}>
          
              <Item>
                <DatosForm/>
              </Item>
          </Grid>

          <Grid item xs={7}>
          
          <Item> 
          <Typography variant="h6" fontWeight="500" align="left" style={{ marginBottom:"15px"}} >
            <b> Direccion: </b> Joaquin V Gonzalez 445, 5300 La Rioja, Argentina          
          </Typography>

          <Typography variant="h6" fontWeight="500" align="left" style={{ marginBottom:"15px"}} >
           <b>  Horarios de Atención: </b> Lunes a Sabado de 9 a 13:00 hs            
          </Typography>
         
            
             <Maps
          // googleMapURL= {mapURL}
          // containerElement= {<div style={{height: '378px'}}/>}
          // mapElement= {<div style={{height:'100%'}}/>}
          // loadingElement= {<p>Cargando</p>} 
          component={Maps}
          
          /> 
          
          </Item>
      </Grid>
         




        </Grid> 
      </Box>
    </Box>
  );
};

export default ContactForm;