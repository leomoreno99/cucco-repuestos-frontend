import NavBar from "../Componentes/AppBar";
import Categorias from "../Componentes/Categorias";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Footer from "../Componentes/Footer";
import ContactForm from "../Componentes/ContactForm";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 'none',
    textAlign: 'center',
    height:'100%',
    color: theme.palette.text.secondary,
  }));

const Contacto = () => {

    return (
    
        <>
        
            <NavBar />
            <Categorias />
            <Box sx={{ m: 4, flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              
               <Item> <ContactForm/> </Item>    
            
                
                
                
                </Grid>
            </Grid>
            </Box>
            <Footer/>
        </>
    );

}

export default Contacto;