import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TarjetaProducto from "./TarjetaProducto";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GrillaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  let productosInicio = [];

  let resProd;
  const obtenerProductos = async () => {
    let url = "http://localhost:4000/products/all";

    let request = await fetch(url);

    resProd = await request.json();

    for (let i = 0; i < 4; i++) {
      productosInicio.push(resProd[i]);
    }

    setProductos(productosInicio);
  };

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
      <Typography display="inline" align="left" variant="h4" color="black">
        Productos
        <Link underline="hover" color="secondary" href="#" align="left">
          <Typography display="inline"> Ver todos</Typography>
        </Link>
      </Typography>

      <Box sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={2}>
          {productos.map((producto) => {
            return (
              <Grid item xs={3}>
                <Item>
                  <TarjetaProducto
                    id={producto._id}
                    descripcion={producto.descripcion}
                    precio={producto.precio_venta}
                    img={producto.imagen}
                  />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default GrillaProductos;
