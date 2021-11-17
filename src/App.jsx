import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import Nosotros from './Paginas/Nosotros';
import  Login  from './Paginas/Login';
import Producto from './Paginas/Producto';
import CrearCuenta from './Paginas/CrearCuenta';
import Carrito from './Paginas/Carrito';
import Agradecimiento from './Paginas/Agradecimiento';


function App() {

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Switch>
      

      <Route path="/nosotros">
        <Nosotros />
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/producto/:id">
        <Producto/>
      </Route>

      <Route path="/signup">
        <CrearCuenta/>
      </Route>

      <Route  path="/carrito">
       <Carrito/>
      </Route>

      <Route  path="/gracias">
       <Agradecimiento/>
      </Route>

      <Route path="/">
        <Inicio />
      </Route>

    </Switch>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
