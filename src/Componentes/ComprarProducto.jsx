import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import img1 from "../img/volante-corona.jpg";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BotonPrimario from "./BotonPrimario";
import BotonSecundario from "./BotonSecundario";

const useStyle = makeStyles({
  img: {
    height: "100%",
     alt:""
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

export default function ComprarProducto(props) {

    const classes = useStyle();

  return (
    <Grid container spacing={0}>
      <Grid item xs={6} height="600px">
        <Item>
          <img src={img1} className={classes.img}/>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
            <Box component="div" pl="35px" pt="20%" pr="200px">
                <Typography variant="h4" color="black" textAlign="left">{props.nombre}</Typography>
                <Typography variant="subtitle2" color="black" textAlign="left" mt="3%">Descripcion</Typography>
                <Typography variant="body1" color="black" textAlign="left">{props.descripcion}</Typography>
                <Typography variant="h3" color="black" textAlign="left" mt="10%" fontWeight="500">{props.precio}</Typography>
                
                <Grid
                    height="120px"
                    spacing= {2}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    >
                    <Grid item xs={'auto'}>
                        <BotonPrimario texto="Comprar ahora"></BotonPrimario>
                    </Grid>
                    <Grid item xs={'auto'} >
                        <BotonSecundario texto="Agregar al carrito" alto="46px"></BotonSecundario>
                    </Grid>
            </Grid>

                
            </Box>
        </Item>
      </Grid>
    </Grid>
  );
}
