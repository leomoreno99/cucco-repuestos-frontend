import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import img1 from "../img/volante-corona.jpg";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";
import BotonSecundario from "./BotonSecundario";
import Link from "@mui/material/Link";

const useStyle = makeStyles({
  img: {
    height: "75%",
    alt:"",
     //Falta poner el object fit cover
  }
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "none",
    textAlign: "center",
    height: "100%",
    color: theme.palette.text.secondary,
  }));

export default function ProdCarrito(props) {

    const classes = useStyle();

  return (
    <Grid container spacing={0}  >
        {/* <Grid  justify="center" > */}
        <Typography display="inline" align="left" variant="h4" color="black">
        Carrito
            <Link
            underline="hover"
            color="secondary"
            // href="#"
            align="left"
            >
        </Link>
      </Typography>
             <Grid item xs={2} height="195px" 
             style={{marginTop:50, marginBottom:4, flexGrow: 1 }}
             >
                <Item>
                  <img src={img1} className={classes.img}/>
                </Item>
            {/* </Grid> */}
        </Grid>
      
     
      <Grid item xs={5}>
      
      <Item>
            <Box component="div" pl="10px" pt="8.9%" pr="200px">
                <Typography  style={{fontSize:"25px"}}variant="h4" color="black" textAlign="left">Volante motor con corona</Typography>
                <Typography  style={{fontSize:"18px", fontWeight:"bold"}} variant="subtitle2" color="black" textAlign="left" pl="3px" mt="5%">Descripcion</Typography>
                <Typography variant="body1" color="black"  pl="3px"  textAlign="left"> M.Benz 1114 Motor OM-352 Placa Ø 280 m.m.(Corona Ancha) Con corona </Typography>  
            </Box>
        </Item>
      </Grid>   
       


      <Grid item xs={3} height="195px">
                <Item>
                  <img src={img1} className={classes.img}/>
                </Item>
        </Grid>



         
      </Grid>
    
  );
}
