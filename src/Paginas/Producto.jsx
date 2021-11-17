import NavBar from "../Componentes/AppBar";
import Categorias from "../Componentes/Categorias";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Footer from "../Componentes/Footer";
import ComprarProducto from "../Componentes/ComprarProducto";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  height: "100%",
  color: theme.palette.text.secondary,
}));

const Producto = () => {

  let {id} = useParams()

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    obtenerProducto();
  }, []);

  let resProd;
  const obtenerProducto = async () => {
    let url = `http://localhost:4000/products/searchById/${id}`;

    let request = await fetch(url);

    resProd = await request.json();
    
    setProducto(resProd.producto);
    // console.log(producto)
  };
  

  return (
    <>
      <NavBar />
      <Categorias />
      <Box sx={{ m: 4, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <ComprarProducto
                    id={producto._id}
                    nombre= {producto.nombre}
                    img={producto.imagen}
                    descripcion={producto.descripcion}
                    precio={producto.precio_venta}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Producto;
