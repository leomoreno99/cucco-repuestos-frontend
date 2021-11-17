import NavBar from "../Componentes/AppBar";
import Categorias from "../Componentes/Categorias";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carrusel from "../Componentes/Carrusel";
import { spacing } from '@mui/system';
import Publicidad from "../Componentes/Publicidad";
import GrillaProductosTodos from "../Componentes/GrillaProductosTodos";
import GrillaOfertas from "../Componentes/GrillaOfertas";
import Footer from "../Componentes/Footer";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 'none',
    textAlign: 'center',
    height:'100%',
    color: theme.palette.text.secondary,
  }));

const ProductosT = () => {

    return (
        <>
            <NavBar />
            <Categorias />
            <Box sx={{ m: 4, flexGrow: 1 }}>
            <Grid container spacing={2}>
              
                <Grid item xs={12}>
                <Item><GrillaProductosTodos/></Item>
                </Grid>
                
            </Grid>
            </Box>
            <Footer/>
        </>
    );

}

export default ProductosT;