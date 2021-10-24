import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const useStyle = makeStyles({
  navCat: {
    backgroundColor: "#F44336",
    color: "#FFF",
  },
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Categorias() {
  const classes = useStyle();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.navCat} position="static">
        <Toolbar variant="dense">
          <div role="presentation" onClick={handleClick}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 2,
                },
              }}
            >
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs
                  separator="|"
                  color="primary"
                  aria-label="breadcrumb"
                >
                  <Box>
                    <Typography>Categorias</Typography>
                  </Box>

                  <></>
                </Breadcrumbs>
              </div>

              <Link
                underline="hover"
                color="primary"
                href="/getting-started/installation/"
              >
                <Typography> Rectificados de campanas</Typography>
              </Link>

              <Link
                underline="hover"
                color="primary"
                href="/getting-started/installation/"
              >
                <Typography> Cintas de freno </Typography>
              </Link>
              <Link
                underline="hover"
                color="primary"
                href="/components/breadcrumbs/"
                aria-current="page"
              >
                <Typography> Discos de freno</Typography>
              </Link>

              <Link
                underline="hover"
                color="primary"
                href="/components/breadcrumbs/"
                aria-current="page"
              >
                <Typography align="center"> Volantes de motor</Typography>
              </Link>

              <Link
                underline="hover"
                color="primary"
                href="/components/breadcrumbs/"
                aria-current="page"
              >
                <Typography align="center"> Embragues</Typography>
              </Link>
            </Box>
          </div>

          {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button variant="contained" color="secondary" disableElevation  endIcon={<ExpandMoreOutlinedIcon />}>
            Categorias
            </Button>
        </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
