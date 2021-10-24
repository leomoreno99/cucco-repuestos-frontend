import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import { ThemeProvider } from '@emotion/react';
import theme from './temaConfig';
import Nosotros from './Paginas/Nosotros';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Switch>

      <Route path="/nosotros">
        <Nosotros />
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
