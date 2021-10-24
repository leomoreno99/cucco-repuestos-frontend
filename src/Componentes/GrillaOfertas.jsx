import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import TarjetaOferta from "./TarjetaOferta";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: "none",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const GrillaOfertas = () => {
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
        Ofertas
            <Link
            underline="hover"
            color="secondary"
            href="#"
            align="left"
            >
            <Typography display="inline"> Ver todas</Typography>
        </Link>
      </Typography>
      
      <Box sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <TarjetaOferta />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
            <TarjetaOferta />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
            <TarjetaOferta />
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
            <TarjetaOferta />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default GrillaOfertas;
