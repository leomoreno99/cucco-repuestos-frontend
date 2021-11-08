
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
import ProdCarrito from "../Componentes/ProdCarrito";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

const Carrito = () => {
  return (
    <>
      <NavBar />
      <Categorias />
      <Box sx={{ flexGrow: 1 }}>

      

      <Grid container spacing={1}>
     
        <Grid item xs={12}>
          <Item> 
            <ProdCarrito/>
          </Item>
        </Grid>
        {/* <Grid item xs={3}  >
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}  >
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}  >
          <Item>xs=3</Item>
        </Grid>
        */}
      </Grid> 
    </Box>
  

{/*        
        <Grid container>
          <Grid item xs={6}>
           
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
          <Grid item xs={6}>
           
          </Grid>
          <Grid item xs={6}>
             
          </Grid>
          <Grid item xs={6}>
             
          </Grid>
          <Grid item xs={6}>
           
          </Grid>
        
   
       
          </Grid>
*/}
       
      <Footer />
    </>
  );
}


export default Carrito;


